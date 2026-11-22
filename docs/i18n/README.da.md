# PSOrvia Klangozean

**Lydreaktivt gitterhav til din hjemmeside**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Live-demo med musik](https://h-peterseim.github.io/psorvia-klangozean/demo.html)

Et roligt perspektivgitter som sidebaggrund. Det reagerer på al lyd og video på siden og toner ud bag din tekst.

## Indsættelse

```html
<script src="klangozean.js"></script>
<klang-ozean></klang-ozean>
```

```html
<script type="module" src="klangozean.esm.js"></script>
```

## Attributter

| Attribute | Default | |
|---|---|---|
| `color-a, color-b` | `#3ddc84, #40ccff` | Linjefarver, mørkt tema |
| `color-a-light, color-b-light` | `#0a6b38, #0d5c85` | Linjefarver, lyst tema |
| `density` | `1 (0.3-3)` | Gittertæthed |
| `line-width` | `0.7 (0.3-3)` | Linjebredde |
| `opacity` | `1 (0-1)` | Dækevne |
| `reactivity` | `1 (0-3)` | Reaktionsstyrke |
| `horizon` | `0.64 (0.2-0.9)` | Horisonthøjde |
| `audio` | `audio, video` | Lydkilde (CSS-vælger) |
| `fade-text` | `h1, h2, h3, p, li` | Tone ud bag tekst (vælger eller off) |
| `max-fps` | `30` | Billedhastighedsgrænse |
| `start` | `idle` | Start: `immediate`, `idle` (efter indlæsning, når browseren er ledig) eller `interaction` (første input) |
| `software-fallback` | `on` | Uden GPU eller ved for langsom tegning: statisk forløb (`off` slår fra) |
| `frame-guard` | `on` | Stopper animationen, når billeder konstant tager over 8 ms (`off` slår fra) |

Virker i nuværende Chrome, Edge og Firefox med WebGL. Uden WebGL får du en rolig overgang, ved reduceret bevægelse et stillbillede.

PSOrvia Klangozean kører som baggrund på [psorvia.io](https://psorvia.io). Demoside: **[h-peterseim.github.io/psorvia-klangozean/demo.html](https://h-peterseim.github.io/psorvia-klangozean/demo.html)**

## Egne farver og egen lydkilde

Angiv dine farver som attributter og send en mikrofon ind via `useAnalyser` (start den med et klik):

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

## Tilgængelighed

Med reduceret bevægelse tegnes gitteret som et stillbillede. Bag overskrifter og tekst toner det ud (`fade-text`), så alt forbliver læseligt.

## Ydeevne

Billedhastigheden er begrænset (`max-fps`), tegningen holder pause i skjulte faner og drosles på mobile enheder. Scriptet er cirka 18 KB, cirka 7 KB med gzip, uden afhængigheder.

## Oversættelser

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licens

Koden har MIT-licens (se [LICENSE](../../LICENSE)). Demoens musikfil får sin egen licens: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).
