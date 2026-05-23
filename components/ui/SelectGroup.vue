<template>
  <div class="select-group">
    <label v-if="label" class="label">{{ label }}</label>
    <div class="select-wrapper">
      <select 
        :value="modelValue" 
        @change="$emit('update:modelValue', $event.target.value)"
        class="select"
      >
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
      <div class="icon-wrapper">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  modelValue: [String, Number],
  options: {
    type: Array,
    required: true
  }
})
defineEmits(['update:modelValue'])
</script>

<style scoped>
.select-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
}
.label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary);
}
.select-wrapper {
  position: relative;
}
.select {
  width: 100%;
  padding: 12px 40px 12px 16px;
  font-size: 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  background-color: var(--surface-color);
  color: var(--text-primary);
  appearance: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}
.select:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.2);
}
.icon-wrapper {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--text-secondary);
  display: flex;
}
.icon {
  width: 16px;
  height: 16px;
}
</style>
