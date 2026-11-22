# PSOrvia Klangozean

**Heliga reageeriv ruudustikuookean sinu veebilehele**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Otsedemo muusikaga](https://h-peterseim.github.io/psorvia-klangozean/demo.html)

Rahulik perspektiivruudustik lehe taustaks. See reageerib iga lehel oleva heli ja video peale ning hajub sinu teksti taga.

## Kasutamine

```html
<script src="klangozean.js"></script>
<klang-ozean></klang-ozean>
```

```html
<script type="module" src="klangozean.esm.js"></script>
```

## Atribuudid

| Attribute | Default | |
|---|---|---|
| `color-a, color-b` | `#3ddc84, #40ccff` | Joonte värvid, tume teema |
| `color-a-light, color-b-light` | `#0a6b38, #0d5c85` | Joonte värvid, hele teema |
| `density` | `1 (0.3-3)` | Ruudustiku tihedus |
| `line-width` | `0.7 (0.3-3)` | Joone paksus |
| `opacity` | `1 (0-1)` | Läbipaistmatus |
| `reactivity` | `1 (0-3)` | Reaktsiooni tugevus |
| `horizon` | `0.64 (0.2-0.9)` | Horisondi kõrgus |
| `audio` | `audio, video` | Heliallikas (CSS-valija) |
| `fade-text` | `h1, h2, h3, p, li` | Hajumine teksti taga (valija või off) |
| `max-fps` | `30` | Kaadrisageduse piir |
| `start` | `idle` | Start: `immediate`, `idle` (pärast laadimist, kui brauser on vaba) või `interaction` (esimene sisend) |
| `software-fallback` | `on` | Ilma GPU-ta või liiga aeglase joonistamise korral: staatiline üleminek (`off` lülitab välja) |
| `frame-guard` | `on` | Peatab animatsiooni, kui kaadrid võtavad püsivalt üle 8 ms (`off` lülitab välja) |

Töötab praegustes Chrome'is, Edge'is ja Firefoxis koos WebGL-iga. Ilma WebGL-ita saad rahuliku üleminekuvärvi, vähendatud liikumisega staatilise pildi.

PSOrvia Klangozean töötab veebilehe [psorvia.io](https://psorvia.io) taustana. Demoleht: **[h-peterseim.github.io/psorvia-klangozean/demo.html](https://h-peterseim.github.io/psorvia-klangozean/demo.html)**

## Oma värvid ja oma heliallikas

Määra värvid atribuutidena ja suuna mikrofon `useAnalyser` kaudu (käivita see klõpsuga):

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

## Juurdepääsetavus

Vähendatud liikumise korral joonistatakse ruudustik staatilise pildina. Pealkirjade ja teksti taga see hajub (`fade-text`), nii jääb kõik loetavaks.

## Jõudlus

Kaadrisagedus on piiratud (`max-fps`), joonistamine peatub peidetud vahelehtedel ja mobiilseadmetel seda piiratakse. Skript on umbes 18 KB, gzipiga umbes 7 KB, sõltuvusteta.

## Tõlked

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Litsents

Kood on MIT-litsentsiga (vt [LICENSE](../../LICENSE)). Demo muusikafail saab oma litsentsi: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).
