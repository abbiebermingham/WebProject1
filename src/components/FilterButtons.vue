

<script setup>
// Receive the selected category and available categories.
defineProps({
  modelValue: String,
  categories: Array
})

// Tell HomePage when the category changes.
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="filter-container">
    <label for="article-category">Category</label>

    <select
        id="article-category"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
    >
      <option value="">All categories</option>

      <option
          v-for="category in categories"
          :key="category"
          :value="category"
      >
        {{ category }}
      </option>
    </select>
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