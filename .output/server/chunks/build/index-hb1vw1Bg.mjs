import { _ as __nuxt_component_0 } from './nuxt-link-BhvPH78H.mjs';
import { mergeProps, withCtx, createTextVNode, openBlock, createBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "landing-page" }, _attrs))} data-v-3e8b9c39><header class="navbar container" data-v-3e8b9c39><div class="logo" data-v-3e8b9c39>Interior<span data-v-3e8b9c39>Estimator</span></div></header><main class="hero-section container" data-v-3e8b9c39><div class="hero-content" data-v-3e8b9c39><div class="badge" data-v-3e8b9c39>Selamat Datang</div><h1 class="hero-title" data-v-3e8b9c39>Wujudkan Interior Impian Anda dengan <span class="text-gradient" data-v-3e8b9c39>Presisi 3D</span></h1><p class="hero-subtitle" data-v-3e8b9c39> Tidak perlu lagi menebak-nebak biaya. Hitung estimasi harga pembuatan meja, kursi, lemari, hingga kitchen set custom secara real-time dengan panduan visual 3D interaktif. </p><div class="hero-actions" data-v-3e8b9c39>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/kalkulator",
    class: "btn-large"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Coba Kalkulator Harga <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-right" data-v-3e8b9c39${_scopeId}><line x1="5" y1="12" x2="19" y2="12" data-v-3e8b9c39${_scopeId}></line><polyline points="12 5 19 12 12 19" data-v-3e8b9c39${_scopeId}></polyline></svg>`);
      } else {
        return [
          createTextVNode(" Coba Kalkulator Harga "),
          (openBlock(), createBlock("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            class: "icon-right"
          }, [
            createVNode("line", {
              x1: "5",
              y1: "12",
              x2: "19",
              y2: "12"
            }),
            createVNode("polyline", { points: "12 5 19 12 12 19" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="features-grid" data-v-3e8b9c39><div class="feature-card glass" data-v-3e8b9c39><div class="feature-icon" data-v-3e8b9c39>\u{1F4B0}</div><h3 data-v-3e8b9c39>Harga Transparan</h3><p data-v-3e8b9c39>Kalkulasi akurat berdasarkan dimensi dan material pilihan Anda tanpa biaya tersembunyi.</p></div><div class="feature-card glass" data-v-3e8b9c39><div class="feature-icon" data-v-3e8b9c39>\u{1F441}\uFE0F</div><h3 data-v-3e8b9c39>Visualisasi 3D</h3><p data-v-3e8b9c39>Lihat proporsi ukuran furniture Anda secara langsung melalui preview 3D interaktif.</p></div><div class="feature-card glass" data-v-3e8b9c39><div class="feature-icon" data-v-3e8b9c39>\u2728</div><h3 data-v-3e8b9c39>Material Premium</h3><p data-v-3e8b9c39>Pilih dari berbagai opsi material dasar dan finishing berkualitas tinggi sesuai budget Anda.</p></div></div></main><div class="bg-blobs" data-v-3e8b9c39><div class="blob blob-1" data-v-3e8b9c39></div><div class="blob blob-2" data-v-3e8b9c39></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3e8b9c39"]]);

export { index as default };
//# sourceMappingURL=index-hb1vw1Bg.mjs.map
