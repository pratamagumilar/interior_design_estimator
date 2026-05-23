<template>
  <div class="page-wrapper container">
    <nav class="nav-back">
      <NuxtLink to="/" class="back-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Kembali ke Beranda
      </NuxtLink>
    </nav>
    <header class="header">
      <div class="header-bg-decoration"></div>
      <div class="header-content">
        <div class="badge">Estimator App</div>
        <h1 class="title">Furniture <span class="text-gradient">Custom</span></h1>
        <p class="subtitle">Wujudkan interior idaman Anda. Hitung estimasi biaya pembuatan secara instan dengan panduan presisi 3D.</p>
      </div>
    </header>

    <main class="main-content">
      <div class="form-section glass">
        <h2 class="section-title">Spesifikasi</h2>
        
        <UiSelectGroup 
          label="Jenis Furniture"
          v-model="form.type"
          :options="furnitureTypes"
        />

        <div class="dimensions-grid">
          <UiInputGroup 
            label="Panjang"
            type="number"
            v-model="form.length"
            suffix="cm"
            min="10"
          />
          <UiInputGroup 
            label="Lebar"
            type="number"
            v-model="form.width"
            suffix="cm"
            min="10"
          />
          <UiInputGroup 
            label="Tinggi"
            type="number"
            v-model="form.height"
            suffix="cm"
            min="10"
          />
        </div>

        <h3 class="subsection-title">Material & Finishing</h3>
        <div class="materials-grid">
          <UiSelectGroup 
            label="Material Dasar"
            v-model="form.baseMaterial"
            :options="baseMaterials"
          />
          <UiSelectGroup 
            label="Finishing"
            v-model="form.finishing"
            :options="finishingOptions"
          />
        </div>

        <h3 class="subsection-title">Aksesoris</h3>
        <UiSelectGroup 
          label="Jenis Engsel/Rel"
          v-model="form.hinge"
          :options="hingeOptions"
        />

      </div>

      <div class="preview-section">
        <Preview3D 
          :type="form.type"
          :length="Number(form.length) || 0"
          :width="Number(form.width) || 0"
          :height="Number(form.height) || 0"
        />

        <div class="summary-card glass">
          <h2 class="section-title">Estimasi Biaya</h2>
          <div class="summary-row">
            <span>Volume / Luas:</span>
            <span>{{ volumeM2.toFixed(2) }} m²</span>
          </div>
          <div class="summary-row total">
            <span>Total Estimasi:</span>
            <span class="price">{{ formatCurrency(totalPrice) }}</span>
          </div>
          <button class="btn-primary" @click="handleWhatsApp">Pesan Sekarang via WhatsApp</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'

const form = reactive({
  type: 'meja',
  length: 120,
  width: 60,
  height: 75,
  baseMaterial: 'plywood18',
  finishing: 'hpl',
  hinge: 'biasa'
})

// Options Dummy
const furnitureTypes = [
  { label: 'Meja', value: 'meja' },
  { label: 'Kursi', value: 'kursi' },
  { label: 'Lemari', value: 'lemari' },
  { label: 'Kitchen Set', value: 'kitchenset' }
]

const baseMaterials = [
  { label: 'Plywood 18mm', value: 'plywood18', price: 500000 },
  { label: 'Blockboard 18mm', value: 'blockboard18', price: 450000 },
  { label: 'Kayu Solid Jati', value: 'teakwood', price: 1500000 }
]

const finishingOptions = [
  { label: 'HPL Standar', value: 'hpl', price: 250000 },
  { label: 'HPL Premium', value: 'hpl_premium', price: 400000 },
  { label: 'Cat Duco', value: 'duco', price: 600000 }
]

const hingeOptions = [
  { label: 'Standar Biasa', value: 'biasa', price: 50000 },
  { label: 'Slow Motion', value: 'slowmotion', price: 150000 },
  { label: 'Premium Blum', value: 'blum', price: 400000 }
]

// Computed Perhitungan
const volumeM2 = computed(() => {
  const p = Number(form.length) || 0
  const l = Number(form.width) || 0
  return (p * l) / 10000 
})

const totalPrice = computed(() => {
  const materialInfo = baseMaterials.find(m => m.value === form.baseMaterial) || baseMaterials[0]
  const finishInfo = finishingOptions.find(f => f.value === form.finishing) || finishingOptions[0]
  const hingeInfo = hingeOptions.find(h => h.value === form.hinge) || hingeOptions[0]

  const materialCost = volumeM2.value * materialInfo.price
  const finishingCost = volumeM2.value * finishInfo.price
  
  const baseWorkerFee = 500000

  return materialCost + finishingCost + hingeInfo.price + baseWorkerFee
})

const formatCurrency = (val) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(val)
}

const handleWhatsApp = () => {
  alert(`Memesan ${form.type} dengan ukuran ${form.length}x${form.width}x${form.height}cm.\nEstimasi: ${formatCurrency(totalPrice.value)}\n(Ini akan mengarahkan ke WhatsApp)`)
}
</script>

<style scoped>
.page-wrapper {
  padding: 24px 24px 60px;
}
.nav-back {
  margin-bottom: 24px;
}
.back-link {
  display: inline-flex;
  align-items: center;
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}
.back-link:hover {
  color: var(--accent-color);
}
.icon-left {
  width: 18px;
  height: 18px;
  margin-right: 8px;
}
.header {
  position: relative;
  text-align: center;
  margin-bottom: 48px;
  padding: 56px 24px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: linear-gradient(135deg, #ffffff 0%, #f4f7f9 100%);
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  border: 1px solid rgba(0,0,0,0.05);
}
.header-bg-decoration {
  position: absolute;
  top: -50%;
  right: -5%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(0, 113, 227, 0.08) 0%, rgba(255, 255, 255, 0) 70%);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
}
.header-content {
  position: relative;
  z-index: 1;
}
.badge {
  display: inline-block;
  padding: 6px 16px;
  background-color: rgba(0, 113, 227, 0.1);
  color: var(--accent-color);
  font-size: 0.8rem;
  font-weight: 700;
  border-radius: 20px;
  margin-bottom: 20px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
.title {
  font-size: 3.2rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 16px;
  line-height: 1.2;
  letter-spacing: -1px;
}
.text-gradient {
  background: linear-gradient(135deg, var(--accent-color) 0%, #00c6ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.subtitle {
  font-size: 1.15rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.main-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  align-items: start;
}

@media (min-width: 900px) {
  .main-content {
    grid-template-columns: 1fr 1fr;
  }
}

.form-section {
  padding: 32px;
  border-radius: var(--radius-lg);
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 24px;
}

.subsection-title {
  font-size: 1.125rem;
  margin: 24px 0 16px;
  color: var(--text-primary);
  border-top: 1px solid var(--border-color);
  padding-top: 24px;
}

.dimensions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.materials-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.summary-card {
  padding: 32px;
  border-radius: var(--radius-lg);
  margin-top: 24px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  color: var(--text-secondary);
  font-size: 1rem;
}

.summary-row.total {
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--border-color);
  color: var(--text-primary);
  font-weight: 600;
  font-size: 1.25rem;
}

.price {
  color: var(--accent-color);
}

.btn-primary {
  width: 100%;
  padding: 16px;
  margin-top: 24px;
  background-color: var(--accent-color);
  color: white;
  border: none;
  border-radius: var(--radius-sm);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.btn-primary:hover {
  background-color: var(--accent-hover);
}

.btn-primary:active {
  transform: scale(0.98);
}
</style>
