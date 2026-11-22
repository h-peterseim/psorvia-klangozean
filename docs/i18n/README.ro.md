# PSOrvia Klangozean

**Ocean de grilă reactiv la sunet pentru site-ul tău**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Demo live cu muzică](https://h-peterseim.github.io/psorvia-klangozean/demo.html)

O grilă calmă în perspectivă ca fundal de pagină. Reacționează la orice sunet și video din pagină și se estompează în spatele textului tău.

## Utilizare

```html
<script src="klangozean.js"></script>
<klang-ozean></klang-ozean>
```

```html
<script type="module" src="klangozean.esm.js"></script>
```

## Atribute

| Attribute | Default | |
|---|---|---|
| `color-a, color-b` | `#3ddc84, #40ccff` | Culorile liniilor, temă întunecată |
| `color-a-light, color-b-light` | `#0a6b38, #0d5c85` | Culorile liniilor, temă luminoasă |
| `density` | `1 (0.3-3)` | Densitatea grilei |
| `line-width` | `0.7 (0.3-3)` | Grosimea liniei |
| `opacity` | `1 (0-1)` | Opacitate |
| `reactivity` | `1 (0-3)` | Intensitatea reacției |
| `horizon` | `0.64 (0.2-0.9)` | Înălțimea orizontului |
| `audio` | `audio, video` | Sursă audio (selector CSS) |
| `fade-text` | `h1, h2, h3, p, li` | Estompare în spatele textului (selector sau off) |
| `max-fps` | `30` | Limită de cadre pe secundă |
| `start` | `idle` | Pornire: `immediate`, `idle` (după încărcare, când browserul e liber) sau `interaction` (prima acțiune) |
| `software-fallback` | `on` | Fără GPU sau la desenare prea lentă: degrade static (`off` dezactivează) |
| `frame-guard` | `on` | Oprește animația când cadrele durează constant peste 8 ms (`off` dezactivează) |

Funcționează în versiunile actuale de Chrome, Edge și Firefox cu WebGL. Fără WebGL primești un degrade calm; cu mișcare redusă, o imagine statică.

PSOrvia Klangozean funcționează ca fundal pentru [psorvia.io](https://psorvia.io). Pagina demo: **[h-peterseim.github.io/psorvia-klangozean/demo.html](https://h-peterseim.github.io/psorvia-klangozean/demo.html)**

## Culori proprii și sursă audio proprie

Setează culorile ca atribute și conectează un microfon prin `useAnalyser` (pornește-l printr-un clic):

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

## Accesibilitate

Cu mișcare redusă, grila este desenată ca imagine statică. În spatele titlurilor și al textului se estompează (`fade-text`), astfel încât totul rămâne lizibil.

## Performanță

Rata de cadre este limitată (`max-fps`), desenarea se oprește în filele ascunse și este limitată pe dispozitivele mobile. Scriptul are circa 18 KB, circa 7 KB cu gzip, fără dependențe.

## Traduceri

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licență

Codul este sub licență MIT (vezi [LICENSE](../../LICENSE)). Fișierul muzical al demo-ului va avea propria licență: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).
