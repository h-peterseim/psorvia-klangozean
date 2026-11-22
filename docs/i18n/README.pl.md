# PSOrvia Klangozean

**Reagujący na dźwięk siatkowy ocean dla Twojej strony**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Demo na żywo z muzyką](https://h-peterseim.github.io/psorvia-klangozean/demo.html)

Spokojna siatka w perspektywie jako tło strony. Reaguje na każdy dźwięk i wideo na stronie, a za Twoim tekstem przygasa.

## Użycie

```html
<script src="klangozean.js"></script>
<klang-ozean></klang-ozean>
```

```html
<script type="module" src="klangozean.esm.js"></script>
```

## Atrybuty

| Attribute | Default | |
|---|---|---|
| `color-a, color-b` | `#3ddc84, #40ccff` | Kolory linii, ciemny motyw |
| `color-a-light, color-b-light` | `#0a6b38, #0d5c85` | Kolory linii, jasny motyw |
| `density` | `1 (0.3-3)` | Gęstość siatki |
| `line-width` | `0.7 (0.3-3)` | Grubość linii |
| `opacity` | `1 (0-1)` | Krycie |
| `reactivity` | `1 (0-3)` | Siła reakcji |
| `horizon` | `0.64 (0.2-0.9)` | Wysokość horyzontu |
| `audio` | `audio, video` | Źródło dźwięku (selektor CSS) |
| `fade-text` | `h1, h2, h3, p, li` | Przygaszanie za tekstem (selektor lub off) |
| `max-fps` | `30` | Limit klatek na sekundę |
| `start` | `idle` | Start: `immediate`, `idle` (po załadowaniu, gdy przeglądarka jest wolna) lub `interaction` (pierwsze działanie) |
| `software-fallback` | `on` | Bez GPU lub przy zbyt wolnym rysowaniu: statyczny gradient (`off` wyłącza) |
| `frame-guard` | `on` | Zatrzymuje animację, gdy klatki stale trwają ponad 8 ms (`off` wyłącza) |

Działa w aktualnych przeglądarkach Chrome, Edge i Firefox z WebGL. Bez WebGL dostajesz spokojny gradient, przy ograniczonym ruchu obraz statyczny.

PSOrvia Klangozean działa jako tło strony [psorvia.io](https://psorvia.io). Strona demonstracyjna: **[h-peterseim.github.io/psorvia-klangozean/demo.html](https://h-peterseim.github.io/psorvia-klangozean/demo.html)**

## Własne kolory i własne źródło dźwięku

Ustaw kolory jako atrybuty i podłącz mikrofon przez `useAnalyser` (uruchom go kliknięciem):

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

## Dostępność

Przy ograniczonym ruchu siatka jest rysowana jako obraz statyczny. Za nagłówkami i tekstem przygasa (`fade-text`), dzięki czemu wszystko pozostaje czytelne.

## Wydajność

Liczba klatek jest ograniczona (`max-fps`), rysowanie zatrzymuje się w ukrytych kartach i jest ograniczane na urządzeniach mobilnych. Skrypt ma około 18 KB, około 7 KB po gzip, bez zależności.

## Tłumaczenia

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licencja

Kod jest na licencji MIT (zob. [LICENSE](../../LICENSE)). Plik muzyczny dema otrzyma własną licencję: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).
