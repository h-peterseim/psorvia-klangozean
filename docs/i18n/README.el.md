# PSOrvia Klangozean

**Ωκεανός πλέγματος με αντίδραση στον ήχο για τον ιστότοπό σου**

PSOrvia · [psorvia.io](https://psorvia.io)

### ▶ [Ζωντανή επίδειξη με μουσική](https://h-peterseim.github.io/psorvia-klangozean/demo.html)

Ένα ήρεμο πλέγμα προοπτικής ως φόντο σελίδας. Αντιδρά σε κάθε ήχο και βίντεο της σελίδας και ξεθωριάζει πίσω από το κείμενό σου.

## Ενσωμάτωση

```html
<script src="klangozean.js"></script>
<klang-ozean></klang-ozean>
```

```html
<script type="module" src="klangozean.esm.js"></script>
```

## Χαρακτηριστικά

| Attribute | Default | |
|---|---|---|
| `color-a, color-b` | `#3ddc84, #40ccff` | Χρώματα γραμμών, σκούρο θέμα |
| `color-a-light, color-b-light` | `#0a6b38, #0d5c85` | Χρώματα γραμμών, φωτεινό θέμα |
| `density` | `1 (0.3-3)` | Πυκνότητα πλέγματος |
| `line-width` | `0.7 (0.3-3)` | Πάχος γραμμής |
| `opacity` | `1 (0-1)` | Αδιαφάνεια |
| `reactivity` | `1 (0-3)` | Ένταση αντίδρασης |
| `horizon` | `0.64 (0.2-0.9)` | Ύψος ορίζοντα |
| `audio` | `audio, video` | Πηγή ήχου (επιλογέας CSS) |
| `fade-text` | `h1, h2, h3, p, li` | Εξασθένηση πίσω από κείμενο (επιλογέας ή off) |
| `max-fps` | `30` | Όριο καρέ ανά δευτερόλεπτο |
| `start` | `idle` | Εκκίνηση: `immediate`, `idle` (μετά τη φόρτωση, όταν ο browser είναι ελεύθερος) ή `interaction` (πρώτη ενέργεια) |
| `software-fallback` | `on` | Χωρίς GPU ή με πολύ αργή σχεδίαση: στατική διαβάθμιση (το `off` απενεργοποιεί) |
| `frame-guard` | `on` | Σταματά την κίνηση όταν τα καρέ διαρκούν συνεχώς πάνω από 8 ms (το `off` απενεργοποιεί) |

Λειτουργεί σε τρέχοντα Chrome, Edge και Firefox με WebGL. Χωρίς WebGL παίρνεις ήρεμη διαβάθμιση, με μειωμένη κίνηση στατική εικόνα.

Το PSOrvia Klangozean λειτουργεί ως φόντο του [psorvia.io](https://psorvia.io). Σελίδα επίδειξης: **[h-peterseim.github.io/psorvia-klangozean/demo.html](https://h-peterseim.github.io/psorvia-klangozean/demo.html)**

## Δικά σου χρώματα και δική σου πηγή ήχου

Όρισε τα χρώματά σου ως χαρακτηριστικά και τροφοδότησε ένα μικρόφωνο μέσω `useAnalyser` (ξεκίνα το με κλικ):

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

## Προσβασιμότητα

Με μειωμένη κίνηση το πλέγμα σχεδιάζεται ως στατική εικόνα. Πίσω από τίτλους και κείμενο ξεθωριάζει (`fade-text`), ώστε όλα να παραμένουν ευανάγνωστα.

## Επιδόσεις

Ο ρυθμός καρέ περιορίζεται (`max-fps`), η σχεδίαση σταματά στις κρυφές καρτέλες και περιορίζεται σε κινητές συσκευές. Το σενάριο έχει περίπου 18 KB, περίπου 7 KB με gzip, χωρίς εξαρτήσεις.

## Μεταφράσεις

[English](../../README.md) · [Deutsch](README.de.md) · [Български](README.bg.md) · [Čeština](README.cs.md) · [Dansk](README.da.md) · [Ελληνικά](README.el.md) · [Español](README.es.md) · [Eesti](README.et.md) · [Suomi](README.fi.md) · [Français](README.fr.md) · [Gaeilge](README.ga.md) · [Hrvatski](README.hr.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [Lietuvių](README.lt.md) · [Latviešu](README.lv.md) · [Malti](README.mt.md) · [Norsk bokmål](README.nb.md) · [Nederlands](README.nl.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Română](README.ro.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Svenska](README.sv.md) · [Türkçe](README.tr.md)

## Άδεια

Ο κώδικας διατίθεται με άδεια MIT (βλ. [LICENSE](../../LICENSE)). Το μουσικό αρχείο της επίδειξης θα έχει δική του άδεια: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Petit Souris / psorvia.io ([media/LICENSE.md](../../media/LICENSE.md)).

SPDX-License-Identifier: MIT

Built for [psorvia.io](https://psorvia.io).
