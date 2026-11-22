/* klangozean: <klang-ozean>, an audio-reactive grid as web background. No dependencies.
 * SPDX-License-Identifier: MIT
 * Built for psorvia.io. (https://psorvia.io)
 */
const FRAG = `precision highp float; uniform vec2 uRes; uniform float uT, uZs, uRip, uKick, uMax, uLoud, uHor, uAmp0, uAmp1, uAmp2, uAmp3, uAmp4; uniform vec3 uA, uB; uniform vec4 uR[24]; uniform float uMar, uXS, uDZ, uW;
const float F0=0.8, CAMY=4.2, ZN=2.4, PI2=6.2831853;
float amp(int k){ return k==0?uAmp0:k==1?uAmp1:k==2?uAmp2:k==3?uAmp3:uAmp4; }
float height(float x,float z){
  float y=0.;
  for(int k=0;k<5;k++){ float fk=float(k);
    float kx=k==0?.20:k==1?.33:k==2?.52:k==3?.85:1.35, kz=k==0?.13:k==1?.22:k==2?.37:k==3?.62:.95, om=k==0?.6:k==1?.85:k==2?1.2:k==3?1.7:2.4;
    y+=amp(k)*sin((kx*x*(mod(fk,2.)>.5?1.:-1.)+kz*(z+uZs)+om*uT*.1)*PI2*.159155);
  }
  float rr=length(vec2(x*.5,z-4.));
  y+=1.4*uKick*exp(-pow(rr-uRip*0.8,2.)*0.08)*exp(-uRip*0.18);
  return y;
}
float lineA(float d,float w){ return clamp(w*.5+.5-d,0.,1.); }
void main(){
  float F=F0*uRes.y; float hor=uRes.y*uHor;
  float sx=gl_FragCoord.x-uRes.x*.5, sy=uRes.y-gl_FragCoord.y;
  float dy=sy-hor; if(dy<1.5){ gl_FragColor=vec4(0.); return; }
  float z=CAMY*F/dy, x=sx*z/F;
  for(int i=0;i<2;i++){ float y=height(x,z); z=max(.5,(CAMY-y)*F/dy); x=sx*z/F; }
  float u=x/uXS, v=(z+uZs-ZN)/uDZ;
  float gu=z/(F*uXS), gv=z*z/(CAMY*F*uDZ);
  float du=abs(u-floor(u+.5)), dv=abs(v-floor(v+.5)), dd=abs(fract(u+v)-.5); dd=.5-dd;
  float aRow=lineA(dv/gv,uW)*(1.-smoothstep(.25,.5,gv));
  float aCol=lineA(du/gu,uW)*(1.-smoothstep(.25,.5,gu));
  float aDia=lineA(dd/length(vec2(gu,gv)),uW)*(1.-smoothstep(.25,.5,max(gu,gv)));
  float fog=exp(-z/34.)*(1.-smoothstep(48.,70.,z));
  float a=(aRow*.36+aCol*.24+aDia*.2)*fog*(.75+.5*uLoud)*uMax;
  vec3 c=mix(uA,uB,clamp(max(aCol,aDia)*.8,0.,1.));
  float keep=1.; vec2 pp=vec2(gl_FragCoord.x,sy);
  for(int i=0;i<24;i++){ vec4 r=uR[i]; vec2 q=max(max(r.xy-pp,pp-r.zw),vec2(0.)); keep=min(keep,.03+.97*smoothstep(0.,uMar,length(q))); }
  a*=keep;
  gl_FragColor=vec4(c*a,a);
}`;

const CSS = ':host{position:fixed;inset:0;z-index:-1;pointer-events:none;display:block}canvas{width:100%;height:100%;display:block}';
const UNIFORMS = ['uRes', 'uT', 'uZs', 'uRip', 'uKick', 'uMax', 'uLoud', 'uHor', 'uAmp0', 'uAmp1', 'uAmp2', 'uAmp3', 'uAmp4', 'uA', 'uB', 'uMar', 'uXS', 'uDZ', 'uW'];
const BANDS = [[0, 2, 1.15], [2, 5, 1.4], [5, 12, 1.8], [12, 32, 2.6], [32, 120, 3.4]];
const num = (v, d, lo, hi) => { const n = parseFloat(v); return isFinite(n) ? Math.min(hi, Math.max(lo, n)) : d; };

// Shared audio tap for all instances: one context, one analyser.
const hub = {
  ctx: null, an: null, bins: null, playing: new Set(), srcs: new WeakMap(),
  ensure() {
    if (this.an) return true;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    try { this.ctx = new AC(); this.an = this.ctx.createAnalyser(); this.an.fftSize = 512; this.an.smoothingTimeConstant = 0.6; this.bins = new Uint8Array(this.an.frequencyBinCount); } catch (e) { return false; }
    return true;
  },
  sameOrigin(el) {
    try { const s = el.currentSrc || el.src; return !s || /^(blob|data):/.test(s) || new URL(s, location.href).origin === location.origin; } catch (e) { return false; }
  },
  attach(el) {
    if (!this.ensure()) return false;
    if (this.srcs.has(el)) return true;
    if (!this.sameOrigin(el)) return false;       // cross-origin media would go silent: leave it alone
    try { const n = this.ctx.createMediaElementSource(el); n.connect(this.ctx.destination); n.connect(this.an); this.srcs.set(el, n); } catch (e) { return false; }
    return true;
  },
  set(el, on) {
    if (on) { if (this.attach(el)) { if (this.ctx.state === 'suspended') this.ctx.resume(); this.playing.add(el); } } else this.playing.delete(el);
  },
  active() { return this.playing.size > 0; },
  read(out) {
    if (!this.playing.size || !this.an) { out.fill(0); return; }
    this.an.getByteFrequencyData(this.bins);
    const b = this.bins;
    BANDS.forEach(([lo, hi, g], i) => { let s = 0; for (let k = lo; k < hi; k++) s += b[k]; out[i] = Math.min(1, s / (hi - lo) / 255 * g); });
  }
};

function rgb(root, v) {
  const s = document.createElement('span'); s.style.color = v; root.appendChild(s);
  const m = getComputedStyle(s).color.match(/[\d.]+/g) || [0, 0, 0]; s.remove();
  return [m[0] / 255, m[1] / 255, m[2] / 255];
}

class KlangOzean extends HTMLElement {
  static get observedAttributes() { return ['color-a', 'color-b', 'color-a-light', 'color-b-light', 'density', 'line-width', 'opacity', 'reactivity', 'horizon', 'audio', 'fade-text', 'max-fps']; }

  connectedCallback() {
    if (this.cv) return;
    const root = this.shadowRoot || this.attachShadow({ mode: 'open' });
    const st = document.createElement('style'); st.textContent = CSS; root.appendChild(st);
    this.cv = document.createElement('canvas'); this.setAttribute('aria-hidden', 'true'); root.appendChild(this.cv);
    this.root = root;
    this.schedule();
  }

  // start="immediate" | "idle" (default: after load, when the browser is idle) | "interaction" (first input)
  schedule() {
    const mode = this.getAttribute('start') || 'idle';
    if (mode === 'immediate') { this.launch(); return; }
    const idle = () => {
      this.cancelStart();
      const run = () => { this.stop = 'idle'; const go = () => { this.stop = 0; if (this.cv && !this.live) this.launch(); }; this.idleId = 'requestIdleCallback' in window ? requestIdleCallback(go, { timeout: 3000 }) : setTimeout(go, 1200); };
      if (document.readyState === 'complete') run(); else { this.stop = 'load'; this.loadFn = run; window.addEventListener('load', run, { once: true }); }
    };
    if (mode === 'interaction') {
      const ev = ['pointerdown', 'pointermove', 'keydown', 'wheel', 'touchstart', 'scroll'];
      this.stop = 'input'; this.wake = () => { ev.forEach((t) => removeEventListener(t, this.wake, true)); this.wake = null; this.stop = 0; idle(); };
      ev.forEach((t) => addEventListener(t, this.wake, { capture: true, passive: true }));
    } else idle();
  }

  cancelStart() {
    if (this.wake) { ['pointerdown', 'pointermove', 'keydown', 'wheel', 'touchstart', 'scroll'].forEach((t) => removeEventListener(t, this.wake, true)); this.wake = null; }
    if (this.loadFn) { window.removeEventListener('load', this.loadFn); this.loadFn = null; }
    if (this.idleId) { if ('cancelIdleCallback' in window && typeof this.idleId === 'number' && this.stop === 'idle') cancelIdleCallback(this.idleId); clearTimeout(this.idleId); this.idleId = 0; }
    this.stop = 0;
  }

  off(name) { const v = this.getAttribute(name); return v === 'off' || v === 'false'; }

  // True for software rendering (SwiftShader, llvmpipe, ...): every frame would cost the main thread.
  software() {
    try {
      const x = this.gl.getExtension('WEBGL_debug_renderer_info');
      return !!x && /swiftshader|llvmpipe|softpipe|software|basic render|mesa offscreen/i.test(String(this.gl.getParameter(x.UNMASKED_RENDERER_WEBGL)));
    } catch (e) { return false; }
  }

  // One test frame, forced to finish; ms
  probe() {
    const t = performance.now(), gl = this.gl;
    this.frame(0.016, false); gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(4));
    return performance.now() - t;
  }

  // Too slow or no GPU: stop drawing, keep the calm static gradient.
  degrade() {
    this.release(); this.live = false;
    try { const x = this.gl && this.gl.getExtension('WEBGL_lose_context'); if (x) x.loseContext(); } catch (e) { /* ignore */ }
    this.gl = null; this.slow = true; this.fallback();
  }

  launch() {
    this.live = false;
    const soft = !this.off('software-fallback');
    this.gl = this.cv.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: false, powerPreference: 'low-power', failIfMajorPerformanceCaveat: soft });
    if (!this.gl || !this.build() || (soft && this.software())) { if (this.gl && this.gl.getExtension) { try { const x = this.gl.getExtension('WEBGL_lose_context'); if (x) x.loseContext(); } catch (e) { /* ignore */ } } this.gl = null; this.fallback(); return; }
    this.mobile = matchMedia('(pointer: coarse), (max-width: 700px)').matches;
    this.reduced = matchMedia('(prefers-reduced-motion: reduce)');
    this.scheme = matchMedia('(prefers-color-scheme: dark)');
    this.lv = new Float32Array(5); this.sm = [0, 0, 0, 0, 0]; this.t = 20; this.zs = 0; this.rip = 40; this.bavg = 0; this.lastKick = -9; this.kick = 0; this.raf = 0; this.last = 0; this.sim = false; this.ext = null;
    this.rects = new Float32Array(96).fill(-9999);
    this.size(); this.theme();
    this.onResize = () => { this.size(); this.frame(0, true); this.queue(); };
    this.onTheme = () => { this.theme(); this.frame(0, !this.raf); };
    this.vis = () => this.sync();
    this.onMedia = (e) => { if (this.mediaOk(e.target)) { hub.set(e.target, e.type === 'play'); this.sync(); } };
    this.measure = () => { this.pend = 0; this.textRects(); if (!this.raf) this.frame(0, true); };
    this.queue = () => { if (!this.pend) this.pend = requestAnimationFrame(this.measure); };
    window.addEventListener('resize', this.onResize);
    window.addEventListener('scroll', this.queue, { passive: true });
    document.addEventListener('visibilitychange', this.vis);
    ['play', 'pause', 'ended'].forEach((ev) => document.addEventListener(ev, this.onMedia, true));
    this.scheme.addEventListener('change', this.onTheme);
    this.reduced.addEventListener('change', this.vis);
    this.mo = new MutationObserver(this.onTheme); this.mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'class'] });
    document.querySelectorAll('audio,video').forEach((el) => { if (!el.paused && this.mediaOk(el)) hub.set(el, true); });
    if (document.fonts) document.fonts.ready.then(this.queue);
    setTimeout(this.queue, 600);
    this.live = true; this.slowN = 0; this.nf = 0;
    if (soft && this.probe() > 12) { this.degrade(); return; }
    this.textRects(); this.sync();
  }

  disconnectedCallback() {
    this.cancelStart();
    if (this.live) this.release();
    if (!this.cv) return;
    this.cv = null; this.root = null; this.gl = null; this.live = false;     // re-attaching rebuilds
    this.shadowRoot && (this.shadowRoot.innerHTML = '');
  }

  release() {
    cancelAnimationFrame(this.raf); this.raf = 0; cancelAnimationFrame(this.pend); this.pend = 0;
    window.removeEventListener('resize', this.onResize); window.removeEventListener('scroll', this.queue);
    document.removeEventListener('visibilitychange', this.vis);
    ['play', 'pause', 'ended'].forEach((ev) => document.removeEventListener(ev, this.onMedia, true));
    this.scheme.removeEventListener('change', this.onTheme); this.reduced.removeEventListener('change', this.vis);
    this.mo.disconnect();
  }

  attributeChangedCallback() { if (this.gl) { this.theme(); this.size(); this.queue(); this.frame(0, !this.raf); } }

  // Public: feed your own Web Audio AnalyserNode (oscillator, microphone); null releases it.
  useAnalyser(node) { this.ext = node || null; this.extBins = node ? new Uint8Array(node.frequencyBinCount) : null; this.sync(); }
  // Public: silent test signal (simulated beat and bands).
  simulate(on = true) { this.sim = !!on; this.sync(); }

  mediaOk(el) {
    if (!(el instanceof HTMLMediaElement)) return false;
    const sel = this.getAttribute('audio');
    if (!sel) return true;
    try { return el.matches(sel); } catch (e) { return false; }
  }

  build() {
    const gl = this.gl;
    const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null; };
    const vs = sh(gl.VERTEX_SHADER, 'attribute vec2 p; void main(){ gl_Position=vec4(p,0.,1.); }'), fs = sh(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return false;
    const pr = gl.createProgram(); gl.attachShader(pr, vs); gl.attachShader(pr, fs); gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return false;
    gl.useProgram(pr);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    this.u = {}; UNIFORMS.forEach((n) => { this.u[n] = gl.getUniformLocation(pr, n); });
    this.u.uR = gl.getUniformLocation(pr, 'uR[0]');
    gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    return true;
  }

  // Without WebGL: calm gradient from the first line color
  fallback() {
    const c = rgb(this.root, this.getAttribute('color-a') || '#3ddc84').map((v) => Math.round(v * 255));
    this.cv.style.background = 'linear-gradient(180deg,transparent 45%,rgba(' + c.join(',') + ',.1))';
  }

  size() {
    const dpr = devicePixelRatio || 1, sc = this.mobile ? Math.min(dpr * 0.75, 1.5) : Math.min(dpr, 1.5);
    this.cv.width = Math.max(2, Math.round(innerWidth * sc)); this.cv.height = Math.max(2, Math.round(innerHeight * sc));
    this.gl.viewport(0, 0, this.cv.width, this.cv.height);
  }

  theme() {
    const th = document.documentElement.getAttribute('data-theme');
    const dark = th ? th === 'dark' : this.scheme.matches;
    const g = (n, d) => this.getAttribute(n) || d;
    if (dark) { this.A = rgb(this.root, g('color-a', '#3ddc84')); this.B = rgb(this.root, g('color-b', '#40ccff')); this.base = 0.68; }
    else { this.A = rgb(this.root, g('color-a-light', '#0a6b38')); this.B = rgb(this.root, g('color-b-light', '#0d5c85')); this.base = 0.55; }
    this.max = this.base * num(this.getAttribute('opacity'), 1, 0, 1) * (this.mobile ? 0.85 : 1);
  }

  textRects() {
    this.rects.fill(-9999);
    const fade = this.getAttribute('fade-text');
    if (fade === 'off' || fade === 'false') return;
    const sc = this.cv.width / innerWidth;
    let els = [];
    try { els = document.querySelectorAll(fade || 'h1,h2,h3,p,li'); } catch (e) { return; }
    let n = 0;
    for (const e of els) {
      if (n >= 24) break;
      const r = e.getBoundingClientRect();
      if (r.width < 8 || r.height < 8 || r.bottom < 0 || r.top > innerHeight) continue;
      this.rects.set([r.left * sc, r.top * sc, r.right * sc, r.bottom * sc], n * 4); n++;
    }
  }

  isActive() { return this.sim || hub.active() || !!this.ext; }

  sync() {
    if (!this.gl) return;
    const go = !document.hidden && !this.reduced.matches;
    if (go && !this.raf) { this.last = performance.now(); this.raf = requestAnimationFrame((n) => this.loop(n)); }
    else if (!go) { cancelAnimationFrame(this.raf); this.raf = 0; this.frame(0, true); }
  }

  loop(now) {
    this.raf = requestAnimationFrame((n) => this.loop(n));
    const cap = num(this.getAttribute('max-fps'), 0, 1, 120);
    let fps = this.isActive() ? 30 : (this.mobile ? 24 : 20);
    if (cap) fps = Math.min(fps, cap);
    const dt = (now - this.last) / 1000;
    if (dt < 1 / fps - 0.004) return;
    this.last = now;
    const t0 = performance.now(); this.frame(Math.min(dt, 0.1), false);
    // frame-guard: frames that keep costing > 8 ms on the main thread end the animation (static gradient)
    if (!this.off('frame-guard') && ++this.nf > 4) { this.slowN = performance.now() - t0 > 8 ? this.slowN + 1 : 0; if (this.slowN >= 20) this.degrade(); }
  }

  levels(out) {
    if (this.sim) {
      const t = this.t, b = Math.max(0, Math.sin(t * 2 * Math.PI * 1.8)), hat = Math.max(0, Math.sin(t * 2 * Math.PI * 3.6 + 1)) > 0.92 ? 1 : 0.15;
      out[0] = 0.15 + 0.8 * b * b * b; out[1] = 0.3 + 0.3 * Math.sin(t * 0.9); out[2] = 0.3 + 0.25 * Math.sin(t * 1.3 + 2); out[3] = 0.2 + 0.4 * hat; out[4] = 0.15 + 0.5 * hat;
    } else if (this.ext) {
      this.ext.getByteFrequencyData(this.extBins); const b = this.extBins, n = b.length / 256;
      BANDS.forEach(([lo, hi, g], i) => { const a = Math.floor(lo * n), z = Math.max(a + 1, Math.floor(hi * n)); let s = 0; for (let k = a; k < z; k++) s += b[k]; out[i] = Math.min(1, s / (z - a) / 255 * g); });
    } else hub.read(out);
  }

  frame(dt, still) {
    if (!this.gl) return;
    const tgt = this.lv; if (still) tgt.fill(0); else this.levels(tgt);
    const ka = 1 - Math.exp(-dt / 0.1), kr = 1 - Math.exp(-dt / 0.45);
    for (let i = 0; i < 5; i++) this.sm[i] += (tgt[i] - this.sm[i]) * (tgt[i] > this.sm[i] ? ka : kr);
    const s = this.sm, loud = (s[0] + s[1] + s[2] + s[3] + s[4]) / 5;
    if (!still) {
      this.t += dt; this.zs += dt * (0.35 + 3.0 * loud); this.rip += dt * 7;
      this.bavg += (tgt[0] - this.bavg) * Math.min(1, dt * 3);
      if (tgt[0] > this.bavg + 0.22 && this.t - this.lastKick > 0.4) { this.rip = 0; this.lastKick = this.t; }
    }
    const react = num(this.getAttribute('reactivity'), 1, 0, 3), calm = (0.3 + 0.35 * Math.min(1, loud * 3)) * react;
    this.kick = calm * s[0];
    const A = [0.35 + 1.5 * s[0], 0.25 + 1.0 * s[1], 0.15 + 0.7 * s[2], 0.08 + 0.45 * s[3], 0.04 + 0.25 * s[4]].map((a) => a * calm);
    const dens = num(this.getAttribute('density'), 1, 0.3, 3) * (this.mobile ? 1.5 : 2.3) / 2.3;
    const gl = this.gl, u = this.u;
    gl.uniform2f(u.uRes, this.cv.width, this.cv.height); gl.uniform1f(u.uT, this.t); gl.uniform1f(u.uZs, this.zs);
    gl.uniform1f(u.uRip, Math.min(this.rip, 40)); gl.uniform1f(u.uKick, this.kick);
    A.forEach((a, i) => gl.uniform1f(u['uAmp' + i], a));
    gl.uniform1f(u.uXS, 1.75 / (2.3 * dens)); gl.uniform1f(u.uDZ, 2.5 / (2.3 * dens));
    gl.uniform1f(u.uW, num(this.getAttribute('line-width'), 0.7, 0.3, 3));
    gl.uniform1f(u.uHor, 1 - num(this.getAttribute('horizon'), 0.64, 0.2, 0.9));
    gl.uniform4fv(u.uR, this.rects); gl.uniform1f(u.uMar, 26 * this.cv.width / innerWidth);
    gl.uniform1f(u.uMax, this.max); gl.uniform1f(u.uLoud, loud); gl.uniform3fv(u.uA, this.A); gl.uniform3fv(u.uB, this.B);
    gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT); gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  // Single frame at a fixed time (for tests)
  step(dt) { cancelAnimationFrame(this.raf); this.raf = 0; this.frame(dt, false); }
}

if (!customElements.get('klang-ozean')) customElements.define('klang-ozean', KlangOzean);
export { KlangOzean };
export default KlangOzean;
