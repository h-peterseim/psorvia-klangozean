# Changelog

## 1.0.4
- Performance: the canvas now starts after load when the browser is idle (`start="idle"`, also `immediate` or `interaction`), never blocking first paint.
- Software rendering (SwiftShader, llvmpipe) or a slow test frame (> 12 ms) switches to the calm static gradient (`software-fallback="off"` disables); a frame guard stops the loop when frames keep taking over 8 ms (`frame-guard="off"` disables).
- Look and API with a GPU unchanged.

## 1.0.3
- Two more languages: Norwegian Bokmål (`nb`) and Turkish (`tr`), in the README translations and the demo page (now 26 languages).

## 1.0.2
- Name: PSOrvia Klangozean (part of the PSOrvia family). The element `<klang-ozean>`, the file names and the API stay the same.

## 1.0.1
- Demo page: music by PSOrvia plugins only, test tone removed.
- README: prominent link to the live demo, translations moved to `docs/i18n/`.

## 1.0.0
- First release: web component `<klang-ozean>`, as ES module and classic script.
- Attributes for colors, density, line width, opacity, reactivity, horizon, audio source, text fading and frame-rate limit.
- Still image with reduced motion, pause in hidden tabs, mobile throttling, fallback without WebGL.
