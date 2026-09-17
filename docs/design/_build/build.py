# -*- coding: utf-8 -*-
"""docs/design 아래 26페이지 시안을 생성한다.

  python3 docs/design/_build/build.py

콘텐츠는 data.py / products.py에 있고 이 파일은 조판만 한다.
"""
import os, sys, html, shutil

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.dirname(HERE)
sys.path.insert(0, HERE)

from data import (COMPANY, CREED, INTRO_BODY, PROCESS_LEDE, DELIVERY_LEDE, ROSTER,
                  PRODUCTS, PRODUCT_LABEL, NAV_INTRO, NAV_SUPPORT, NAV_SINGLES,
                  HISTORY, CERTS, PATENTS, RESOURCES, WORK_PROCESS)
from products import P

E = html.escape


# ---------------------------------------------------------------- icons ----
# 하나의 선 굵기(1.75)로 통일한 자체 아이콘. 유니코드 글리프를 쓰지 않는다.
def icon(name, size=16):
    d = {
        "chevron": '<path d="M4 6.5 8 10.5 12 6.5"/>',
        "arrow":   '<path d="M3 8h10M9 4l4 4-4 4"/>',
        "plus":    '<path d="M8 3.5v9M3.5 8h9"/>',
        "phone":   '<path d="M13.5 11.3v1.9a1 1 0 0 1-1.1 1 11 11 0 0 1-9.6-9.6 1 1 0 0 1 1-1.1h1.9a1 1 0 0 1 1 .9c.1.7.2 1.3.5 2a1 1 0 0 1-.3 1l-.8.8a8 8 0 0 0 3 3l.8-.8a1 1 0 0 1 1-.2c.6.2 1.3.4 2 .4a1 1 0 0 1 .9 1Z"/>',
        "mail":    '<path d="M2.5 4.5h11v7h-11z"/><path d="m2.5 5 5.5 4 5.5-4"/>',
        "pin":     '<path d="M13 7c0 3.5-5 8-5 8S3 10.5 3 7a5 5 0 0 1 10 0Z"/><circle cx="8" cy="7" r="1.8"/>',
        "menu":    '<path d="M3 5h12M3 9h12M3 13h12"/>',
        "close":   '<path d="M4 4l8 8M12 4l-8 8"/>',
        "doc":     '<path d="M9 2H4.5v12h9V6.5z"/><path d="M9 2v4.5h4.5"/>',
        "play":    '<path d="M6.5 5 11.5 8l-5 3z"/><circle cx="8" cy="8" r="6.2"/>',
    }
    return ('<svg width="%d" height="%d" viewBox="0 0 16 16" fill="none" '
            'stroke="currentColor" stroke-width="1.75" stroke-linecap="round" '
            'stroke-linejoin="round" aria-hidden="true">%s</svg>' % (size, size, d[name]))


# ------------------------------------------------------------- helpers -----
def rel(depth, path):
    return ("../" * depth) + path


def asset(depth, path):
    return rel(depth, "assets/" + path)


# ------------------------------------------------------------- chrome ------
def header(depth, active, cur):
    r = lambda p: rel(depth, p)
    a = lambda p: asset(depth, p)

    def links(items, col_title=None):
        li = "\n".join(
            '<li><a href="%s"%s>%s</a></li>'
            % (r(h), ' aria-current="page"' if h == cur else "", E(t))
            for h, t in items)
        head = '<p class="mega__label">%s</p>' % E(col_title) if col_title else ''
        return head + '<ul>%s</ul>' % li

    prod = [("products/%s.html" % s, l) for s, l, _t, _n in PRODUCTS]
    mega = (
        '<div class="mega"><div class="wrap"><div class="mega__in">'
        '<div data-sec="intro">%s</div>'
        '<div data-sec="products">%s</div>'
        '<div data-sec="products">%s</div>'
        '<div data-sec="support">%s</div>'
        '</div></div></div>'
        % (links(NAV_INTRO, "회사소개"),
           links(prod[:8], "제품소개"),
           links(prod[8:], "제품소개 (계속)"),
           links(NAV_SINGLES, "바로가기") + links(NAV_SUPPORT, "고객센터"))
    )

    def top(key, href, label, has_mega):
        on = ' nav__item--on' if active == key else ''
        if not has_mega:
            return ('<li class="nav__item%s"><a class="nav__link" href="%s"%s>%s</a></li>'
                    % (on, r(href), ' aria-current="page"' if r(href) == r(cur) else '', E(label)))
        return ('<li class="nav__item%s" data-mega data-sec="%s" data-open="false">'
                '<a class="nav__link" href="%s" aria-expanded="false">%s %s</a>%s</li>'
                % (on, key, r(href), E(label), icon("chevron", 14), mega))

    nav = "".join([
        top("intro", "intro/greetings.html", "회사소개", True),
        top("products", "products/switchgear.html", "제품소개", True),
        top("warning", "products/safety-warning.html", "안전음성경보기", False),
        top("resources", "products/electric-resources.html", "전기자재현황", False),
        top("process", "work-process.html", "작업공정", False),
        top("support", "support/notice.html", "고객센터", True),
    ])

    return """<a class="skip" href="#main">본문으로 건너뛰기</a>
<header class="hdr">
  <div class="wrap hdr__in">
    <a class="brand" href="%s"><img src="%s" alt="현대콘트롤전기 홈" width="102" height="60"></a>
    <nav class="nav" aria-label="주 메뉴"><ul class="nav__list">%s</ul></nav>
    <div class="hdr__util">
      <a class="hdr__tel" href="tel:+82617242226">%s <span class="mono">061-724-2226</span></a>
      <a class="hdr__lang" href="#" aria-label="English site">ENGLISH</a>
      <button class="burger" type="button" aria-expanded="false" aria-label="메뉴 열기">%s</button>
    </div>
  </div>
</header>
<div class="scrim" data-open="false"></div>""" % (
        r("index.html"), a("img/logo/white_logo.png"), nav, icon("phone", 14), icon("menu", 18))


def footer(depth):
    r = lambda p: rel(depth, p)
    a = lambda p: asset(depth, p)
    prod = [("products/%s.html" % s, l) for s, l, _t, _n in PRODUCTS]

    def col(items):
        return '<ul>%s</ul>' % "".join(
            '<li><a href="%s">%s</a></li>' % (r(h), E(t)) for h, t in items)

    return """<footer class="ftr">
  <div class="wrap">
    <h2 class="u-sr">사이트 맵</h2>
    <nav class="ftr__nav" aria-label="전체 메뉴">
      <div><h3>회사소개</h3>%s</div>
      <div><h3>제품소개</h3>%s</div>
      <div><h3 aria-hidden="true">&nbsp;</h3>%s</div>
      <div><h3>바로가기</h3>%s<h3>고객센터</h3>%s</div>
    </nav>
    <div class="ftr__co">
      <div>
        <img src="%s" alt="현대콘트롤전기" width="102" height="60">
        <p>%s</p>
      </div>
      <div>
        <h3>Contact</h3>
        <dl>
          <dt>상호</dt><dd>%s</dd>
          <dt>전화</dt><dd><a class="mono" href="tel:+82617242226">061-724-2226</a></dd>
          <dt>팩스</dt><dd class="mono">061-724-7614</dd>
          <dt>이메일</dt><dd><a href="mailto:%s">%s</a></dd>
          <dt>본사</dt><dd>%s</dd>
          <dt>기술연구소</dt><dd>%s</dd>
        </dl>
      </div>
    </div>
    <div class="ftr__btm">
      <span>© 2026 HYUNDAI CONTROL ELECTRIC CO., LTD.</span>
      <span>디자인 개편 시안</span>
    </div>
  </div>
</footer>""" % (
        col(NAV_INTRO), col(prod[:8]), col(prod[8:]), col(NAV_SINGLES), col(NAV_SUPPORT),
        a("img/logo/white_logo.png"), E(INTRO_BODY),
        E(COMPANY["name"]), COMPANY["mail"], COMPANY["mail"],
        E(COMPANY["hq"]), E(COMPANY["lab"]))


def page(path, title, desc, body, active="", depth=0):
    doc = """<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>%s</title>
<meta name="description" content="%s">
<link rel="stylesheet" href="%s">
</head>
<body>
%s
<main id="main">
%s
</main>
%s
<script src="%s" defer></script>
</body>
</html>
""" % (E(title), E(desc), asset(depth, "css/hd.css"),
       header(depth, active, path), body, footer(depth), asset(depth, "js/hd.js"))

    full = os.path.join(OUT, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8") as f:
        f.write(doc)


# --------------------------------------------------------------- blocks ----
def crumbs(depth, trail):
    out = ['<li><a href="%s">Home</a></li>' % rel(depth, "index.html")]
    for i, (href, label) in enumerate(trail):
        out.append('<li aria-hidden="true">%s</li>' % icon("chevron", 12).replace(
            'd="M4 6.5 8 10.5 12 6.5"', 'd="M6.5 4 10.5 8 6.5 12"'))
        last = i == len(trail) - 1
        if last or not href:
            out.append('<li aria-current="page">%s</li>' % E(label))
        else:
            out.append('<li><a href="%s">%s</a></li>' % (rel(depth, href), E(label)))
    return '<ol class="crumbs">%s</ol>' % "".join(out)


# 섹션별 머리 배경. 전부 생성 이미지라 실사로 교체해야 한다(gen/PROVENANCE.md).
PHEAD_IMG = {
    "회사소개":     "gen/plant-dusk.webp",
    "제품소개":     "gen/busbar-macro.webp",
    "작업공정":     "gen/fab-floor.webp",
    "전기자재현황": "gen/fab-floor.webp",
    "고객센터":     "gen/hero-room.webp",
}


def phead(depth, trail, h1, lede="", img=None):
    img = img or PHEAD_IMG.get(trail[0][1])
    pic = '<img class="phead__img" src="%s" alt="" aria-hidden="true">' % asset(depth, img) if img else ''
    return """<section class="phead">
  %s
  <div class="wrap phead__in">
    %s
    <h1 class="engraved">%s</h1>
    %s
  </div>
</section>""" % (pic, crumbs(depth, trail), E(h1),
                 '<p class="lede">%s</p>' % E(lede) if lede else '')


def subnav(depth, items, cur):
    return '<nav class="subnav" aria-label="하위 메뉴">%s</nav>' % "".join(
        '<a href="%s"%s>%s</a>' % (rel(depth, h), ' aria-current="page"' if h == cur else '', E(t))
        for h, t in items)


def spec_table(depth, title, head, rows):
    if head:
        thead = '<thead><tr>%s</tr></thead>' % "".join('<th>%s</th>' % E(c) for c in head)
        body = "".join(
            '<tr>%s</tr>' % "".join(
                '<td class="num">%s</td>' % E(c) if j else '<td>%s</td>' % E(c)
                for j, c in enumerate(r))
            for r in rows)
    else:
        thead = ''
        body = "".join('<tr><th>%s</th><td class="num">%s</td></tr>' % (E(r[0]), E(r[1]))
                       for r in rows)
    return ('<div class="plate u-pad u-mt6"><div class="data--wrap"><table class="data">'
            '<caption>%s</caption>%s<tbody>%s</tbody></table></div></div>'
            % (E(title), thead, body))


def render_blocks(depth, blocks):
    out = []
    for b in blocks:
        kind = b[0]
        if kind == "p":
            out.append("<p>%s</p>" % E(b[1]))
        elif kind == "h":
            out.append("<h3>%s</h3>" % E(b[1]))
        elif kind == "ul":
            out.append("<ul>%s</ul>" % "".join("<li>%s</li>" % E(x) for x in b[1]))
        elif kind == "img":
            out.append('<figure class="scan u-mt6"><img src="%s" alt="%s" loading="lazy"></figure>'
                       % (asset(depth, b[1]), E(b[2])))
        elif kind == "scan":
            out.append('<figure class="scan scan--wide u-mt5"><img src="%s" alt="%s" loading="lazy"></figure>'
                       % (asset(depth, b[1]), E(b[2])))
        elif kind == "figs":
            cells = "".join(
                '<figure class="scan"><img src="%s" alt="%s" loading="lazy">%s</figure>'
                % (asset(depth, p), E(c or ""),
                   '<figcaption>%s</figcaption>' % E(c) if c else '')
                for p, c in b[1])
            out.append('<div class="grid2 u-mt6">%s</div>' % cells)
        elif kind == "spec":
            out.append(spec_table(depth, b[1], b[2], b[3]))
        elif kind == "draw":
            cells = "".join('<figure class="scan"><img src="%s" alt="도면" loading="lazy"></figure>'
                            % asset(depth, p) for p in b[1])
            cls = "grid2" if len(b[1]) > 1 else "scan--wide"
            out.append('<h3 class="u-mt7">Drawings</h3><div class="%s u-mt5">%s</div>'
                       % (cls, cells))
    return "\n".join(out)


def render_variant(depth, blocks):
    """제품 사진은 흰 배경이다. 전폭으로 깔면 지면에 흰 판이 박힌다.
    사진은 왼쪽 열에, 설명과 규격은 오른쪽 열에 세운다."""
    media, body, tail = None, [], []
    for b in blocks:
        if b[0] == "img" and media is None:
            media = b
        elif b[0] in ("figs", "draw", "scan"):
            tail.append(b)
        else:
            body.append(b)

    if media is None:
        return '<div class="prose">%s%s</div>' % (
            render_blocks(depth, body), render_blocks(depth, tail))

    if not body:
        return '<div class="prose"><figure class="scan scan--wide">' \
               '<img src="%s" alt="%s" loading="lazy"></figure>%s</div>' % (
                   asset(depth, media[1]), E(media[2]), render_blocks(depth, tail))

    return """<div class="pcols">
  <figure class="scan"><img src="%s" alt="%s" loading="lazy"></figure>
  <div class="prose">%s</div>
</div>
<div class="prose u-mt8">%s</div>""" % (asset(depth, media[1]), E(media[2]),
                                  render_blocks(depth, body),
                                  render_blocks(depth, tail))


# ============================================================== pages =======
def build_index():
    a = lambda p: asset(0, p)
    prod = PRODUCTS

    hero = """<section class="hero">
  <img class="hero__img" src="%s" alt="배전반이 늘어선 수전실" fetchpriority="high" width="2000" height="1143">
  <div class="hero__veil"></div>
  <div class="wrap hero__in">
    <p class="hero__mark"><span class="lamp"></span> 1990년부터 순천에서</p>
    <h1 class="engraved">수배전반을 만드는 일은<br>전기를 멈추지 않게 하는 일입니다</h1>
    <p class="lede">설계, 판금, 도장, 세척, 조립, 현장 설치를 한 라인에서 끝냅니다.</p>
    <div class="hero__acts">
      <a class="btn btn--primary" href="products/switchgear.html">제품 보기 %s</a>
      <a class="btn btn--ghost" href="assets/catalogue.pdf">카탈로그 내려받기 %s</a>
    </div>
  </div>
</section>""" % (a("gen/hero-room.webp"), icon("arrow"), icon("doc"))

    roster = """<section class="band--tight" style="border-bottom:1px solid var(--rule-soft)">
  <div class="wrap">
    <h2 class="u-sr">주요 등록처</h2>
    <ul class="roster">%s</ul>
  </div>
</section>""" % "".join("<li>%s</li>" % E(n) for n in ROSTER)

    creed_rows = "".join('<li><span class="lamp"></span>%s</li>' % E(c) for c in CREED)
    about = """<section class="band">
  <div class="wrap split">
    <div>
      <h2 class="engraved">강판이 들어와<br>배전반이 나갑니다</h2>
      <p class="u-mt6">%s</p>
      <p>%s</p>
      <ul class="creed u-mt7">%s</ul>
      <a class="btn btn--ghost u-mt7" href="work-process.html">작업공정 보기 %s</a>
    </div>
    <div>
      <figure class="shot">
        <img src="%s" alt="판금 가공 공장 전경" loading="lazy">
      </figure>
      <div class="shot u-mt5" style="aspect-ratio:16/9">
        <iframe style="width:100%%;height:100%%;border:0;display:block"
          src="https://www.youtube.com/embed/2bKja4I2dhs"
          title="현대콘트롤전기 소개 영상" loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
          allowfullscreen></iframe>
      </div>
    </div>
  </div>
</section>""" % (E(PROCESS_LEDE), E(INTRO_BODY), creed_rows, icon("arrow"),
                 a("gen/fab-floor.webp"))

    leads = """<section class="band band--deep">
  <div class="wrap">
    <h2 class="engraved">대표 제품</h2>
    <div class="plate plate--navy riveted lead u-mt7">
      <div class="lead__media"><img src="%s" alt="면진형 수배전반의 면진 베이스" loading="lazy"></div>
      <div class="lead__body">
        <span class="stamp"><span class="lamp"></span> 조달우수제품 2020238</span>
        <h3 class="engraved u-mt5">면진형 수배전반</h3>
        <p>수평 내진력과 수직 내진력을 함께 제공하는 내진시스템과 내진장치를 적용했습니다.
           <span class="mono">특허 제10-2230259호</span></p>
        <a class="btn btn--primary" href="products/seismic-switchgear.html">제품 보기 %s</a>
      </div>
    </div>
    <div class="plate riveted lead u-mt5">
      <div class="lead__media"><img src="%s" alt="배전반 내부의 부스바와 단자대" loading="lazy"></div>
      <div class="lead__body">
        <span class="stamp">특허 8건</span>
        <h3 class="engraved u-mt5">산업안전 통합 감시 시스템</h3>
        <p>비접촉 적외선온도센서와 불꽃감지센서를 병행해 화재 전 이상 징후를
           실시간으로 감시합니다.</p>
        <a class="btn btn--ghost" href="products/u-safety.html">제품 보기 %s</a>
      </div>
    </div>
  </div>
</section>""" % (a("gen/seismic-base.webp"), icon("arrow"),
                 a("gen/busbar-macro.webp"), icon("arrow"))

    rows = "".join("""<a class="plate rack__row" href="products/%s.html">
      <img class="rack__thumb" src="%s" alt="" loading="lazy">
      <span class="rack__name">%s<span class="rack__note">%s</span></span>
      <span class="rack__go">%s</span>
    </a>""" % (slug, a(thumb), E(label), E(note), icon("arrow"))
        for slug, label, thumb, note in prod)

    rack = """<section class="band">
  <div class="wrap">
    <h2 class="engraved">제품소개</h2>
    <div class="rack u-mt7">%s</div>
  </div>
</section>""" % rows

    res_cells = "".join(
        '<figure class="plate u-pad"><img src="%s" alt="" loading="lazy" '
        'style="border-radius:2px"><figcaption class="dim" style="margin-top:12px;'
        'font-size:.8125rem;line-height:1.6">%s</figcaption></figure>'
        % (a(img), E(txt)) for img, txt in RESOURCES[:6])

    resources = """<section class="band band--navy">
  <div class="wrap">
    <h2 class="engraved">전기자재현황</h2>
    <p class="lede u-mt5">%s</p>
    <div class="grid3 u-mt7">%s</div>
    <a class="btn btn--ghost u-mt7" href="products/electric-resources.html">전체 자재 보기 %s</a>
  </div>
</section>""" % (E(PROCESS_LEDE), res_cells, icon("arrow"))

    cta = """<section class="band band--deep">
  <div class="wrap">
    <div style="max-width:720px">
    <h2 class="engraved">규격이 정해졌다면 도면을 보내주세요</h2>
    <p class="lede u-mt5">발주처 사양에 맞춰 설계부터 현장 설치까지 일괄로 진행합니다.
       카탈로그가 먼저 필요하시면 아래에서 내려받으실 수 있습니다.</p>
    <div class="hero__acts">
      <a class="btn btn--primary" href="tel:+82617242226">%s 061-724-2226</a>
      <a class="btn btn--ghost" href="mailto:%s">%s 이메일 문의</a>
      <a class="btn btn--ghost" href="assets/catalogue.pdf">%s 카탈로그</a>
    </div>
    </div>
  </div>
</section>""" % (icon("phone"), COMPANY["mail"], icon("mail"), icon("doc"))

    page("index.html",
         "현대콘트롤전기 | 수배전반 설계·제작·설치",
         "1990년부터 순천에서 수배전반과 산업용 제어 패널을 설계·제작·설치합니다. "
         "면진형 수배전반 조달우수제품 지정.",
         hero + roster + about + leads + rack + resources + cta,
         active="", depth=0)


def build_intro():
    d, T = 1, [("intro/greetings.html", "회사소개")]
    sub = lambda cur: subnav(d, NAV_INTRO, cur)

    # 인사말씀
    creed_rows = "".join(
        '<li><span class="lamp"></span><span>%s</span></li>' % E(c) for c in CREED)
    body = phead(d, T + [(None, "인사말씀")], "인사말씀",
                 img="gen/plant-dusk.webp") + """
<section class="band"><div class="wrap">
  %s
  <div class="split">
    <div class="prose">
      <h2 class="engraved">%s</h2>
      <p class="lede u-mt6">%s</p>
      <p class="u-mt6">%s</p>
      <p>끊임없는 지원과 관심에 감사드립니다.</p>
      <p class="dim u-mt6">%s 대표이사 %s</p>
    </div>
    <div>
      <figure class="shot"><img src="%s" alt="현대콘트롤전기 임직원" loading="lazy"></figure>
      <ul class="u-mt6" style="list-style:none;margin:0;padding:0;display:grid;gap:12px">%s</ul>
    </div>
  </div>
</div></section>""" % (sub("intro/greetings.html"), E(" · ".join(CREED)), E(PROCESS_LEDE),
                       E(INTRO_BODY), E(COMPANY["name"]), E(COMPANY["ceo"]),
                       asset(d, "intro/img/greetings.jpg"),
                       creed_rows.replace('<li>', '<li style="display:flex;gap:12px;'
                                          'align-items:center;color:var(--engrave);'
                                          'font-weight:600">'))
    page("intro/greetings.html", "인사말씀 | 현대콘트롤전기",
         "설계부터 현장 설치까지, 최선을 향한 열정으로 보답하겠습니다.",
         body, active="intro", depth=d)

    # 회사개요
    rows = [("상호", COMPANY["name"]), ("영문 상호", COMPANY["name_en"]),
            ("대표이사", COMPANY["ceo"]), ("회사설립", COMPANY["founded"]),
            ("고용현황", COMPANY["staff"]), ("주요제품", COMPANY["items"]),
            ("본사", COMPANY["hq"]), ("기술연구소", COMPANY["lab"]),
            ("전화 / 팩스", "061-724-2226 / 061-724-7614"),
            ("이메일", COMPANY["mail"])]
    tbl = "".join('<tr><th>%s</th><td>%s</td></tr>' % (E(k), E(v)) for k, v in rows)
    body = phead(d, T + [(None, "회사개요")], "회사개요", DELIVERY_LEDE,
                 img="gen/plant-dusk.webp") + """
<section class="band"><div class="wrap">
  %s
  <div class="plate riveted u-pad">
    <div class="data--wrap"><table class="data">
      <caption>회사 일반 현황</caption><tbody>%s</tbody></table></div>
  </div>
  <div class="grid3 u-mt7">
    <figure class="shot"><img src="%s" alt="공장 전경" loading="lazy"></figure>
    <figure class="shot"><img src="%s" alt="판금 가공" loading="lazy"></figure>
    <figure class="shot"><img src="%s" alt="배전반 내부 결선" loading="lazy"></figure>
  </div>
</div></section>""" % (sub("intro/overview.html"), tbl,
                       asset(d, "gen/plant-dusk.webp"), asset(d, "gen/fab-floor.webp"),
                       asset(d, "gen/busbar-macro.webp"))
    page("intro/overview.html", "회사개요 | 현대콘트롤전기",
         "주식회사 현대콘트롤전기 회사 일반 현황.", body, active="intro", depth=d)

    # 연혁
    eras = ""
    for label, entries in HISTORY:
        li = "".join('<li><time class="mono">%s</time><div><b>%s</b>%s</div></li>'
                     % (E(y), E(t), '<small class="mono">%s</small>' % E(n) if n else '')
                     for y, t, n in entries)
        eras += ('<div class="era"><div class="era__label"><h2 class="engraved">%s</h2></div>'
                 '<ul class="log">%s</ul></div>' % (E(label), li))
    body = phead(d, T + [(None, "연혁")], "연혁", PROCESS_LEDE) + """
<section class="band"><div class="wrap">
  %s
  %s
</div></section>""" % (sub("intro/history.html"), eras)
    page("intro/history.html", "연혁 | 현대콘트롤전기",
         "1990년 설립부터 현재까지의 등록, 인증, 특허 기록.", body, active="intro", depth=d)

    # 인증 현황
    kinds = [("all", "전체"), ("company", "회사"), ("supplier", "공급"),
             ("cert", "인증"), ("patent", "특허")]
    bar = '<div class="subnav subnav--filter" data-filter-bar>%s</div>' % "".join(
        '<button type="button" data-kind-filter="%s" aria-pressed="%s">%s</button>'
        % (k, "true" if k == "all" else "false", E(l)) for k, l in kinds)
    all_items = CERTS + PATENTS
    cards = "".join(
        '<figure class="plate cert" data-kind="%s"><div class="cert__img">'
        '<img src="%s" alt="%s" loading="lazy"></div><figcaption>%s</figcaption></figure>'
        % (k, asset(d, img), E(name), E(name)) for k, img, name in all_items)
    body = phead(d, T + [(None, "인증 현황")], "인증 현황",
                 "현대콘트롤전기는 그동안 획득한 각종 인증서와 수상 실적으로 제품의 "
                 "우수성과 회사의 위상, 기술력을 인정받고 있습니다.") + """
<section class="band"><div class="wrap">
  %s
  %s
  <p class="dim" style="margin-bottom:24px">총 <span class="mono" data-filter-count>%d</span>건</p>
  <div class="certs">%s</div>
  <div class="empty" hidden data-filter-empty>
    <p>해당 분류에 표시할 항목이 없습니다. 다른 분류를 선택해 주세요.</p>
  </div>
</div></section>""" % (sub("intro/certification.html"), bar, len(all_items), cards)
    page("intro/certification.html", "인증 현황 | 현대콘트롤전기",
         "ISO 9001, ISO 14001, KOSHA-MS, 조달우수제품 지정 및 특허 등록 현황.",
         body, active="intro", depth=d)

    # 오시는 길
    body = phead(d, T + [(None, "오시는 길")], "오시는 길", DELIVERY_LEDE) + """
<section class="band"><div class="wrap">
  %s
  <div class="grid2">
    <div class="plate riveted u-pad">
      <h3 class="engraved">본사</h3>
      <div class="data--wrap u-mt5"><table class="data"><tbody>
        <tr><th>주소</th><td>%s</td></tr>
        <tr><th>전화</th><td class="num">061-724-2226</td></tr>
        <tr><th>팩스</th><td class="num">061-724-7614</td></tr>
      </tbody></table></div>
      <a class="btn btn--ghost btn--sm u-mt5"
         href="https://map.naver.com/p/search/%s" rel="noopener">지도에서 보기 %s</a>
    </div>
    <div class="plate riveted u-pad">
      <h3 class="engraved">기술연구소</h3>
      <div class="data--wrap u-mt5"><table class="data"><tbody>
        <tr><th>주소</th><td>%s</td></tr>
        <tr><th>전화</th><td class="num">061-724-2226</td></tr>
      </tbody></table></div>
      <a class="btn btn--ghost btn--sm u-mt5"
         href="https://map.naver.com/p/search/%s" rel="noopener">지도에서 보기 %s</a>
    </div>
  </div>
  <div class="plate u-pad u-mt7">
    <h3 class="engraved">문의</h3>
    <p class="u-mt4">규격과 수량이 정해졌다면 도면과 함께 연락 주세요. 검토 후 회신드립니다.</p>
    <form class="form u-mt6" onsubmit="return false">
      <div class="field">
        <label for="q-name">담당자 성함</label>
        <input id="q-name" name="name" type="text" autocomplete="name" placeholder="홍길동">
      </div>
      <div class="field">
        <label for="q-org">회사명</label>
        <input id="q-org" name="org" type="text" autocomplete="organization" placeholder="OO엔지니어링">
      </div>
      <div class="field field--bad">
        <label for="q-mail">이메일</label>
        <input id="q-mail" name="email" type="email" autocomplete="email"
               value="hong@" aria-describedby="q-mail-err">
        <p class="field__err" id="q-mail-err">이메일 주소에 도메인이 빠졌습니다. 예: hong@company.co.kr</p>
      </div>
      <div class="field">
        <label for="q-body">문의 내용</label>
        <textarea id="q-body" name="body" rows="5" placeholder="필요한 제품, 규격, 수량, 납기를 적어주세요."></textarea>
        <small>도면 파일은 회신 메일에 첨부해 보내주시면 됩니다.</small>
      </div>
      <div><button class="btn btn--primary" type="submit">문의 보내기</button></div>
    </form>
  </div>
</div></section>""" % (sub("intro/location.html"), E(COMPANY["hq"]),
                       COMPANY["hq"].replace(" ", "%20"), icon("arrow"),
                       E(COMPANY["lab"]), COMPANY["lab"].replace(" ", "%20"), icon("arrow"))
    page("intro/location.html", "오시는 길 | 현대콘트롤전기",
         "본사 전라남도 순천시 해룡면 율촌산단4로 106. 기술연구소 해룡면 대가길 12.",
         body, active="intro", depth=d)


def build_products():
    d = 1
    items = [("products/%s.html" % s, l) for s, l, _t, _n in PRODUCTS]
    items.append(("products/electric-resources.html", "전기자재현황"))

    for slug, label, thumb, note in PRODUCTS:
        cur = "products/%s.html" % slug
        data = P[slug]
        vs = ""
        for name, code, blocks in data["variants"]:
            vs += ('<article class="variant"><div class="variant__head">'
                   '<h2 class="engraved">%s</h2>%s</div>%s</article>'
                   % (E(name),
                      '<span class="variant__code mono">%s</span>' % E(code) if code else '',
                      render_variant(d, blocks)))

        cat = ''
        if data.get("catalog"):
            cat = ('<a class="btn btn--primary u-mt6" href="%s">카탈로그 내려받기 %s</a>'
                   % (asset(d, "catalogue.pdf"), icon("doc")))

        body = phead(d, [("products/switchgear.html", "제품소개"), (None, label)],
                     label, data.get("lede", "")) + """
<section class="band"><div class="wrap">
  %s
  %s
  %s
  <div class="plate plate--navy u-pad u-mt9" style="margin-top:96px">
    <h3 class="engraved">이 제품이 필요하신가요</h3>
    <p class="u-mt4">규격과 수량을 알려주시면 검토 후 회신드립니다.</p>
    <div class="hero__acts" style="margin-top:24px">
      <a class="btn btn--primary" href="tel:+82617242226">%s 061-724-2226</a>
      <a class="btn btn--ghost" href="%s">문의 남기기 %s</a>
    </div>
  </div>
</div></section>""" % (subnav(d, items, cur), cat, vs, icon("phone"),
                       rel(d, "intro/location.html"), icon("arrow"))

        page(cur, "%s | 현대콘트롤전기" % label,
             (data.get("lede") or note)[:150], body,
             active="products" if slug not in ("safety-warning",) else "warning", depth=d)

    # 전기자재현황
    cells = "".join(
        '<figure class="plate u-pad"><img src="%s" alt="" loading="lazy" '
        'style="border-radius:2px"><figcaption class="dim" style="margin-top:14px;'
        'font-size:.8125rem;line-height:1.65">%s</figcaption></figure>'
        % (asset(d, img), E(txt)) for img, txt in RESOURCES)
    body = phead(d, [(None, "전기자재현황")], "전기자재현황", PROCESS_LEDE) + """
<section class="band"><div class="wrap">
  %s
  <div class="grid3">%s</div>
</div></section>""" % (subnav(d, items, "products/electric-resources.html"), cells)
    page("products/electric-resources.html", "전기자재현황 | 현대콘트롤전기",
         "현대콘트롤전기가 취급하는 전기자재 현황.", body, active="resources", depth=d)


def build_process():
    d = 0
    stages = ""
    for i, (name, imgs) in enumerate(WORK_PROCESS["stages"]):
        cells = "".join('<figure class="shot"><img src="%s" alt="%s 공정" loading="lazy"></figure>'
                        % (asset(d, p), E(name)) for p in imgs)
        grid = "grid2" if len(imgs) <= 2 else "grid2"
        stages += ('<div class="era"><div class="era__label">'
                   '<h2 class="engraved">%s</h2></div><div class="%s">%s</div></div>'
                   % (E(name), grid, cells))

    body = phead(d, [(None, "작업공정")], "생산 및 설치", WORK_PROCESS["lede"],
                 img="gen/fab-floor.webp") + """
<section class="band"><div class="wrap">%s</div></section>""" % stages
    page("work-process.html", "작업공정 | 현대콘트롤전기",
         "설계, 생산, 현장설치까지의 작업공정.", body, active="process", depth=d)


def build_support():
    d = 1
    items = NAV_SUPPORT

    # 공지사항: 실제 게시물이 없다. 빈 상태를 설계한다.
    body = phead(d, [(None, "고객센터")], "공지사항") + """
<section class="band"><div class="wrap">
  %s
  <div class="plate empty">
    <span class="lamp"></span>
    <h3 class="engraved">등록된 공지가 없습니다</h3>
    <p>새 소식이 올라오면 이곳에 표시됩니다. 급한 문의는 전화로 연락 주세요.</p>
    <a class="btn btn--ghost btn--sm" href="tel:+82617242226">%s 061-724-2226</a>
  </div>
</div></section>""" % (subnav(d, items, "support/notice.html"), icon("phone"))
    page("support/notice.html", "공지사항 | 현대콘트롤전기",
         "현대콘트롤전기 공지사항.", body, active="support", depth=d)

    # 자주하는 질문: 사이트 전반의 사실에서만 답을 만든다
    faqs = [
        ("제품 규격과 치수를 어디서 확인하나요?",
         "제품소개의 각 제품 페이지에 Specification 표와 Drawings가 있습니다. "
         "표에는 CODE와 SIZE (WxHxD)mm가 적혀 있습니다."),
        ("주문 제작이 가능한가요?",
         "가능합니다. 분전반과 수배전함은 주문 사양에 따라 모든 종류를 제작할 수 있으며, "
         "수배전함은 강철, 스테인리스강, 알루미늄 판으로 제작됩니다."),
        ("설치 공사도 함께 진행하나요?",
         "설계부터 판금, 도장, 세척, 설치공사까지 일괄적인 생산라인과 전반적인 시스템을 "
         "갖추고 있습니다."),
        ("면진형 수배전반은 어떤 인증을 받았나요?",
         "조달우수제품(2020238)으로 지정되었습니다. 수평 내진력과 수직 내진력을 제공하는 "
         "내진시스템과 내진장치로 특허 제10-2230259호를 등록했습니다."),
        ("어떤 품질 인증을 보유하고 있나요?",
         "ISO 9001, ISO 14001, KOSHA-MS 인증과 중소벤처기업부 성능인증서, "
         "한국기계전기전자시험연구원 품질인증(Q-Mark)을 보유하고 있습니다. "
         "인증 현황 페이지에서 인증서를 확인하실 수 있습니다."),
        ("조달청을 통해 구매할 수 있나요?",
         "조달청 수배전반 공급업체로 등록되어 있으며 2016년 12월 제3자 단가계약"
         "(00163204500)을 체결했습니다."),
    ]
    acc = "".join("""<li>
      <button class="acc__q" type="button" aria-expanded="%s">%s %s</button>
      <div class="acc__a"><div><p>%s</p></div></div>
    </li>""" % ("true" if i == 0 else "false", E(q), icon("plus"), E(a))
        for i, (q, a) in enumerate(faqs))
    body = phead(d, [(None, "고객센터")], "자주하는 질문") + """
<section class="band"><div class="wrap">
  %s
  <ul class="acc">%s</ul>
</div></section>""" % (subnav(d, items, "support/faq.html"), acc)
    page("support/faq.html", "자주하는 질문 | 현대콘트롤전기",
         "제품 규격, 주문 제작, 설치 공사, 인증에 관한 자주 묻는 질문.",
         body, active="support", depth=d)

    # 질문과 답변
    body = phead(d, [(None, "고객센터")], "질문과 답변") + """
<section class="band"><div class="wrap">
  %s
  <div class="plate empty">
    <h3 class="engraved">등록된 질문이 없습니다</h3>
    <p>첫 질문을 남겨주세요. 영업일 기준 1일 이내에 답변드립니다.</p>
  </div>
  <div class="plate u-pad u-mt6">
    <h3 class="engraved">질문 남기기</h3>
    <form class="form u-mt5" onsubmit="return false">
      <div class="field">
        <label for="a-name">성함</label>
        <input id="a-name" name="name" type="text" autocomplete="name" placeholder="홍길동">
      </div>
      <div class="field">
        <label for="a-mail">답변받을 이메일</label>
        <input id="a-mail" name="email" type="email" autocomplete="email" placeholder="hong@company.co.kr">
      </div>
      <div class="field">
        <label for="a-sub">제목</label>
        <input id="a-sub" name="subject" type="text" placeholder="MCC 판넬 납기 문의">
      </div>
      <div class="field">
        <label for="a-body">내용</label>
        <textarea id="a-body" name="body" rows="6" placeholder="궁금한 내용을 적어주세요."></textarea>
      </div>
      <div><button class="btn btn--primary" type="submit">질문 등록</button></div>
    </form>
  </div>
</div></section>""" % subnav(d, items, "support/qna.html")
    page("support/qna.html", "질문과 답변 | 현대콘트롤전기",
         "제품과 납기에 관한 질문을 남겨주세요.", body, active="support", depth=d)


if __name__ == "__main__":
    build_index()
    build_intro()
    build_products()
    build_process()
    build_support()
    n = sum(len(f) for _, _, f in os.walk(OUT) if True)
    made = []
    for root, _dirs, files in os.walk(OUT):
        if "_build" in root or "assets" in root:
            continue
        for f in files:
            if f.endswith(".html"):
                made.append(os.path.relpath(os.path.join(root, f), OUT))
    print("생성: %d 페이지" % len(made))
    for m in sorted(made):
        print("  ", m)
