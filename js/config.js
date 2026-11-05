/* ==========================================================================
   ZENTRALE KONFIGURATION – Arealwerk Plus
   --------------------------------------------------------------------------
   Hier pflegen Sie alle Firmendaten an EINER Stelle. Alle Seiten lesen diese
   Datei beim Laden aus und tragen die Werte ein (Firmierung, Adresse,
   Telefon, E-Mail, WhatsApp, Öffnungszeiten, Formular-Schlüssel, Links).

   Regeln:
   - Der Block zwischen den geschweiften Klammern ist reines JSON:
     Anführungszeichen beibehalten, nach dem letzten Eintrag kein Komma.
   - Leerer Text "" oder ein Wert, der mit "TODO" beginnt, gilt als
     „noch nicht vorhanden“ – zugehörige Buttons/Links werden ausgeblendet.
   - Dinge, die Suchmaschinen OHNE JavaScript lesen (meta robots, robots.txt,
     sitemap.xml, Schema.org-Daten), stehen zusätzlich fest in den Dateien.
     Dafür einmal `python3 tools/apply-config.py` ausführen (siehe README) –
     das Skript überträgt diese Konfiguration in die statischen Dateien.
   ========================================================================== */
window.SITE_CONFIG = {
  "firma": "Arealwerk Plus UG (haftungsbeschränkt)",
  "marke": "AREALWERK PLUS Dienstleistungen",
  "slogan": "Qualität, die überzeugt.",

  "inGruendung": true,
  "_inGruendung": "true = Zusatz „i. G.“ anzeigen, Impressum: „Eintragung beantragt“ + Haftungshinweis. Nach HR-Eintragung auf false setzen.",

  "geschaeftsfuehrer": "TODO [Vorname Nachname]",
  "registergericht": "Amtsgericht Offenbach am Main",
  "hrb": "TODO",
  "ustId": "TODO",

  "strasse": "TODO [Straße Hausnummer]",
  "plz": "63110",
  "ort": "Rodgau",
  "bundesland": "Hessen",
  "region": "Rodgau, Kreis Offenbach und Rhein-Main-Gebiet",
  "einzugsgebiet": ["Rodgau", "Rödermark", "Dietzenbach", "Heusenstamm", "Obertshausen", "Seligenstadt", "Hainburg",
                    "Mühlheim am Main", "Offenbach am Main", "Hanau", "Dreieich", "Langen", "Frankfurt am Main"],

  "telefonAnzeige": "0151 14964367",
  "telefonLink": "+4915114964367",
  "email": "arealwerkplus@icloud.com",
  "whatsappNummer": "4915114964367",
  "_whatsappNummer": "Ländervorwahl ohne + und ohne führende 0. TODO: prüfen, ob die Mobilnummer für WhatsApp genutzt wird.",
  "instagram": "https://www.instagram.com/arealwerke_plus",
  "instagramHandle": "@arealwerke_plus",

  "oeffnungszeiten": [
    ["Mo – Fr", "TODO [Zeiten folgen]"],
    ["Sa", "TODO [Zeiten folgen]"],
    ["So & Feiertage", "TODO [Zeiten folgen]"]
  ],

  "web3formsKey": "TODO_WEB3FORMS_ACCESS_KEY",
  "_web3formsKey": "Kostenlos unter https://web3forms.com anfordern. Solange TODO, öffnet sich beim Absenden das E-Mail-Programm.",
  "googleBewertungLink": "TODO",
  "calendlyLink": "TODO",
  "flyerPfad": "",
  "_flyerPfad": "z. B. \"downloads/flyer.pdf\" – solange leer, sind alle Flyer-Buttons ausgeblendet.",

  "indexierung": false,
  "_indexierung": "false = Testphase (noindex, nofollow). Für den Start auf true setzen und tools/apply-config.py ausführen.",
  "baseUrl": "https://najeeb96-png.github.io/Arealwerke/"
};
