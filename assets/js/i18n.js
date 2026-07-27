/*
 * Bilingual (English / 简体中文) language handling.
 *
 * Priority for choosing the language:
 *   1. Manual choice     -> localStorage 'siteLangManual' (wins forever, set by the toggle)
 *   2. Auto (this visit) -> sessionStorage 'siteLangAuto'  (cached geo result for the session)
 *   3. Auto (geo-IP)     -> visitors on a China (CN) IP get Chinese, everyone else English
 *   4. Fallback          -> navigator.language (zh* -> Chinese) then English
 *
 * An inline script in <head> (see _layouts/default.html) applies steps 1/2/4
 * synchronously to avoid a flash of the wrong language; this file wires up the
 * toggle and performs the async geo-IP lookup (step 3) when no choice is cached.
 */
(function () {
  "use strict";

  var LANGS = ["en", "zh"];

  function normalise(lang) {
    return LANGS.indexOf(lang) !== -1 ? lang : "en";
  }

  function navigatorGuess() {
    var l = (navigator.language || navigator.userLanguage || "").toLowerCase();
    return l.indexOf("zh") === 0 ? "zh" : "en";
  }

  function apply(lang) {
    lang = normalise(lang);
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
    // Reflect the active language on the toggle buttons.
    var buttons = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < buttons.length; i++) {
      var active = buttons[i].getAttribute("data-set-lang") === lang;
      buttons[i].classList.toggle("active", active);
      buttons[i].setAttribute("aria-pressed", active ? "true" : "false");
    }
  }

  function setManual(lang) {
    lang = normalise(lang);
    try { localStorage.setItem("siteLangManual", lang); } catch (e) {}
    apply(lang);
  }

  // Look up the visitor's country and return "zh" for China, else "en".
  // Tries GeoJS first, then ipapi.co; both are free, keyless and CORS-enabled.
  function detectByIP() {
    var endpoints = [
      { url: "https://get.geojs.io/v1/ip/country.json", field: "country" },
      { url: "https://ipapi.co/json/", field: "country_code" }
    ];

    function fetchWithTimeout(url, ms) {
      if (typeof fetch !== "function") return Promise.reject();
      var controller = typeof AbortController === "function" ? new AbortController() : null;
      var timer = controller ? setTimeout(function () { controller.abort(); }, ms) : null;
      return fetch(url, controller ? { signal: controller.signal } : undefined)
        .then(function (r) { if (timer) clearTimeout(timer); return r.ok ? r.json() : Promise.reject(); });
    }

    function tryNext(i) {
      if (i >= endpoints.length) return Promise.reject();
      var ep = endpoints[i];
      return fetchWithTimeout(ep.url, 3500)
        .then(function (data) {
          var code = (data && data[ep.field] ? String(data[ep.field]) : "").toUpperCase();
          if (!code) return Promise.reject();
          return code === "CN" ? "zh" : "en";
        })
        .catch(function () { return tryNext(i + 1); });
    }

    return tryNext(0);
  }

  function wireToggle() {
    var buttons = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function (e) {
        e.preventDefault();
        setManual(this.getAttribute("data-set-lang"));
      });
    }
  }

  function init() {
    wireToggle();

    var manual = null;
    try { manual = localStorage.getItem("siteLangManual"); } catch (e) {}
    if (manual) { apply(manual); return; }            // user made a choice: respect it

    var cached = null;
    try { cached = sessionStorage.getItem("siteLangAuto"); } catch (e) {}
    if (cached) { apply(cached); return; }             // already auto-detected this session

    // No choice yet: reflect the head-script guess now, then refine via geo-IP.
    apply(document.documentElement.getAttribute("data-lang") || navigatorGuess());
    detectByIP().then(function (lang) {
      try { sessionStorage.setItem("siteLangAuto", lang); } catch (e) {}
      // Only auto-apply if the user still hasn't manually chosen in the meantime.
      var m = null;
      try { m = localStorage.getItem("siteLangManual"); } catch (e) {}
      if (!m) apply(lang);
    }).catch(function () { /* keep the navigator/head guess */ });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
