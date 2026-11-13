
<script setup>
defineProps({
  modelValue: String
})

defineEmits(['update:modelValue'])

const filters = ['All', 'Oldest', 'Newest']
</script>

<template>
  <div class="filters">

    <button
        v-for="filter in filters"
        :key="filter"
        :class="{ active: modelValue === filter }"
        @click="$emit('update:modelValue', filter)"
    >
      {{ filter }}
    </button>

  </div>
</template>

<style scoped>
.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
}

.filters button {
  width: 90px;
  height: 23px;
  border: 1px solid #555;
  border-radius: 20px;
  background-color: white;
  font-size: 14px;
  cursor: pointer;
}

.filters button.active {
  background-color: #222;
  color: white;
}
</style>
