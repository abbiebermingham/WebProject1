<!-- WATCHLIST: displays saved movies -->
<script setup>
import { computed } from 'vue'
import { store } from '../data/store'
import ArticleCard from '../components/ArticleCard.vue'
const savedArticles = computed(() => store.articles.filter(article => store.watchlist.includes(article.id)))
</script>
<template>
  <h1>My Watchlist</h1><p>Movies and articles you saved.</p>
  <div class="article-grid"><ArticleCard v-for="article in savedArticles" :key="article.id" :article="article" /></div>
  <p v-if="!savedArticles.length">Nothing saved yet. <RouterLink to="/">Browse movies</RouterLink></p>
</template>
