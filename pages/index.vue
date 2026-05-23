<template>
  <div class="landing-page">
    <header class="navbar container">
      <div class="logo">Interior<span>Estimator</span></div>
    </header>

    <main class="hero-section container">
      <div class="hero-content">
        <div class="badge">Selamat Datang</div>
        <h1 class="hero-title">Wujudkan Interior Impian Anda dengan <span class="text-gradient">Presisi 3D</span></h1>
        <p class="hero-subtitle">
          Tidak perlu lagi menebak-nebak biaya. Hitung estimasi harga pembuatan meja, kursi, lemari, hingga kitchen set custom secara real-time dengan panduan visual 3D interaktif.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/kalkulator" class="btn-large">
            Coba Kalkulator Harga
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </NuxtLink>
        </div>
      </div>

      <div class="features-grid">
        <div class="feature-card glass">
          <div class="feature-icon">💰</div>
          <h3>Harga Transparan</h3>
          <p>Kalkulasi akurat berdasarkan dimensi dan material pilihan Anda tanpa biaya tersembunyi.</p>
        </div>
        <div class="feature-card glass">
          <div class="feature-icon">👁️</div>
          <h3>Visualisasi 3D</h3>
          <p>Lihat proporsi ukuran furniture Anda secara langsung melalui preview 3D interaktif.</p>
        </div>
        <div class="feature-card glass">
          <div class="feature-icon">✨</div>
          <h3>Material Premium</h3>
          <p>Pilih dari berbagai opsi material dasar dan finishing berkualitas tinggi sesuai budget Anda.</p>
        </div>
      </div>
    </main>
    
    <div class="bg-blobs">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
    </div>
  </div>
</template>

<style scoped>
.landing-page {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-image: url('/bg_kitchen_japandi.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.landing-page::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(255, 255, 255, 0.5); /* Overlay lebih transparan agar gambar nyata */
  z-index: 1;
}

.navbar {
  padding: 24px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 10;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.5px;
}

.logo span {
  color: var(--accent-color);
}

.hero-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 60px 24px 100px;
  position: relative;
  z-index: 10;
}

.hero-content {
  max-width: 800px;
  margin-bottom: 80px;
}

.badge {
  display: inline-block;
  padding: 6px 16px;
  background-color: rgba(142, 155, 130, 0.15);
  color: var(--accent-color);
  font-size: 0.8rem;
  font-weight: 700;
  border-radius: 20px;
  margin-bottom: 24px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 24px;
  line-height: 1.1;
  letter-spacing: -1px;
}

.text-gradient {
  background: linear-gradient(135deg, var(--accent-color) 0%, var(--text-primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  justify-content: center;
}

.btn-large {
  display: inline-flex;
  align-items: center;
  padding: 16px 32px;
  background-color: var(--accent-color);
  color: white;
  border-radius: 30px;
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(142, 155, 130, 0.3);
}

.btn-large:hover {
  background-color: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(142, 155, 130, 0.4);
}

.icon-right {
  width: 20px;
  height: 20px;
  margin-left: 8px;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  width: 100%;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-card {
  padding: 32px;
  text-align: left;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: linear-gradient(135deg, #FCFBF8 0%, #F8F6F0 100%);
  box-shadow: 0 4px 20px rgba(74, 60, 49, 0.03);
  border: 1px solid var(--border-color);
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.feature-card h3 {
  font-size: 1.25rem;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.feature-card p {
  color: var(--text-secondary);
  line-height: 1.5;
}

.bg-blobs {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
}

.blob-1 {
  top: -50%;
  right: -5%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(142, 155, 130, 0.15) 0%, rgba(255, 255, 255, 0) 70%);
  border-radius: 50%;
  z-index: 0;
}

.blob-2 {
  bottom: -20%;
  left: -10%;
  width: 800px;
  height: 800px;
  background: rgba(74, 60, 49, 0.08); /* Walnut Brown Blob */
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.8rem;
  }
  .hero-section {
    padding: 40px 24px;
  }
}
</style>
