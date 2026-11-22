# PSOrvia Klangozean

**Mrežasti ocean koji reagira na zvuk za tvoju web stranicu**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Demo uživo s glazbom](https://h-peterseim.github.io/psorvia-klangozean/demo.html)

Mirna perspektivna mreža kao pozadina stranice. Reagira na svaki zvuk i video na stranici, a iza tvog teksta se stišava.

## Uključivanje

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
| `color-a, color-b` | `#3ddc84, #40ccff` | Boje linija, tamna tema |
| `color-a-light, color-b-light` | `#0a6b38, #0d5c85` | Boje linija, svijetla tema |
| `density` | `1 (0.3-3)` | Gustoća mreže |
| `line-width` | `0.7 (0.3-3)` | Debljina linije |
| `opacity` | `1 (0-1)` | Neprozirnost |
| `reactivity` | `1 (0-3)` | Jačina reakcije |
| `horizon` | `0.64 (0.2-0.9)` | Visina horizonta |
| `audio` | `audio, video` | Izvor zvuka (CSS selektor) |
| `fade-text` | `h1, h2, h3, p, li` | Stišavanje iza teksta (selektor ili off) |
| `max-fps` | `30` | Ograničenje broja sličica |
| `start` | `idle` | Pokretanje: `immediate`, `idle` (nakon učitavanja, kad je preglednik slobodan) ili `interaction` (prvi unos) |
| `software-fallback` | `on` | Bez GPU-a ili pri presporom crtanju: statični prijelaz (`off` isključuje) |
| `frame-guard` | `on` | Zaustavlja animaciju kad sličice stalno traju dulje od 8 ms (`off` isključuje) |

Radi u aktualnim preglednicima Chrome, Edge i Firefox s WebGL-om. Bez WebGL-a dobivaš miran prijelaz boja, uz smanjeno kretanje statičnu sliku.

PSOrvia Klangozean radi kao pozadina stranice [psorvia.io](https://psorvia.io). Demo stranica: **[h-peterseim.github.io/psorvia-klangozean/demo.html](https://h-peterseim.github.io/psorvia-klangozean/demo.html)**

## Vlastite boje i vlastiti izvor zvuka

Postavi boje kao atribute i dovedi mikrofon preko `useAnalyser` (pokreni ga klikom):

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

## Pristupačnost

Uz smanjeno kretanje mreža se crta kao statična slika. Iza naslova i teksta se stišava (`fade-text`), pa sve ostaje čitljivo.

## Performanse

Brzina sličica ograničena je (`max-fps`), crtanje se pauzira u skrivenim karticama i usporava na mobilnim uređajima. Skripta ima oko 18 KB, oko 7 KB s gzipom, bez ovisnosti.

## Prijevodi

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licenca

Kod je pod licencom MIT (vidi [LICENSE](../../LICENSE)). Glazbena datoteka demoa dobit će vlastitu licencu: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).
