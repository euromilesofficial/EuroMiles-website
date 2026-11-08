#!/usr/bin/env python3
"""Static generator for EuroMiles subpages.

Reads the header, mega menu, footer and dialogs straight from index.html so the
subpages always share the homepage chrome, then renders each page defined in
tools/content/*.py into <section>/<slug>/index.html.

Usage: python3 tools/build_pages.py
"""
import html as H
import importlib
import json
import re
import sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / 'tools'))
sys.path.insert(0, str(ROOT / 'tools' / 'content'))

SITE = 'https://www.euromiles.in'
BRAND = 'EuroMiles'
REVIEWED = 'November 2026'
PHONE = '+91 98765 43210'

SECTIONS = {
    'study-in-italy': ('Study in Italy', 'The complete guide to studying in Italy as an Indian student: fees, scholarships, admissions, visas, living costs and life after graduation.'),
    'universities': ('Universities', 'Explore Italy\u2019s best public universities, polytechnics and medical schools, compared city by city for Indian students.'),
    'programs': ('Programs', 'Bachelor\u2019s, Master\u2019s, medicine and PhD programmes in Italy, with English-taught options, fees and entry requirements.'),
    'scholarships': ('Scholarships', 'Regional DSU tuition waivers, living stipends and merit awards in Italy, and how Indian families can apply without costly mistakes.'),
    'services-visa': ('Services & Visa', 'End-to-end admission, document legalisation, student visa and post-arrival services for Indian students going to Italy.'),
    'success-stories': ('Success Stories', 'Verified admits, scholarships and visa approvals for Indian students placed in Italy, with parent and student perspectives.'),
    'about': ('About EuroMiles', 'EuroMiles is an Italy-only education consultancy for Indian students and parents: who we are, how we work and what we charge.'),
}

EXTRA = {  # menu CTA anchors that are not regular registry pages
    'study-assessment': '/free-assessment/',
    'visa-consultation': '/free-assessment/#visa',
}

REG = json.load(open(ROOT / 'tools' / 'registry.json', encoding='utf8'))
BY_SLUG = {r['slug']: r for r in REG}


def url(slug):
    if slug in EXTRA:
        return EXTRA[slug]
    if slug in SECTIONS:
        return f'/{slug}/'
    if slug in ('free-assessment',):
        return f'/{slug}/'
    r = BY_SLUG[slug]
    return f"/{r['section']}/{slug}/"


def label(slug):
    return BY_SLUG[slug]['label'] if slug in BY_SLUG else SECTIONS[slug][0]


def esc(s):
    return H.escape(s, quote=True)


def inline(s):
    """Resolve [[slug|text]] internal links inside content strings."""
    def rep(m):
        slug, _, text = m.group(1).partition('|')
        slug = slug.lstrip('@')
        if slug not in BY_SLUG and slug not in SECTIONS and slug not in EXTRA and slug != 'free-assessment':
            raise SystemExit(f'Unknown internal link: {slug}')
        return f'<a href="{url(slug)}">{text or label(slug)}</a>'
    return re.sub(r'\[\[([^\]]+)\]\]', rep, s)


def strip_tags(s):
    return H.unescape(re.sub(r'<[^>]+>', '', s))


# ───────────────────────── chrome extracted from the homepage ─────────────────────────
SRC = (ROOT / 'index.html').read_text(encoding='utf8')


def absolutise(chunk):
    chunk = re.sub(r'(href|src|poster)="(?!https?:|/|#|tel:|mailto:|data:|javascript:)([^"]+)"', r'\1="/\2"', chunk)
    chunk = re.sub(r'href="#([^"]+)"', lambda m: f'href="{url(m.group(1))}"' if (m.group(1) in BY_SLUG or m.group(1) in EXTRA) else f'href="/#{m.group(1)}"', chunk)
    return chunk


def chrome():
    b = SRC.index('<body>') + len('<body>')
    top = SRC[b:SRC.index('<main class="homepage-hero"')]
    foot = SRC[SRC.index('<footer class="section-ten"'):SRC.index('</body>')]
    return absolutise(top), absolutise(foot)


CHROME_TOP, CHROME_FOOT = chrome()

HEAD_LINKS = '''<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&family=Manrope:wght@500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,500;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Satisfy&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/site-chrome.css">
<link rel="stylesheet" href="/assets/css/mega-menu.css">
<link rel="stylesheet" href="/assets/css/top-bar.css">
<link rel="stylesheet" href="/assets/css/navigation.css">
<link rel="stylesheet" href="/assets/css/section-ten.css">
<link rel="stylesheet" href="/assets/css/subpage.css">
<link rel="icon" href="/assets/images/section-10/footer-crest.webp" type="image/webp">'''

SCRIPTS = '''<script src="/assets/js/main.js" defer></script>
<script src="/assets/js/consultation-prompt.js" defer></script>
<script src="/assets/js/section-ten.js" defer></script>
<script src="/assets/js/subpage.js" defer></script>'''


# ───────────────────────── block renderers ─────────────────────────
def slugify(t):
    return re.sub(r'[^a-z0-9]+', '-', strip_tags(t).lower()).strip('-')


def render_block(b):
    if isinstance(b, str):
        if b.startswith('### '):
            return f'<h3>{inline(b[4:])}</h3>'
        return f'<p>{inline(b)}</p>'
    kind = b[0]
    if kind in ('ul', 'cross'):
        cls = 'sp-list sp-cross' if kind == 'cross' else 'sp-list'
        return f'<ul class="{cls}">' + ''.join(f'<li>{inline(i)}</li>' for i in b[1]) + '</ul>'
    if kind == 'steps':
        return '<ol class="sp-steps">' + ''.join(f'<li><strong>{inline(t)}</strong><span>{inline(d)}</span></li>' for t, d in b[1]) + '</ol>'
    if kind == 'table':
        cap, head, rows = b[1], b[2], b[3]
        th = ''.join(f'<th scope="col">{inline(h)}</th>' for h in head)
        body = ''
        for r in rows:
            body += '<tr>' + f'<th scope="row">{inline(r[0])}</th>' + ''.join(f'<td>{inline(c)}</td>' for c in r[1:]) + '</tr>'
        return f'<div class="sp-table-wrap" role="region" aria-label="{esc(cap)}" tabindex="0"><table class="sp-table"><caption>{esc(cap)}</caption><thead><tr>{th}</tr></thead><tbody>{body}</tbody></table></div>'
    if kind in ('note', 'warn'):
        cls = 'sp-note sp-warn' if kind == 'warn' else 'sp-note'
        return f'<aside class="{cls}"><strong>{esc(b[1])}</strong><p>{inline(b[2])}</p></aside>'
    if kind == 'cards':
        return '<div class="sp-cards">' + ''.join(f'<article class="sp-card"><h3>{inline(t)}</h3><p>{inline(d)}</p></article>' for t, d in b[1]) + '</div>'
    if kind == 'stats':
        return '<div class="sp-stats">' + ''.join(f'<div class="sp-stat"><b>{n}</b><span>{l}</span></div>' for n, l in b[1]) + '</div>'
    if kind == 'quote':
        return f'<blockquote class="sp-quote"><p>{inline(b[1])}</p><cite>{esc(b[2])}</cite></blockquote>'
    if kind == 'raw':
        return b[1]
    raise ValueError(kind)


def render_sections(sections):
    out, toc = [], []
    for i, s in enumerate(sections):
        h, blocks = s[0], s[1:]
        sid = slugify(h) or f's{i}'
        toc.append((sid, strip_tags(h)))
        out.append(f'<section class="sp-sec" id="{sid}" aria-labelledby="{sid}-h"><h2 id="{sid}-h">{inline(h)}</h2>' + ''.join(render_block(b) for b in blocks) + '</section>')
    return ''.join(out), toc


def render_faq(faq, title='Questions Indian families ask us'):
    if not faq:
        return '', ''
    items = ''.join(f'<details><summary>{inline(q)}</summary><div class="sp-faq-a"><p>{inline(a)}</p></div></details>' for q, a in faq)
    block = (f'<section class="sp-faq-band" id="faqs" aria-labelledby="faq-h"><div class="sp-wrap"><div class="sp-faq-intro"><h2 id="faq-h">{esc(title)}</h2>'
             f'<p>Straight answers from our Italy-only counsellors. Still unsure? <a href="/free-assessment/" style="color:#805600;font-weight:700">Get a free profile assessment</a>.</p></div>'
             f'<div class="sp-faq">{items}</div></div></section>')
    ld = {'@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': strip_tags(inline(q)), 'acceptedAnswer': {'@type': 'Answer', 'text': strip_tags(inline(a))}} for q, a in faq]}
    return block, ld


def link_card(slug, kicker=None):
    r = BY_SLUG.get(slug)
    if r:
        return (f'<li><a class="sp-link-card" href="{url(slug)}"><small>{esc(kicker or r["group"])}</small>'
                f'<strong>{esc(r["label"])}</strong><span>{esc(r["sub"])}</span><em>Read guide</em></a></li>')
    lbl, desc = SECTIONS[slug]
    return f'<li><a class="sp-link-card" href="/{slug}/"><small>Section</small><strong>{esc(lbl)}</strong><span>{esc(desc[:110])}\u2026</span><em>Explore</em></a></li>'


ICON_ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'


def crumbs(items):
    lis = ''
    for i, (name, href) in enumerate(items):
        if i == len(items) - 1:
            lis += f'<li aria-current="page">{esc(name)}</li>'
        else:
            lis += f'<li><a href="{href}">{esc(name)}</a></li>'
    return f'<nav class="sp-crumbs" aria-label="Breadcrumb"><ol>{lis}</ol></nav>'


def document(*, path, seo_title, desc, main, jsonld, noindex=False, og_type='article'):
    canonical = SITE + path
    title = esc(seo_title)
    d = esc(desc)
    graph = json.dumps({'@context': 'https://schema.org', '@graph': jsonld}, ensure_ascii=False)
    robots = '<meta name="robots" content="noindex,follow">' if noindex else '<meta name="robots" content="index,follow,max-image-preview:large">'
    return f'''<!DOCTYPE html>
<html lang="en-IN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<meta name="description" content="{d}">
{robots}
<link rel="canonical" href="{canonical}">
<meta name="theme-color" content="#0b2046">
<meta property="og:site_name" content="{BRAND}">
<meta property="og:locale" content="en_IN">
<meta property="og:type" content="{og_type}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{d}">
<meta property="og:url" content="{canonical}">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="{title}">
<meta name="twitter:description" content="{d}">
{HEAD_LINKS}
<script type="application/ld+json">{graph}</script>
</head>
<body>
<a class="sp-skip" href="#main">Skip to main content</a>
{CHROME_TOP}
<main class="sp" id="main">
{main}
</main>
{CHROME_FOOT}
{SCRIPTS}
</body>
</html>
'''


ORG_LD = {'@type': 'EducationalOrganization', '@id': SITE + '/#organization', 'name': BRAND, 'url': SITE + '/', 'description': 'Italy-only international education consultancy for Indian students and parents.', 'telephone': PHONE, 'email': 'info@euromiles.in', 'areaServed': {'@type': 'Country', 'name': 'India'}, 'knowsAbout': ['Study in Italy', 'Italian student visa', 'DSU scholarship', 'CIMEA', 'Universitaly']}


def breadcrumb_ld(items):
    return {'@type': 'BreadcrumbList', 'itemListElement': [{'@type': 'ListItem', 'position': i + 1, 'name': n, 'item': SITE + h} for i, (n, h) in enumerate(items)]}


def hero(h1, lede, eyebrow, crumb_items, facts=None, actions=True):
    fx = ''
    if facts:
        fx = '<aside class="sp-facts" aria-label="At a glance"><h2>At a glance</h2><dl>' + ''.join(f'<div><dt>{esc(k)}</dt><dd>{inline(v)}</dd></div>' for k, v in facts) + '</dl></aside>'
    acts = ''
    if actions:
        acts = (f'<div class="sp-actions"><button class="sp-btn sp-btn-gold" type="button" data-open-consultation>Talk to a Counsellor {ICON_ARROW}</button>'
                f'<a class="sp-btn sp-btn-ghost" href="/free-assessment/">Free Profile Assessment</a></div>')
    solo = '' if facts else ' sp-solo'
    return (f'<section class="sp-hero"><div class="sp-wrap"><div class="sp-hero-grid{solo}"><div>{crumbs(crumb_items)}'
            f'<p class="sp-eyebrow">{esc(eyebrow)}</p><h1>{h1}</h1><p class="sp-lede">{inline(lede)}</p>{acts}</div>{fx}</div></div></section>')


def cta_band(title, text, primary='Book a Free Counselling Call', secondary=('Check Your Eligibility', '/free-assessment/')):
    return (f'<section class="sp-cta"><div class="sp-wrap"><div class="sp-cta-box"><div><h2>{inline(title)}</h2><p>{inline(text)}</p></div>'
            f'<div class="sp-actions"><button class="sp-btn sp-btn-gold" type="button" data-open-consultation>{esc(primary)} {ICON_ARROW}</button>'
            f'<a class="sp-btn sp-btn-ghost" href="{secondary[1]}">{esc(secondary[0])}</a></div></div></div></section>')


def side(toc):
    t = ''
    if len(toc) > 1:
        t = '<nav class="sp-toc" aria-label="On this page"><h2>On this page</h2><ol>' + ''.join(f'<li><a href="#{i}">{esc(n)}</a></li>' for i, n in toc) + '</ol></nav>'
    c = (f'<div class="sp-side-cta"><h2>Get your free Italy roadmap</h2><p>Share your marks and budget. A senior counsellor will tell you, honestly, which Italian universities and scholarships fit.</p>'
         f'<button class="sp-btn sp-btn-gold" type="button" data-open-consultation>Book Free Consultation</button>'
         f'<small>Or call <a href="tel:+919876543210">{PHONE}</a></small></div>')
    return f'<aside class="sp-aside">{t}{c}</aside>'


def related_default(slug, n=6):
    r = BY_SLUG[slug]
    same = [x['slug'] for x in REG if x['section'] == r['section'] and x['group'] == r['group'] and x['slug'] != slug]
    rest = [x['slug'] for x in REG if x['section'] == r['section'] and x['slug'] not in same and x['slug'] != slug]
    return (same + rest)[:n]


def build_page(slug, p):
    r = BY_SLUG[slug]
    sec_name = SECTIONS[r['section']][0]
    items = [('Home', '/'), (sec_name, f"/{r['section']}/"), (r['label'], url(slug))]
    body, toc = render_sections(p['sections'])
    faq_html, faq_ld = render_faq(p.get('faq'))
    rel = p.get('related') or related_default(slug)
    rel_html = ('<section class="sp-related" aria-labelledby="rel-h"><div class="sp-wrap"><div class="sp-related-head"><h2 id="rel-h">Keep exploring</h2>'
                f'<a href="/{r["section"]}/">All {esc(sec_name)} guides \u2192</a></div><ul class="sp-grid">' + ''.join(link_card(s) for s in rel) + '</ul></div></section>')
    cta = p.get('cta') or ('Ready to turn this into an admit letter?', 'Our Italy-only counsellors review your marks, budget and goals, and give you a clear, honest plan, free of charge and with no obligation.')
    main = (hero(p['h1'], p['lede'], r['group'], items, p.get('facts')) +
            f'<div class="sp-body"><div class="sp-wrap"><div class="sp-layout"><article class="sp-article"><p class="sp-updated">Reviewed {REVIEWED} by the EuroMiles Italy desk</p>{body}</article>{side(toc)}</div></div></div>' +
            faq_html + rel_html + cta_band(*cta))
    ld = [ORG_LD, breadcrumb_ld(items),
          {'@type': 'Article', 'headline': strip_tags(p['h1']), 'description': p['desc'], 'inLanguage': 'en-IN', 'dateModified': date(2026, 11, 8).isoformat(), 'author': {'@id': SITE + '/#organization'}, 'publisher': {'@id': SITE + '/#organization'}, 'mainEntityOfPage': SITE + url(slug)}]
    if faq_ld:
        ld.append(faq_ld)
    return document(path=url(slug), seo_title=p['seo'], desc=p['desc'], main=main, jsonld=ld)


def build_hub(sec, hp):
    name, default_desc = SECTIONS[sec]
    items = [('Home', '/'), (name, f'/{sec}/')]
    groups = {}
    for r in REG:
        if r['section'] == sec:
            groups.setdefault(r['group'], []).append(r['slug'])
    sections_html = ''
    for g, slugs in groups.items():
        sections_html += f'<section class="sp-group" aria-labelledby="g-{slugify(g)}"><h2 id="g-{slugify(g)}">{esc(g)}</h2><ul class="sp-grid">' + ''.join(link_card(s, g) for s in slugs) + '</ul></section>'
    intro, toc = render_sections(hp['sections'])
    faq_html, faq_ld = render_faq(hp.get('faq'))
    main = (
            hero(hp['h1'], hp['lede'], 'EuroMiles ' + name, items, hp.get('facts')) +
            f'<div class="sp-body"><div class="sp-wrap"><div class="sp-layout sp-nosidebar"><div class="sp-article"><p class="sp-updated">Reviewed {REVIEWED} by the EuroMiles Italy desk</p>{intro}<h2 class="sp-sec-title" id="all-guides" style="font:700 clamp(28px,3vw,40px)/1.15 var(--sp-display);color:var(--sp-navy);margin:0 0 28px">All {esc(name)} guides</h2>{sections_html}</div></div></div></div>' +
            faq_html + cta_band(*hp['cta']))
    ld = [ORG_LD, breadcrumb_ld(items),
          {'@type': 'CollectionPage', 'name': hp['seo'], 'description': hp['desc'], 'url': SITE + f'/{sec}/', 'inLanguage': 'en-IN', 'isPartOf': {'@id': SITE + '/#organization'}}]
    if faq_ld:
        ld.append(faq_ld)
    return document(path=f'/{sec}/', seo_title=hp['seo'], desc=hp['desc'], main=main, jsonld=ld, og_type='website')


def write(path, content):
    f = ROOT / path.strip('/') / 'index.html'
    f.parent.mkdir(parents=True, exist_ok=True)
    f.write_text(content, encoding='utf8')


def main():
    pages, hubs, specials = {}, {}, {}
    for f in sorted((ROOT / 'tools' / 'content').glob('c_*.py')):
        mod = importlib.import_module(f.stem)
        pages.update(getattr(mod, 'PAGES', {}))
        hubs.update(getattr(mod, 'HUBS', {}))
        specials.update(getattr(mod, 'SPECIAL', {}))
    missing = [r['slug'] for r in REG if r['slug'] not in pages]
    if missing:
        print('MISSING content for', len(missing), 'pages:', ', '.join(missing))
    extra = [s for s in pages if s not in BY_SLUG]
    if extra:
        raise SystemExit(f'Content for unregistered slugs: {extra}')
    urls = []
    for slug, p in pages.items():
        write(url(slug), build_page(slug, p))
        urls.append(url(slug))
    for sec, hp in hubs.items():
        write(f'/{sec}/', build_hub(sec, hp))
        urls.append(f'/{sec}/')
    for slug, fn in specials.items():
        out = fn(sys.modules[__name__])
        write(out['path'], out['html'])
        if not out.get('noindex'):
            urls.append(out['path'])
    sm = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          f'<url><loc>{SITE}/</loc><lastmod>2026-11-08</lastmod><priority>1.0</priority></url>']
    for u in sorted(set(urls)):
        pr = '0.9' if u.count('/') == 2 else '0.7'
        sm.append(f'<url><loc>{SITE}{u}</loc><lastmod>2026-11-08</lastmod><priority>{pr}</priority></url>')
    sm.append('</urlset>')
    (ROOT / 'sitemap.xml').write_text('\n'.join(sm) + '\n', encoding='utf8')
    (ROOT / 'robots.txt').write_text(f'User-agent: *\nAllow: /\nDisallow: /tools/\n\nSitemap: {SITE}/sitemap.xml\n', encoding='utf8')
    print(f'Built {len(pages)} pages, {len(hubs)} hubs, {len(specials)} special pages; sitemap has {len(set(urls)) + 1} URLs')


if __name__ == '__main__':
    main()
