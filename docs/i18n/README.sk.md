# PSOrvia Klangozean

**Zvukovo reagujúci mriežkový oceán pre tvoj web**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Živá ukážka s hudbou](https://h-peterseim.github.io/psorvia-klangozean/demo.html)

Pokojná perspektívna mriežka ako pozadie stránky. Reaguje na každý zvuk a video na stránke a za tvojím textom sa tlmí.

## Vloženie

```html
<script src="klangozean.js"></script>
<klang-ozean></klang-ozean>
```

```html
<script type="module" src="klangozean.esm.js"></script>
```

## Atribúty

| Attribute | Default | |
|---|---|---|
| `color-a, color-b` | `#3ddc84, #40ccff` | Farby čiar, tmavá téma |
| `color-a-light, color-b-light` | `#0a6b38, #0d5c85` | Farby čiar, svetlá téma |
| `density` | `1 (0.3-3)` | Hustota mriežky |
| `line-width` | `0.7 (0.3-3)` | Hrúbka čiary |
| `opacity` | `1 (0-1)` | Priehľadnosť |
| `reactivity` | `1 (0-3)` | Sila reakcie |
| `horizon` | `0.64 (0.2-0.9)` | Výška horizontu |
| `audio` | `audio, video` | Zdroj zvuku (CSS selektor) |
| `fade-text` | `h1, h2, h3, p, li` | Tlmenie za textom (selektor alebo off) |
| `max-fps` | `30` | Limit snímok za sekundu |
| `start` | `idle` | Štart: `immediate`, `idle` (po načítaní, keď je prehliadač voľný) alebo `interaction` (prvý vstup) |
| `software-fallback` | `on` | Bez GPU alebo pri príliš pomalom vykresľovaní: statický prechod (`off` vypne) |
| `frame-guard` | `on` | Zastaví animáciu, keď snímky trvalo trvajú dlhšie ako 8 ms (`off` vypne) |

Funguje v aktuálnych prehliadačoch Chrome, Edge a Firefox s WebGL. Bez WebGL dostaneš pokojný prechod, pri obmedzenom pohybe statický obraz.

PSOrvia Klangozean beží ako pozadie webu [psorvia.io](https://psorvia.io). Ukážková stránka: **[h-peterseim.github.io/psorvia-klangozean/demo.html](https://h-peterseim.github.io/psorvia-klangozean/demo.html)**

## Vlastné farby a vlastný zdroj zvuku

Nastav farby ako atribúty a priveď mikrofón cez `useAnalyser` (spusti ho kliknutím):

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

## Prístupnosť

Pri obmedzenom pohybe sa mriežka vykreslí ako statický obrázok. Za nadpismi a textom sa stlmí (`fade-text`), takže všetko zostane čitateľné.

## Výkon

Snímková frekvencia je obmedzená (`max-fps`), vykresľovanie sa zastaví v skrytých kartách a na mobilných zariadeniach sa obmedzí. Skript má asi 18 KB, asi 7 KB po gzip, bez závislostí.

## Preklady

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licencia

Kód je pod licenciou MIT (pozri [LICENSE](../../LICENSE)). Hudobný súbor ukážky dostane vlastnú licenciu: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).
