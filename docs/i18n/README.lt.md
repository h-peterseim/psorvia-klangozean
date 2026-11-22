# PSOrvia Klangozean

**Garsui jautrus tinklelio vandenynas tavo svetainei**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Tiesioginė demonstracija su muzika](https://h-peterseim.github.io/psorvia-klangozean/demo.html)

Rami perspektyvinė tinklelio gija puslapio fonui. Ji reaguoja į bet kokį puslapio garsą ir vaizdo įrašą, o už tavo teksto pritemsta.

## Įtraukimas

```html
<script src="klangozean.js"></script>
<klang-ozean></klang-ozean>
```

```html
<script type="module" src="klangozean.esm.js"></script>
```

## Atributai

| Attribute | Default | |
|---|---|---|
| `color-a, color-b` | `#3ddc84, #40ccff` | Linijų spalvos, tamsi tema |
| `color-a-light, color-b-light` | `#0a6b38, #0d5c85` | Linijų spalvos, šviesi tema |
| `density` | `1 (0.3-3)` | Tinklelio tankis |
| `line-width` | `0.7 (0.3-3)` | Linijos storis |
| `opacity` | `1 (0-1)` | Nepermatomumas |
| `reactivity` | `1 (0-3)` | Reakcijos stiprumas |
| `horizon` | `0.64 (0.2-0.9)` | Horizonto aukštis |
| `audio` | `audio, video` | Garso šaltinis (CSS parinkiklis) |
| `fade-text` | `h1, h2, h3, p, li` | Pritemimas už teksto (parinkiklis arba off) |
| `max-fps` | `30` | Kadrų dažnio riba |
| `start` | `idle` | Paleidimas: `immediate`, `idle` (po įkėlimo, kai naršyklė laisva) arba `interaction` (pirmas veiksmas) |
| `software-fallback` | `on` | Be GPU arba per lėtai piešiant: statinis perėjimas (`off` išjungia) |
| `frame-guard` | `on` | Sustabdo animaciją, kai kadrai nuolat trunka ilgiau nei 8 ms (`off` išjungia) |

Veikia dabartinėse Chrome, Edge ir Firefox su WebGL. Be WebGL gauni ramų gradientą, esant sumažintam judėjimui nejudantį vaizdą.

PSOrvia Klangozean veikia kaip svetainės [psorvia.io](https://psorvia.io) fonas. Demonstracinis puslapis: **[h-peterseim.github.io/psorvia-klangozean/demo.html](https://h-peterseim.github.io/psorvia-klangozean/demo.html)**

## Savos spalvos ir savas garso šaltinis

Nustatyk spalvas kaip atributus ir prijunk mikrofoną per `useAnalyser` (paleisk jį paspaudimu):

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

## Prieinamumas

Sumažinto judesio režimu tinklelis piešiamas kaip statinis vaizdas. Už antraščių ir teksto jis pritemsta (`fade-text`), todėl viskas lieka įskaitoma.

## Našumas

Kadrų dažnis ribojamas (`max-fps`), piešimas sustoja paslėptuose skirtukuose ir ribojamas mobiliuosiuose įrenginiuose. Skriptas užima apie 18 KB, apie 7 KB su gzip, be priklausomybių.

## Vertimai

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licencija

Kodas licencijuotas pagal MIT (žr. [LICENSE](../../LICENSE)). Demonstracijos muzikos failas turės savo licenciją: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).
