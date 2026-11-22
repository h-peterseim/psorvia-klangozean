# PSOrvia Klangozean

**Web siteniz için sese tepki veren ızgara okyanusu**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Müzikli canlı demo](https://h-peterseim.github.io/psorvia-klangozean/demo.html)

Sayfa arka planı olarak sakin bir perspektif ızgarası. Sayfadaki tüm ses ve videolara tepki verir ve metninizin arkasında kaybolur.

## Kullanım

```html
<script src="klangozean.js"></script>
<klang-ozean></klang-ozean>
```

```html
<script type="module" src="klangozean.esm.js"></script>
```

## Öznitelikler

| Öznitelik | Varsayılan | |
|---|---|---|
| `color-a, color-b` | `#3ddc84, #40ccff` | Çizgi renkleri, koyu tema |
| `color-a-light, color-b-light` | `#0a6b38, #0d5c85` | Çizgi renkleri, açık tema |
| `density` | `1 (0.3-3)` | Izgara yoğunluğu |
| `line-width` | `0.7 (0.3-3)` | Çizgi kalınlığı |
| `opacity` | `1 (0-1)` | Opaklık |
| `reactivity` | `1 (0-3)` | Tepki gücü |
| `horizon` | `0.64 (0.2-0.9)` | Ufuk yüksekliği |
| `audio` | `audio, video` | Ses kaynağı (CSS seçici) |
| `fade-text` | `h1, h2, h3, p, li` | Metnin arkasında solma (seçici veya kapalı) |
| `max-fps` | `30` | Kare hızı sınırı |
| `start` | `idle` | Başlatma: `immediate`, `idle` (yüklemeden sonra, tarayıcı boştayken) veya `interaction` (ilk girdi) |
| `software-fallback` | `on` | GPU yoksa veya çizim çok yavaşsa: sabit renk geçişi (`off` kapatır) |
| `frame-guard` | `on` | Kareler sürekli 8 ms'den uzun sürerse animasyonu durdurur (`off` kapatır) |

WebGL destekli güncel Chrome, Edge ve Firefox sürümlerinde çalışır. WebGL olmadan sakin bir renk geçişi, azaltılmış harekette ise sabit bir görüntü elde edersiniz.

## API

- `el.useAnalyser(analyserNode)` kendi Web Audio `AnalyserNode` nesnenizi (osilatör, mikrofon) besler; `useAnalyser(null)` onu serbest bırakır.
- `el.simulate(true)` sessiz, yerleşik bir test sinyali çalıştırır.
- Başka bir kaynaktan gelen medyaya dokunulmaz (aksi halde sessizleşirdi); bunun için `useAnalyser` kullanın.

PSOrvia Klangozean, [psorvia.io](https://psorvia.io) sitesinin arka planı olarak çalışır. Demo sayfası: **[h-peterseim.github.io/psorvia-klangozean/demo.html](https://h-peterseim.github.io/psorvia-klangozean/demo.html)**

## Kendi renkleriniz ve kendi ses kaynağınız

Renklerinizi öznitelik olarak ayarlayın ve bir mikrofonu `useAnalyser` ile besleyin (bir tıklamadan başlatın):

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

## Erişilebilirlik

Azaltılmış hareket tercihinde ızgara sabit bir görüntü olarak çizilir. Başlıkların ve metnin arkasında solar (`fade-text`), böylece her şey okunabilir kalır.

## Performans

Kare hızı sınırlıdır (`max-fps`), çizim gizli sekmelerde durur ve mobil cihazlarda kısıtlanır. Betik yaklaşık 18 KB, gzip ile yaklaşık 7 KB boyutundadır ve bağımlılığı yoktur.

## Çeviriler

[English](README.md) · [Deutsch](docs/i18n/README.de.md) · [Български](docs/i18n/README.bg.md) · [Čeština](docs/i18n/README.cs.md) · [Dansk](docs/i18n/README.da.md) · [Ελληνικά](docs/i18n/README.el.md) · [Español](docs/i18n/README.es.md) · [Eesti](docs/i18n/README.et.md) · [Suomi](docs/i18n/README.fi.md) · [Français](docs/i18n/README.fr.md) · [Gaeilge](docs/i18n/README.ga.md) · [Hrvatski](docs/i18n/README.hr.md) · [Magyar](docs/i18n/README.hu.md) · [Italiano](docs/i18n/README.it.md) · [Lietuvių](docs/i18n/README.lt.md) · [Latviešu](docs/i18n/README.lv.md) · [Malti](docs/i18n/README.mt.md) · [Norsk bokmål](docs/i18n/README.nb.md) · [Nederlands](docs/i18n/README.nl.md) · [Polski](docs/i18n/README.pl.md) · [Português](docs/i18n/README.pt.md) · [Română](docs/i18n/README.ro.md) · [Slovenčina](docs/i18n/README.sk.md) · [Slovenščina](docs/i18n/README.sl.md) · [Svenska](docs/i18n/README.sv.md) · [Türkçe](docs/i18n/README.tr.md)

## Lisans

Kod MIT lisansı altındadır (bkz. [LICENSE](LICENSE)). Demo müziği (`media/klangozean-demo.mp3`) [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) lisansı altındadır, atıf: "Petit Souris / psorvia.io" (bkz. [media/LICENSE.md](media/LICENSE.md)).

SPDX-License-Identifier: MIT

[psorvia.io](https://psorvia.io) için geliştirildi.
