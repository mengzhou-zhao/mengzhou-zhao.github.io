// Lightbox for the engineering showcase cards.
//
// The grid stays a plain wall of thumbnails; clicking a card opens an overlay
// that reads top to bottom like an article: title and description, then every
// image in that card's gallery stacked in a scrolling feed, then the build log
// (why / snag / call / proof). Keeping the expansion out of the grid means the
// Masonry layout never has to reflow, so adding cards or images does not make
// the page jump around.
(function () {
    'use strict';

    var lightbox = null;
    var els = {};
    var opener = null;

    function build() {
        lightbox = document.createElement('div');
        lightbox.className = 'showcase-lightbox';
        lightbox.setAttribute('role', 'dialog');
        lightbox.setAttribute('aria-modal', 'true');
        lightbox.setAttribute('aria-hidden', 'true');
        lightbox.innerHTML =
            '<div class="showcase-lightbox-backdrop" data-close></div>' +
            '<div class="showcase-lightbox-panel" role="document">' +
            '  <button type="button" class="showcase-lightbox-close" data-close aria-label="Close">' +
            '    <i class="fas fa-times" aria-hidden="true"></i>' +
            '  </button>' +
            '  <div class="showcase-lightbox-head"></div>' +
            '  <div class="showcase-lightbox-feed"></div>' +
            '  <div class="showcase-lightbox-text"></div>' +
            '</div>';
        document.body.appendChild(lightbox);

        els.panel = lightbox.querySelector('.showcase-lightbox-panel');
        els.head = lightbox.querySelector('.showcase-lightbox-head');
        els.feed = lightbox.querySelector('.showcase-lightbox-feed');
        els.text = lightbox.querySelector('.showcase-lightbox-text');
        els.close = lightbox.querySelector('.showcase-lightbox-close');

        lightbox.addEventListener('click', function (event) {
            if (event.target.closest('[data-close]')) {
                close();
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
                close();
            }
        });
    }

    function fill(target, card, selector) {
        target.innerHTML = '';
        Array.prototype.forEach.call(card.querySelectorAll(selector), function (node) {
            target.appendChild(node.cloneNode(true));
        });
    }

    function open(card) {
        var gallery = card.querySelectorAll('.showcase-gallery figure');
        if (!gallery.length) {
            return;
        }

        fill(els.head, card, '.card-title, .card-text');
        fill(els.text, card, '.build-log');

        els.feed.innerHTML = '';
        Array.prototype.forEach.call(gallery, function (source) {
            var figure = document.createElement('figure');

            var img = document.createElement('img');
            // Deliberately not lazy: the intrinsic size is unknown until an
            // image loads, so a lazy one occupies no height and the feed
            // reflows under the reader as they scroll. A card's gallery is
            // only fetched when that card is opened, which is cheap enough.
            img.src = source.getAttribute('data-src');
            img.alt = source.getAttribute('data-alt') || '';
            figure.appendChild(img);

            var caption = source.querySelector('figcaption');
            if (caption) {
                figure.appendChild(caption.cloneNode(true));
            }
            els.feed.appendChild(figure);
        });

        opener = card;
        lightbox.classList.add('is-open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('showcase-lightbox-open');
        els.panel.scrollTop = 0;
        els.close.focus();
    }

    function close() {
        lightbox.classList.remove('is-open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('showcase-lightbox-open');
        // Drop the full-size images rather than holding every opened card's
        // gallery in memory.
        els.feed.innerHTML = '';
        if (opener) {
            opener.focus();
            opener = null;
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        var galleries = document.querySelectorAll('.grid-item .showcase-gallery');
        if (!galleries.length) {
            return;
        }

        build();

        Array.prototype.forEach.call(galleries, function (gallery) {
            var card = gallery.closest('.grid-item');
            card.classList.add('showcase-card-openable');
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');

            card.addEventListener('click', function (event) {
                if (event.target.closest('a')) {
                    return;
                }
                open(card);
            });

            card.addEventListener('keydown', function (event) {
                if (event.key !== 'Enter' && event.key !== ' ' && event.key !== 'Spacebar') {
                    return;
                }
                event.preventDefault();
                open(card);
            });
        });
    });
})();
