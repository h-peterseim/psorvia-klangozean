# PSOrvia Klangozean

**Océano de rejilla reactivo al audio para tu web**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Demo en vivo con música](https://h-peterseim.github.io/psorvia-klangozean/demo.html)

Una rejilla en perspectiva tranquila como fondo de página. Reacciona a cualquier audio o vídeo de la página y se atenúa detrás de tu texto.

## Uso

```html
<script src="klangozean.js"></script>
<klang-ozean></klang-ozean>
```

```html
<script type="module" src="klangozean.esm.js"></script>
```

## Atributos

| Attribute | Default | |
|---|---|---|
| `color-a, color-b` | `#3ddc84, #40ccff` | Colores de línea, tema oscuro |
| `color-a-light, color-b-light` | `#0a6b38, #0d5c85` | Colores de línea, tema claro |
| `density` | `1 (0.3-3)` | Densidad de la rejilla |
| `line-width` | `0.7 (0.3-3)` | Grosor de línea |
| `opacity` | `1 (0-1)` | Opacidad |
| `reactivity` | `1 (0-3)` | Intensidad de reacción |
| `horizon` | `0.64 (0.2-0.9)` | Altura del horizonte |
| `audio` | `audio, video` | Fuente de audio (selector CSS) |
| `fade-text` | `h1, h2, h3, p, li` | Atenuar tras el texto (selector u off) |
| `max-fps` | `30` | Límite de fotogramas |
| `start` | `idle` | Inicio: `immediate`, `idle` (tras la carga, con el navegador libre) o `interaction` (primera acción) |
| `software-fallback` | `on` | Sin GPU o si dibuja demasiado lento: degradado estático (`off` lo desactiva) |
| `frame-guard` | `on` | Detiene la animación cuando los fotogramas tardan siempre más de 8 ms (`off` lo desactiva) |

Funciona en las versiones actuales de Chrome, Edge y Firefox con WebGL. Sin WebGL verás un degradado suave; con movimiento reducido, una imagen fija.

PSOrvia Klangozean funciona como fondo de [psorvia.io](https://psorvia.io). Página de demostración: **[h-peterseim.github.io/psorvia-klangozean/demo.html](https://h-peterseim.github.io/psorvia-klangozean/demo.html)**

## Colores propios y fuente de audio propia

Define tus colores como atributos y conecta un micrófono con `useAnalyser` (inícialo con un clic):

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

## Accesibilidad

Con movimiento reducido la rejilla se dibuja como imagen fija. Detrás de títulos y texto se atenúa (`fade-text`), así todo sigue siendo legible.

## Rendimiento

La tasa de fotogramas está limitada (`max-fps`), el dibujo se pausa en pestañas ocultas y se reduce en dispositivos móviles. El script pesa unos 18 KB, unos 7 KB con gzip, sin dependencias.

## Traducciones

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licencia

El código tiene licencia MIT (véase [LICENSE](../../LICENSE)). El archivo de música de la demostración tendrá su propia licencia: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).
