
<script setup>

defineProps({
  modelValue: String
})


defineEmits(['update:modelValue'])
</script>

<template>
  <div class="search-container">
    <label for="article-search">Search articles</label>

    <input
        id="article-search"
        type="search"
        placeholder="Search articles..."
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
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