# PSOrvia Klangozean

**Ljudreaktivt rutnätshav för din webbplats**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Livedemo med musik](https://h-peterseim.github.io/psorvia-klangozean/demo.html)

Ett lugnt perspektivrutnät som sidbakgrund. Det reagerar på allt ljud och all video på sidan och tonas ner bakom din text.

## Inbyggnad

```html
<script src="klangozean.js"></script>
<klang-ozean></klang-ozean>
```

```html
<script type="module" src="klangozean.esm.js"></script>
```

## Attribut

| Attribute | Default | |
|---|---|---|
| `color-a, color-b` | `#3ddc84, #40ccff` | Linjefärger, mörkt tema |
| `color-a-light, color-b-light` | `#0a6b38, #0d5c85` | Linjefärger, ljust tema |
| `density` | `1 (0.3-3)` | Rutnätstäthet |
| `line-width` | `0.7 (0.3-3)` | Linjetjocklek |
| `opacity` | `1 (0-1)` | Opacitet |
| `reactivity` | `1 (0-3)` | Reaktionsstyrka |
| `horizon` | `0.64 (0.2-0.9)` | Horisonthöjd |
| `audio` | `audio, video` | Ljudkälla (CSS-väljare) |
| `fade-text` | `h1, h2, h3, p, li` | Tona ner bakom text (väljare eller off) |
| `max-fps` | `30` | Bildfrekvensgräns |
| `start` | `idle` | Start: `immediate`, `idle` (efter laddning, när webbläsaren är ledig) eller `interaction` (första inmatningen) |
| `software-fallback` | `on` | Utan GPU eller vid för långsam ritning: statisk toning (`off` stänger av) |
| `frame-guard` | `on` | Stoppar animationen när bilder ständigt tar över 8 ms (`off` stänger av) |

Fungerar i aktuella Chrome, Edge och Firefox med WebGL. Utan WebGL får du en lugn toning, vid reducerad rörelse en stillbild.

PSOrvia Klangozean fungerar som bakgrund för [psorvia.io](https://psorvia.io). Demosida: **[h-peterseim.github.io/psorvia-klangozean/demo.html](https://h-peterseim.github.io/psorvia-klangozean/demo.html)**

## Egna färger och egen ljudkälla

Ange dina färger som attribut och mata in en mikrofon via `useAnalyser` (starta den med ett klick):

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

## Tillgänglighet

Med minskad rörelse ritas rutnätet som en stillbild. Bakom rubriker och text tonas det ner (`fade-text`), så allt förblir läsbart.

## Prestanda

Bildfrekvensen är begränsad (`max-fps`), ritningen pausar i dolda flikar och dras ner på mobila enheter. Skriptet är cirka 18 KB, cirka 7 KB med gzip, utan beroenden.

## Översättningar

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licens

Koden har MIT-licens (se [LICENSE](../../LICENSE)). Demons musikfil får en egen licens: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).
