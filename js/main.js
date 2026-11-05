/* ==========================================================================
   Arealwerk Plus – Haupt-Script
   Ohne Framework, ohne Abhängigkeiten. Setzt keine Cookies, kein Tracking.
   --------------------------------------------------------------------------
   Module:
   0. Konfiguration anwenden (js/config.js)
   1. Grundlagen (JS-Klasse, Jahr im Footer)
   2. Header & Navigation (Burger-Menü, Untermenü, Escape)
   3. Back-to-top
   4. Einblend-Animationen
   5. Referenzen: Filter + Lightbox
   6. Vorher/Nachher-Slider
   7. Karte mit Klick-zum-Laden, Preis-Umschalter, Danke-Seite
   8. Kontakt-Auswahl (Akkordeon)
   9. Formulare (Web3Forms + mailto-Fallback)
   ========================================================================== */
(function () {
  "use strict";

  /* 0. Konfiguration ------------------------------------------------------ */
  var CFG = window.SITE_CONFIG || {};
  function isSet(v) { return typeof v === "string" && v.trim() !== "" && v.indexOf("TODO") !== 0; }
  function firma() { return (CFG.firma || "") + (CFG.inGruendung ? " i. G." : ""); }
  var WA_LINK = isSet(CFG.whatsappNummer) || CFG.whatsappNummer ? "https://wa.me/" + String(CFG.whatsappNummer).replace(/\D/g, "") : "";

  // Textwerte: <span data-cfg="telefonAnzeige"></span>
  var TEXT = {
    firma: firma(), firmaKurz: CFG.firma, marke: CFG.marke, slogan: CFG.slogan,
    telefonAnzeige: CFG.telefonAnzeige, email: CFG.email, instagramHandle: CFG.instagramHandle,
    strasse: CFG.strasse, plz: CFG.plz, ort: CFG.ort, bundesland: CFG.bundesland, region: CFG.region,
    plzOrt: [CFG.plz, CFG.ort].filter(Boolean).join(" "),
    geschaeftsfuehrer: CFG.geschaeftsfuehrer, registergericht: CFG.registergericht, hrb: CFG.hrb, ustId: CFG.ustId
  };
  document.querySelectorAll("[data-cfg]").forEach(function (el) {
    var v = TEXT[el.getAttribute("data-cfg")];
    if (v !== undefined && v !== null) el.textContent = v;
  });
  // Links: <a data-cfg-href="tel|mail|whatsapp|instagram|google|calendly|flyer">
  var HREF = {
    tel: "tel:" + (CFG.telefonLink || ""), mail: "mailto:" + (CFG.email || ""), whatsapp: WA_LINK,
    instagram: CFG.instagram, google: CFG.googleBewertungLink, calendly: CFG.calendlyLink, flyer: CFG.flyerPfad
  };
  var REL = { google: true, calendly: true, flyer: true }; // nur anzeigen, wenn echter Wert gesetzt
  document.querySelectorAll("[data-cfg-href]").forEach(function (el) {
    var k = el.getAttribute("data-cfg-href");
    var v = HREF[k];
    if (REL[k] && !isSet(v)) { (el.closest("[data-cfg-wrap]") || el).hidden = true; return; }
    if (k === "flyer") v = (el.getAttribute("data-root") || "") + v;
    if (v) el.setAttribute("href", v);
    (el.closest("[data-cfg-wrap]") || el).hidden = false;
  });
  // „i. G.“-Schalter
  document.querySelectorAll("[data-ig]").forEach(function (el) { el.hidden = !CFG.inGruendung; });
  document.querySelectorAll("[data-ig-show]").forEach(function (el) { el.hidden = !CFG.inGruendung; });
  document.querySelectorAll("[data-ig-hide]").forEach(function (el) { el.hidden = !!CFG.inGruendung; });
  // Öffnungszeiten
  document.querySelectorAll("[data-cfg-hours]").forEach(function (tbl) {
    if (!Array.isArray(CFG.oeffnungszeiten)) return;
    tbl.innerHTML = CFG.oeffnungszeiten.map(function (r) {
      return "<tr><th scope='row'>" + r[0] + "</th><td>" + String(r[1]).replace(/^TODO\s*/, "") + "</td></tr>";
    }).join("");
  });
  // Einzugsgebiet
  document.querySelectorAll("[data-cfg-places]").forEach(function (ul) {
    if (!Array.isArray(CFG.einzugsgebiet)) return;
    ul.innerHTML = CFG.einzugsgebiet.map(function (o) { return "<li>" + o + "</li>"; }).join("");
  });
  // Formular-Schlüssel
  document.querySelectorAll("input[name='access_key']").forEach(function (i) { if (CFG.web3formsKey) i.value = CFG.web3formsKey; });
  // Indexierung (Testphase): noindex sicherstellen, wenn ausgeschaltet
  var robots = document.querySelector("meta[name='robots']");
  if (robots && CFG.indexierung === false) robots.setAttribute("content", "noindex, nofollow");

  /* 1. Grundlagen --------------------------------------------------------- */
  document.documentElement.classList.remove("no-js");
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* 2. Header & Navigation ----------------------------------------------- */
  var header = document.querySelector(".site-header");
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");
  var toTop = document.querySelector(".to-top");

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
  if (navToggle) navToggle.addEventListener("click", function () { setNav(navToggle.getAttribute("aria-expanded") !== "true"); });

  function closeSubs() {
    document.querySelectorAll(".nav-sub-toggle[aria-expanded='true']").forEach(function (btn) {
      btn.setAttribute("aria-expanded", "false");
      var sub = document.getElementById(btn.getAttribute("aria-controls"));
      if (sub) sub.classList.remove("is-open");
    });
  }
  document.querySelectorAll(".nav-sub-toggle").forEach(function (btn) {
    var sub = document.getElementById(btn.getAttribute("aria-controls"));
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = btn.getAttribute("aria-expanded") !== "true";
      btn.setAttribute("aria-expanded", String(open));
      if (sub) sub.classList.toggle("is-open", open);
    });
  });
  document.addEventListener("click", function (e) {
    if (window.innerWidth >= 1100 && !e.target.closest(".nav-list > li")) closeSubs();
  });
  if (nav) nav.addEventListener("click", function (e) { if (e.target.closest("a")) setNav(false); });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (nav && nav.classList.contains("is-open")) { setNav(false); navToggle.focus(); }
    closeSubs();
  });
  window.addEventListener("resize", function () { if (window.innerWidth >= 1100) document.body.style.overflow = ""; });

  /* 3. Back-to-top ------------------------------------------------------- */
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
      var top = document.getElementById("top");
      if (top) top.focus({ preventScroll: true });
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* 4. Einblend-Animationen ---------------------------------------------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
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
    var current = [], index = 0, lastFocus = null;
    lightbox.hidden = true; // Steuerelemente nur im geöffneten Zustand im Dokumentfluss

    function show(i) {
      index = (i + current.length) % current.length;
      var btn = current[index];
      var im = btn.querySelector("img");
      lbImg.src = btn.getAttribute("data-full") || im.src;
      lbImg.alt = im.alt;
      lbCap.textContent = btn.getAttribute("data-caption") || im.alt;
    }
    function openLb(btn) {
      var gallery = btn.closest(".gallery");
      current = Array.prototype.filter.call(gallery.querySelectorAll(".gallery-item"), function (b) { return !b.closest("li").hidden; });
      lastFocus = btn;
      show(current.indexOf(btn));
      lightbox.hidden = false;
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      lightbox.querySelector(".lb-close").focus();
    }
    function closeLb() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      lightbox.hidden = true;
      document.body.style.overflow = "";
      if (lastFocus) lastFocus.focus();
    }
    document.querySelectorAll(".gallery-item").forEach(function (btn) { btn.addEventListener("click", function () { openLb(btn); }); });
    lightbox.querySelector(".lb-close").addEventListener("click", closeLb);
    lightbox.querySelector(".lb-prev").addEventListener("click", function () { show(index - 1); });
    lightbox.querySelector(".lb-next").addEventListener("click", function () { show(index + 1); });
    lightbox.addEventListener("click", function (e) { if (e.target === lightbox) closeLb(); });
    document.addEventListener("keydown", function (e) {
      if (lightbox.hidden) return;
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowLeft") show(index - 1);
      if (e.key === "ArrowRight") show(index + 1);
      if (e.key === "Tab") {
        var f = lightbox.querySelectorAll("button"), first = f[0], last = f[f.length - 1];
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

  /* 7. Karte, Preis-Umschalter, Danke-Seite ------------------------------ */
  // Karte (OpenStreetMap) erst nach Klick laden – vorher keine Daten an Dritte.
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

  // Preise: data-brutto (Privat, inkl. MwSt.) / data-netto (Gewerbe, zzgl. MwSt.)
  function setPriceMode(scope, mode) {
    scope.querySelectorAll("[data-price], [data-price-note]").forEach(function (el) {
      var v = el.getAttribute(mode === "gewerbe" ? "data-netto" : "data-brutto");
      if (v === null) return;
      var small = el.querySelector("small");
      el.textContent = v + (small ? " " : "");
      if (small) el.appendChild(small);
    });
    scope.querySelectorAll(".price-toggle-btn").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-price-mode") === mode));
    });
  }
  document.querySelectorAll("[data-price-scope]").forEach(function (scope) {
    scope.querySelectorAll(".price-toggle-btn").forEach(function (btn) {
      btn.addEventListener("click", function () { setPriceMode(scope, btn.getAttribute("data-price-mode")); });
    });
    setPriceMode(scope, scope.getAttribute("data-price-scope") || "privat");
  });

  // Danke-Seite: Hinweistext je nach Formular (?typ=rueckruf|besichtigung|vertrag)
  var params = new URLSearchParams(window.location.search);
  var typ = params.get("typ");
  if (typ) {
    document.querySelectorAll("[data-typ='" + typ + "']").forEach(function (el) { el.hidden = false; });
    if (typ === "rueckruf") document.querySelectorAll("[data-typ='default']").forEach(function (el) { el.hidden = true; });
  }

  /* 8. Kontakt-Auswahl (Akkordeon) --------------------------------------- */
  var BEREICHE = { reinigung: "Reinigung", garten: "Garten- & Grünflächenpflege", handwerk: "Handwerkerservice", vertrag: "Servicepaket / Wartungsvertrag" };
  var bereich = params.get("bereich");

  document.querySelectorAll("[data-contact-chooser]").forEach(function (chooser) {
    var cards = chooser.querySelectorAll(".choice");
    function openCard(card, focus, scroll) {
      cards.forEach(function (c) {
        var on = c === card;
        c.classList.toggle("is-open", on);
        c.querySelector(".choice-head").setAttribute("aria-expanded", String(on));
        var panel = c.querySelector(".choice-panel");
        panel.hidden = !on;            // für Screenreader/No-CSS
        requestAnimationFrame(function () { c.classList.toggle("is-expanded", on); });
      });
      if (!card) return;
      if (scroll && window.innerWidth < 900) {
        setTimeout(function () { card.scrollIntoView({ behavior: "smooth", block: "start" }); }, 80);
      }
      if (focus) {
        var first = card.querySelector(".choice-panel input:not([type=hidden]):not([type=checkbox]):not([type=radio]), .choice-panel select, .choice-panel textarea, .choice-panel a.btn");
        if (first) setTimeout(function () { first.focus({ preventScroll: !scroll }); }, 350);
      }
    }
    cards.forEach(function (c) {
      var head = c.querySelector(".choice-head");
      head.addEventListener("click", function () {
        openCard(c.classList.contains("is-open") ? null : c, true, true);
      });
    });
    // Startzustand: ?bereich=… oder #anfrage → Karte 3; sonst data-default (z. B. 2 auf der Startseite)
    var wantDetails = bereich || params.get("besichtigung") || window.location.hash === "#anfrage";
    var def = chooser.getAttribute("data-default");
    var start = wantDetails ? chooser.querySelector(".choice[data-choice='details']") : (def ? chooser.querySelector(".choice[data-choice='" + def + "']") : null);
    openCard(start, !!wantDetails, !!wantDetails);
    if (bereich && BEREICHE[bereich]) {
      chooser.querySelectorAll("select[name='leistungsbereich']").forEach(function (sel) { sel.value = BEREICHE[bereich]; });
    }
  });

  // Nummer kopieren
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var txt = btn.getAttribute("data-copy");
      var done = function () { var o = btn.textContent; btn.textContent = "Kopiert ✓"; setTimeout(function () { btn.textContent = o; }, 1800); };
      if (navigator.clipboard) navigator.clipboard.writeText(txt).then(done, done); else done();
    });
  });

  // Optionaler Bereich „Besichtigungstermin wünschen“ im Hauptformular (?besichtigung=1 öffnet ihn)
  document.querySelectorAll("[data-visit-toggle]").forEach(function (cb) {
    var box = document.getElementById(cb.getAttribute("aria-controls"));
    if (params.get("besichtigung")) cb.checked = true;
    function upd() { if (box) box.hidden = !cb.checked; cb.setAttribute("aria-expanded", String(cb.checked)); }
    cb.addEventListener("change", upd); upd();
  });

  /* 9. Formulare --------------------------------------------------------- */
  // Versand über Web3Forms. Ist der Zugangsschlüssel noch "TODO…", öffnet sich
  // stattdessen das E-Mail-Programm des Besuchers mit allen Angaben (mailto).
  var MAX_FILE_MB = 5;

  function fieldLabel(form, name) {
    var el = form.querySelector("[name='" + name + "']");
    if (!el) return name;
    if (el.dataset.label) return el.dataset.label;
    var fs = el.closest("fieldset");
    if (fs && fs.querySelector("legend")) return fs.querySelector("legend").textContent.replace("*", "").replace("(Mehrfachauswahl)", "").trim();
    var lab = el.id && form.querySelector("label[for='" + el.id + "']");
    return lab ? lab.textContent.replace("*", "").trim() : name;
  }
  function buildMailBody(form) {
    var data = new FormData(form);
    var skip = ["access_key", "subject", "redirect", "from_name", "botcheck", "datenschutz"];
    var rows = {}, order = [];
    data.forEach(function (value, key) {
      if (skip.indexOf(key) > -1 || value instanceof File) return;
      if (!String(value).trim()) return;
      var label = fieldLabel(form, key);
      if (!rows[label]) { rows[label] = []; order.push(label); }
      rows[label].push(String(value));
    });
    var lines = order.map(function (k) { return k + ": " + rows[k].join(", "); });
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
    var ok = true, firstInvalid = null;
    form.querySelectorAll("[required]").forEach(function (el) {
      if (el.closest("[hidden]")) return; // ausgeblendete optionale Bereiche überspringen
      var valid = el.type === "checkbox" ? el.checked : el.checkValidity();
      el.setAttribute("aria-invalid", valid ? "false" : "true");
      var err = document.getElementById(el.id + "-error");
      if (err) err.textContent = valid ? "" : (el.dataset.error || "Bitte füllen Sie dieses Feld korrekt aus.");
      if (!valid && !firstInvalid) firstInvalid = el;
      if (!valid) ok = false;
    });
    form.querySelectorAll("fieldset[data-require-one]").forEach(function (fs) {
      if (fs.closest("[hidden]")) return;
      var checked = fs.querySelectorAll("input:checked").length > 0;
      var err = fs.querySelector(".field-error");
      if (err) err.textContent = checked ? "" : (fs.dataset.error || "Bitte wählen Sie mindestens eine Option aus.");
      if (!checked) { ok = false; if (!firstInvalid) firstInvalid = fs.querySelector("input"); }
    });
    form.querySelectorAll("input[type='file']").forEach(function (f) {
      var tooBig = Array.prototype.some.call(f.files, function (file) { return file.size > MAX_FILE_MB * 1024 * 1024; });
      var err = document.getElementById(f.id + "-error");
      if (err) err.textContent = tooBig ? "Bitte nur Dateien bis " + MAX_FILE_MB + " MB hochladen." : "";
      if (tooBig) { ok = false; if (!firstInvalid) firstInvalid = f; }
    });
    if (firstInvalid) firstInvalid.focus();
    return ok;
  }

  document.querySelectorAll("form.js-form").forEach(function (form) {
    var successUrl = new URL(form.getAttribute("data-success") || "danke/", window.location.href).href;
    var redirect = form.querySelector("[name='redirect']");
    if (redirect) redirect.value = successUrl; // für Versand ohne JavaScript
    form.setAttribute("novalidate", "");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validate(form)) { showStatus(form, "error", "Bitte prüfen Sie die markierten Felder."); return; }

      var key = (form.querySelector("[name='access_key']") || {}).value || "";
      var mailto = CFG.email || form.getAttribute("data-mailto");
      var subject = (form.querySelector("[name='subject']") || {}).value || "Anfrage über die Webseite";
      var mailHref = "mailto:" + mailto + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(buildMailBody(form));

      if (!isSet(key)) {
        window.location.href = mailHref;
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
          if (r.ok && r.json.success) window.location.href = successUrl;
          else throw new Error(r.json.message || "Fehler");
        })
        .catch(function () {
          btn.disabled = false;
          btn.innerHTML = label;
          showStatus(form, "error", "Die Nachricht konnte gerade nicht gesendet werden. Bitte <a href=\"" + mailHref + "\">senden Sie sie per E-Mail</a> oder rufen Sie uns an.");
        });
    });
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
