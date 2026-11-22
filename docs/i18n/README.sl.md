# PSOrvia Klangozean

**Mrežni ocean, ki se odziva na zvok, za tvojo spletno stran**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Predstavitev v živo z glasbo](https://h-peterseim.github.io/psorvia-klangozean/demo.html)

Mirna perspektivna mreža kot ozadje strani. Odziva se na vsak zvok in video na strani, za tvojim besedilom pa se zatemni.

## Vključitev

```html
<script src="klangozean.js"></script>
<klang-ozean></klang-ozean>
```

```html
<script type="module" src="klangozean.esm.js"></script>
```

## Atributi

| Attribute | Default | |
|---|---|---|
| `color-a, color-b` | `#3ddc84, #40ccff` | Barve črt, temna tema |
| `color-a-light, color-b-light` | `#0a6b38, #0d5c85` | Barve črt, svetla tema |
| `density` | `1 (0.3-3)` | Gostota mreže |
| `line-width` | `0.7 (0.3-3)` | Debelina črte |
| `opacity` | `1 (0-1)` | Prekrivnost |
| `reactivity` | `1 (0-3)` | Moč odziva |
| `horizon` | `0.64 (0.2-0.9)` | Višina obzorja |
| `audio` | `audio, video` | Vir zvoka (izbirnik CSS) |
| `fade-text` | `h1, h2, h3, p, li` | Zatemnitev za besedilom (izbirnik ali off) |
| `max-fps` | `30` | Omejitev sličic na sekundo |
| `start` | `idle` | Zagon: `immediate`, `idle` (po nalaganju, ko je brskalnik prost) ali `interaction` (prvi vnos) |
| `software-fallback` | `on` | Brez GPE ali pri prepočasnem risanju: statičen prehod (`off` izklopi) |
| `frame-guard` | `on` | Ustavi animacijo, ko sličice stalno trajajo dlje kot 8 ms (`off` izklopi) |

Deluje v trenutnih brskalnikih Chrome, Edge in Firefox z WebGL. Brez WebGL dobiš miren prehod, pri zmanjšanem gibanju mirujočo sliko.

PSOrvia Klangozean deluje kot ozadje strani [psorvia.io](https://psorvia.io). Predstavitvena stran: **[h-peterseim.github.io/psorvia-klangozean/demo.html](https://h-peterseim.github.io/psorvia-klangozean/demo.html)**

## Lastne barve in lasten vir zvoka

Barve nastavi kot atribute in priključi mikrofon prek `useAnalyser` (zaženi ga s klikom):

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

## Dostopnost

Pri zmanjšanem gibanju se mreža nariše kot mirujoča slika. Za naslovi in besedilom se zatemni (`fade-text`), zato vse ostane berljivo.

## Zmogljivost

Hitrost sličic je omejena (`max-fps`), risanje se ustavi v skritih zavihkih in se omeji na mobilnih napravah. Skripta ima okoli 18 KB, okoli 7 KB z gzipom, brez odvisnosti.

## Prevodi

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licenca

Koda ima licenco MIT (glej [LICENSE](../../LICENSE)). Glasbena datoteka predstavitve bo imela svojo licenco: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).
