# PSOrvia Klangozean

**Oċean tal-grilja li jirreaġixxi għall-awdjo għas-sit tiegħek**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Demo diretta bil-mużika](https://h-peterseim.github.io/psorvia-klangozean/demo.html)

Grilja kalma fil-perspettiva bħala sfond tal-paġna. Tirreaġixxi għal kull awdjo u vidjo tal-paġna u tisfuma wara t-test tiegħek.

## Użu

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
| `color-a, color-b` | `#3ddc84, #40ccff` | Kuluri tal-linji, tema skura |
| `color-a-light, color-b-light` | `#0a6b38, #0d5c85` | Kuluri tal-linji, tema ċara |
| `density` | `1 (0.3-3)` | Densità tal-grilja |
| `line-width` | `0.7 (0.3-3)` | Ħxuna tal-linja |
| `opacity` | `1 (0-1)` | Opaċità |
| `reactivity` | `1 (0-3)` | Qawwa tar-reazzjoni |
| `horizon` | `0.64 (0.2-0.9)` | Għoli tal-orizzont |
| `audio` | `audio, video` | Sors tal-awdjo (selettur CSS) |
| `fade-text` | `h1, h2, h3, p, li` | Tisfumatura wara t-test (selettur jew off) |
| `max-fps` | `30` | Limitu tal-frejms |
| `start` | `idle` | Tnedija: `immediate`, `idle` (wara t-tagħbija, meta l-browser ikun liberu) jew `interaction` (l-ewwel input) |
| `software-fallback` | `on` | Mingħajr GPU jew meta jinġibed bil-mod żżejjed: gradjent statiku (`off` jitfih) |
| `frame-guard` | `on` | Iwaqqaf l-animazzjoni meta l-frejms dejjem jieħdu aktar minn 8 ms (`off` jitfih) |

Taħdem fl-aħħar verżjonijiet ta' Chrome, Edge u Firefox b'WebGL. Mingħajr WebGL tikseb gradjent kalm; b'moviment imnaqqas, stampa fissa.

PSOrvia Klangozean jaħdem bħala sfond ta' [psorvia.io](https://psorvia.io). Paġna tad-demo: **[h-peterseim.github.io/psorvia-klangozean/demo.html](https://h-peterseim.github.io/psorvia-klangozean/demo.html)**

## Kuluri tiegħek u sors tal-awdjo tiegħek

Issettja l-kuluri bħala attributi u ssaħħaħ mikrofonu permezz ta' `useAnalyser` (ibdih b'click):

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

## Aċċessibbiltà

B'moviment imnaqqas il-grilja tiġi mpinġija bħala immaġni fissa. Wara l-intestaturi u t-test tisfuma (`fade-text`), biex kollox jibqa' jinqara.

## Prestazzjoni

Ir-rata tal-frejms hija limitata (`max-fps`), it-tpinġija tieqaf fit-tabs moħbija u titnaqqas fuq apparati mobbli. L-iskrip huwa madwar 18 KB, madwar 7 KB bil-gzip, mingħajr dipendenzi.

## Traduzzjonijiet

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Liċenzja

Il-kodiċi huwa taħt il-liċenzja MIT (ara [LICENSE](../../LICENSE)). Il-fajl tal-mużika tad-demo se jkollu liċenzja tiegħu: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).
