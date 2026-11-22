# PSOrvia Klangozean

**Hangra reagáló rácsóceán a weboldaladhoz**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Élő demó zenével](https://h-peterseim.github.io/psorvia-klangozean/demo.html)

Nyugodt perspektivikus rács oldalháttérként. Reagál az oldal minden hangjára és videójára, és a szöveged mögött elhalványul.

## Beépítés

```html
<script src="klangozean.js"></script>
<klang-ozean></klang-ozean>
```

```html
<script type="module" src="klangozean.esm.js"></script>
```

## Attribútumok

| Attribute | Default | |
|---|---|---|
| `color-a, color-b` | `#3ddc84, #40ccff` | Vonalszínek, sötét téma |
| `color-a-light, color-b-light` | `#0a6b38, #0d5c85` | Vonalszínek, világos téma |
| `density` | `1 (0.3-3)` | Rács sűrűsége |
| `line-width` | `0.7 (0.3-3)` | Vonalvastagság |
| `opacity` | `1 (0-1)` | Átlátszatlanság |
| `reactivity` | `1 (0-3)` | Reakció erőssége |
| `horizon` | `0.64 (0.2-0.9)` | Horizont magassága |
| `audio` | `audio, video` | Hangforrás (CSS-választó) |
| `fade-text` | `h1, h2, h3, p, li` | Elhalványítás a szöveg mögött (választó vagy off) |
| `max-fps` | `30` | Képkockasebesség-korlát |
| `start` | `idle` | Indítás: `immediate`, `idle` (betöltés után, ha a böngésző szabad) vagy `interaction` (első bevitel) |
| `software-fallback` | `on` | GPU nélkül vagy túl lassú rajzolásnál: statikus színátmenet (`off` kikapcsolja) |
| `frame-guard` | `on` | Leállítja az animációt, ha a képkockák tartósan 8 ms-nál tovább tartanak (`off` kikapcsolja) |

Működik az aktuális Chrome, Edge és Firefox böngészőkben WebGL-lel. WebGL nélkül nyugodt színátmenetet kapsz, csökkentett mozgásnál állóképet.

A PSOrvia Klangozean a [psorvia.io](https://psorvia.io) háttereként fut. Demóoldal: **[h-peterseim.github.io/psorvia-klangozean/demo.html](https://h-peterseim.github.io/psorvia-klangozean/demo.html)**

## Saját színek és saját hangforrás

Add meg a színeket attribútumként, és csatlakoztass mikrofont a `useAnalyser` segítségével (kattintásra indítsd):

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

## Akadálymentesség

Csökkentett mozgásnál a rács állóképként rajzolódik ki. A címsorok és a szöveg mögött elhalványul (`fade-text`), így minden olvasható marad.

## Teljesítmény

A képkockasebesség korlátozott (`max-fps`), a rajzolás szünetel a rejtett lapokon, és mobil eszközökön visszafogott. A szkript körülbelül 18 KB, gzippel körülbelül 7 KB, függőségek nélkül.

## Fordítások

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licenc

A kód MIT-licencű (lásd [LICENSE](../../LICENSE)). A demó zenefájlja saját licencet kap: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).
