import json, math, random
random.seed(7)
W, H = 3840, 2160
contours = json.load(open('contours.json'))

MIDNIGHT, DEEP_TEAL, OCEAN, OCEAN_HI = "#0a1b30", "#0d3f47", "#1d5f78", "#2b7c94"
IVORY, WARM_GRAY = "#f2ece1", "#a9a196"

def bez(pts):
    d = f"M {pts[0][0]:.0f} {pts[0][1]:.0f}"
    for i in range(1, len(pts) - 1, 2):
        d += f" Q {pts[i][0]:.0f} {pts[i][1]:.0f} {pts[i+1][0]:.0f} {pts[i+1][1]:.0f}"
    return d

# long sweeping "pathway" curves — suggestion of connection, never a neuron
paths, nodes = [], []
for k in range(9):
    y0 = random.uniform(-0.15, 1.15) * H
    pts = [(-200, y0)]
    y = y0
    for i in range(1, 9):
        x = -200 + (W + 400) * i / 8
        y += random.uniform(-0.16, 0.16) * H
        y = max(-0.2 * H, min(1.2 * H, y))
        pts.append((x, y))
    paths.append(bez(pts))
    for i in range(1, len(pts) - 1):
        if random.random() < 0.45:
            nodes.append((pts[i][0], pts[i][1], random.uniform(2.5, 6.0)))

contour_svg = []
for d, t in contours:
    if not d: continue
    op = 0.05 + 0.16 * t
    wdt = 1.1 + 1.5 * (1 - t)
    contour_svg.append(f'<path d="{d}" fill="none" stroke="{IVORY}" stroke-opacity="{op:.3f}" stroke-width="{wdt:.2f}"/>')

path_svg = "".join(
    f'<path d="{d}" fill="none" stroke="{OCEAN_HI}" stroke-opacity="{0.10 + 0.05*(i%3)}" stroke-width="{1.6 + (i%3)*0.9:.1f}"/>'
    for i, d in enumerate(paths))
node_svg = "".join(
    f'<circle cx="{x:.0f}" cy="{y:.0f}" r="{r:.1f}" fill="{IVORY}" fill-opacity="0.14"/>' for x, y, r in nodes)

svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">
  <defs>
    <linearGradient id="base" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%"   stop-color="{MIDNIGHT}"/>
      <stop offset="38%"  stop-color="{DEEP_TEAL}"/>
      <stop offset="72%"  stop-color="{OCEAN}"/>
      <stop offset="100%" stop-color="{MIDNIGHT}"/>
    </linearGradient>

    <radialGradient id="bloomA" cx="24%" cy="18%" r="52%">
      <stop offset="0%"   stop-color="{IVORY}" stop-opacity="0.20"/>
      <stop offset="60%"  stop-color="{IVORY}" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="{IVORY}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="bloomB" cx="82%" cy="76%" r="46%">
      <stop offset="0%"   stop-color="{OCEAN_HI}" stop-opacity="0.26"/>
      <stop offset="100%" stop-color="{OCEAN_HI}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="bloomC" cx="58%" cy="8%" r="38%">
      <stop offset="0%"   stop-color="{WARM_GRAY}" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="{WARM_GRAY}" stop-opacity="0"/>
    </radialGradient>

    <!-- The panel sits centre-stage, so detail is attenuated there and allowed
         to build toward the edges. This is the whole reason for a vector
         composition: the quiet zone is guaranteed, not hoped for. -->
    <radialGradient id="centerMask" cx="50%" cy="50%" r="62%">
      <stop offset="0%"   stop-color="#000" stop-opacity="0"/>
      <stop offset="34%"  stop-color="#000" stop-opacity="0.15"/>
      <stop offset="62%"  stop-color="#fff" stop-opacity="0.72"/>
      <stop offset="100%" stop-color="#fff" stop-opacity="1"/>
    </radialGradient>
    <mask id="edgeBias">
      <rect width="{W}" height="{H}" fill="url(#centerMask)"/>
    </mask>

    <radialGradient id="vig" cx="50%" cy="46%" r="76%">
      <stop offset="0%"   stop-color="#000" stop-opacity="0"/>
      <stop offset="70%"  stop-color="#000" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0.42"/>
    </radialGradient>

    <filter id="grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" seed="11" result="n"/>
      <feColorMatrix in="n" type="saturate" values="0"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.055"/></feComponentTransfer>
    </filter>

    <filter id="soften"><feGaussianBlur stdDeviation="1.1"/></filter>
  </defs>

  <rect width="{W}" height="{H}" fill="url(#base)"/>
  <rect width="{W}" height="{H}" fill="url(#bloomA)"/>
  <rect width="{W}" height="{H}" fill="url(#bloomB)"/>
  <rect width="{W}" height="{H}" fill="url(#bloomC)"/>

  <!-- translucent organic strata -->
  <g opacity="0.5" mask="url(#edgeBias)">
    <ellipse cx="{int(W*0.14)}" cy="{int(H*0.82)}" rx="{int(W*0.42)}" ry="{int(H*0.30)}" fill="{DEEP_TEAL}" fill-opacity="0.30"/>
    <ellipse cx="{int(W*0.92)}" cy="{int(H*0.16)}" rx="{int(W*0.34)}" ry="{int(H*0.26)}" fill="{OCEAN}" fill-opacity="0.24"/>
    <ellipse cx="{int(W*0.62)}" cy="{int(H*1.02)}" rx="{int(W*0.40)}" ry="{int(H*0.24)}" fill="{MIDNIGHT}" fill-opacity="0.28"/>
  </g>

  <g mask="url(#edgeBias)" filter="url(#soften)">
    <g>{"".join(contour_svg)}</g>
    <g opacity="0.85">{path_svg}{node_svg}</g>
  </g>

  <rect width="{W}" height="{H}" fill="url(#vig)"/>
  <rect width="{W}" height="{H}" filter="url(#grain)" opacity="0.55"/>
</svg>'''

open('hero.svg', 'w').write(svg)
open('hero.html', 'w').write(
  f'<!doctype html><meta charset="utf-8">'
  f'<style>html,body{{margin:0;padding:0;background:#000;overflow:hidden}}svg{{display:block}}</style>{svg}')
print("svg bytes:", len(svg))
