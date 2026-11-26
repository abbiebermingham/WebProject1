<script setup>
import { ref, computed } from 'vue'
import { store } from '../data/store.js'
import SearchBar from '../components/SearchBar.vue'
import ArticleCard from '../components/ArticleCard.vue'
import FilterButtons from '../components/FilterButtons.vue'


const searchText = ref('')
const selectedCategory = ref('')
const articles = computed(() => store.articles ?? [])
const categories = computed(() =>
    [...new Set(articles.value.map(article => article.category))].sort()
)



const filteredArticles = computed(() => {


  const text = searchText.value.trim().toLowerCase()


  return articles.value.filter(article => {

    const searchableText =
        `${article.title} ${article.excerpt ?? ''}`.toLowerCase()


    const matchesSearch = searchableText.includes(text)


    const matchesCategory =
        !selectedCategory.value ||
        article.category === selectedCategory.value


    return matchesSearch && matchesCategory

  })
})

function clearFilters() {
  searchText.value = ''
  selectedCategory.value = ''
}
</script>


<template>

  <section class="top-section">
    <div class="welcome">
      <h1>Welcome to the Home Page</h1>
      <p>Keep up to date with all the latest!</p>
    </div>


    <SearchBar v-model="searchText" />
  </section>

  <h2>The latest from MovieTalk:</h2>


  <FilterButtons
      v-model="selectedCategory"
      :categories="categories"
  />


  <button type="button" @click="clearFilters">
    Clear filters
  </button>


  <p role="status">
    {{ filteredArticles.length }} of
    {{ articles.length }} articles shown.
  </p>


  <p v-if="articles.length === 0">
    No articles yet.
  </p>


  <div v-else-if="filteredArticles.length" class="articles-grid">
    <ArticleCard
        v-for="article in filteredArticles"
        :key="article.id"
        :article="article"
    />
  </div>


  <p v-else>
    No articles match your search.
  </p>
</template>
