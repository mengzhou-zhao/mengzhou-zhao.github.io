// Expand/collapse behaviour for the project rows on the projects page.
//
// Hover opens a row (desktop only) so the page can be skimmed without clicking;
// clicking pins it open so it does not snap shut when the cursor drifts away
// while reading. Touch devices get plain tap-to-toggle, since they have no hover.
(function () {
    'use strict';

    var HOVER_OPEN_DELAY = 120;   // ms, so sweeping the cursor down the list does not cascade
    var HOVER_CLOSE_DELAY = 160;  // ms, forgives brushing past the edge of a row

    var canHover = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

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

        var openTimer = null;
        var closeTimer = null;
        // After an explicit click-to-close, hover must not immediately reopen the
        // row under the cursor; wait until the pointer has actually left.
        var hoverMuted = false;

        function clearTimers() {
            window.clearTimeout(openTimer);
            window.clearTimeout(closeTimer);
        }

        function pin() {
            clearTimers();
            row.classList.add('is-pinned');
            setOpen(row, true);
        }

        function unpin() {
            clearTimers();
            row.classList.remove('is-pinned');
            setOpen(row, false);
        }

        head.addEventListener('click', function (event) {
            // Never swallow a click meant for a link inside the header.
            if (event.target.closest('a')) {
                return;
            }
            if (row.classList.contains('is-pinned')) {
                unpin();
                hoverMuted = true;
            } else {
                pin();
            }
        });

        head.addEventListener('keydown', function (event) {
            if (event.key !== 'Enter' && event.key !== ' ' && event.key !== 'Spacebar') {
                return;
            }
            event.preventDefault();
            if (row.classList.contains('is-pinned')) {
                unpin();
            } else {
                pin();
            }
        });

        if (!canHover) {
            return;
        }

        row.addEventListener('mouseenter', function () {
            clearTimers();
            if (hoverMuted || row.classList.contains('is-pinned')) {
                return;
            }
            openTimer = window.setTimeout(function () {
                setOpen(row, true);
            }, HOVER_OPEN_DELAY);
        });

        row.addEventListener('mouseleave', function () {
            clearTimers();
            hoverMuted = false;
            if (row.classList.contains('is-pinned')) {
                return;
            }
            closeTimer = window.setTimeout(function () {
                setOpen(row, false);
            }, HOVER_CLOSE_DELAY);
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
        row.classList.add('is-pinned');
        setOpen(row, true);
        target.scrollIntoView();
    }

    document.addEventListener('DOMContentLoaded', function () {
        Array.prototype.forEach.call(document.querySelectorAll('.project-row'), initRow);
        openHashTarget();
    });

    window.addEventListener('hashchange', openHashTarget);
})();
