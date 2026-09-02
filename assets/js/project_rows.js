// Expand/collapse behaviour for the project rows on the projects page.
//
// Click to toggle. Hover deliberately does nothing: an expanded row is taller
// than the viewport, so reading one means scrolling, and scrolling moves the
// cursor off the row that opened it.
(function () {
    'use strict';

    // The full-size cover inside the detail starts on a blank placeholder;
    // jQuery.Lazy skips it because a collapsed row has no height, so the swap to
    // the real file happens here.
    function loadCover(row) {
        Array.prototype.forEach.call(row.querySelectorAll('img[data-cover-src]'), function (img) {
            var src = img.getAttribute('data-cover-src');
            img.removeAttribute('data-cover-src');

            // Fetch into a detached image and only then swap: pointing the
            // visible <img> straight at several megabytes would empty the box
            // for as long as the download takes, which reads as a failed load.
            // The blank placeholder holds the frame until the photograph is
            // ready to paint in one go. A cached file resolves immediately.
            var loader = new Image();
            loader.onload = loader.onerror = function () {
                img.src = src;
            };
            loader.src = src;
        });
    }

    // The head thumbnail points at the very same file as the detail cover, so
    // once it has arrived the cover costs nothing: swapping it in then means an
    // opened row shows the photograph immediately, out of cache, instead of an
    // empty box while several megabytes download.
    function primeCoverFromThumb(row) {
        var cover = row.querySelector('img[data-cover-src]');
        var thumb = row.querySelector('.project-row-thumb img');
        if (!cover || !thumb) {
            return;
        }

        // Both start on the same blank placeholder, so "has the thumbnail
        // arrived" is a question about which file its src points at, not about
        // whether it has loaded something.
        function primeIfThumbArrived() {
            if (thumb.getAttribute('src') !== cover.getAttribute('data-cover-src')) {
                return;
            }
            loadCover(row);
            thumb.removeEventListener('load', primeIfThumbArrived);
        }

        primeIfThumbArrived();
        thumb.addEventListener('load', primeIfThumbArrived);
    }

    function setOpen(row, open) {
        row.classList.toggle('is-open', open);
        var head = row.querySelector('.project-row-head');
        if (head) {
            head.setAttribute('aria-expanded', open ? 'true' : 'false');
        }
        if (open) {
            loadCover(row);
        }
    }

    function initRow(row) {
        var head = row.querySelector('.project-row-head');
        if (!head) {
            return;
        }

        primeCoverFromThumb(row);

        function toggle() {
            setOpen(row, !row.classList.contains('is-open'));
        }

        head.addEventListener('click', function (event) {
            // Never swallow a click meant for a link inside the header.
            if (event.target.closest('a')) {
                return;
            }
            toggle();
        });

        head.addEventListener('keydown', function (event) {
            if (event.key !== 'Enter' && event.key !== ' ' && event.key !== 'Spacebar') {
                return;
            }
            event.preventDefault();
            toggle();
        });
    }

    // A link from the homepage's project tiles lands on #<project-id>; that row
    // must already be open, otherwise the visitor arrives at a closed door.
    function openHashTarget() {
        if (!window.location.hash || window.location.hash.length < 2) {
            return;
        }
        var target;
        try {
            target = document.querySelector(window.location.hash);
        } catch (e) {
            return;
        }
        if (!target) {
            return;
        }
        var row = target.classList.contains('project-row') ? target : target.querySelector('.project-row');
        if (!row) {
            return;
        }
        setOpen(row, true);
        target.scrollIntoView();
    }

    document.addEventListener('DOMContentLoaded', function () {
        Array.prototype.forEach.call(document.querySelectorAll('.project-row'), initRow);
        openHashTarget();
    });

    window.addEventListener('hashchange', openHashTarget);
})();
