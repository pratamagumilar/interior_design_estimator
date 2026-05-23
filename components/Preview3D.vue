<template>
  <div class="preview-container glass" ref="container">
    <!-- ThreeJS Canvas will be appended here -->
  </div>
</template>

<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

const props = defineProps({
  type: { type: String, default: 'meja' },
  length: { type: Number, default: 120 },
  width: { type: Number, default: 60 },
  height: { type: Number, default: 75 }
})

const container = ref(null)
let scene, camera, renderer, currentGroup

// A factor to scale down real-world cm to ThreeJS units
const scaleFactor = 0.05 

const initThreeJS = () => {
  if (!container.value) return

  // Scene setup
  scene = new THREE.Scene()
  
  // Camera setup
  const width = container.value.clientWidth
  const height = container.value.clientHeight
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
  camera.position.set(10, 10, 15)
  camera.lookAt(0, 0, 0)

  // Renderer setup
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(window.devicePixelRatio)
  container.value.appendChild(renderer.domElement)

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
  scene.add(ambientLight)
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
  directionalLight.position.set(10, 20, 15)
  scene.add(directionalLight)

  // Create Object
  createOrUpdateObject()

  // Animation Loop
  const animate = () => {
    requestAnimationFrame(animate)
    if (currentGroup) {
      // Gentle rotation for presentation
      currentGroup.rotation.y += 0.005
    }
    renderer.render(scene, camera)
  }
  animate()

  // Handle resize
  window.addEventListener('resize', handleResize)
}

// Shared material
const material = new THREE.MeshStandardMaterial({ 
  color: 0xF8F6F0, // Ivory Cream
  roughness: 0.1,
  metalness: 0.1,
  transparent: true,
  opacity: 0.95
})

const createEdges = (mesh) => {
  const edgesGeometry = new THREE.EdgesGeometry(mesh.geometry)
  const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x8E9B82, linewidth: 2, transparent: true, opacity: 0.8 }) // Olive Sage
  const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial)
  mesh.add(edges)
}

const buildMeja = (l, h, w) => {
  const group = new THREE.Group()
  const topThickness = 0.2
  
  // Top
  const topMesh = new THREE.Mesh(new THREE.BoxGeometry(l, topThickness, w), material)
  topMesh.position.y = h / 2 - topThickness / 2
  createEdges(topMesh)
  group.add(topMesh)
  
  // Legs
  const legSize = 0.3
  const legHeight = h - topThickness
  const positions = [
    [l/2 - legSize/2, w/2 - legSize/2],
    [-l/2 + legSize/2, w/2 - legSize/2],
    [l/2 - legSize/2, -w/2 + legSize/2],
    [-l/2 + legSize/2, -w/2 + legSize/2],
  ]
  positions.forEach(pos => {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(legSize, legHeight, legSize), material)
    leg.position.set(pos[0], -topThickness/2, pos[1])
    createEdges(leg)
    group.add(leg)
  })
  
  return group
}

const buildKursi = (l, h, w) => {
  const group = new THREE.Group()
  const seatThickness = 0.2
  const seatHeight = h * 0.45 // seat is at 45% of total height
  
  const seatMesh = new THREE.Mesh(new THREE.BoxGeometry(l, seatThickness, w), material)
  seatMesh.position.y = seatHeight - h/2
  createEdges(seatMesh)
  group.add(seatMesh)
  
  // Legs
  const legSize = 0.2
  const legHeight = seatHeight
  const positions = [
    [l/2 - legSize/2, w/2 - legSize/2],
    [-l/2 + legSize/2, w/2 - legSize/2],
    [l/2 - legSize/2, -w/2 + legSize/2],
    [-l/2 + legSize/2, -w/2 + legSize/2],
  ]
  positions.forEach(pos => {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(legSize, legHeight, legSize), material)
    leg.position.set(pos[0], -h/2 + legHeight/2, pos[1])
    createEdges(leg)
    group.add(leg)
  })
  
  // Backrest
  const backrestHeight = h - seatHeight
  const backrest = new THREE.Mesh(new THREE.BoxGeometry(l, backrestHeight, legSize), material)
  backrest.position.set(0, seatHeight - h/2 + backrestHeight/2, -w/2 + legSize/2)
  createEdges(backrest)
  group.add(backrest)
  
  return group
}

const buildLemari = (l, h, w) => {
  const group = new THREE.Group()
  
  // Main body
  const body = new THREE.Mesh(new THREE.BoxGeometry(l, h, w), material)
  createEdges(body)
  group.add(body)
  
  // Doors indicator
  const doorThickness = 0.05
  const doorWidth = l / 2 - 0.05
  const doorHeight = h - 0.2
  
  const door1 = new THREE.Mesh(new THREE.BoxGeometry(doorWidth, doorHeight, doorThickness), material)
  door1.position.set(-l/4, 0, w/2 + doorThickness/2)
  createEdges(door1)
  group.add(door1)
  
  const door2 = new THREE.Mesh(new THREE.BoxGeometry(doorWidth, doorHeight, doorThickness), material)
  door2.position.set(l/4, 0, w/2 + doorThickness/2)
  createEdges(door2)
  group.add(door2)
  
  return group
}

const buildKitchenSet = (l, h, w) => {
  const group = new THREE.Group()
  
  // Bottom cabinet
  const bottomHeight = h * 0.4
  const bottomCabinet = new THREE.Mesh(new THREE.BoxGeometry(l, bottomHeight, w), material)
  bottomCabinet.position.y = -h/2 + bottomHeight/2
  createEdges(bottomCabinet)
  group.add(bottomCabinet)
  
  // Top cabinet (thinner depth)
  const topHeight = h * 0.35
  const topW = w * 0.6
  const topCabinet = new THREE.Mesh(new THREE.BoxGeometry(l, topHeight, topW), material)
  // Align to back
  topCabinet.position.set(0, h/2 - topHeight/2, -w/2 + topW/2)
  createEdges(topCabinet)
  group.add(topCabinet)
  
  return group
}

const createOrUpdateObject = () => {
  if (currentGroup) {
    scene.remove(currentGroup)
  }
  
  // Convert real cm to 3D units
  const l = Math.max(props.length * scaleFactor, 0.5)
  const h = Math.max(props.height * scaleFactor, 0.5)
  const w = Math.max(props.width * scaleFactor, 0.5)

  if (props.type === 'meja') {
    currentGroup = buildMeja(l, h, w)
  } else if (props.type === 'kursi') {
    currentGroup = buildKursi(l, h, w)
  } else if (props.type === 'lemari') {
    currentGroup = buildLemari(l, h, w)
  } else if (props.type === 'kitchenset') {
    currentGroup = buildKitchenSet(l, h, w)
  } else {
    // Fallback basic box
    currentGroup = new THREE.Group()
    const box = new THREE.Mesh(new THREE.BoxGeometry(l, h, w), material)
    createEdges(box)
    currentGroup.add(box)
  }
  
  scene.add(currentGroup)
}

const handleResize = () => {
  if (!container.value || !camera || !renderer) return
  const width = container.value.clientWidth
  const height = container.value.clientHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

watch(() => [props.type, props.length, props.width, props.height], () => {
  createOrUpdateObject()
})

onMounted(() => {
  initThreeJS()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  if (renderer && container.value) {
    container.value.removeChild(renderer.domElement)
    renderer.dispose()
  }
})
</script>

<style scoped>
.preview-container {
  width: 100%;
  height: 400px;
  border-radius: var(--radius-md);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(248,246,240,0.6) 100%);
}
.preview-container::after {
  content: "Interactive 3D Preview";
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
