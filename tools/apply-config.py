#!/usr/bin/env python3
"""
Überträgt die zentrale Konfiguration (js/config.js) in die statischen Teile der
Webseite, die Suchmaschinen ohne JavaScript lesen:

  - <meta name="robots">        (indexierung: true/false)
  - robots.txt, sitemap.xml      (indexierung, baseUrl)
  - Schema.org-Daten (JSON-LD)   (Firmierung, i. G., Adresse, Telefon, E-Mail)
  - Firmierung/„i. G.“, Adresse, Telefon, E-Mail als Fallback-Text im HTML

Aufruf im Hauptordner der Webseite:   python3 tools/apply-config.py
Benötigt nur Python 3 – keine weiteren Pakete.
"""
import json, os, re, sys, datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
cfg_src = open(os.path.join(ROOT, "js", "config.js"), encoding="utf-8").read()
CFG = json.loads(cfg_src[cfg_src.index("{"): cfg_src.rindex("}") + 1])

def is_set(v): return isinstance(v, str) and v.strip() != "" and not v.startswith("TODO")
index = bool(CFG.get("indexierung"))
base = CFG["baseUrl"].rstrip("/") + "/"
firma_txt = CFG["firma"] + (" i. G." if CFG.get("inGruendung") else "")
changed = 0

for dp, dn, fn in os.walk(ROOT):
    dn[:] = [d for d in dn if not d.startswith(".") and d not in ("tools", "fonts", "images")]
    for f in fn:
        if not f.endswith(".html"): continue
        path = os.path.join(dp, f)
        s = open(path, encoding="utf-8").read(); o = s
        # 1) meta robots: data-cfg-robots enthält den Wert für den Live-Betrieb
        def rob(m):
            live = m.group(2)
            return f'<meta name="robots" content="{live if index else "noindex, nofollow"}" data-cfg-robots="{live}">'
        s = re.sub(r'<meta name="robots" content="([^"]*)" data-cfg-robots="([^"]*)">', rob, s)
        # 2) JSON-LD Firma
        def ld(m):
            try: data = json.loads(m.group(1))
            except Exception: return m.group(0)
            data["name"] = firma_txt; data["legalName"] = CFG["firma"]; data["telephone"] = CFG["telefonLink"]; data["email"] = CFG["email"]
            data["sameAs"] = [CFG["instagram"]]; data["url"] = base
            data["address"] = {"@type": "PostalAddress", "streetAddress": CFG["strasse"] if is_set(CFG["strasse"]) else "TODO",
                               "postalCode": CFG["plz"], "addressLocality": CFG["ort"], "addressRegion": CFG["bundesland"], "addressCountry": "DE"}
            data["areaServed"] = [{"@type": "City", "name": o} for o in CFG["einzugsgebiet"]]
            if all(is_set(t) for _, t in CFG["oeffnungszeiten"]): data["openingHours"] = [f"{d}: {t}" for d, t in CFG["oeffnungszeiten"]]
            else: data.pop("openingHours", None)
            return '<script type="application/ld+json" data-ld="firma">\n' + json.dumps(data, ensure_ascii=False, indent=2) + "\n</script>"
        s = re.sub(r'<script type="application/ld\+json" data-ld="firma">\s*(\{.*?\})\s*</script>', ld, s, flags=re.S)
        # 3) i. G.-Schalter im statischen HTML
        if CFG.get("inGruendung"):
            s = re.sub(r'<span data-ig hidden>', '<span data-ig>', s)
            s = re.sub(r'<div data-ig-show hidden>', '<div data-ig-show>', s); s = re.sub(r'<div data-ig-hide>', '<div data-ig-hide hidden>', s)
        else:
            s = re.sub(r'<span data-ig>', '<span data-ig hidden>', s)
            s = re.sub(r'<div data-ig-show>', '<div data-ig-show hidden>', s); s = re.sub(r'<div data-ig-hide hidden>', '<div data-ig-hide>', s)
        # 4) Fallback-Texte
        text = {"firmaKurz": CFG["firma"], "telefonAnzeige": CFG["telefonAnzeige"], "email": CFG["email"], "strasse": CFG["strasse"].replace("TODO ", ""),
                "plzOrt": f'{CFG["plz"]} {CFG["ort"]}', "bundesland": CFG["bundesland"], "region": CFG["region"], "instagramHandle": CFG["instagramHandle"],
                "geschaeftsfuehrer": CFG["geschaeftsfuehrer"].replace("TODO ", ""), "registergericht": CFG["registergericht"], "hrb": CFG["hrb"], "ustId": CFG["ustId"]}
        for k, v in text.items():
            s = re.sub(rf'(<(?:span|strong|h3) data-cfg="{k}"[^>]*>)[^<]*(</)', lambda m: m.group(1) + v + m.group(2), s)
        s = re.sub(r'href="tel:[^"]*" data-cfg-href="tel"', f'href="tel:{CFG["telefonLink"]}" data-cfg-href="tel"', s)
        s = re.sub(r'href="mailto:[^"]*" data-cfg-href="mail"', f'href="mailto:{CFG["email"]}" data-cfg-href="mail"', s)
        s = re.sub(r'href="https://wa\.me/[^"]*" data-cfg-href="whatsapp"', f'href="https://wa.me/{re.sub(r"[^0-9]", "", CFG["whatsappNummer"])}" data-cfg-href="whatsapp"', s)
        if s != o:
            open(path, "w", encoding="utf-8").write(s); changed += 1

# robots.txt + sitemap.xml
pages = ["", "reinigung/", "garten/", "handwerk/", "servicepakete/", "gewerbe/", "referenzen/", "ueber-uns/", "kontakt/", "impressum/", "datenschutz/", "agb/", "sitemap/"]
open(os.path.join(ROOT, "robots.txt"), "w").write(
    f"# robots.txt – {CFG['firma']}\n# Erzeugt von tools/apply-config.py aus js/config.js (indexierung = {str(index).lower()}).\n"
    + ("User-agent: *\nDisallow: /\n\n" if not index else "User-agent: *\nAllow: /\nDisallow: /danke/\n\n") + f"Sitemap: {base}sitemap.xml\n")
today = datetime.date.today().isoformat()
open(os.path.join(ROOT, "sitemap.xml"), "w").write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    + "".join(f"  <url><loc>{base}{u}</loc><lastmod>{today}</lastmod></url>\n" for u in pages) + "</urlset>\n")
print(f"Konfiguration übertragen: {changed} HTML-Dateien aktualisiert, robots.txt und sitemap.xml geschrieben. Indexierung: {'AN' if index else 'AUS (Testphase)'}, i. G.: {'an' if CFG.get('inGruendung') else 'aus'}.")
