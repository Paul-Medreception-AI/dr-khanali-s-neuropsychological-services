"""
Editorial hero background for a neuropsychology practice.

Built as vector geometry rather than stock photography: bespoke, no licence
question, exact palette control, and — critically — a mathematically enforced
low-contrast centre so the dark teal hero panel sits cleanly on top.

Composition:
  - base gradient: midnight blue -> deep teal -> muted ocean
  - soft natural-light blooms (ivory, very low alpha)
  - topographic contour field from smooth value noise, via marching squares
  - long sweeping "pathway" curves with faint nodes at intersections
  - centre attenuation mask + edge emphasis
  - fine grain for material texture, subtle vignette for depth
"""
import numpy as np, math, random

W, H = 3840, 2160
random.seed(20260818); np.random.seed(20260818)

# ── palette ───────────────────────────────────────────────────────────────────
MIDNIGHT = "#0a1b30"
DEEP_TEAL = "#0d3f47"
OCEAN     = "#1d5f78"
OCEAN_HI  = "#2b7c94"
IVORY     = "#f2ece1"
WARM_GRAY = "#a9a196"

# ── smooth value noise ────────────────────────────────────────────────────────
def value_noise(shape, res, octaves=4, persistence=0.5):
    def smooth(g, r):
        gy, gx = np.mgrid[0:shape[0], 0:shape[1]]
        fy, fx = gy / shape[0] * r[0], gx / shape[1] * r[1]
        y0, x0 = fy.astype(int), fx.astype(int)
        y1, x1 = (y0 + 1) % r[0], (x0 + 1) % r[1]
        ty, tx = fy - y0, fx - x0
        # smoothstep
        ty = ty * ty * (3 - 2 * ty); tx = tx * tx * (3 - 2 * tx)
        a = g[y0, x0] * (1 - tx) + g[y0, x1] * tx
        b = g[y1, x0] * (1 - tx) + g[y1, x1] * tx
        return a * (1 - ty) + b * ty
    total = np.zeros(shape); amp = 1.0; norm = 0.0; r = list(res)
    for _ in range(octaves):
        g = np.random.rand(r[0], r[1])
        total += amp * smooth(g, r)
        norm += amp; amp *= persistence; r = [r[0] * 2, r[1] * 2]
    return total / norm

# lower-res field, upsampled implicitly by the contour tracing grid
GH, GW = 216, 384
field = value_noise((GH, GW), (3, 5), octaves=5, persistence=0.55)

# A pure noise field clumps its detail wherever the noise happens to be steep,
# which left one corner dense and the opposite edge bare. Adding a dominant
# radial term makes the iso-lines wrap the frame — organic, noise-perturbed
# contours that thicken toward every edge and open out in the middle, which is
# exactly the composition the panel needs.
yy, xx = np.mgrid[0:GH, 0:GW]
cx, cy = GW / 2, GH / 2
r = np.sqrt(((xx - cx) / (GW / 2)) ** 2 + ((yy - cy) / (GH / 2)) ** 2)
r = r / r.max()
field = 0.34 * field + 0.66 * (r ** 1.35)

# ── marching squares -> iso-line segments ─────────────────────────────────────
def contour_segments(F, level):
    segs = []
    h, w = F.shape
    f = F - level
    for j in range(h - 1):
        for i in range(w - 1):
            a, b, c, d = f[j, i], f[j, i+1], f[j+1, i+1], f[j+1, i]
            idx = (a > 0) | ((b > 0) << 1) | ((c > 0) << 2) | ((d > 0) << 3)
            if idx in (0, 15): continue
            def ip(p, q, vp, vq):
                t = vp / (vp - vq) if (vp - vq) != 0 else 0.5
                return (p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t)
            TL, TR, BR, BL = (i, j), (i+1, j), (i+1, j+1), (i, j+1)
            top    = ip(TL, TR, a, b); right = ip(TR, BR, b, c)
            bottom = ip(BL, BR, d, c); left  = ip(TL, BL, a, d)
            table = {1:[(left,top)],2:[(top,right)],3:[(left,right)],4:[(right,bottom)],
                     5:[(left,top),(right,bottom)],6:[(top,bottom)],7:[(left,bottom)],
                     8:[(left,bottom)],9:[(top,bottom)],10:[(left,bottom),(top,right)],
                     11:[(right,bottom)],12:[(left,right)],13:[(top,right)],14:[(left,top)]}
            segs.extend(table[int(idx)])
    return segs

def chain(segs, tol=1e-6):
    """Join segments into polylines."""
    from collections import defaultdict
    adj = defaultdict(list)
    key = lambda p: (round(p[0], 4), round(p[1], 4))
    for s in segs:
        adj[key(s[0])].append(s[1]); adj[key(s[1])].append(s[0])
    seen = set(); paths = []
    for s in segs:
        k = key(s[0])
        if k in seen: continue
        path = [s[0]]; cur = s[0]; prev = None
        while True:
            seen.add(key(cur))
            nxts = [p for p in adj[key(cur)] if prev is None or key(p) != key(prev)]
            nxts = [p for p in nxts if key(p) not in seen]
            if not nxts: break
            prev, cur = cur, nxts[0]; path.append(cur)
        if len(path) > 6: paths.append(path)
    return paths

def to_svg_path(pts, sx, sy):
    """Catmull-Rom -> cubic bezier for smooth organic contours."""
    P = [(p[0] * sx, p[1] * sy) for p in pts]
    if len(P) < 3: return ""
    d = f"M {P[0][0]:.1f} {P[0][1]:.1f}"
    for i in range(len(P) - 1):
        p0 = P[i - 1] if i > 0 else P[i]
        p1, p2 = P[i], P[i + 1]
        p3 = P[i + 2] if i + 2 < len(P) else P[i + 1]
        c1 = (p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6)
        c2 = (p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6)
        d += f" C {c1[0]:.1f} {c1[1]:.1f} {c2[0]:.1f} {c2[1]:.1f} {p2[0]:.1f} {p2[1]:.1f}"
    return d

sx, sy = W / (GW - 1), H / (GH - 1)
contour_paths = []
levels = np.linspace(field.min() + 0.012, field.max() - 0.006, 34)
for li, lv in enumerate(levels):
    for pts in chain(contour_segments(field, lv)):
        contour_paths.append((to_svg_path(pts, sx, sy), li / len(levels)))
print(f"contours: {len(contour_paths)} paths")
np.save('field.npy', field)
import json
json.dump(contour_paths, open('contours.json','w'))
