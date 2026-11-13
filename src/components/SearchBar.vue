
<script setup>
defineProps({
  modelValue: String
})

defineEmits(['update:modelValue'])
</script>

<template>
  <input
      type="text"
      placeholder="Search by name, category or genre"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="search-bar"
  />
</template>

<style scoped>
.search-bar {
  width: 35%;
  height: 28px;
  border: 1px solid #555;
  border-radius: 20px;
  padding: 5px 12px;
  font-size: 14px;
}

.search-bar:focus {
  outline: none;
  border-color: #55b5ef;
}
</style>
