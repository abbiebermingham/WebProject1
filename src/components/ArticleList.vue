
<script setup>
import ArticleCard from './ArticleCard.vue'

defineProps({
  articles: Array
})
</script>

<template>
  <section class="articles">

    <ArticleCard
        v-for="article in articles"
        :key="article.id"
        :article="article"
    />

    <p v-if="articles.length === 0" class="no-results">
      No movies found. Try another search.
    </p>

  </section>
</template>

<style scoped>
.articles {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 10%;
  row-gap: 10px;
  width: 100%;
}

.no-results {
  color: #777;
  font-size: 14px;
  grid-column: 1 / -1;
}
</style>
