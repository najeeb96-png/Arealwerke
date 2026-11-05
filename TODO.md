# TODO – offene Platzhalter

Diese Liste wurde automatisch aus allen `TODO`-Markierungen im Code erzeugt (Datei:Zeile).
Tipp: Im Code nach `TODO` suchen findet jede Stelle. Nach dem Ausfüllen die Markierung löschen.

## 1. Wichtigste Punkte vor dem Start

Fast alles davon wird in **`js/config.js`** gepflegt (eine Datei für Firmierung, i. G., Adresse, Telefon, E-Mail, WhatsApp, Öffnungszeiten, Web3Forms-Schlüssel, Google-/Calendly-Link, Flyer, Indexierung).
Nach jeder Änderung an `js/config.js` einmal `python3 tools/apply-config.py` ausführen, damit auch die statischen Teile (meta robots, robots.txt, sitemap.xml, Schema.org) übernommen werden.

- [ ] **Testphase beenden:** `"indexierung": true` in `js/config.js`, dann `tools/apply-config.py` ausführen
- [ ] **„i. G.“ ausschalten** nach HR-Eintragung: `"inGruendung": false` + HRB-Nummer eintragen (`hrb`)
- [ ] **Firmendaten:** `strasse`, `geschaeftsfuehrer`, `ustId`, `oeffnungszeiten` in `js/config.js`
- [ ] **Web3Forms-Schlüssel** (`web3formsKey`) – bis dahin öffnet jedes Formular das E-Mail-Programm
- [ ] **Google-Bewertungslink** (`googleBewertungLink`), **Calendly** (`calendlyLink`), **Flyer** (`flyerPfad`, z. B. `downloads/flyer.pdf` hochladen) – Buttons erscheinen erst, wenn der Wert gesetzt ist
- [ ] **WhatsApp-Nummer** prüfen (`whatsappNummer`)
- [ ] **Impressum:** Handwerkskammer (nur bei Eintragung), Betriebshaftpflicht-Versicherer, Bildnachweise → `impressum/index.html`
- [ ] **Datenschutz & AGB rechtlich prüfen lassen** → `datenschutz/index.html`, `agb/index.html`
- [ ] **Richtpreise** bei jeder Leistung (`ab TODO €/…`), **Paketpreise** (`data-brutto`/`data-netto`), **Kündigungsfrist** (`TODO Monaten Frist`), **Kleinreparaturen-Kontingent** (`TODO Std./Monat`)
- [ ] **Geschäftsführer-Block:** Foto (`images/team/geschaeftsfuehrer.svg`), 2–3 persönliche Sätze → `index.html`, `ueber-uns/index.html`
- [ ] **Rezension A–E** und **Kunde A–E** durch echte Inhalte ersetzen (nur mit Einverständnis)
- [ ] **Betriebshaftpflicht bestätigen** – alle „versichert“-Aussagen sind mit TODO markiert
- [ ] **Handwerk:** Partnerbetriebe benennen; Abgrenzung mit Handwerkskammer Frankfurt-Rhein-Main klären
- [ ] **SEPA-Lastschrift**, **Kleinunternehmerregelung**, **Winterdienst-Kapazität** klären
- [ ] **Bilder:** Beispielbilder in `images/` durch echte Fotos ersetzen; Karten-Marker auf Firmenadresse setzen

## 0. Konfiguration (js/config.js)

### `js/config.js`
- [ ] Zeile 11: "TODO"
- [ ] Zeile 26: "TODO [Vorname Nachname]"
- [ ] Zeile 28: "TODO"
- [ ] Zeile 29: "TODO"
- [ ] Zeile 31: "TODO [Straße Hausnummer]"
- [ ] Zeile 43: TODO: prüfen, ob die Mobilnummer für WhatsApp genutzt wird.",
- [ ] Zeile 48: "TODO [Zeiten folgen]"
- [ ] Zeile 49: "TODO [Zeiten folgen]"
- [ ] Zeile 50: "TODO [Zeiten folgen]"
- [ ] Zeile 53: "TODO_WEB3FORMS_ACCESS_KEY"
- [ ] Zeile 55: "TODO"
- [ ] Zeile 56: "TODO"

### `js/main.js`
- [ ] Zeile 22: "TODO"
- [ ] Zeile 334: "TODO…"

### `tools/apply-config.py`
- [ ] Zeile 20: "TODO"
- [ ] Zeile 43: "TODO"
- [ ] Zeile 58: "TODO "
- [ ] Zeile 60: "TODO "

## 2. Seiten, Kontakt & Technik

### `404.html`
- [ ] Zeile 5: TODO: Bei eigener Domain base href auf "/" ändern

### `favicon.svg`
- [ ] Zeile 2: TODO: Vorläufiges Logo (AR-Monogramm). Durch das Original-Logo ersetzen (gleicher Dateiname).

### `garten/index.html`
- [ ] Zeile 50: "TODO"
- [ ] Zeile 306: TODO: Richtpreis eintragen
- [ ] Zeile 306: TODO €
- [ ] Zeile 306: TODO: Richtpreis eintragen
- [ ] Zeile 306: TODO €
- [ ] Zeile 306: TODO: Richtpreis eintragen
- [ ] Zeile 306: TODO €
- [ ] Zeile 306: TODO: Richtpreis eintragen
- [ ] Zeile 306: TODO €
- [ ] Zeile 306: TODO: Richtpreis eintragen
- [ ] Zeile 306: TODO €
- [ ] Zeile 306: TODO: Richtpreis eintragen
- [ ] Zeile 306: TODO €
- [ ] Zeile 306: TODO: Winterdienst-Kapazität und Einsatzgebiet bestätigen
- [ ] Zeile 306: TODO: Richtpreis eintragen
- [ ] Zeile 306: TODO: Richtpreis eintragen
- [ ] Zeile 346: TODO: Beispielbilder durch echte Projektfotos ersetzen

### `gewerbe/index.html`
- [ ] Zeile 50: "TODO"
- [ ] Zeile 311: TODO: Winterdienst-Kapazität bestätigen
- [ ] Zeile 313: TODO: Prüfen, ob Kleinunternehmerregelung gilt
- [ ] Zeile 337: TODO: Preise für Paket Basis eintragen: data-brutto (Privat, inkl. MwSt.) und data-netto (Gewerbe, zzgl. MwSt.)
- [ ] Zeile 338: TODO €
- [ ] Zeile 338: TODO €
- [ ] Zeile 338: TODO €
- [ ] Zeile 342: TODO: Laufzeit bestätigen
- [ ] Zeile 350: TODO: Preise für Paket Komfort eintragen: data-brutto (Privat, inkl. MwSt.) und data-netto (Gewerbe, zzgl. MwSt.)
- [ ] Zeile 351: TODO €
- [ ] Zeile 351: TODO €
- [ ] Zeile 351: TODO €
- [ ] Zeile 355: TODO: Laufzeit bestätigen
- [ ] Zeile 363: TODO: Preise für Paket Premium eintragen: data-brutto (Privat, inkl. MwSt.) und data-netto (Gewerbe, zzgl. MwSt.)
- [ ] Zeile 364: TODO €
- [ ] Zeile 364: TODO €
- [ ] Zeile 364: TODO €
- [ ] Zeile 368: TODO: Laufzeit bestätigen
- [ ] Zeile 370: TODO Std.

### `handwerk/index.html`
- [ ] Zeile 50: "TODO"
- [ ] Zeile 306: TODO: Richtpreis eintragen
- [ ] Zeile 306: TODO €
- [ ] Zeile 306: TODO: Richtpreis eintragen
- [ ] Zeile 306: TODO €
- [ ] Zeile 306: TODO: Richtpreis eintragen
- [ ] Zeile 306: TODO €
- [ ] Zeile 306: TODO: Partnerbetriebe benennen und Formulierung rechtlich prüfen
- [ ] Zeile 306: TODO: Richtpreis eintragen
- [ ] Zeile 306: TODO €
- [ ] Zeile 306: TODO: Partnerbetriebe benennen
- [ ] Zeile 306: TODO: Richtpreis eintragen
- [ ] Zeile 306: TODO €
- [ ] Zeile 306: TODO: Partnerbetriebe benennen
- [ ] Zeile 306: TODO: Richtpreis eintragen
- [ ] Zeile 306: TODO €
- [ ] Zeile 307: TODO: Partnerbetriebe benennen; Abgrenzung zu zulassungspflichtigem Handwerk rechtlich prüfen (Handwerkskammer Frankfurt-Rhein-Main)
- [ ] Zeile 346: TODO: Beispielbilder durch echte Projektfotos ersetzen

### `index.html`
- [ ] Zeile 28: TODO Monaten
- [ ] Zeile 52: "TODO"
- [ ] Zeile 408: TODO: Preise für Paket Basis eintragen: data-brutto (Privat, inkl. MwSt.) und data-netto (Gewerbe, zzgl. MwSt.)
- [ ] Zeile 409: TODO €
- [ ] Zeile 409: TODO €
- [ ] Zeile 409: TODO €
- [ ] Zeile 413: TODO: Laufzeit bestätigen
- [ ] Zeile 421: TODO: Preise für Paket Komfort eintragen: data-brutto (Privat, inkl. MwSt.) und data-netto (Gewerbe, zzgl. MwSt.)
- [ ] Zeile 422: TODO €
- [ ] Zeile 422: TODO €
- [ ] Zeile 422: TODO €
- [ ] Zeile 426: TODO: Laufzeit bestätigen
- [ ] Zeile 434: TODO: Preise für Paket Premium eintragen: data-brutto (Privat, inkl. MwSt.) und data-netto (Gewerbe, zzgl. MwSt.)
- [ ] Zeile 435: TODO €
- [ ] Zeile 435: TODO €
- [ ] Zeile 435: TODO €
- [ ] Zeile 439: TODO: Laufzeit bestätigen
- [ ] Zeile 441: TODO Std.
- [ ] Zeile 476: TODO: Beispielbilder durch echte Projektfotos ersetzen
- [ ] Zeile 478: TODO: Vorher/Nachher-Beispielbilder durch echte Fotos ersetzen
- [ ] Zeile 501: TODO: Rezension A–E durch echte Kundenstimmen ersetzen (Name, Ort, Sterne, Text) – nur mit Einverständnis
- [ ] Zeile 528: TODO: Kunde A–E durch echte Kundenlogos ersetzen (images/kunden/) – nur mit schriftlicher Erlaubnis
- [ ] Zeile 540: TODO: Gründungsgeschichte (Kurzfassung) einfügen
- [ ] Zeile 549: TODO: Foto des Geschäftsführers einsetzen (images/team/geschaeftsfuehrer.svg ersetzen)
- [ ] Zeile 556: TODO: 2–3 persönliche Sätze (Erfahrung, Motivation, was Kunden erwarten dürfen)
- [ ] Zeile 572: TODO: Anfahrtsregelung bestätigen
- [ ] Zeile 572: TODO Monaten
- [ ] Zeile 572: TODO: Kündigungsfrist festlegen
- [ ] Zeile 572: TODO: Versicherung bestätigen (Versicherer, Deckungssumme) – Antwort erst nach Vorliegen der Police veröffentlichen
- [ ] Zeile 572: TODO: SEPA-Lastschrift und Zahlungsziel bestätigen
- [ ] Zeile 572: TODO: Notdienst-Regelung festlegen
- [ ] Zeile 612: "TODO_WEB3FORMS_ACCESS_KEY"
- [ ] Zeile 655: "TODO_WEB3FORMS_ACCESS_KEY"
- [ ] Zeile 699: TODO: Datei-Upload benötigt bei Web3Forms ggf. einen kostenpflichtigen Tarif – prüfen oder Feld entfernen
- [ ] Zeile 754: TODO: Marker auf die genaue Firmenadresse setzen (data-map-src, Parameter marker=lat,lon)

### `kontakt/index.html`
- [ ] Zeile 28: TODO Monaten
- [ ] Zeile 52: "TODO"
- [ ] Zeile 332: "TODO_WEB3FORMS_ACCESS_KEY"
- [ ] Zeile 375: "TODO_WEB3FORMS_ACCESS_KEY"
- [ ] Zeile 419: TODO: Datei-Upload benötigt bei Web3Forms ggf. einen kostenpflichtigen Tarif – prüfen oder Feld entfernen
- [ ] Zeile 475: TODO: Marker auf die genaue Firmenadresse setzen (data-map-src, Parameter marker=lat,lon)
- [ ] Zeile 488: TODO: Anfahrtsregelung bestätigen
- [ ] Zeile 488: TODO Monaten
- [ ] Zeile 488: TODO: Kündigungsfrist festlegen
- [ ] Zeile 488: TODO: Versicherung bestätigen (Versicherer, Deckungssumme) – Antwort erst nach Vorliegen der Police veröffentlichen
- [ ] Zeile 488: TODO: SEPA-Lastschrift und Zahlungsziel bestätigen
- [ ] Zeile 488: TODO: Notdienst-Regelung festlegen

### `referenzen/index.html`
- [ ] Zeile 50: "TODO"
- [ ] Zeile 304: TODO: Beispielbilder durch echte Projektfotos ersetzen
- [ ] Zeile 315: TODO: Vorher/Nachher-Beispielbilder durch echte Fotos ersetzen
- [ ] Zeile 366: TODO: Rezension A–E durch echte Kundenstimmen ersetzen (Name, Ort, Sterne, Text) – nur mit Einverständnis
- [ ] Zeile 393: TODO: Kunde A–E durch echte Kundenlogos ersetzen (images/kunden/) – nur mit schriftlicher Erlaubnis

### `reinigung/index.html`
- [ ] Zeile 50: "TODO"
- [ ] Zeile 306: TODO: Richtpreis eintragen
- [ ] Zeile 306: TODO €
- [ ] Zeile 306: TODO: Richtpreis eintragen
- [ ] Zeile 306: TODO €
- [ ] Zeile 306: TODO: Richtpreis eintragen
- [ ] Zeile 306: TODO €
- [ ] Zeile 306: TODO: Richtpreis eintragen
- [ ] Zeile 306: TODO €
- [ ] Zeile 306: TODO: Richtpreis eintragen
- [ ] Zeile 306: TODO €
- [ ] Zeile 306: TODO: Richtpreis eintragen
- [ ] Zeile 306: TODO €
- [ ] Zeile 306: TODO: Richtpreis eintragen
- [ ] Zeile 346: TODO: Beispielbilder durch echte Projektfotos ersetzen

### `servicepakete/index.html`
- [ ] Zeile 50: "TODO"
- [ ] Zeile 330: TODO: Vertragskonditionen (Intervalle, Laufzeiten, Kündigungsfristen) festlegen und eintragen
- [ ] Zeile 334: TODO Monaten
- [ ] Zeile 336: TODO: Kündigungsfrist festlegen; Verlängerungsregel rechtlich prüfen lassen
- [ ] Zeile 354: TODO: Preise für Paket Basis eintragen: data-brutto (Privat, inkl. MwSt.) und data-netto (Gewerbe, zzgl. MwSt.)
- [ ] Zeile 355: TODO €
- [ ] Zeile 355: TODO €
- [ ] Zeile 355: TODO €
- [ ] Zeile 359: TODO: Laufzeit bestätigen
- [ ] Zeile 367: TODO: Preise für Paket Komfort eintragen: data-brutto (Privat, inkl. MwSt.) und data-netto (Gewerbe, zzgl. MwSt.)
- [ ] Zeile 368: TODO €
- [ ] Zeile 368: TODO €
- [ ] Zeile 368: TODO €
- [ ] Zeile 372: TODO: Laufzeit bestätigen
- [ ] Zeile 380: TODO: Preise für Paket Premium eintragen: data-brutto (Privat, inkl. MwSt.) und data-netto (Gewerbe, zzgl. MwSt.)
- [ ] Zeile 381: TODO €
- [ ] Zeile 381: TODO €
- [ ] Zeile 381: TODO €
- [ ] Zeile 385: TODO: Laufzeit bestätigen
- [ ] Zeile 387: TODO Std.
- [ ] Zeile 391: TODO: Preise, Laufzeiten und Kündigungsfristen in der Vergleichstabelle eintragen
- [ ] Zeile 396: TODO Monaten
- [ ] Zeile 396: TODO €
- [ ] Zeile 396: TODO €
- [ ] Zeile 396: TODO €
- [ ] Zeile 396: TODO €
- [ ] Zeile 396: TODO €
- [ ] Zeile 396: TODO €
- [ ] Zeile 396: TODO €
- [ ] Zeile 396: TODO €
- [ ] Zeile 396: TODO €
- [ ] Zeile 404: TODO: SEPA-Lastschriftverfahren bestätigen
- [ ] Zeile 407: TODO: Prüfen, ob Kleinunternehmerregelung gilt
- [ ] Zeile 431: TODO: Prüfen, ob Kleinunternehmerregelung gilt
- [ ] Zeile 455: TODO: Betriebshaftpflicht bestätigen (Versicherer, Deckungssumme) – bis dahin Formulierung prüfen
- [ ] Zeile 471: "TODO_WEB3FORMS_ACCESS_KEY"

### `sitemap.xml`
- [ ] Zeile 2: TODO: Bei eigener Domain alle URLs anpassen

### `ueber-uns/index.html`
- [ ] Zeile 50: "TODO"
- [ ] Zeile 303: TODO: Gründungsgeschichte – eigene Worte, Gründungsjahr, Motivation, Erfahrung des Geschäftsführers
- [ ] Zeile 310: TODO: Foto des Geschäftsführers einsetzen (images/team/geschaeftsfuehrer.svg ersetzen)
- [ ] Zeile 317: TODO: 2–3 persönliche Sätze (Erfahrung, Motivation, was Kunden erwarten dürfen)
- [ ] Zeile 334: TODO: Teamfoto einsetzen (images/team/teamfoto.svg ersetzen)

## 3. Rechtstexte

### `agb/index.html`
- [ ] Zeile 61: TODO: AGB vollständig prüfen lassen und Datum eintragen
- [ ] Zeile 71: TODO: Bindefrist festlegen
- [ ] Zeile 75: TODO: rechtlich prüfen
- [ ] Zeile 79: TODO: bei Kleinunternehmerregelung anpassen
- [ ] Zeile 80: TODO: Zahlungsziel, SEPA und Abrechnungsmodus festlegen
- [ ] Zeile 85: TODO: Ausfallregelung festlegen
- [ ] Zeile 89: TODO: Laufzeiten festlegen
- [ ] Zeile 90: TODO: Kündigungsfristen/Verlängerung rechtlich prüfen
- [ ] Zeile 92: TODO: ggf. Preisanpassungsklausel ergänzen
- [ ] Zeile 99: TODO: Versicherung bestätigen, Deckungssumme ergänzen
- [ ] Zeile 104: TODO: Vollständige Widerrufsbelehrung + Muster-Widerrufsformular erstellen lassen

### `datenschutz/index.html`
- [ ] Zeile 61: TODO: Datum eintragen
- [ ] Zeile 74: TODO: prüfen
- [ ] Zeile 88: TODO: Zertifizierungsstatus aktuell prüfen; bei Domainwechsel/anderem Hoster Abschnitt anpassen
- [ ] Zeile 91: TODO: Anbieterangaben (Firmenname, Anschrift, Sitz) von Web3Forms prüfen und eintragen
- [ ] Zeile 91: TODO: Angaben zu Web3Forms (Sitz, Speicherdauer, AVV) prüfen
- [ ] Zeile 92: TODO: Auftragsverarbeitungsvertrag (AVV) mit Web3Forms prüfen
- [ ] Zeile 96: TODO: bei anderem E-Mail-Anbieter anpassen
- [ ] Zeile 108: TODO: Abschnitt entfernen, falls Calendly nicht genutzt wird (Link ist ausgeblendet, solange calendlyLink in js/config.js "TODO" ist)
- [ ] Zeile 127: TODO: Angaben prüfen

### `impressum/index.html`
- [ ] Zeile 79: TODO: Formulierung rechtlich prüfen
- [ ] Zeile 88: TODO: USt-IdNr. in js/config.js eintragen (oder Abschnitt entfernen, falls noch nicht vergeben)
- [ ] Zeile 95: TODO: Nur ausfüllen, falls eine Eintragung bei der Handwerkskammer erfolgt; sonst Abschnitt entfernen
- [ ] Zeile 100: TODO: Versicherungsangaben eintragen, sobald die Police vorliegt
- [ ] Zeile 115: TODO: Bildnachweise ergänzen

## 4. Bilder & Logo

### `images/bereiche/garten.svg`
- [ ] Zeile 2: TODO: Beispielbild – durch echtes Foto ersetzen (z. B. gleicher Name als .webp oder .jpg, dann Endung im HTML anpassen).

### `images/bereiche/handwerk.svg`
- [ ] Zeile 2: TODO: Beispielbild – durch echtes Foto ersetzen (z. B. gleicher Name als .webp oder .jpg, dann Endung im HTML anpassen).

### `images/bereiche/reinigung.svg`
- [ ] Zeile 2: TODO: Beispielbild – durch echtes Foto ersetzen (z. B. gleicher Name als .webp oder .jpg, dann Endung im HTML anpassen).

### `images/kunden/kunde-a.svg`
- [ ] Zeile 2: TODO: Logo von Kunde A einsetzen – nur mit schriftlicher Erlaubnis des Kunden.

### `images/kunden/kunde-b.svg`
- [ ] Zeile 2: TODO: Logo von Kunde B einsetzen – nur mit schriftlicher Erlaubnis des Kunden.

### `images/kunden/kunde-c.svg`
- [ ] Zeile 2: TODO: Logo von Kunde C einsetzen – nur mit schriftlicher Erlaubnis des Kunden.

### `images/kunden/kunde-d.svg`
- [ ] Zeile 2: TODO: Logo von Kunde D einsetzen – nur mit schriftlicher Erlaubnis des Kunden.

### `images/kunden/kunde-e.svg`
- [ ] Zeile 2: TODO: Logo von Kunde E einsetzen – nur mit schriftlicher Erlaubnis des Kunden.

### `images/logo-mark.svg`
- [ ] Zeile 2: TODO: Vorläufiges Logo (AR-Monogramm). Durch das Original-Logo ersetzen (gleicher Dateiname).

### `images/logo.svg`
- [ ] Zeile 2: TODO: Vorläufiges Logo (AR-Monogramm + Schriftzug). Durch das Original-Logo ersetzen (gleicher Dateiname).

### `images/referenzen/garten-einfahrt-nachher.svg`
- [ ] Zeile 2: TODO: Beispielbild – durch echtes Foto ersetzen (z. B. gleicher Name als .webp oder .jpg, dann Endung im HTML anpassen).

### `images/referenzen/garten-einfahrt-reinigen.svg`
- [ ] Zeile 2: TODO: Beispielbild – durch echtes Foto ersetzen (z. B. gleicher Name als .webp oder .jpg, dann Endung im HTML anpassen).

### `images/referenzen/garten-einfahrt-vorher.svg`
- [ ] Zeile 2: TODO: Beispielbild – durch echtes Foto ersetzen (z. B. gleicher Name als .webp oder .jpg, dann Endung im HTML anpassen).

### `images/referenzen/garten-hecke-nachher.svg`
- [ ] Zeile 2: TODO: Beispielbild – durch echtes Foto ersetzen (z. B. gleicher Name als .webp oder .jpg, dann Endung im HTML anpassen).

### `images/referenzen/garten-hecke-vorher.svg`
- [ ] Zeile 2: TODO: Beispielbild – durch echtes Foto ersetzen (z. B. gleicher Name als .webp oder .jpg, dann Endung im HTML anpassen).

### `images/referenzen/garten-heckenschnitt.svg`
- [ ] Zeile 2: TODO: Beispielbild – durch echtes Foto ersetzen (z. B. gleicher Name als .webp oder .jpg, dann Endung im HTML anpassen).

### `images/referenzen/garten-laubentfernung.svg`
- [ ] Zeile 2: TODO: Beispielbild – durch echtes Foto ersetzen (z. B. gleicher Name als .webp oder .jpg, dann Endung im HTML anpassen).

### `images/referenzen/garten-rasenpflege.svg`
- [ ] Zeile 2: TODO: Beispielbild – durch echtes Foto ersetzen (z. B. gleicher Name als .webp oder .jpg, dann Endung im HTML anpassen).

### `images/referenzen/handwerk-armatur-montage.svg`
- [ ] Zeile 2: TODO: Beispielbild – durch echtes Foto ersetzen (z. B. gleicher Name als .webp oder .jpg, dann Endung im HTML anpassen).

### `images/referenzen/handwerk-badarmatur-nachher.svg`
- [ ] Zeile 2: TODO: Beispielbild – durch echtes Foto ersetzen (z. B. gleicher Name als .webp oder .jpg, dann Endung im HTML anpassen).

### `images/referenzen/handwerk-badarmatur-vorher.svg`
- [ ] Zeile 2: TODO: Beispielbild – durch echtes Foto ersetzen (z. B. gleicher Name als .webp oder .jpg, dann Endung im HTML anpassen).

### `images/referenzen/handwerk-heizkoerper-entlueften.svg`
- [ ] Zeile 2: TODO: Beispielbild – durch echtes Foto ersetzen (z. B. gleicher Name als .webp oder .jpg, dann Endung im HTML anpassen).

### `images/referenzen/handwerk-leuchtmittel-wechseln.svg`
- [ ] Zeile 2: TODO: Beispielbild – durch echtes Foto ersetzen (z. B. gleicher Name als .webp oder .jpg, dann Endung im HTML anpassen).

### `images/referenzen/handwerk-moebelmontage.svg`
- [ ] Zeile 2: TODO: Beispielbild – durch echtes Foto ersetzen (z. B. gleicher Name als .webp oder .jpg, dann Endung im HTML anpassen).

### `images/referenzen/reinigung-bueroreinigung.svg`
- [ ] Zeile 2: TODO: Beispielbild – durch echtes Foto ersetzen (z. B. gleicher Name als .webp oder .jpg, dann Endung im HTML anpassen).

### `images/referenzen/reinigung-fliesenboden-nachher.svg`
- [ ] Zeile 2: TODO: Beispielbild – durch echtes Foto ersetzen (z. B. gleicher Name als .webp oder .jpg, dann Endung im HTML anpassen).

### `images/referenzen/reinigung-fliesenboden-vorher.svg`
- [ ] Zeile 2: TODO: Beispielbild – durch echtes Foto ersetzen (z. B. gleicher Name als .webp oder .jpg, dann Endung im HTML anpassen).

### `images/referenzen/reinigung-glas-fensterreinigung.svg`
- [ ] Zeile 2: TODO: Beispielbild – durch echtes Foto ersetzen (z. B. gleicher Name als .webp oder .jpg, dann Endung im HTML anpassen).

### `images/referenzen/reinigung-sanitaerreinigung.svg`
- [ ] Zeile 2: TODO: Beispielbild – durch echtes Foto ersetzen (z. B. gleicher Name als .webp oder .jpg, dann Endung im HTML anpassen).

### `images/referenzen/reinigung-treppenhaus.svg`
- [ ] Zeile 2: TODO: Beispielbild – durch echtes Foto ersetzen (z. B. gleicher Name als .webp oder .jpg, dann Endung im HTML anpassen).

### `images/team/geschaeftsfuehrer.svg`
- [ ] Zeile 2: TODO: Beispielbild – durch echtes Foto ersetzen (z. B. gleicher Name als .webp oder .jpg, dann Endung im HTML anpassen).

### `images/team/teamfoto.svg`
- [ ] Zeile 2: TODO: Beispielbild – durch echtes Foto ersetzen (z. B. gleicher Name als .webp oder .jpg, dann Endung im HTML anpassen).

## 5. Sichtbare Platzhalter ohne TODO-Markierung

- Texte in eckigen Klammern `[ … ]`: Impressum, Datenschutz, AGB, Über uns (Gründungsgeschichte), Geschäftsführer-Block, Erreichbarkeit.
- „Rezension A–E“, „Kunde A–E“, „ab TODO €“ und die „Entwurf“-Hinweisboxen auf den Rechtstexten – nach dem Ausfüllen entfernen.
