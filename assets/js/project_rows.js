// Expand/collapse behaviour for the project rows on the projects page.
//
// Click to toggle. Hover deliberately does nothing: an expanded row is taller
// than the viewport, so reading one means scrolling, and scrolling moves the
// cursor off the row that opened it.
(function () {
    'use strict';

    function setOpen(row, open) {
        row.classList.toggle('is-open', open);
        var head = row.querySelector('.project-row-head');
        if (head) {
            head.setAttribute('aria-expanded', open ? 'true' : 'false');
        }
    }

    function initRow(row) {
        var head = row.querySelector('.project-row-head');
        if (!head) {
            return;
        }

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
