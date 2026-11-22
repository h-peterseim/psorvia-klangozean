# PSOrvia Klangozean

**Audio-reactive grid ocean for your website**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Live demo with music](https://h-peterseim.github.io/psorvia-klangozean/demo.html)

A calm perspective grid as page background. It reacts to any audio or video on the page and fades out behind your text.

## Usage

```html
<script src="klangozean.js"></script>
<klang-ozean></klang-ozean>
```

```html
<script type="module" src="klangozean.esm.js"></script>
```

## Attributes

| Attribute | Default | |
|---|---|---|
| `color-a, color-b` | `#3ddc84, #40ccff` | Line colors, dark theme |
| `color-a-light, color-b-light` | `#0a6b38, #0d5c85` | Line colors, light theme |
| `density` | `1 (0.3-3)` | Grid density |
| `line-width` | `0.7 (0.3-3)` | Line width |
| `opacity` | `1 (0-1)` | Opacity |
| `reactivity` | `1 (0-3)` | Reaction strength |
| `horizon` | `0.64 (0.2-0.9)` | Horizon height |
| `audio` | `audio, video` | Audio source (CSS selector) |
| `fade-text` | `h1, h2, h3, p, li` | Fade behind text (selector or off) |
| `max-fps` | `30` | Frame rate limit |
| `start` | `idle` | Start: `immediate`, `idle` (after load, when the browser is idle) or `interaction` (first input) |
| `software-fallback` | `on` | Without a GPU or when drawing is too slow: static gradient (`off` disables) |
| `frame-guard` | `on` | Stops the animation when frames keep taking over 8 ms (`off` disables) |

Works in current Chrome, Edge and Firefox with WebGL. By default the canvas starts after the page has loaded, when the browser is idle, so it never delays first paint. Without WebGL, without a GPU (software rendering) or when frames are too slow you get a calm static gradient; with reduced motion a still image.

## API

- `el.useAnalyser(analyserNode)` feeds your own Web Audio `AnalyserNode` (oscillator, microphone); `useAnalyser(null)` releases it.
- `el.simulate(true)` runs a built-in test signal without sound.
- Media from another origin is left untouched (it would otherwise go silent); use `useAnalyser` for it.

PSOrvia Klangozean runs as the background of [psorvia.io](https://psorvia.io). Demo page: **[h-peterseim.github.io/psorvia-klangozean/demo.html](https://h-peterseim.github.io/psorvia-klangozean/demo.html)**

## Own colors and own audio source

Set your colors as attributes and feed a microphone through `useAnalyser` (start it from a click):

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

## Accessibility

With reduced motion the grid is drawn as a still image. Behind headings and text it fades out (`fade-text`), so everything stays readable.

## Performance

The frame rate is limited (`max-fps`), drawing pauses in hidden tabs and is throttled on mobile devices. The script is about 18 KB, about 7 KB gzipped, without dependencies.

## Translations

[English](README.md) · [Deutsch](docs/i18n/README.de.md) · [Български](docs/i18n/README.bg.md) · [Čeština](docs/i18n/README.cs.md) · [Dansk](docs/i18n/README.da.md) · [Ελληνικά](docs/i18n/README.el.md) · [Español](docs/i18n/README.es.md) · [Eesti](docs/i18n/README.et.md) · [Suomi](docs/i18n/README.fi.md) · [Français](docs/i18n/README.fr.md) · [Gaeilge](docs/i18n/README.ga.md) · [Hrvatski](docs/i18n/README.hr.md) · [Magyar](docs/i18n/README.hu.md) · [Italiano](docs/i18n/README.it.md) · [Lietuvių](docs/i18n/README.lt.md) · [Latviešu](docs/i18n/README.lv.md) · [Malti](docs/i18n/README.mt.md) · [Norsk bokmål](docs/i18n/README.nb.md) · [Nederlands](docs/i18n/README.nl.md) · [Polski](docs/i18n/README.pl.md) · [Português](docs/i18n/README.pt.md) · [Română](docs/i18n/README.ro.md) · [Slovenčina](docs/i18n/README.sk.md) · [Slovenščina](docs/i18n/README.sl.md) · [Svenska](docs/i18n/README.sv.md) · [Türkçe](docs/i18n/README.tr.md)

## License

The code is MIT licensed (see [LICENSE](LICENSE)). The demo music (`media/klangozean-demo.mp3`) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), attribution "Petit Souris / psorvia.io" (see [media/LICENSE.md](media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).
