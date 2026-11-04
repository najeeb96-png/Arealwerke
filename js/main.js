/* ==========================================================================
   AREALWERK PLUS Dienstleistungen – Haupt-Script
   Ohne Framework, ohne Abhängigkeiten. Setzt keine Cookies, kein Tracking.
   --------------------------------------------------------------------------
   Module:
   1. Grundlagen (JS-Klasse, Jahr im Footer)
   2. Header & Navigation (Burger-Menü, Untermenü, Escape)
   3. Back-to-top
   4. Einblend-Animationen
   5. Referenzen: Filter + Lightbox
   6. Vorher/Nachher-Slider
   7. Karte mit Klick-zum-Laden
   8. Formulare (Web3Forms + mailto-Fallback)
   ========================================================================== */
(function () {
  "use strict";

  /* 1. Grundlagen --------------------------------------------------------- */
  document.documentElement.classList.remove("no-js");
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* 2. Header & Navigation ----------------------------------------------- */
  var header = document.querySelector(".site-header");
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");

  function onScroll() {
    var y = window.scrollY;
    if (header) header.classList.toggle("is-scrolled", y > 10);
    if (toTop) toTop.classList.toggle("is-visible", y > 600);
  }

  function setNav(open) {
    if (!nav || !navToggle) return;
    nav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    document.body.style.overflow = open && window.innerWidth < 1100 ? "hidden" : "";
  }

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      setNav(navToggle.getAttribute("aria-expanded") !== "true");
    });
  }

  // Untermenü "Leistungen"
  document.querySelectorAll(".nav-sub-toggle").forEach(function (btn) {
    var sub = document.getElementById(btn.getAttribute("aria-controls"));
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = btn.getAttribute("aria-expanded") !== "true";
      btn.setAttribute("aria-expanded", String(open));
      if (sub) sub.classList.toggle("is-open", open);
    });
  });

  // Untermenüs schließen bei Klick außerhalb (Desktop)
  document.addEventListener("click", function (e) {
    if (window.innerWidth < 1100) return;
    document.querySelectorAll(".nav-sub-toggle[aria-expanded='true']").forEach(function (btn) {
      if (!btn.parentElement.contains(e.target)) {
        btn.setAttribute("aria-expanded", "false");
        var sub = document.getElementById(btn.getAttribute("aria-controls"));
        if (sub) sub.classList.remove("is-open");
      }
    });
  });

  // Menü schließen, wenn ein Link angeklickt wird (z. B. Anker auf der Startseite)
  if (nav) {
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setNav(false);
    });
  }

  // Escape schließt Menü / Untermenü
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (nav && nav.classList.contains("is-open")) { setNav(false); navToggle.focus(); }
    document.querySelectorAll(".nav-sub-toggle[aria-expanded='true']").forEach(function (btn) {
      btn.setAttribute("aria-expanded", "false");
      var sub = document.getElementById(btn.getAttribute("aria-controls"));
      if (sub) sub.classList.remove("is-open");
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1100) { document.body.style.overflow = ""; }
  });

  /* 3. Back-to-top ------------------------------------------------------- */
  var toTop = document.querySelector(".to-top");
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
      var skip = document.getElementById("top");
      if (skip) skip.focus({ preventScroll: true });
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* 4. Einblend-Animationen ---------------------------------------------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* 5. Referenzen: Filter + Lightbox ------------------------------------- */
  document.querySelectorAll("[data-gallery]").forEach(function (wrap) {
    var buttons = wrap.querySelectorAll(".filter-btn");
    var items = wrap.querySelectorAll(".gallery > li");
    var status = wrap.querySelector("[data-filter-status]");

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = btn.getAttribute("data-filter");
        buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
        var count = 0;
        items.forEach(function (li) {
          var show = f === "alle" || li.getAttribute("data-category") === f;
          li.hidden = !show;
          if (show) count++;
        });
        if (status) status.textContent = count + " Projekte angezeigt";
      });
    });
  });

  var lightbox = document.getElementById("lightbox");
  if (lightbox) {
    var lbImg = lightbox.querySelector("img");
    var lbCap = lightbox.querySelector("figcaption");
    var current = [];
    var index = 0;
    var lastFocus = null;

    function show(i) {
      index = (i + current.length) % current.length;
      var btn = current[index];
      var img = btn.querySelector("img");
      lbImg.src = btn.getAttribute("data-full") || img.src;
      lbImg.alt = img.alt;
      lbCap.textContent = btn.getAttribute("data-caption") || img.alt;
    }
    function openLb(btn) {
      var gallery = btn.closest(".gallery");
      current = Array.prototype.filter.call(gallery.querySelectorAll(".gallery-item"), function (b) {
        return !b.closest("li").hidden;
      });
      lastFocus = btn;
      show(current.indexOf(btn));
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      lightbox.querySelector(".lb-close").focus();
    }
    function closeLb() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (lastFocus) lastFocus.focus();
    }

    document.querySelectorAll(".gallery-item").forEach(function (btn) {
      btn.addEventListener("click", function () { openLb(btn); });
    });
    lightbox.querySelector(".lb-close").addEventListener("click", closeLb);
    lightbox.querySelector(".lb-prev").addEventListener("click", function () { show(index - 1); });
    lightbox.querySelector(".lb-next").addEventListener("click", function () { show(index + 1); });
    lightbox.addEventListener("click", function (e) { if (e.target === lightbox) closeLb(); });
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowLeft") show(index - 1);
      if (e.key === "ArrowRight") show(index + 1);
      if (e.key === "Tab") { // Fokus im Dialog halten
        var f = lightbox.querySelectorAll("button");
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  /* 6. Vorher/Nachher-Slider --------------------------------------------- */
  document.querySelectorAll(".ba-frame").forEach(function (frame) {
    var range = frame.querySelector("input[type='range']");
    if (!range) return;
    function update() {
      frame.style.setProperty("--pos", range.value + "%");
      range.setAttribute("aria-valuetext", range.value + " % Vorher-Ansicht");
    }
    range.addEventListener("input", update);
    update();
  });

  /* 7. Karte mit Klick-zum-Laden ----------------------------------------- */
  // Die Karte (OpenStreetMap) wird erst nach Klick geladen – vorher werden
  // keine Daten an Dritte übertragen.
  document.querySelectorAll("[data-map-src]").forEach(function (box) {
    var btn = box.querySelector("button");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.src = box.getAttribute("data-map-src");
      iframe.title = box.getAttribute("data-map-title") || "Karte";
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer";
      box.innerHTML = "";
      box.appendChild(iframe);
    });
  });

  /* 8. Formulare --------------------------------------------------------- */
  // Versand über Web3Forms (https://web3forms.com). Solange der Zugangsschlüssel
  // noch ein Platzhalter ist (beginnt mit "TODO"), wird automatisch das
  // E-Mail-Programm des Besuchers mit allen Angaben geöffnet (mailto-Fallback).
  var MAX_FILE_MB = 5;

  function fieldLabel(form, name) {
    var el = form.querySelector("[name='" + name + "']");
    if (!el) return name;
    if (el.dataset.label) return el.dataset.label;
    var fs = el.closest("fieldset");
    if (fs && fs.querySelector("legend")) return fs.querySelector("legend").textContent.replace("*", "").trim();
    var lab = el.id && form.querySelector("label[for='" + el.id + "']");
    return lab ? lab.textContent.replace("*", "").trim() : name;
  }

  function buildMailBody(form) {
    var data = new FormData(form);
    var skip = ["access_key", "subject", "redirect", "from_name", "botcheck", "datenschutz"];
    var rows = {};
    data.forEach(function (value, key) {
      if (skip.indexOf(key) > -1 || value instanceof File) return;
      if (!String(value).trim()) return;
      var label = fieldLabel(form, key);
      rows[label] = rows[label] ? rows[label] + ", " + value : String(value);
    });
    var lines = Object.keys(rows).map(function (k) { return k + ": " + rows[k]; });
    var hasFile = Array.prototype.some.call(form.querySelectorAll("input[type='file']"), function (f) { return f.files.length; });
    if (hasFile) lines.push("", "(Fotos bitte als Anhang an diese E-Mail anfügen.)");
    return lines.join("\n");
  }

  function showStatus(form, type, html) {
    var box = form.querySelector(".form-status");
    if (!box) return;
    box.className = "form-status is-visible is-" + type;
    box.innerHTML = html;
    box.focus();
  }

  function validate(form) {
    var ok = true;
    var firstInvalid = null;
    form.querySelectorAll("[required]").forEach(function (el) {
      var valid = el.type === "checkbox" ? el.checked : el.checkValidity();
      el.setAttribute("aria-invalid", valid ? "false" : "true");
      var err = document.getElementById(el.id + "-error");
      if (err) err.textContent = valid ? "" : (el.dataset.error || "Bitte füllen Sie dieses Feld korrekt aus.");
      if (!valid && !firstInvalid) firstInvalid = el;
      if (!valid) ok = false;
    });
    // Mindestens eine Leistung (Mehrfachauswahl) bei Vertragsanfrage
    form.querySelectorAll("fieldset[data-require-one]").forEach(function (fs) {
      var checked = fs.querySelectorAll("input:checked").length > 0;
      var err = fs.querySelector(".field-error");
      if (err) err.textContent = checked ? "" : "Bitte wählen Sie mindestens eine Leistung aus.";
      if (!checked) { ok = false; if (!firstInvalid) firstInvalid = fs.querySelector("input"); }
    });
    // Dateigröße prüfen
    form.querySelectorAll("input[type='file']").forEach(function (f) {
      var tooBig = Array.prototype.some.call(f.files, function (file) { return file.size > MAX_FILE_MB * 1024 * 1024; });
      var err = document.getElementById(f.id + "-error");
      if (err) err.textContent = tooBig ? "Bitte nur Dateien bis " + MAX_FILE_MB + " MB hochladen." : "";
      if (tooBig) { ok = false; if (!firstInvalid) firstInvalid = f; }
    });
    if (firstInvalid) firstInvalid.focus();
    return ok;
  }

  // Leistungsbereich vorauswählen, z. B. kontakt/?bereich=garten
  var BEREICHE = { reinigung: "Reinigung", garten: "Garten- & Grünflächenpflege", handwerk: "Handwerkerservice", vertrag: "Servicepaket / Wartungsvertrag" };
  var bereich = new URLSearchParams(window.location.search).get("bereich");
  if (bereich && BEREICHE[bereich]) {
    document.querySelectorAll("select[name='leistungsbereich']").forEach(function (sel) { sel.value = BEREICHE[bereich]; });
  }

  document.querySelectorAll("form.js-form").forEach(function (form) {
    var successUrl = new URL(form.getAttribute("data-success") || "danke/", window.location.href).href;
    var redirect = form.querySelector("[name='redirect']");
    if (redirect) redirect.value = successUrl; // für Versand ohne JavaScript

    form.setAttribute("novalidate", "");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validate(form)) {
        showStatus(form, "error", "Bitte prüfen Sie die markierten Felder.");
        return;
      }

      var key = (form.querySelector("[name='access_key']") || {}).value || "";
      var mailto = form.getAttribute("data-mailto");
      var subject = (form.querySelector("[name='subject']") || {}).value || "Anfrage über die Webseite";

      // Fallback: E-Mail-Programm öffnen, solange kein Web3Forms-Schlüssel hinterlegt ist
      if (!key || key.indexOf("TODO") === 0) {
        var href = "mailto:" + mailto + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(buildMailBody(form));
        window.location.href = href;
        showStatus(form, "info", "Ihr E-Mail-Programm wurde geöffnet. Bitte senden Sie die vorbereitete Nachricht ab. Falls sich nichts öffnet, schreiben Sie uns direkt an <a href=\"mailto:" + mailto + "\">" + mailto + "</a>.");
        return;
      }

      var btn = form.querySelector("[type='submit']");
      var label = btn.innerHTML;
      btn.disabled = true;
      btn.textContent = "Wird gesendet …";

      fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(function (res) { return res.json().then(function (json) { return { ok: res.ok, json: json }; }); })
        .then(function (r) {
          if (r.ok && r.json.success) {
            window.location.href = successUrl;
          } else {
            throw new Error(r.json.message || "Fehler");
          }
        })
        .catch(function () {
          btn.disabled = false;
          btn.innerHTML = label;
          var href = "mailto:" + mailto + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(buildMailBody(form));
          showStatus(form, "error", "Die Nachricht konnte gerade nicht gesendet werden. Bitte <a href=\"" + href + "\">senden Sie sie per E-Mail</a> oder rufen Sie uns an.");
        });
    });

    // Fehlermeldung entfernen, sobald korrigiert wird
    form.addEventListener("input", function (e) {
      var el = e.target;
      if (el.getAttribute("aria-invalid") === "true" && (el.type === "checkbox" ? el.checked : el.checkValidity())) {
        el.setAttribute("aria-invalid", "false");
        var err = document.getElementById(el.id + "-error");
        if (err) err.textContent = "";
      }
    });
  });
})();
