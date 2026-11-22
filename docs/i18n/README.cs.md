# PSOrvia Klangozean

**Zvukově reagující mřížkový oceán pro tvůj web**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Živá ukázka s hudbou](https://h-peterseim.github.io/psorvia-klangozean/demo.html)

Klidná perspektivní mřížka jako pozadí stránky. Reaguje na každé audio i video na stránce a za tvým textem se ztlumí.

## Vložení

```html
<script src="klangozean.js"></script>
<klang-ozean></klang-ozean>
```

```html
<script type="module" src="klangozean.esm.js"></script>
```

## Atributy

| Attribute | Default | |
|---|---|---|
| `color-a, color-b` | `#3ddc84, #40ccff` | Barvy čar, tmavé téma |
| `color-a-light, color-b-light` | `#0a6b38, #0d5c85` | Barvy čar, světlé téma |
| `density` | `1 (0.3-3)` | Hustota mřížky |
| `line-width` | `0.7 (0.3-3)` | Tloušťka čáry |
| `opacity` | `1 (0-1)` | Průhlednost |
| `reactivity` | `1 (0-3)` | Síla reakce |
| `horizon` | `0.64 (0.2-0.9)` | Výška horizontu |
| `audio` | `audio, video` | Zdroj zvuku (CSS selektor) |
| `fade-text` | `h1, h2, h3, p, li` | Ztlumení za textem (selektor nebo off) |
| `max-fps` | `30` | Limit snímků za sekundu |
| `start` | `idle` | Start: `immediate`, `idle` (po načtení, když je prohlížeč volný) nebo `interaction` (první vstup) |
| `software-fallback` | `on` | Bez GPU nebo při příliš pomalém vykreslování: statický přechod (`off` vypne) |
| `frame-guard` | `on` | Zastaví animaci, když snímky trvale trvají déle než 8 ms (`off` vypne) |

Funguje v aktuálním Chrome, Edge a Firefox s WebGL. Bez WebGL dostaneš klidný přechod, při omezeném pohybu statický obraz.

PSOrvia Klangozean běží jako pozadí webu [psorvia.io](https://psorvia.io). Ukázková stránka: **[h-peterseim.github.io/psorvia-klangozean/demo.html](https://h-peterseim.github.io/psorvia-klangozean/demo.html)**

## Vlastní barvy a vlastní zdroj zvuku

Nastav barvy jako atributy a přiveď mikrofon přes `useAnalyser` (spusť ho kliknutím):

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

## Přístupnost

Při omezeném pohybu se mřížka vykreslí jako statický obrázek. Za nadpisy a textem se ztlumí (`fade-text`), takže vše zůstane čitelné.

## Výkon

Snímková frekvence je omezená (`max-fps`), vykreslování se zastaví ve skrytých kartách a na mobilních zařízeních se omezí. Skript má asi 18 KB, asi 7 KB po gzip, bez závislostí.

## Překlady

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licence

Kód je pod licencí MIT (viz [LICENSE](../../LICENSE)). Hudební soubor ukázky dostane vlastní licenci: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).
