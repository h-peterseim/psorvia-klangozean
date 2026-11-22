# PSOrvia Klangozean

**Oceano de grelha reativo ao áudio para o teu site**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Demonstração ao vivo com música](https://h-peterseim.github.io/psorvia-klangozean/demo.html)

Uma grelha em perspetiva tranquila como fundo da página. Reage a qualquer áudio ou vídeo da página e esbate-se atrás do teu texto.

## Utilização

```html
<script src="klangozean.js"></script>
<klang-ozean></klang-ozean>
```

```html
<script type="module" src="klangozean.esm.js"></script>
```

## Atributos

| Attribute | Default | |
|---|---|---|
| `color-a, color-b` | `#3ddc84, #40ccff` | Cores das linhas, tema escuro |
| `color-a-light, color-b-light` | `#0a6b38, #0d5c85` | Cores das linhas, tema claro |
| `density` | `1 (0.3-3)` | Densidade da grelha |
| `line-width` | `0.7 (0.3-3)` | Espessura da linha |
| `opacity` | `1 (0-1)` | Opacidade |
| `reactivity` | `1 (0-3)` | Intensidade da reação |
| `horizon` | `0.64 (0.2-0.9)` | Altura do horizonte |
| `audio` | `audio, video` | Fonte de áudio (seletor CSS) |
| `fade-text` | `h1, h2, h3, p, li` | Esbater atrás do texto (seletor ou off) |
| `max-fps` | `30` | Limite de imagens por segundo |
| `start` | `idle` | Início: `immediate`, `idle` (após o carregamento, com o navegador livre) ou `interaction` (primeira ação) |
| `software-fallback` | `on` | Sem GPU ou com desenho demasiado lento: gradiente estático (`off` desativa) |
| `frame-guard` | `on` | Para a animação quando os fotogramas demoram continuamente mais de 8 ms (`off` desativa) |

Funciona nas versões atuais de Chrome, Edge e Firefox com WebGL. Sem WebGL, recebes um gradiente calmo; com movimento reduzido, uma imagem fixa.

O PSOrvia Klangozean funciona como fundo de [psorvia.io](https://psorvia.io). Página de demonstração: **[h-peterseim.github.io/psorvia-klangozean/demo.html](https://h-peterseim.github.io/psorvia-klangozean/demo.html)**

## Cores próprias e fonte de áudio própria

Define as cores como atributos e liga um microfone com `useAnalyser` (inicia-o com um clique):

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

## Acessibilidade

Com movimento reduzido, a grelha é desenhada como imagem fixa. Atrás de títulos e texto esbate-se (`fade-text`), por isso tudo continua legível.

## Desempenho

A taxa de fotogramas é limitada (`max-fps`), o desenho pausa em separadores ocultos e é reduzido em dispositivos móveis. O script tem cerca de 18 KB, cerca de 7 KB com gzip, sem dependências.

## Traduções

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licença

O código tem licença MIT (ver [LICENSE](../../LICENSE)). O ficheiro de música da demonstração terá a sua própria licença: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).
