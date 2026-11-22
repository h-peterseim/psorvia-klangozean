# PSOrvia Klangozean

**Oceano a griglia reattivo all'audio per il tuo sito**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Demo dal vivo con musica](https://h-peterseim.github.io/psorvia-klangozean/demo.html)

Una calma griglia in prospettiva come sfondo della pagina. Reagisce a ogni audio e video della pagina e si attenua dietro il tuo testo.

## Utilizzo

```html
<script src="klangozean.js"></script>
<klang-ozean></klang-ozean>
```

```html
<script type="module" src="klangozean.esm.js"></script>
```

## Attributi

| Attribute | Default | |
|---|---|---|
| `color-a, color-b` | `#3ddc84, #40ccff` | Colori delle linee, tema scuro |
| `color-a-light, color-b-light` | `#0a6b38, #0d5c85` | Colori delle linee, tema chiaro |
| `density` | `1 (0.3-3)` | Densità della griglia |
| `line-width` | `0.7 (0.3-3)` | Spessore della linea |
| `opacity` | `1 (0-1)` | Opacità |
| `reactivity` | `1 (0-3)` | Intensità di reazione |
| `horizon` | `0.64 (0.2-0.9)` | Altezza dell'orizzonte |
| `audio` | `audio, video` | Sorgente audio (selettore CSS) |
| `fade-text` | `h1, h2, h3, p, li` | Attenuazione dietro il testo (selettore oppure off) |
| `max-fps` | `30` | Limite di fotogrammi |
| `start` | `idle` | Avvio: `immediate`, `idle` (dopo il caricamento, a browser libero) o `interaction` (primo input) |
| `software-fallback` | `on` | Senza GPU o con disegno troppo lento: sfumatura statica (`off` disattiva) |
| `frame-guard` | `on` | Ferma l'animazione quando i fotogrammi superano stabilmente 8 ms (`off` disattiva) |

Funziona nelle versioni attuali di Chrome, Edge e Firefox con WebGL. Senza WebGL ottieni una sfumatura tranquilla; con movimento ridotto, un'immagine fissa.

PSOrvia Klangozean fa da sfondo a [psorvia.io](https://psorvia.io). Pagina demo: **[h-peterseim.github.io/psorvia-klangozean/demo.html](https://h-peterseim.github.io/psorvia-klangozean/demo.html)**

## Colori propri e sorgente audio propria

Imposta i colori come attributi e collega un microfono con `useAnalyser` (avvialo con un clic):

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

## Accessibilità

Con movimento ridotto la griglia viene disegnata come immagine fissa. Dietro titoli e testo si attenua (`fade-text`), così tutto resta leggibile.

## Prestazioni

Il frame rate è limitato (`max-fps`), il disegno si ferma nelle schede nascoste e viene ridotto sui dispositivi mobili. Lo script pesa circa 18 KB, circa 7 KB con gzip, senza dipendenze.

## Traduzioni

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licenza

Il codice è sotto licenza MIT (vedi [LICENSE](../../LICENSE)). Il file musicale della demo avrà una propria licenza: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).
