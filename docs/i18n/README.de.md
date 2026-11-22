# PSOrvia Klangozean

**Audioreaktiver Gitter-Ozean für deine Website**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Live-Demo mit Musik](https://h-peterseim.github.io/psorvia-klangozean/demo.html)

Ein ruhiges Perspektivgitter als Seitenhintergrund. Es reagiert auf jedes Audio und Video der Seite und blendet sich hinter deinem Text aus.

## Einbindung

```html
<script src="klangozean.js"></script>
<klang-ozean></klang-ozean>
```

```html
<script type="module" src="klangozean.esm.js"></script>
```

## Attribute

| Attribute | Default | |
|---|---|---|
| `color-a, color-b` | `#3ddc84, #40ccff` | Linienfarben, dunkles Thema |
| `color-a-light, color-b-light` | `#0a6b38, #0d5c85` | Linienfarben, helles Thema |
| `density` | `1 (0.3-3)` | Gitterdichte |
| `line-width` | `0.7 (0.3-3)` | Linienstärke |
| `opacity` | `1 (0-1)` | Deckkraft |
| `reactivity` | `1 (0-3)` | Reaktionsstärke |
| `horizon` | `0.64 (0.2-0.9)` | Horizonthöhe |
| `audio` | `audio, video` | Audioquelle (CSS-Selektor) |
| `fade-text` | `h1, h2, h3, p, li` | Abschwächen hinter Text (Selektor oder off) |
| `max-fps` | `30` | Bildraten-Grenze |
| `start` | `idle` | Start: `immediate`, `idle` (nach dem Laden, wenn der Browser frei ist) oder `interaction` (erste Eingabe) |
| `software-fallback` | `on` | Ohne GPU oder bei zu langsamem Zeichnen: ruhiger statischer Verlauf (`off` schaltet ab) |
| `frame-guard` | `on` | Hält die Animation an, wenn Bilder dauerhaft über 8 ms brauchen (`off` schaltet ab) |

Läuft in aktuellem Chrome, Edge und Firefox mit WebGL. Ohne WebGL gibt es einen ruhigen Verlauf, bei reduzierter Bewegung ein Standbild.

PSOrvia Klangozean läuft als Hintergrund von [psorvia.io](https://psorvia.io). Demo-Seite: **[h-peterseim.github.io/psorvia-klangozean/demo.html](https://h-peterseim.github.io/psorvia-klangozean/demo.html)**

## Eigene Farben und eigene Audioquelle

Setze deine Farben als Attribute und speise ein Mikrofon über `useAnalyser` ein (per Klick starten):

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

## Barrierefreiheit

Bei reduzierter Bewegung wird das Gitter als Standbild gezeichnet. Hinter Überschriften und Text blendet es sich aus (`fade-text`), alles bleibt lesbar.

## Leistung

Die Bildrate ist begrenzt (`max-fps`), das Zeichnen pausiert in verborgenen Tabs und wird auf Mobilgeräten gedrosselt. Das Skript hat etwa 18 KB, gzip etwa 7 KB, ohne Abhängigkeiten.

## Übersetzungen

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Lizenz

Der Code steht unter der MIT-Lizenz (siehe [LICENSE](../../LICENSE)). Die Demo-Musik (`media/klangozean-demo.mp3`) steht unter [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Namensnennung „Petit Souris / psorvia.io“ (siehe [media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).
