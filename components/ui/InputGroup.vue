<template>
  <div class="input-group">
    <label v-if="label" class="label">{{ label }}</label>
    <div class="input-wrapper">
      <input 
        :type="type" 
        :value="modelValue" 
        @input="$emit('update:modelValue', $event.target.value)"
        class="input"
        :placeholder="placeholder"
        :min="min"
      />
      <span v-if="suffix" class="suffix">{{ suffix }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  modelValue: [String, Number],
  type: { type: String, default: 'text' },
  placeholder: String,
  suffix: String,
  min: [Number, String]
})
defineEmits(['update:modelValue'])
</script>

<style scoped>
.input-group {
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
.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}
.input {
  width: 100%;
  padding: 12px 16px;
  font-size: 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  background-color: var(--surface-color);
  color: var(--text-primary);
  transition: all 0.2s ease;
  font-family: inherit;
}
.input:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.2);
}
.suffix {
  position: absolute;
  right: 16px;
  color: var(--text-secondary);
  font-size: 0.875rem;
  pointer-events: none;
}
</style>
