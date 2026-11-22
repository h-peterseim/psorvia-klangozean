# PSOrvia Klangozean

**Äänelle reagoiva ruudukkomeri verkkosivullesi**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Live-demo musiikin kanssa](https://h-peterseim.github.io/psorvia-klangozean/demo.html)

Rauhallinen perspektiiviruudukko sivun taustana. Se reagoi sivun jokaiseen ääneen ja videoon ja vaimenee tekstisi takana.

## Käyttö

```html
<script src="klangozean.js"></script>
<klang-ozean></klang-ozean>
```

```html
<script type="module" src="klangozean.esm.js"></script>
```

## Attribuutit

| Attribute | Default | |
|---|---|---|
| `color-a, color-b` | `#3ddc84, #40ccff` | Viivojen värit, tumma teema |
| `color-a-light, color-b-light` | `#0a6b38, #0d5c85` | Viivojen värit, vaalea teema |
| `density` | `1 (0.3-3)` | Ruudukon tiheys |
| `line-width` | `0.7 (0.3-3)` | Viivan paksuus |
| `opacity` | `1 (0-1)` | Peittävyys |
| `reactivity` | `1 (0-3)` | Reaktion voimakkuus |
| `horizon` | `0.64 (0.2-0.9)` | Horisontin korkeus |
| `audio` | `audio, video` | Äänilähde (CSS-valitsin) |
| `fade-text` | `h1, h2, h3, p, li` | Vaimennus tekstin takana (valitsin tai off) |
| `max-fps` | `30` | Kuvataajuuden raja |
| `start` | `idle` | Käynnistys: `immediate`, `idle` (latauksen jälkeen, kun selain on vapaa) tai `interaction` (ensimmäinen syöte) |
| `software-fallback` | `on` | Ilman GPU:ta tai liian hitaalla piirtämisellä: staattinen liukuväri (`off` poistaa käytöstä) |
| `frame-guard` | `on` | Pysäyttää animaation, kun kuvat kestävät jatkuvasti yli 8 ms (`off` poistaa käytöstä) |

Toimii nykyisissä Chromessa, Edgessä ja Firefoxissa WebGL:n kanssa. Ilman WebGL:ää saat rauhallisen liukuvärin, vähennetyllä liikkeellä pysäytyskuvan.

PSOrvia Klangozean toimii sivuston [psorvia.io](https://psorvia.io) taustana. Demosivu: **[h-peterseim.github.io/psorvia-klangozean/demo.html](https://h-peterseim.github.io/psorvia-klangozean/demo.html)**

## Omat värit ja oma äänilähde

Aseta värit attribuuteiksi ja syötä mikrofoni `useAnalyser`-metodilla (käynnistä se napsautuksella):

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

## Saavutettavuus

Vähennetyllä liikkeellä ruudukko piirretään pysäytyskuvana. Otsikoiden ja tekstin takana se häivytetään (`fade-text`), joten kaikki pysyy luettavana.

## Suorituskyky

Kuvataajuus on rajattu (`max-fps`), piirto keskeytyy piilotetuissa välilehdissä ja sitä rajoitetaan mobiililaitteilla. Skripti on noin 18 KB, noin 7 KB gzip-pakattuna, ilman riippuvuuksia.

## Käännökset

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Lisenssi

Koodi on MIT-lisenssillä (ks. [LICENSE](../../LICENSE)). Demon musiikkitiedosto saa oman lisenssinsä: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).
