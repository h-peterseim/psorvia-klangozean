# PSOrvia Klangozean

**Audioreactieve rasteroceaan voor je website**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Live demo met muziek](https://h-peterseim.github.io/psorvia-klangozean/demo.html)

Een rustig perspectiefraster als paginaachtergrond. Het reageert op alle audio en video op de pagina en vervaagt achter je tekst.

## Insluiten

```html
<script src="klangozean.js"></script>
<klang-ozean></klang-ozean>
```

```html
<script type="module" src="klangozean.esm.js"></script>
```

## Attributen

| Attribute | Default | |
|---|---|---|
| `color-a, color-b` | `#3ddc84, #40ccff` | Lijnkleuren, donker thema |
| `color-a-light, color-b-light` | `#0a6b38, #0d5c85` | Lijnkleuren, licht thema |
| `density` | `1 (0.3-3)` | Rasterdichtheid |
| `line-width` | `0.7 (0.3-3)` | Lijndikte |
| `opacity` | `1 (0-1)` | Dekking |
| `reactivity` | `1 (0-3)` | Reactiesterkte |
| `horizon` | `0.64 (0.2-0.9)` | Horizonhoogte |
| `audio` | `audio, video` | Audiobron (CSS-selector) |
| `fade-text` | `h1, h2, h3, p, li` | Vervagen achter tekst (selector of off) |
| `max-fps` | `30` | Framerate-limiet |
| `start` | `idle` | Start: `immediate`, `idle` (na het laden, als de browser vrij is) of `interaction` (eerste invoer) |
| `software-fallback` | `on` | Zonder GPU of bij te traag tekenen: statisch kleurverloop (`off` schakelt uit) |
| `frame-guard` | `on` | Stopt de animatie als beelden aanhoudend langer dan 8 ms duren (`off` schakelt uit) |

Werkt in actuele Chrome, Edge en Firefox met WebGL. Zonder WebGL krijg je een rustige kleurovergang, bij verminderde beweging een stilstaand beeld.

PSOrvia Klangozean draait als achtergrond van [psorvia.io](https://psorvia.io). Demopagina: **[h-peterseim.github.io/psorvia-klangozean/demo.html](https://h-peterseim.github.io/psorvia-klangozean/demo.html)**

## Eigen kleuren en eigen audiobron

Stel je kleuren in als attributen en voer een microfoon in via `useAnalyser` (start het met een klik):

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

## Toegankelijkheid

Bij beperkte beweging wordt het raster als stilstaand beeld getekend. Achter koppen en tekst vervaagt het (`fade-text`), zodat alles leesbaar blijft.

## Prestaties

De framerate is begrensd (`max-fps`), tekenen pauzeert in verborgen tabbladen en wordt op mobiele apparaten gedempt. Het script is ongeveer 18 KB, ongeveer 7 KB met gzip, zonder afhankelijkheden.

## Vertalingen

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licentie

De code valt onder de MIT-licentie (zie [LICENSE](../../LICENSE)). Het muziekbestand van de demo krijgt een eigen licentie: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).
