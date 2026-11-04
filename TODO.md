# TODO – offene Platzhalter

Diese Liste wurde automatisch aus allen `TODO`-Markierungen im Code erzeugt (Datei:Zeile).
Tipp: Im Code nach `TODO` suchen findet jede Stelle. Nach dem Ausfüllen die Markierung löschen.

## 1. Wichtigste Punkte vor dem Start

- [ ] **Testphase beenden:** `noindex` aus allen Seiten entfernen (`TEST_MODE`) und in `robots.txt` die Zeile `Disallow: /` löschen
- [ ] **Impressum vervollständigen:** Straße, Geschäftsführer, HRB-Nummer (Amtsgericht Offenbach am Main), USt-IdNr., Verantwortlicher § 18 MStV, Betriebshaftpflicht, ggf. Handwerkskammer → `impressum/index.html`
- [ ] **„i. G.“-Schalter:** solange die HR-Eintragung läuft, bei `<span data-ig hidden>` das `hidden` entfernen (Footer aller Seiten, Impressum, AGB, Datenschutz, Über uns)
- [ ] **Datenschutz & AGB rechtlich prüfen lassen** → `datenschutz/index.html`, `agb/index.html` (u. a. Hinweis OS-Plattform, Widerrufsbelehrung, Laufzeiten)
- [ ] **Web3Forms-Schlüssel eintragen** (`TODO_WEB3FORMS_ACCESS_KEY`, in allen Formularen – Suchen & Ersetzen)
- [ ] **Straße/Hausnummer** in Footer (alle Seiten), JSON-LD (`"streetAddress": "TODO"`), Impressum, Datenschutz, AGB
- [ ] **Erreichbarkeit/Öffnungszeiten** → Kontaktboxen `[Zeiten folgen]` + JSON-LD `openingHoursSpecification`
- [ ] **Richtpreise** bei jeder Leistung (`ab TODO €/…`) und **Paketpreise** (`data-brutto` / `data-netto`), Laufzeiten, Kündigungsfristen
- [ ] **Geschäftsführer-Block:** Name, Foto (`images/team/geschaeftsfuehrer.svg`), 2–3 persönliche Sätze → `index.html`, `ueber-uns/index.html`
- [ ] **Rezension A–E** durch echte Kundenstimmen, **Kunde A–E** durch echte Logos ersetzen (nur mit Einverständnis)
- [ ] **Betriebshaftpflicht bestätigen** – alle „versichert“-Aussagen sind mit TODO markiert (FAQ, Sicherheit, Impressum, AGB)
- [ ] **Handwerk:** Partnerbetriebe für zulassungspflichtige Arbeiten benennen; Abgrenzung mit Handwerkskammer Frankfurt-Rhein-Main klären
- [ ] **SEPA-Lastschrift** und **Kleinunternehmerregelung** klären (MwSt.-Texte)
- [ ] **Google-Bewertungslink** (`TODO-GOOGLE-BEWERTUNGSLINK`), **Calendly-Link** (`TODO-CALENDLY-LINK`), **WhatsApp-Nummer** prüfen
- [ ] **Flyer:** `downloads/flyer.pdf` durch den echten Flyer ersetzen
- [ ] **Bilder:** Beispielbilder in `images/` durch echte Fotos ersetzen; Karten-Marker auf Firmenadresse setzen

## 2. Seiten, Kontakt & Technik

### `404.html`
- [ ] Zeile 5: TODO: Bei eigener Domain base href auf "/" ändern
- [ ] Zeile 10: TODO: Testphase – zum Start noindex entfernen (TEST_MODE)
- [ ] Zeile 12: TODO: Bei eigener Domain BASE-URL in allen canonical/og-Tags ersetzen (siehe README)
- [ ] Zeile 107: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 108: TODO: Straße und Hausnummer eintragen
- [ ] Zeile 120: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 134: TODO: WhatsApp-Nummer prüfen (aktuell = Mobilnummer)

### `danke/index.html`
- [ ] Zeile 8: TODO: Testphase – zum Start noindex entfernen (TEST_MODE)
- [ ] Zeile 10: TODO: Bei eigener Domain BASE-URL in allen canonical/og-Tags ersetzen (siehe README)
- [ ] Zeile 110: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 111: TODO: Straße und Hausnummer eintragen
- [ ] Zeile 123: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 137: TODO: WhatsApp-Nummer prüfen (aktuell = Mobilnummer)

### `favicon.svg`
- [ ] Zeile 2: TODO: Vorläufiges Logo (AR-Monogramm). Durch das Original-Logo ersetzen (gleicher Dateiname).

### `garten/index.html`
- [ ] Zeile 8: TODO: Testphase – zum Start noindex entfernen (TEST_MODE)
- [ ] Zeile 10: TODO: Bei eigener Domain BASE-URL in allen canonical/og-Tags ersetzen (siehe README)
- [ ] Zeile 305: TODO: Richtpreis eintragen
- [ ] Zeile 305: TODO: Richtpreis eintragen
- [ ] Zeile 305: TODO: Richtpreis eintragen
- [ ] Zeile 305: TODO: Richtpreis eintragen
- [ ] Zeile 305: TODO: Richtpreis eintragen
- [ ] Zeile 305: TODO: Richtpreis eintragen
- [ ] Zeile 305: TODO: Richtpreis eintragen
- [ ] Zeile 345: TODO: Beispielbilder durch echte Projektfotos ersetzen
- [ ] Zeile 404: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 405: TODO: Straße und Hausnummer eintragen
- [ ] Zeile 417: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 431: TODO: WhatsApp-Nummer prüfen (aktuell = Mobilnummer)

### `gewerbe/index.html`
- [ ] Zeile 8: TODO: Testphase – zum Start noindex entfernen (TEST_MODE)
- [ ] Zeile 10: TODO: Bei eigener Domain BASE-URL in allen canonical/og-Tags ersetzen (siehe README)
- [ ] Zeile 311: TODO: Prüfen, ob Kleinunternehmerregelung gilt
- [ ] Zeile 322: TODO: Prüfen, ob Kleinunternehmerregelung gilt
- [ ] Zeile 331: TODO: Betriebshaftpflicht bestätigen (Versicherer, Deckungssumme) – bis dahin Formulierung prüfen
- [ ] Zeile 344: TODO: Preise für Paket Basis eintragen: data-brutto (Privat, inkl. MwSt.) und data-netto (Gewerbe, zzgl. MwSt.)
- [ ] Zeile 349: TODO: Laufzeit bestätigen
- [ ] Zeile 357: TODO: Preise für Paket Komfort eintragen: data-brutto (Privat, inkl. MwSt.) und data-netto (Gewerbe, zzgl. MwSt.)
- [ ] Zeile 362: TODO: Laufzeit bestätigen
- [ ] Zeile 370: TODO: Preise für Paket Premium eintragen: data-brutto (Privat, inkl. MwSt.) und data-netto (Gewerbe, zzgl. MwSt.)
- [ ] Zeile 375: TODO: Laufzeit bestätigen
- [ ] Zeile 430: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 431: TODO: Straße und Hausnummer eintragen
- [ ] Zeile 443: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 457: TODO: WhatsApp-Nummer prüfen (aktuell = Mobilnummer)

### `handwerk/index.html`
- [ ] Zeile 8: TODO: Testphase – zum Start noindex entfernen (TEST_MODE)
- [ ] Zeile 10: TODO: Bei eigener Domain BASE-URL in allen canonical/og-Tags ersetzen (siehe README)
- [ ] Zeile 305: TODO: Richtpreis eintragen
- [ ] Zeile 305: TODO: Richtpreis eintragen
- [ ] Zeile 305: TODO: Richtpreis eintragen
- [ ] Zeile 305: TODO: Partnerbetriebe benennen und Formulierung rechtlich prüfen
- [ ] Zeile 305: TODO: Richtpreis eintragen
- [ ] Zeile 305: TODO: Partnerbetriebe benennen
- [ ] Zeile 305: TODO: Richtpreis eintragen
- [ ] Zeile 305: TODO: Partnerbetriebe benennen
- [ ] Zeile 305: TODO: Richtpreis eintragen
- [ ] Zeile 306: TODO: Partnerbetriebe benennen; Abgrenzung zu zulassungspflichtigem Handwerk rechtlich prüfen (Handwerkskammer Frankfurt-Rhein-Main)
- [ ] Zeile 345: TODO: Beispielbilder durch echte Projektfotos ersetzen
- [ ] Zeile 404: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 405: TODO: Straße und Hausnummer eintragen
- [ ] Zeile 417: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 431: TODO: WhatsApp-Nummer prüfen (aktuell = Mobilnummer)

### `index.html`
- [ ] Zeile 8: TODO: Testphase – zum Start noindex entfernen (TEST_MODE)
- [ ] Zeile 10: TODO: Bei eigener Domain BASE-URL in allen canonical/og-Tags ersetzen (siehe README)
- [ ] Zeile 309: TODO: Web3Forms-Zugangsschlüssel eintragen (https://web3forms.com). Solange "TODO…" drinsteht, öffnet sich beim Absenden das E-Mail-Programm (mailto-Fallback).
- [ ] Zeile 310: TODO_WEB3FORMS_ACCESS_KEY
- [ ] Zeile 436: TODO: Preise für Paket Basis eintragen: data-brutto (Privat, inkl. MwSt.) und data-netto (Gewerbe, zzgl. MwSt.)
- [ ] Zeile 441: TODO: Laufzeit bestätigen
- [ ] Zeile 449: TODO: Preise für Paket Komfort eintragen: data-brutto (Privat, inkl. MwSt.) und data-netto (Gewerbe, zzgl. MwSt.)
- [ ] Zeile 454: TODO: Laufzeit bestätigen
- [ ] Zeile 462: TODO: Preise für Paket Premium eintragen: data-brutto (Privat, inkl. MwSt.) und data-netto (Gewerbe, zzgl. MwSt.)
- [ ] Zeile 467: TODO: Laufzeit bestätigen
- [ ] Zeile 483: TODO: Prüfen, ob Kleinunternehmerregelung gilt
- [ ] Zeile 504: TODO: Betriebshaftpflicht bestätigen (Versicherer, Deckungssumme) – bis dahin Formulierung prüfen
- [ ] Zeile 515: TODO: Beispielbilder durch echte Projektfotos ersetzen
- [ ] Zeile 517: TODO: Vorher/Nachher-Beispielbilder durch echte Fotos ersetzen
- [ ] Zeile 540: TODO: Rezension A–E durch echte Kundenstimmen ersetzen (Name, Ort, Sterne, Text) – nur mit Einverständnis der Kunden
- [ ] Zeile 563: TODO: Google-Bewertungslink eintragen (Google Unternehmensprofil → „Bewertungen erhalten“)
- [ ] Zeile 564: TODO-GOOGLE-BEWERTUNGSLINK
- [ ] Zeile 568: TODO: Kunde A–E durch echte Kundenlogos ersetzen (images/kunden/) – nur mit schriftlicher Erlaubnis
- [ ] Zeile 580: TODO: Gründungsgeschichte (Kurzfassung) einfügen
- [ ] Zeile 581: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 584: TODO: Einzugsgebiet bei Bedarf ergänzen
- [ ] Zeile 590: TODO: Foto des Geschäftsführers einsetzen (images/team/geschaeftsfuehrer.svg ersetzen)
- [ ] Zeile 595: TODO: Name des Geschäftsführers eintragen
- [ ] Zeile 597: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 598: TODO: 2–3 persönliche Sätze (Erfahrung, Motivation, was Kunden erwarten dürfen)
- [ ] Zeile 617: TODO: Anfahrtsregelung bestätigen
- [ ] Zeile 617: TODO: Laufzeiten/Kündigungsfristen festlegen
- [ ] Zeile 617: TODO: Versicherung bestätigen (Versicherer, Deckungssumme) – Antwort erst nach Vorliegen der Police veröffentlichen
- [ ] Zeile 617: TODO: SEPA-Lastschrift bestätigen
- [ ] Zeile 617: TODO: Zahlungsziel bestätigen
- [ ] Zeile 617: TODO: Notdienst-Regelung festlegen
- [ ] Zeile 633: TODO: Web3Forms-Zugangsschlüssel eintragen (https://web3forms.com). Solange "TODO…" drinsteht, öffnet sich beim Absenden das E-Mail-Programm (mailto-Fallback).
- [ ] Zeile 634: TODO_WEB3FORMS_ACCESS_KEY
- [ ] Zeile 677: TODO: Datei-Upload benötigt bei Web3Forms ggf. einen kostenpflichtigen Tarif – prüfen oder Feld entfernen
- [ ] Zeile 699: TODO: WhatsApp-Nummer prüfen (aktuell = Mobilnummer)
- [ ] Zeile 705: TODO: Öffnungszeiten / Erreichbarkeit eintragen (auch im JSON-LD openingHoursSpecification)
- [ ] Zeile 713: TODO: Marker auf die genaue Firmenadresse setzen (data-map-src, Parameter marker=lat,lon)
- [ ] Zeile 730: TODO: Web3Forms-Zugangsschlüssel eintragen (https://web3forms.com). Solange "TODO…" drinsteht, öffnet sich beim Absenden das E-Mail-Programm (mailto-Fallback).
- [ ] Zeile 731: TODO_WEB3FORMS_ACCESS_KEY
- [ ] Zeile 811: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 812: TODO: Straße und Hausnummer eintragen
- [ ] Zeile 824: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 838: TODO: WhatsApp-Nummer prüfen (aktuell = Mobilnummer)

### `kontakt/index.html`
- [ ] Zeile 8: TODO: Testphase – zum Start noindex entfernen (TEST_MODE)
- [ ] Zeile 10: TODO: Bei eigener Domain BASE-URL in allen canonical/og-Tags ersetzen (siehe README)
- [ ] Zeile 305: TODO: Web3Forms-Zugangsschlüssel eintragen (https://web3forms.com). Solange "TODO…" drinsteht, öffnet sich beim Absenden das E-Mail-Programm (mailto-Fallback).
- [ ] Zeile 306: TODO_WEB3FORMS_ACCESS_KEY
- [ ] Zeile 349: TODO: Datei-Upload benötigt bei Web3Forms ggf. einen kostenpflichtigen Tarif – prüfen oder Feld entfernen
- [ ] Zeile 371: TODO: WhatsApp-Nummer prüfen (aktuell = Mobilnummer)
- [ ] Zeile 377: TODO: Öffnungszeiten / Erreichbarkeit eintragen (auch im JSON-LD openingHoursSpecification)
- [ ] Zeile 385: TODO: Marker auf die genaue Firmenadresse setzen (data-map-src, Parameter marker=lat,lon)
- [ ] Zeile 403: TODO: Web3Forms-Zugangsschlüssel eintragen (https://web3forms.com). Solange "TODO…" drinsteht, öffnet sich beim Absenden das E-Mail-Programm (mailto-Fallback).
- [ ] Zeile 404: TODO_WEB3FORMS_ACCESS_KEY
- [ ] Zeile 452: TODO: Calendly-Link eintragen (oder Button entfernen)
- [ ] Zeile 453: TODO-CALENDLY-LINK
- [ ] Zeile 460: TODO: Web3Forms-Zugangsschlüssel eintragen (https://web3forms.com). Solange "TODO…" drinsteht, öffnet sich beim Absenden das E-Mail-Programm (mailto-Fallback).
- [ ] Zeile 461: TODO_WEB3FORMS_ACCESS_KEY
- [ ] Zeile 498: TODO: Anfahrtsregelung bestätigen
- [ ] Zeile 498: TODO: Laufzeiten/Kündigungsfristen festlegen
- [ ] Zeile 498: TODO: Versicherung bestätigen (Versicherer, Deckungssumme) – Antwort erst nach Vorliegen der Police veröffentlichen
- [ ] Zeile 498: TODO: SEPA-Lastschrift bestätigen
- [ ] Zeile 498: TODO: Zahlungsziel bestätigen
- [ ] Zeile 498: TODO: Notdienst-Regelung festlegen
- [ ] Zeile 541: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 542: TODO: Straße und Hausnummer eintragen
- [ ] Zeile 554: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 568: TODO: WhatsApp-Nummer prüfen (aktuell = Mobilnummer)

### `referenzen/index.html`
- [ ] Zeile 8: TODO: Testphase – zum Start noindex entfernen (TEST_MODE)
- [ ] Zeile 10: TODO: Bei eigener Domain BASE-URL in allen canonical/og-Tags ersetzen (siehe README)
- [ ] Zeile 303: TODO: Beispielbilder durch echte Projektfotos ersetzen
- [ ] Zeile 314: TODO: Vorher/Nachher-Beispielbilder durch echte Fotos ersetzen
- [ ] Zeile 365: TODO: Rezension A–E durch echte Kundenstimmen ersetzen (Name, Ort, Sterne, Text) – nur mit Einverständnis der Kunden
- [ ] Zeile 388: TODO: Google-Bewertungslink eintragen (Google Unternehmensprofil → „Bewertungen erhalten“)
- [ ] Zeile 389: TODO-GOOGLE-BEWERTUNGSLINK
- [ ] Zeile 393: TODO: Kunde A–E durch echte Kundenlogos ersetzen (images/kunden/) – nur mit schriftlicher Erlaubnis
- [ ] Zeile 450: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 451: TODO: Straße und Hausnummer eintragen
- [ ] Zeile 463: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 477: TODO: WhatsApp-Nummer prüfen (aktuell = Mobilnummer)

### `reinigung/index.html`
- [ ] Zeile 8: TODO: Testphase – zum Start noindex entfernen (TEST_MODE)
- [ ] Zeile 10: TODO: Bei eigener Domain BASE-URL in allen canonical/og-Tags ersetzen (siehe README)
- [ ] Zeile 305: TODO: Richtpreis eintragen
- [ ] Zeile 305: TODO: Richtpreis eintragen
- [ ] Zeile 305: TODO: Richtpreis eintragen
- [ ] Zeile 305: TODO: Richtpreis eintragen
- [ ] Zeile 305: TODO: Richtpreis eintragen
- [ ] Zeile 305: TODO: Richtpreis eintragen
- [ ] Zeile 305: TODO: Richtpreis eintragen
- [ ] Zeile 345: TODO: Beispielbilder durch echte Projektfotos ersetzen
- [ ] Zeile 404: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 405: TODO: Straße und Hausnummer eintragen
- [ ] Zeile 417: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 431: TODO: WhatsApp-Nummer prüfen (aktuell = Mobilnummer)

### `robots.txt`
- [ ] Zeile 2: TODO: Bei eigener Domain die Sitemap-URL anpassen
- [ ] Zeile 3: TODO: Testphase – solange die Seite nicht öffentlich beworben wird, ist die Indexierung gesperrt. Zum Start: 'Disallow: /' entfernen.

### `servicepakete/index.html`
- [ ] Zeile 8: TODO: Testphase – zum Start noindex entfernen (TEST_MODE)
- [ ] Zeile 10: TODO: Bei eigener Domain BASE-URL in allen canonical/og-Tags ersetzen (siehe README)
- [ ] Zeile 329: TODO: Vertragskonditionen (Intervalle, Laufzeiten, Kündigungsfristen) festlegen und eintragen
- [ ] Zeile 335: TODO: Verlängerungsregel rechtlich prüfen lassen
- [ ] Zeile 353: TODO: Preise für Paket Basis eintragen: data-brutto (Privat, inkl. MwSt.) und data-netto (Gewerbe, zzgl. MwSt.)
- [ ] Zeile 358: TODO: Laufzeit bestätigen
- [ ] Zeile 366: TODO: Preise für Paket Komfort eintragen: data-brutto (Privat, inkl. MwSt.) und data-netto (Gewerbe, zzgl. MwSt.)
- [ ] Zeile 371: TODO: Laufzeit bestätigen
- [ ] Zeile 379: TODO: Preise für Paket Premium eintragen: data-brutto (Privat, inkl. MwSt.) und data-netto (Gewerbe, zzgl. MwSt.)
- [ ] Zeile 384: TODO: Laufzeit bestätigen
- [ ] Zeile 390: TODO: Preise, Laufzeiten und Kündigungsfristen in der Vergleichstabelle eintragen
- [ ] Zeile 403: TODO: SEPA-Lastschriftverfahren bestätigen
- [ ] Zeile 406: TODO: Prüfen, ob Kleinunternehmerregelung gilt
- [ ] Zeile 433: TODO: Prüfen, ob Kleinunternehmerregelung gilt
- [ ] Zeile 460: TODO: Betriebshaftpflicht bestätigen (Versicherer, Deckungssumme) – bis dahin Formulierung prüfen
- [ ] Zeile 476: TODO: Web3Forms-Zugangsschlüssel eintragen (https://web3forms.com). Solange "TODO…" drinsteht, öffnet sich beim Absenden das E-Mail-Programm (mailto-Fallback).
- [ ] Zeile 477: TODO_WEB3FORMS_ACCESS_KEY
- [ ] Zeile 570: TODO: WhatsApp-Nummer prüfen (aktuell = Mobilnummer)
- [ ] Zeile 576: TODO: Öffnungszeiten / Erreichbarkeit eintragen (auch im JSON-LD openingHoursSpecification)
- [ ] Zeile 629: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 630: TODO: Straße und Hausnummer eintragen
- [ ] Zeile 642: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 656: TODO: WhatsApp-Nummer prüfen (aktuell = Mobilnummer)

### `sitemap.xml`
- [ ] Zeile 2: TODO: Bei eigener Domain alle URLs anpassen

### `sitemap/index.html`
- [ ] Zeile 8: TODO: Testphase – zum Start noindex entfernen (TEST_MODE)
- [ ] Zeile 10: TODO: Bei eigener Domain BASE-URL in allen canonical/og-Tags ersetzen (siehe README)
- [ ] Zeile 108: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 109: TODO: Straße und Hausnummer eintragen
- [ ] Zeile 121: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 135: TODO: WhatsApp-Nummer prüfen (aktuell = Mobilnummer)

### `ueber-uns/index.html`
- [ ] Zeile 8: TODO: Testphase – zum Start noindex entfernen (TEST_MODE)
- [ ] Zeile 10: TODO: Bei eigener Domain BASE-URL in allen canonical/og-Tags ersetzen (siehe README)
- [ ] Zeile 293: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 302: TODO: Gründungsgeschichte – eigene Worte, Gründungsjahr, Motivation, Erfahrung des Geschäftsführers
- [ ] Zeile 309: TODO: Foto des Geschäftsführers einsetzen (images/team/geschaeftsfuehrer.svg ersetzen)
- [ ] Zeile 314: TODO: Name des Geschäftsführers eintragen
- [ ] Zeile 316: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 317: TODO: 2–3 persönliche Sätze (Erfahrung, Motivation, was Kunden erwarten dürfen)
- [ ] Zeile 337: TODO: Teamfoto einsetzen (images/team/teamfoto.svg ersetzen)
- [ ] Zeile 359: TODO: Betriebshaftpflicht bestätigen (Versicherer, Deckungssumme) – bis dahin Formulierung prüfen
- [ ] Zeile 366: TODO: Einzugsgebiet bei Bedarf ergänzen
- [ ] Zeile 416: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 417: TODO: Straße und Hausnummer eintragen
- [ ] Zeile 429: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 443: TODO: WhatsApp-Nummer prüfen (aktuell = Mobilnummer)

## 3. Rechtstexte

### `agb/index.html`
- [ ] Zeile 8: TODO: Testphase – zum Start noindex entfernen (TEST_MODE)
- [ ] Zeile 10: TODO: Bei eigener Domain BASE-URL in allen canonical/og-Tags ersetzen (siehe README)
- [ ] Zeile 67: TODO: AGB vollständig prüfen lassen und Datum eintragen
- [ ] Zeile 70: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 77: TODO: Bindefrist festlegen
- [ ] Zeile 81: TODO: rechtlich prüfen
- [ ] Zeile 85: TODO: bei Kleinunternehmerregelung anpassen
- [ ] Zeile 86: TODO: Zahlungsziel, SEPA und Abrechnungsmodus festlegen
- [ ] Zeile 91: TODO: Ausfallregelung festlegen
- [ ] Zeile 95: TODO: Laufzeiten festlegen
- [ ] Zeile 96: TODO: Kündigungsfristen/Verlängerung rechtlich prüfen
- [ ] Zeile 98: TODO: ggf. Preisanpassungsklausel ergänzen
- [ ] Zeile 105: TODO: Versicherung bestätigen, Deckungssumme ergänzen
- [ ] Zeile 110: TODO: Vollständige Widerrufsbelehrung + Muster-Widerrufsformular erstellen lassen
- [ ] Zeile 160: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 161: TODO: Straße und Hausnummer eintragen
- [ ] Zeile 173: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 187: TODO: WhatsApp-Nummer prüfen (aktuell = Mobilnummer)

### `datenschutz/index.html`
- [ ] Zeile 8: TODO: Testphase – zum Start noindex entfernen (TEST_MODE)
- [ ] Zeile 10: TODO: Bei eigener Domain BASE-URL in allen canonical/og-Tags ersetzen (siehe README)
- [ ] Zeile 67: TODO: Datum eintragen
- [ ] Zeile 71: TODO: Straße/Hausnummer und Geschäftsführer eintragen
- [ ] Zeile 73: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 80: TODO: prüfen
- [ ] Zeile 92: TODO: Zertifizierungsstatus aktuell prüfen; bei Domainwechsel/anderem Hoster Abschnitt anpassen
- [ ] Zeile 95: TODO: Anbieterangaben (Firmenname, Anschrift, Sitz) von Web3Forms prüfen und eintragen
- [ ] Zeile 96: TODO: Auftragsverarbeitungsvertrag (AVV) mit Web3Forms prüfen
- [ ] Zeile 100: TODO: bei anderem E-Mail-Anbieter anpassen
- [ ] Zeile 112: TODO: Abschnitt anpassen oder entfernen, je nachdem ob Calendly genutzt wird
- [ ] Zeile 131: TODO: Angaben prüfen
- [ ] Zeile 179: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 180: TODO: Straße und Hausnummer eintragen
- [ ] Zeile 192: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 206: TODO: WhatsApp-Nummer prüfen (aktuell = Mobilnummer)

### `impressum/index.html`
- [ ] Zeile 8: TODO: Testphase – zum Start noindex entfernen (TEST_MODE)
- [ ] Zeile 10: TODO: Bei eigener Domain BASE-URL in allen canonical/og-Tags ersetzen (siehe README)
- [ ] Zeile 68: TODO: Straße/Hausnummer und Geschäftsführer eintragen
- [ ] Zeile 70: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 82: TODO: HRB-Nummer eintragen; solange die Eintragung läuft, Zusatz „i. G.“ im Firmennamen einblenden
- [ ] Zeile 88: TODO: USt-IdNr. eintragen (oder Abschnitt entfernen, falls noch nicht vergeben)
- [ ] Zeile 92: TODO: Verantwortliche Person (i. d. R. der Geschäftsführer) eintragen
- [ ] Zeile 96: TODO: Nur ausfüllen, falls eine Eintragung bei der Handwerkskammer erfolgt; sonst Abschnitt entfernen
- [ ] Zeile 101: TODO: Versicherungsangaben eintragen, sobald die Police vorliegt
- [ ] Zeile 106: TODO: Die OS-Plattform wurde zum 20.07.2025 eingestellt – Absatz rechtlich prüfen und ggf. streichen
- [ ] Zeile 119: TODO: Bildnachweise ergänzen
- [ ] Zeile 161: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 162: TODO: Straße und Hausnummer eintragen
- [ ] Zeile 174: TODO: „i. G.“ einblenden (hidden entfernen), solange die HR-Eintragung läuft; danach Span löschen
- [ ] Zeile 188: TODO: WhatsApp-Nummer prüfen (aktuell = Mobilnummer)

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
