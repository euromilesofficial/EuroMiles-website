"""Tiny helpers that keep page definitions readable."""


def sec(h, *blocks):
    return (h, *blocks)


def ul(*items):
    return ('ul', list(items))


def cross(*items):
    return ('cross', list(items))


def steps(*items):
    return ('steps', list(items))


def table(caption, head, *rows):
    return ('table', caption, head, list(rows))


def note(title, text):
    return ('note', title, text)


def warn(title, text):
    return ('warn', title, text)


def cards(*items):
    return ('cards', list(items))


def stats(*items):
    return ('stats', list(items))


def quote(text, who):
    return ('quote', text, who)


def page(seo, desc, h1, lede, facts, sections, faq, related=None, cta=None):
    return dict(seo=seo, desc=desc, h1=h1, lede=lede, facts=facts, sections=sections, faq=faq, related=related, cta=cta)
