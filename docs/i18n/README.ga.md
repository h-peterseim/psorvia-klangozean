# PSOrvia Klangozean

**Aigéan greille a fhreagraíonn don fhuaim do do shuíomh gréasáin**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Taispeántas beo le ceol](https://h-peterseim.github.io/psorvia-klangozean/demo.html)

Greille peirspictíochta chiúin mar chúlra leathanaigh. Freagraíonn sí d'aon fhuaim nó físeán ar an leathanach agus laghdaíonn sí taobh thiar de do théacs.

## Úsáid

```html
<script src="klangozean.js"></script>
<klang-ozean></klang-ozean>
```

```html
<script type="module" src="klangozean.esm.js"></script>
```

## Tréithe

| Attribute | Default | |
|---|---|---|
| `color-a, color-b` | `#3ddc84, #40ccff` | Dathanna línte, téama dorcha |
| `color-a-light, color-b-light` | `#0a6b38, #0d5c85` | Dathanna línte, téama geal |
| `density` | `1 (0.3-3)` | Dlús na greille |
| `line-width` | `0.7 (0.3-3)` | Tiús líne |
| `opacity` | `1 (0-1)` | Teimhneacht |
| `reactivity` | `1 (0-3)` | Neart freagartha |
| `horizon` | `0.64 (0.2-0.9)` | Airde na spéire |
| `audio` | `audio, video` | Foinse fuaime (roghnóir CSS) |
| `fade-text` | `h1, h2, h3, p, li` | Laghdú taobh thiar de théacs (roghnóir nó off) |
| `max-fps` | `30` | Teorainn fráma |
| `start` | `idle` | Tosú: `immediate`, `idle` (tar éis luchtú, nuair a bhíonn an brabhsálaí saor) nó `interaction` (an chéad ionchur) |
| `software-fallback` | `on` | Gan GPU nó nuair a tharraingítear rómhall: grádán statach (múchann `off` é) |
| `frame-guard` | `on` | Stopann an beochan nuair a thógann fráma níos mó ná 8 ms de shíor (múchann `off` é) |

Oibríonn sé i Chrome, Edge agus Firefox reatha le WebGL. Gan WebGL, gheobhaidh tú grádán ciúin; le gluaiseacht laghdaithe, íomhá statach.

Feidhmíonn PSOrvia Klangozean mar chúlra de [psorvia.io](https://psorvia.io). Leathanach taispeána: **[h-peterseim.github.io/psorvia-klangozean/demo.html](https://h-peterseim.github.io/psorvia-klangozean/demo.html)**

## Dathanna agus foinse fuaime féin

Socraigh do dhathanna mar aitreabúidí agus soláthair micreafón trí `useAnalyser` (tosaigh é le cliceáil):

```html
<klang-ozean id="ocean" color-a="#ff7a59" color-b="#ffd166"></klang-ozean>
<script>
document.querySelector('button').addEventListener('click', async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const ctx = new AudioContext();
  const analyser = ctx.createAnalyser();
  ctx.createMediaStreamSource(stream).connect(analyser);
  document.getElementById('ocean').useAnalyser(analyser);
});
</script>
```

## Inrochtaineacht

Le gluaiseacht laghdaithe, tarraingítear an greille mar íomhá statach. Taobh thiar de theideal agus de théacs laghdaíonn sí (`fade-text`), mar sin fanann gach rud inléite.

## Feidhmíocht

Tá an ráta fráma teoranta (`max-fps`), cuirtear an tarraingt ar sos i gcluaisíní folaithe agus moillítear í ar ghléasanna soghluaiste. Tá an script thart ar 18 KB, thart ar 7 KB le gzip, gan spleáchais.

## Aistriúcháin

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Ceadúnas

Tá an cód faoi cheadúnas MIT (féach [LICENSE](../../LICENSE)). Beidh ceadúnas dá chuid féin ag comhad ceoil an taispeána: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).
