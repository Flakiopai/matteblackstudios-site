/**
 * MATTEBLACK STUDIOS — Progressive enhancement (reveal.js)
 *
 * Sovereign constraints:
 * - No analytics, cookies, telemetry, or external network calls
 * - No user-agent sniffing or viewport/device detection
 * - Mobile nav toggle + IntersectionObserver scroll reveals only
 * - Respects prefers-reduced-motion; degrades without JS
 */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("primary-nav");

  if (nav && toggle && menu) {
    function isCollapsibleNav() {
      return window.getComputedStyle(toggle).display !== "none";
    }

    function syncMenuA11y() {
      var collapsible = isCollapsibleNav();
      var open = nav.classList.contains("is-open");

      if (!collapsible) {
        menu.removeAttribute("hidden");
        if ("inert" in menu) menu.inert = false;
        return;
      }

      if (open) {
        menu.removeAttribute("hidden");
        if ("inert" in menu) menu.inert = false;
      } else {
        menu.setAttribute("hidden", "");
        if ("inert" in menu) menu.inert = true;
      }
    }

    function closeMenu() {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
      syncMenuA11y();
    }

    function openMenu(focusFirst) {
      nav.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
      syncMenuA11y();
      if (focusFirst) {
        var firstLink = menu.querySelector("a");
        if (firstLink) firstLink.focus();
      }
    }

    toggle.addEventListener("click", function (event) {
      if (nav.classList.contains("is-open")) {
        closeMenu();
      } else {
        openMenu(event.detail === 0);
      }
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", function (event) {
      if (!nav.classList.contains("is-open")) return;
      if (nav.contains(event.target)) return;
      closeMenu();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        closeMenu();
        toggle.focus();
        return;
      }

      if (!nav.classList.contains("is-open") || !isCollapsibleNav()) return;

      var links = Array.prototype.slice.call(menu.querySelectorAll("a"));
      var index = links.indexOf(document.activeElement);
      if (index === -1) return;

      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault();
        links[(index + 1) % links.length].focus();
      } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        links[(index - 1 + links.length) % links.length].focus();
      } else if (event.key === "Home") {
        event.preventDefault();
        links[0].focus();
      } else if (event.key === "End") {
        event.preventDefault();
        links[links.length - 1].focus();
      }
    });

    window.addEventListener("resize", syncMenuA11y);
    syncMenuA11y();
  }

  var elements = document.querySelectorAll(".reveal:not(.legal__content)");
  if (!elements.length) return;

  function isInViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.bottom > 0 && rect.top < window.innerHeight;
  }

  elements.forEach(function (el) {
    if (el.closest("main.legal")) return;
    if (el.classList.contains("product-card")) {
      var siblings = el.parentElement ? el.parentElement.querySelectorAll(".product-card") : [];
      var index = Array.prototype.indexOf.call(siblings, el);
      el.style.setProperty("--reveal-delay", index * 80 + "ms");
    }
    if (isInViewport(el)) {
      el.classList.add("is-visible");
    }
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  if (!("IntersectionObserver" in window)) {
    elements.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -6% 0px",
      threshold: 0.1,
    }
  );

  elements.forEach(function (el) {
    if (!el.classList.contains("is-visible")) {
      observer.observe(el);
    }
  });
})();
