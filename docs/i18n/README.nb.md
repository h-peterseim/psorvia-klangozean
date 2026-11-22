# PSOrvia Klangozean

**Lydreaktivt rutenetthav for nettstedet ditt**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Live-demo med musikk](https://h-peterseim.github.io/psorvia-klangozean/demo.html)

Et rolig perspektivrutenett som sidebakgrunn. Det reagerer på all lyd og video på siden og tones ut bak teksten din.

## Bruk

```html
<script src="klangozean.js"></script>
<klang-ozean></klang-ozean>
```

```html
<script type="module" src="klangozean.esm.js"></script>
```

## Attributter

| Attributt | Standard | |
|---|---|---|
| `color-a, color-b` | `#3ddc84, #40ccff` | Linjefarger, mørkt tema |
| `color-a-light, color-b-light` | `#0a6b38, #0d5c85` | Linjefarger, lyst tema |
| `density` | `1 (0.3-3)` | Rutenettets tetthet |
| `line-width` | `0.7 (0.3-3)` | Linjebredde |
| `opacity` | `1 (0-1)` | Dekkevne |
| `reactivity` | `1 (0-3)` | Reaksjonsstyrke |
| `horizon` | `0.64 (0.2-0.9)` | Horisonthøyde |
| `audio` | `audio, video` | Lydkilde (CSS-velger) |
| `fade-text` | `h1, h2, h3, p, li` | Tone ut bak tekst (velger eller av) |
| `max-fps` | `30` | Bildefrekvensgrense |
| `start` | `idle` | Start: `immediate`, `idle` (etter lasting, når nettleseren er ledig) eller `interaction` (første inndata) |
| `software-fallback` | `on` | Uten GPU eller ved for treg tegning: statisk overgang (`off` slår av) |
| `frame-guard` | `on` | Stopper animasjonen når bilder stadig bruker over 8 ms (`off` slår av) |

Fungerer i gjeldende versjoner av Chrome, Edge og Firefox med WebGL. Uten WebGL får du en rolig gradient; med redusert bevegelse et stillbilde.

## API

- `el.useAnalyser(analyserNode)` mater din egen Web Audio-`AnalyserNode` (oscillator, mikrofon); `useAnalyser(null)` frigir den.
- `el.simulate(true)` kjører et innebygd testsignal uten lyd.
- Medier fra en annen opprinnelse berøres ikke (ellers ville de blitt stille); bruk `useAnalyser` for dem.

PSOrvia Klangozean kjører som bakgrunn på [psorvia.io](https://psorvia.io). Demoside: **[h-peterseim.github.io/psorvia-klangozean/demo.html](https://h-peterseim.github.io/psorvia-klangozean/demo.html)**

## Egne farger og egen lydkilde

Sett fargene dine som attributter og mat en mikrofon gjennom `useAnalyser` (start den fra et klikk):

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

## Tilgjengelighet

Med redusert bevegelse tegnes rutenettet som et stillbilde. Bak overskrifter og tekst tones det ut (`fade-text`), slik at alt forblir lesbart.

## Ytelse

Bildefrekvensen er begrenset (`max-fps`), tegningen settes på pause i skjulte faner og dempes på mobile enheter. Skriptet er omtrent 18 KB, omtrent 7 KB gzippet, uten avhengigheter.

## Oversettelser

[English](README.md) · [Deutsch](docs/i18n/README.de.md) · [Български](docs/i18n/README.bg.md) · [Čeština](docs/i18n/README.cs.md) · [Dansk](docs/i18n/README.da.md) · [Ελληνικά](docs/i18n/README.el.md) · [Español](docs/i18n/README.es.md) · [Eesti](docs/i18n/README.et.md) · [Suomi](docs/i18n/README.fi.md) · [Français](docs/i18n/README.fr.md) · [Gaeilge](docs/i18n/README.ga.md) · [Hrvatski](docs/i18n/README.hr.md) · [Magyar](docs/i18n/README.hu.md) · [Italiano](docs/i18n/README.it.md) · [Lietuvių](docs/i18n/README.lt.md) · [Latviešu](docs/i18n/README.lv.md) · [Malti](docs/i18n/README.mt.md) · [Norsk bokmål](docs/i18n/README.nb.md) · [Nederlands](docs/i18n/README.nl.md) · [Polski](docs/i18n/README.pl.md) · [Português](docs/i18n/README.pt.md) · [Română](docs/i18n/README.ro.md) · [Slovenčina](docs/i18n/README.sk.md) · [Slovenščina](docs/i18n/README.sl.md) · [Svenska](docs/i18n/README.sv.md) · [Türkçe](docs/i18n/README.tr.md)

## Lisens

Koden er lisensiert under MIT (se [LICENSE](LICENSE)). Demomusikken (`media/klangozean-demo.mp3`) er lisensiert under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), navngivelse «Petit Souris / psorvia.io» (se [media/LICENSE.md](media/LICENSE.md)).

SPDX-License-Identifier: MIT

Laget for [psorvia.io](https://psorvia.io).
