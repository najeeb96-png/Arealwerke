# Arealwerk Plus UG (haftungsbeschränkt) – Webseite

Statische Firmenwebseite (reines HTML, CSS, JavaScript – kein Framework, keine Build-Tools) für
**Arealwerk Plus UG (haftungsbeschränkt)**, Rodgau · Marke „AREALWERK PLUS Dienstleistungen“ · *„Qualität, die überzeugt.“*

> **Testversion:** Alle Seiten tragen `noindex` und `robots.txt` sperrt Suchmaschinen. Zum Start beides entfernen (siehe TODO.md, Punkt 1).

Live (GitHub Pages): **https://najeeb96-png.github.io/Arealwerke/**

> Alle offenen Platzhalter stehen in **[TODO.md](TODO.md)** (mit Datei und Zeile). Im Code sind sie einheitlich mit `TODO` markiert.

---

## 1. Veröffentlichung (GitHub Pages)

1. Auf GitHub das Repository `arealwerke` öffnen → **Settings** → **Pages**.
2. Unter **Build and deployment** → *Source*: **Deploy from a branch**.
3. *Branch*: **main**, Ordner: **/ (root)** → **Save**.
4. Nach 1–2 Minuten ist die Seite unter `https://najeeb96-png.github.io/Arealwerke/` erreichbar.

Jede Änderung, die auf `main` landet, wird automatisch veröffentlicht. Die Datei `.nojekyll` sorgt dafür, dass GitHub die Dateien unverändert ausliefert.

---

## 2. Ordnerstruktur

```
index.html              Startseite (Single-Page mit Ankern #leistungen, #servicepakete, #ablauf, #referenzen, #kundenstimmen, #ueber-uns, #faq, #kontakt)
reinigung/  garten/  handwerk/            Leistungsbereiche (je eigene Akzentfarbe)
servicepakete/  gewerbe/                  Verträge, Pakete, Vertragsanfrage, Geschäftskunden
referenzen/  ueber-uns/  kontakt/         Galerie, Firma, Kontakt
impressum/  datenschutz/  agb/            Rechtstexte (ENTWURF – rechtlich prüfen lassen!)
danke/  sitemap/  404.html                Danke-Seite nach Formularversand, HTML-Sitemap, Fehlerseite
css/style.css           Gesamtes Design – alle Farben als CSS-Variablen ganz oben
js/main.js              Menü, Galerie/Lightbox, Vorher/Nachher, Karte, Formulare
fonts/                  Schriften (lokal, keine Verbindung zu Google)
images/                 Logo, Platzhalter-Bilder
favicon.svg, favicon-32.png, favicon.ico, apple-touch-icon.png
sitemap.xml, robots.txt
```

Jede Seite ist eine eigene `index.html` in ihrem Ordner – dadurch gibt es saubere URLs wie `/reinigung/`.
Kopf (Navigation) und Fußzeile stehen in jeder Datei. **Änderungen daran (z. B. Adresse im Footer) bitte in allen Seiten machen** – am einfachsten mit „Suchen & Ersetzen in Dateien“ (z. B. in VS Code: `Strg+Umschalt+H`).

---

## 3. Was tausche ich wo aus?

### Texte
Direkt in der jeweiligen `index.html` bearbeiten. Die Abschnitte sind über Überschriften leicht zu finden.
FAQ: Startseite und `kontakt/index.html` (Abschnitt „Häufige Fragen“; im `<head>` steht dieselbe FAQ als JSON-LD für Google – bei Änderungen bitte mitpflegen).

### Kontaktdaten
| Was | Aktuell | Wo |
|---|---|---|
| Telefon | `0151 14964367` / `tel:+4915114964367` | alle Seiten (Suchen & Ersetzen) |
| E-Mail | `arealwerkplus@icloud.com` | alle Seiten + `data-mailto` der Formulare |
| WhatsApp | `https://wa.me/4915114964367` | alle Seiten – **Nummer prüfen** (Format: 49 ohne 0 und ohne +) |
| Instagram | `https://www.instagram.com/arealwerke_plus` | alle Seiten |
| Adresse | `[Straße Hausnummer]`, 63110 Rodgau | Footer + JSON-LD (alle Seiten), Impressum, Datenschutz, AGB |
| Firmierung / „i. G.“ | `Arealwerk Plus UG (haftungsbeschränkt)` | überall; „i. G.“ einblenden: bei `<span data-ig hidden>` das `hidden` entfernen |
| Erreichbarkeit | `[Zeiten folgen]` | Kontaktboxen (`<table class="hours">`) + JSON-LD |
| Einzugsgebiet | Rodgau, Rödermark, Dietzenbach … | `<ul class="places">` in `index.html` und `ueber-uns/index.html` + JSON-LD `areaServed` |

### Logo
- `images/logo.svg` – großes Logo mit Schriftzug (Startseite)
- `images/logo-mark.svg` – nur das AR-Monogramm (Kopfzeile, Footer)
- `favicon.svg`, `favicon-32.png`, `favicon.ico`, `apple-touch-icon.png` (180×180) – Browser-/Handy-Symbole
- `images/og-image.png` (1200×630) – Vorschaubild beim Teilen in WhatsApp, Facebook usw.

Einfach die Dateien mit **gleichem Namen** überschreiben. Ist Ihr Logo kein SVG, z. B. `logo.png` hochladen und in den HTML-Dateien `logo.svg` → `logo.png` ersetzen.

### Bilder
Alle Bilder sind farbige SVG-Platzhalter mit sprechenden Namen:

- `images/bereiche/reinigung.svg`, `garten.svg`, `handwerk.svg` – Kacheln der Leistungsbereiche (16:9)
- `images/referenzen/…` – Galerie (4:3), z. B. `reinigung-treppenhaus.svg`, `garten-heckenschnitt.svg`, `handwerk-armatur-montage.svg`
- `images/referenzen/…-vorher.svg` / `…-nachher.svg` – Vorher/Nachher-Slider (gleicher Bildausschnitt verwenden!)
- `images/team/teamfoto.svg`, `geschaeftsfuehrer.svg` – Team / Geschäftsführer
- `images/kunden/kunde-a.svg` … `kunde-e.svg` – Kundenlogos (nur mit Erlaubnis!)
- `downloads/flyer.pdf` – Flyer (Platzhalter-PDF ersetzen)

**So ersetzen Sie ein Bild:**
1. Foto auf ca. 1600 px Breite verkleinern und als **WebP** (oder JPG) speichern, z. B. mit [squoosh.app](https://squoosh.app).
2. Mit gleichem Namen hochladen, z. B. `images/referenzen/garten-heckenschnitt.webp`.
3. Im HTML die Endung ändern: `garten-heckenschnitt.svg` → `garten-heckenschnitt.webp`, und den `alt="…"`-Text anpassen (beschreibt, was zu sehen ist).

Alle Bilder werden automatisch erst beim Scrollen geladen (`loading="lazy"`).
Wer zusätzlich einen JPG-Fallback möchte, kann `<picture>` nutzen:
```html
<picture>
  <source srcset="../images/referenzen/garten-heckenschnitt.webp" type="image/webp">
  <img src="../images/referenzen/garten-heckenschnitt.jpg" alt="Frisch geschnittene Hecke" width="1200" height="900" loading="lazy">
</picture>
```

**Neues Galeriebild hinzufügen:** in `referenzen/index.html` einen `<li data-category="garten" …>`-Eintrag kopieren. `data-category` (`reinigung`, `garten`, `handwerk`) steuert den Filter.

### Preise, Pakete, Laufzeiten
- Richtpreise je Leistung: `ab TODO €/…` in `reinigung/`, `garten/`, `handwerk/` (`<p class="price-line">`)
- Paketkarten (Basis / Komfort / Premium): jeweils zwei Werte – `data-brutto` (Privat, inkl. MwSt.) und `data-netto` (Gewerbe, zzgl. MwSt.) – in `index.html`, `servicepakete/index.html`, `gewerbe/index.html`. Der Umschalter auf der Seite wechselt automatisch.
- Vergleichstabelle + Konditionen (Intervalle, Laufzeit, Kündigungsfrist): `servicepakete/index.html`
- Vertragsregeln zusätzlich in `agb/index.html` § 6 angleichen.

### Kundenstimmen
„Rezension A–E“ in `index.html` und `referenzen/index.html` (`<article class="card review">`): Text, Name, Ort und Sterne (`★`) ersetzen. Nur echte Bewertungen mit Einverständnis verwenden.
Google-Bewertungslink: `https://g.page/r/TODO-GOOGLE-BEWERTUNGSLINK/review` ersetzen (Google Unternehmensprofil → „Bewertungen erhalten“ → Link kopieren).

### Formular-Schlüssel (Web3Forms)
1. Auf [web3forms.com](https://web3forms.com) mit `arealwerkplus@icloud.com` kostenlos einen *Access Key* anfordern.
2. In allen Dateien `TODO_WEB3FORMS_ACCESS_KEY` durch den Schlüssel ersetzen (Anfrage-, Rückruf-, Besichtigungs- und Vertragsformular auf Startseite, `kontakt/` und `servicepakete/`).
3. Bei eigener Domain: `<input type="hidden" name="redirect" …>` zeigt auf die Danke-Seite – wird per JavaScript automatisch richtig gesetzt, die Adresse im HTML ist nur für Besucher ohne JavaScript.

Solange der Schlüssel fehlt, öffnet das Formular beim Absenden das **E-Mail-Programm** des Besuchers mit allen Angaben (mailto-Fallback).
Hinweis: Datei-Uploads (Fotos) sind bei Web3Forms je nach Tarif kostenpflichtig – ggf. das Foto-Feld in `contact_form` entfernen.

### Farben & Schrift
Ganz oben in `css/style.css` unter „Design-Tokens“: `--c-gold`, `--c-blue` (Reinigung), `--c-green` (Garten), Hintergrundfarben usw.
Schriften: Inter (Text) und Playfair Display (Überschriften), lokal in `fonts/`.

### Karte
Die OpenStreetMap-Karte (Zentrum Rodgau) wird erst nach Klick geladen (datenschutzfreundlich). Marker/Ausschnitt ändern: auf openstreetmap.org Ort suchen → *Teilen* → *HTML* → den `src`-Link in `data-map-src="…"` einsetzen (`index.html`, `kontakt/index.html`).

---

## 4. Eigene Domain verbinden (z. B. `www.arealwerkplus.de`)

1. **Domain kaufen** (z. B. bei IONOS, Strato, INWX, Namecheap).
2. Bei GitHub: **Settings → Pages → Custom domain** → `www.arealwerkplus.de` eintragen → **Save**. (GitHub legt dabei eine Datei `CNAME` im Repository an.)
3. Beim Domain-Anbieter im **DNS** eintragen:
   - `www` → **CNAME** → `najeeb96-png.github.io`
   - für die Domain ohne www (`@`) vier **A-Records**: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
4. Warten (bis zu 24 h), dann bei GitHub **Enforce HTTPS** aktivieren.
5. **Adressen in der Webseite anpassen** – per Suchen & Ersetzen in allen Dateien:
   - `https://najeeb96-png.github.io/Arealwerke/` → `https://www.arealwerkplus.de/` (Canonical, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt`, Formular-`redirect`)
   - in `404.html`: `<base href="/Arealwerke/">` → `<base href="/">`
6. Optional: Seite in der [Google Search Console](https://search.google.com/search-console) anmelden und `sitemap.xml` einreichen; Google Unternehmensprofil anlegen.

Hinweis: `robots.txt` wirkt nur im Hauptverzeichnis einer Domain – also erst mit eigener Domain.

---

## 5. Technik & Qualität

- **Datenschutz:** keine Cookies, keine Tracker, kein Consent-Banner nötig. Schriften lokal, Karte erst nach Klick.
- **SEO:** eigener Titel + Beschreibung je Seite, Open-Graph-Tags, `LocalBusiness`-Schema (JSON-LD) mit allen Leistungsbereichen, FAQ- und Breadcrumb-Schema, `sitemap.xml`, `robots.txt`, 404-Seite.
- **Barrierefreiheit:** Sprunglink „Zum Inhalt“, Alt-Texte, sichtbare Fokus-Rahmen, Tastaturbedienung (Menü, Lightbox mit Pfeiltasten/Escape, Vorher/Nachher-Regler), hohe Kontraste, `prefers-reduced-motion`.
- **Mobil:** Mobile-first, Burger-Menü, feste Leiste unten (Anrufen / WhatsApp / Anfrage), Back-to-top.
- **Icons:** eigene Strich-Icons im Stil von Lucide (inline SVG).

Lokal ansehen: Ordner öffnen und im Terminal `python3 -m http.server` starten, dann `http://localhost:8000` aufrufen.

---

## 6. Rechtlicher Hinweis

Impressum, Datenschutzerklärung und AGB sind **Entwürfe mit Platzhaltern** und auf der Seite deutlich so markiert. Vor dem offiziellen Start bitte rechtlich prüfen lassen und die Hinweisboxen „Entwurf“ entfernen. Der Handwerkerservice ist bewusst auf Kleinreparaturen, Montage, Instandhaltung und Wartung beschränkt; zulassungspflichtige Arbeiten werden an Partnerbetriebe vermittelt – die Abgrenzung bitte mit der Handwerkskammer Frankfurt-Rhein-Main klären.
