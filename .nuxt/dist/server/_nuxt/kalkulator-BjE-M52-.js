import { _ as __nuxt_component_0 } from "./nuxt-link-BhvPH78H.js";
import { mergeProps, useSSRContext, ref, watch, reactive, computed, withCtx, openBlock, createBlock, createVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import * as THREE from "three";
import "/Users/gumilar/Documents/Learning/interior_design_estimator/node_modules/ufo/dist/index.mjs";
import "/Users/gumilar/Documents/Learning/interior_design_estimator/node_modules/defu/dist/defu.mjs";
import "/Users/gumilar/Documents/Learning/interior_design_estimator/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/gumilar/Documents/Learning/interior_design_estimator/node_modules/hookable/dist/index.mjs";
import "/Users/gumilar/Documents/Learning/interior_design_estimator/node_modules/unctx/dist/index.mjs";
import "/Users/gumilar/Documents/Learning/interior_design_estimator/node_modules/h3/dist/index.mjs";
import "vue-router";
const _sfc_main$3 = {
  __name: "SelectGroup",
  __ssrInlineRender: true,
  props: {
    label: String,
    modelValue: [String, Number],
    options: {
      type: Array,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "select-group" }, _attrs))} data-v-871eb8a0>`);
      if (__props.label) {
        _push(`<label class="label" data-v-871eb8a0>${ssrInterpolate(__props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="select-wrapper" data-v-871eb8a0><select${ssrRenderAttr("value", __props.modelValue)} class="select" data-v-871eb8a0><!--[-->`);
      ssrRenderList(__props.options, (option) => {
        _push(`<option${ssrRenderAttr("value", option.value)} data-v-871eb8a0>${ssrInterpolate(option.label)}</option>`);
      });
      _push(`<!--]--></select><div class="icon-wrapper" data-v-871eb8a0><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon" data-v-871eb8a0><polyline points="6 9 12 15 18 9" data-v-871eb8a0></polyline></svg></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/SelectGroup.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-871eb8a0"]]);
const _sfc_main$2 = {
  __name: "InputGroup",
  __ssrInlineRender: true,
  props: {
    label: String,
    modelValue: [String, Number],
    type: { type: String, default: "text" },
    placeholder: String,
    suffix: String,
    min: [Number, String]
  },
  emits: ["update:modelValue"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "input-group" }, _attrs))} data-v-24ec27c7>`);
      if (__props.label) {
        _push(`<label class="label" data-v-24ec27c7>${ssrInterpolate(__props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="input-wrapper" data-v-24ec27c7><input${ssrRenderAttr("type", __props.type)}${ssrRenderAttr("value", __props.modelValue)} class="input"${ssrRenderAttr("placeholder", __props.placeholder)}${ssrRenderAttr("min", __props.min)} data-v-24ec27c7>`);
      if (__props.suffix) {
        _push(`<span class="suffix" data-v-24ec27c7>${ssrInterpolate(__props.suffix)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/InputGroup.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-24ec27c7"]]);
const scaleFactor = 0.05;
const _sfc_main$1 = {
  __name: "Preview3D",
  __ssrInlineRender: true,
  props: {
    type: { type: String, default: "meja" },
    length: { type: Number, default: 120 },
    width: { type: Number, default: 60 },
    height: { type: Number, default: 75 }
  },
  setup(__props) {
    const props = __props;
    const container = ref(null);
    let scene, currentGroup;
    const material = new THREE.MeshStandardMaterial({
      color: 16119287,
      roughness: 0.1,
      metalness: 0.1,
      transparent: true,
      opacity: 0.95
    });
    const createEdges = (mesh) => {
      const edgesGeometry = new THREE.EdgesGeometry(mesh.geometry);
      const edgesMaterial = new THREE.LineBasicMaterial({ color: 29155, linewidth: 2, transparent: true, opacity: 0.6 });
      const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
      mesh.add(edges);
    };
    const buildMeja = (l, h, w) => {
      const group = new THREE.Group();
      const topThickness = 0.2;
      const topMesh = new THREE.Mesh(new THREE.BoxGeometry(l, topThickness, w), material);
      topMesh.position.y = h / 2 - topThickness / 2;
      createEdges(topMesh);
      group.add(topMesh);
      const legSize = 0.3;
      const legHeight = h - topThickness;
      const positions = [
        [l / 2 - legSize / 2, w / 2 - legSize / 2],
        [-l / 2 + legSize / 2, w / 2 - legSize / 2],
        [l / 2 - legSize / 2, -w / 2 + legSize / 2],
        [-l / 2 + legSize / 2, -w / 2 + legSize / 2]
      ];
      positions.forEach((pos) => {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(legSize, legHeight, legSize), material);
        leg.position.set(pos[0], -topThickness / 2, pos[1]);
        createEdges(leg);
        group.add(leg);
      });
      return group;
    };
    const buildKursi = (l, h, w) => {
      const group = new THREE.Group();
      const seatThickness = 0.2;
      const seatHeight = h * 0.45;
      const seatMesh = new THREE.Mesh(new THREE.BoxGeometry(l, seatThickness, w), material);
      seatMesh.position.y = seatHeight - h / 2;
      createEdges(seatMesh);
      group.add(seatMesh);
      const legSize = 0.2;
      const legHeight = seatHeight;
      const positions = [
        [l / 2 - legSize / 2, w / 2 - legSize / 2],
        [-l / 2 + legSize / 2, w / 2 - legSize / 2],
        [l / 2 - legSize / 2, -w / 2 + legSize / 2],
        [-l / 2 + legSize / 2, -w / 2 + legSize / 2]
      ];
      positions.forEach((pos) => {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(legSize, legHeight, legSize), material);
        leg.position.set(pos[0], -h / 2 + legHeight / 2, pos[1]);
        createEdges(leg);
        group.add(leg);
      });
      const backrestHeight = h - seatHeight;
      const backrest = new THREE.Mesh(new THREE.BoxGeometry(l, backrestHeight, legSize), material);
      backrest.position.set(0, seatHeight - h / 2 + backrestHeight / 2, -w / 2 + legSize / 2);
      createEdges(backrest);
      group.add(backrest);
      return group;
    };
    const buildLemari = (l, h, w) => {
      const group = new THREE.Group();
      const body = new THREE.Mesh(new THREE.BoxGeometry(l, h, w), material);
      createEdges(body);
      group.add(body);
      const doorThickness = 0.05;
      const doorWidth = l / 2 - 0.05;
      const doorHeight = h - 0.2;
      const door1 = new THREE.Mesh(new THREE.BoxGeometry(doorWidth, doorHeight, doorThickness), material);
      door1.position.set(-l / 4, 0, w / 2 + doorThickness / 2);
      createEdges(door1);
      group.add(door1);
      const door2 = new THREE.Mesh(new THREE.BoxGeometry(doorWidth, doorHeight, doorThickness), material);
      door2.position.set(l / 4, 0, w / 2 + doorThickness / 2);
      createEdges(door2);
      group.add(door2);
      return group;
    };
    const buildKitchenSet = (l, h, w) => {
      const group = new THREE.Group();
      const bottomHeight = h * 0.4;
      const bottomCabinet = new THREE.Mesh(new THREE.BoxGeometry(l, bottomHeight, w), material);
      bottomCabinet.position.y = -h / 2 + bottomHeight / 2;
      createEdges(bottomCabinet);
      group.add(bottomCabinet);
      const topHeight = h * 0.35;
      const topW = w * 0.6;
      const topCabinet = new THREE.Mesh(new THREE.BoxGeometry(l, topHeight, topW), material);
      topCabinet.position.set(0, h / 2 - topHeight / 2, -w / 2 + topW / 2);
      createEdges(topCabinet);
      group.add(topCabinet);
      return group;
    };
    const createOrUpdateObject = () => {
      if (currentGroup) {
        scene.remove(currentGroup);
      }
      const l = Math.max(props.length * scaleFactor, 0.5);
      const h = Math.max(props.height * scaleFactor, 0.5);
      const w = Math.max(props.width * scaleFactor, 0.5);
      if (props.type === "meja") {
        currentGroup = buildMeja(l, h, w);
      } else if (props.type === "kursi") {
        currentGroup = buildKursi(l, h, w);
      } else if (props.type === "lemari") {
        currentGroup = buildLemari(l, h, w);
      } else if (props.type === "kitchenset") {
        currentGroup = buildKitchenSet(l, h, w);
      } else {
        currentGroup = new THREE.Group();
        const box = new THREE.Mesh(new THREE.BoxGeometry(l, h, w), material);
        createEdges(box);
        currentGroup.add(box);
      }
      scene.add(currentGroup);
    };
    watch(() => [props.type, props.length, props.width, props.height], () => {
      createOrUpdateObject();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "preview-container glass",
        ref_key: "container",
        ref: container
      }, _attrs))} data-v-90396eba></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Preview3D.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-90396eba"]]);
const _sfc_main = {
  __name: "kalkulator",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({
      type: "meja",
      length: 120,
      width: 60,
      height: 75,
      baseMaterial: "plywood18",
      finishing: "hpl",
      hinge: "biasa"
    });
    const furnitureTypes = [
      { label: "Meja", value: "meja" },
      { label: "Kursi", value: "kursi" },
      { label: "Lemari", value: "lemari" },
      { label: "Kitchen Set", value: "kitchenset" }
    ];
    const baseMaterials = [
      { label: "Plywood 18mm", value: "plywood18", price: 5e5 },
      { label: "Blockboard 18mm", value: "blockboard18", price: 45e4 },
      { label: "Kayu Solid Jati", value: "teakwood", price: 15e5 }
    ];
    const finishingOptions = [
      { label: "HPL Standar", value: "hpl", price: 25e4 },
      { label: "HPL Premium", value: "hpl_premium", price: 4e5 },
      { label: "Cat Duco", value: "duco", price: 6e5 }
    ];
    const hingeOptions = [
      { label: "Standar Biasa", value: "biasa", price: 5e4 },
      { label: "Slow Motion", value: "slowmotion", price: 15e4 },
      { label: "Premium Blum", value: "blum", price: 4e5 }
    ];
    const volumeM2 = computed(() => {
      const p = Number(form.length) || 0;
      const l = Number(form.width) || 0;
      return p * l / 1e4;
    });
    const totalPrice = computed(() => {
      const materialInfo = baseMaterials.find((m) => m.value === form.baseMaterial) || baseMaterials[0];
      const finishInfo = finishingOptions.find((f) => f.value === form.finishing) || finishingOptions[0];
      const hingeInfo = hingeOptions.find((h) => h.value === form.hinge) || hingeOptions[0];
      const materialCost = volumeM2.value * materialInfo.price;
      const finishingCost = volumeM2.value * finishInfo.price;
      const baseWorkerFee = 5e5;
      return materialCost + finishingCost + hingeInfo.price + baseWorkerFee;
    });
    const formatCurrency = (val) => {
      return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(val);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiSelectGroup = __nuxt_component_1;
      const _component_UiInputGroup = __nuxt_component_2;
      const _component_Preview3D = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrapper container" }, _attrs))} data-v-de22b9de><nav class="nav-back" data-v-de22b9de>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "back-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-left" data-v-de22b9de${_scopeId}><line x1="19" y1="12" x2="5" y2="12" data-v-de22b9de${_scopeId}></line><polyline points="12 19 5 12 12 5" data-v-de22b9de${_scopeId}></polyline></svg> Kembali ke Beranda `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                class: "icon-left"
              }, [
                createVNode("line", {
                  x1: "19",
                  y1: "12",
                  x2: "5",
                  y2: "12"
                }),
                createVNode("polyline", { points: "12 19 5 12 12 5" })
              ])),
              createTextVNode(" Kembali ke Beranda ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><header class="header" data-v-de22b9de><div class="header-bg-decoration" data-v-de22b9de></div><div class="header-content" data-v-de22b9de><div class="badge" data-v-de22b9de>Estimator App</div><h1 class="title" data-v-de22b9de>Furniture <span class="text-gradient" data-v-de22b9de>Custom</span></h1><p class="subtitle" data-v-de22b9de>Wujudkan interior idaman Anda. Hitung estimasi biaya pembuatan secara instan dengan panduan presisi 3D.</p></div></header><main class="main-content" data-v-de22b9de><div class="form-section glass" data-v-de22b9de><h2 class="section-title" data-v-de22b9de>Spesifikasi</h2>`);
      _push(ssrRenderComponent(_component_UiSelectGroup, {
        label: "Jenis Furniture",
        modelValue: form.type,
        "onUpdate:modelValue": ($event) => form.type = $event,
        options: furnitureTypes
      }, null, _parent));
      _push(`<div class="dimensions-grid" data-v-de22b9de>`);
      _push(ssrRenderComponent(_component_UiInputGroup, {
        label: "Panjang",
        type: "number",
        modelValue: form.length,
        "onUpdate:modelValue": ($event) => form.length = $event,
        suffix: "cm",
        min: "10"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UiInputGroup, {
        label: "Lebar",
        type: "number",
        modelValue: form.width,
        "onUpdate:modelValue": ($event) => form.width = $event,
        suffix: "cm",
        min: "10"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UiInputGroup, {
        label: "Tinggi",
        type: "number",
        modelValue: form.height,
        "onUpdate:modelValue": ($event) => form.height = $event,
        suffix: "cm",
        min: "10"
      }, null, _parent));
      _push(`</div><h3 class="subsection-title" data-v-de22b9de>Material &amp; Finishing</h3><div class="materials-grid" data-v-de22b9de>`);
      _push(ssrRenderComponent(_component_UiSelectGroup, {
        label: "Material Dasar",
        modelValue: form.baseMaterial,
        "onUpdate:modelValue": ($event) => form.baseMaterial = $event,
        options: baseMaterials
      }, null, _parent));
      _push(ssrRenderComponent(_component_UiSelectGroup, {
        label: "Finishing",
        modelValue: form.finishing,
        "onUpdate:modelValue": ($event) => form.finishing = $event,
        options: finishingOptions
      }, null, _parent));
      _push(`</div><h3 class="subsection-title" data-v-de22b9de>Aksesoris</h3>`);
      _push(ssrRenderComponent(_component_UiSelectGroup, {
        label: "Jenis Engsel/Rel",
        modelValue: form.hinge,
        "onUpdate:modelValue": ($event) => form.hinge = $event,
        options: hingeOptions
      }, null, _parent));
      _push(`</div><div class="preview-section" data-v-de22b9de>`);
      _push(ssrRenderComponent(_component_Preview3D, {
        type: form.type,
        length: Number(form.length) || 0,
        width: Number(form.width) || 0,
        height: Number(form.height) || 0
      }, null, _parent));
      _push(`<div class="summary-card glass" data-v-de22b9de><h2 class="section-title" data-v-de22b9de>Estimasi Biaya</h2><div class="summary-row" data-v-de22b9de><span data-v-de22b9de>Volume / Luas:</span><span data-v-de22b9de>${ssrInterpolate(volumeM2.value.toFixed(2))} m²</span></div><div class="summary-row total" data-v-de22b9de><span data-v-de22b9de>Total Estimasi:</span><span class="price" data-v-de22b9de>${ssrInterpolate(formatCurrency(totalPrice.value))}</span></div><button class="btn-primary" data-v-de22b9de>Pesan Sekarang via WhatsApp</button></div></div></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/kalkulator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kalkulator = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-de22b9de"]]);
export {
  kalkulator as default
};
//# sourceMappingURL=kalkulator-BjE-M52-.js.map
