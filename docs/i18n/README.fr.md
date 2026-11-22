# PSOrvia Klangozean

**Océan de grille réactif à l'audio pour ton site**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Démo en direct avec musique](https://h-peterseim.github.io/psorvia-klangozean/demo.html)

Une grille en perspective apaisante en arrière-plan de la page. Elle réagit à tout audio ou vidéo de la page et s'estompe derrière ton texte.

## Intégration

```html
<script src="klangozean.js"></script>
<klang-ozean></klang-ozean>
```

```html
<script type="module" src="klangozean.esm.js"></script>
```

## Attributs

| Attribute | Default | |
|---|---|---|
| `color-a, color-b` | `#3ddc84, #40ccff` | Couleurs des lignes, thème sombre |
| `color-a-light, color-b-light` | `#0a6b38, #0d5c85` | Couleurs des lignes, thème clair |
| `density` | `1 (0.3-3)` | Densité de la grille |
| `line-width` | `0.7 (0.3-3)` | Épaisseur de ligne |
| `opacity` | `1 (0-1)` | Opacité |
| `reactivity` | `1 (0-3)` | Intensité de réaction |
| `horizon` | `0.64 (0.2-0.9)` | Hauteur de l'horizon |
| `audio` | `audio, video` | Source audio (sélecteur CSS) |
| `fade-text` | `h1, h2, h3, p, li` | Atténuation derrière le texte (sélecteur ou off) |
| `max-fps` | `30` | Limite d'images par seconde |
| `start` | `idle` | Démarrage : `immediate`, `idle` (après le chargement, navigateur libre) ou `interaction` (première action) |
| `software-fallback` | `on` | Sans GPU ou si le rendu est trop lent : dégradé statique (`off` désactive) |
| `frame-guard` | `on` | Arrête l'animation quand les images dépassent durablement 8 ms (`off` désactive) |

Fonctionne dans les versions actuelles de Chrome, Edge et Firefox avec WebGL. Sans WebGL, tu obtiens un dégradé calme ; avec mouvement réduit, une image fixe.

PSOrvia Klangozean sert d'arrière-plan à [psorvia.io](https://psorvia.io). Page de démonstration: **[h-peterseim.github.io/psorvia-klangozean/demo.html](https://h-peterseim.github.io/psorvia-klangozean/demo.html)**

## Couleurs et source audio personnalisées

Définis tes couleurs comme attributs et branche un microphone via `useAnalyser` (à démarrer par un clic) :

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

## Accessibilité

Avec le mouvement réduit, la grille est dessinée comme image fixe. Derrière les titres et le texte, elle s'estompe (`fade-text`), tout reste lisible.

## Performances

La fréquence d'images est limitée (`max-fps`), le dessin se met en pause dans les onglets masqués et est ralenti sur mobile. Le script pèse environ 15 Ko, environ 6 Ko en gzip, sans dépendances.

## Traductions

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Licence

Le code est sous licence MIT (voir [LICENSE](../../LICENSE)). Le fichier musical de la démo aura sa propre licence : [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).
