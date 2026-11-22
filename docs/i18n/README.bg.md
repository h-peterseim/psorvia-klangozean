# PSOrvia Klangozean

**Аудиореактивен мрежест океан за твоя сайт**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Демо на живо с музика](https://h-peterseim.github.io/psorvia-klangozean/demo.html)

Спокойна перспективна мрежа като фон на страницата. Тя реагира на всяко аудио и видео на страницата и избледнява зад текста ти.

## Включване

```html
<script src="klangozean.js"></script>
<klang-ozean></klang-ozean>
```

```html
<script type="module" src="klangozean.esm.js"></script>
```

## Атрибути

| Attribute | Default | |
|---|---|---|
| `color-a, color-b` | `#3ddc84, #40ccff` | Цветове на линиите, тъмна тема |
| `color-a-light, color-b-light` | `#0a6b38, #0d5c85` | Цветове на линиите, светла тема |
| `density` | `1 (0.3-3)` | Гъстота на мрежата |
| `line-width` | `0.7 (0.3-3)` | Дебелина на линията |
| `opacity` | `1 (0-1)` | Непрозрачност |
| `reactivity` | `1 (0-3)` | Сила на реакцията |
| `horizon` | `0.64 (0.2-0.9)` | Височина на хоризонта |
| `audio` | `audio, video` | Аудиоизточник (CSS селектор) |
| `fade-text` | `h1, h2, h3, p, li` | Избледняване зад текста (селектор или off) |
| `max-fps` | `30` | Ограничение на кадрите |
| `start` | `idle` | Старт: `immediate`, `idle` (след зареждане, когато браузърът е свободен) или `interaction` (първо действие) |
| `software-fallback` | `on` | Без GPU или при твърде бавно рисуване: статичен преливащ фон (`off` изключва) |
| `frame-guard` | `on` | Спира анимацията, когато кадрите постоянно отнемат над 8 ms (`off` изключва) |

Работи в актуални Chrome, Edge и Firefox с WebGL. Без WebGL получаваш спокоен градиент, при намалено движение - неподвижна картина.

PSOrvia Klangozean работи като фон на [psorvia.io](https://psorvia.io). Демо страница: **[h-peterseim.github.io/psorvia-klangozean/demo.html](https://h-peterseim.github.io/psorvia-klangozean/demo.html)**

## Собствени цветове и собствен аудиоизточник

Задай цветовете като атрибути и подай микрофон чрез `useAnalyser` (стартирай го с клик):

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

## Достъпност

При намалено движение мрежата се рисува като неподвижно изображение. Зад заглавия и текст тя избледнява (`fade-text`), така че всичко остава четимо.

## Производителност

Честотата на кадрите е ограничена (`max-fps`), рисуването спира в скрити раздели и се ограничава на мобилни устройства. Скриптът е около 18 KB, около 7 KB със gzip, без зависимости.

## Преводи

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Лиценз

Кодът е с лиценз MIT (вж. [LICENSE](../../LICENSE)). Музикалният файл на демото ще има собствен лиценз: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).
