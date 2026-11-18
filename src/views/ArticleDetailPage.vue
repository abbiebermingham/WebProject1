<!-- ARTICLE DETAIL: uses the ID in the URL to display one article -->
<script setup>
// This view is reused for all six movies.
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { store, toggleWatchlist } from '../data/store'

// Read the movie ID from the URL, e.g. /article/3.
const route = useRoute()
const article = computed(() => store.articles.find(movie => movie.id === Number(route.params.id)))

// The watchlist button changes its label when a movie is saved.
const saved = computed(() => article.value && store.watchlist.includes(article.value.id))
</script>

<template>
  <RouterLink to="/">← Go back to articles</RouterLink>

  <article v-if="article" class="detail">
    <header class="detail-heading">
      <span class="movie-tag">{{ article.tag }}</span>
      <h1>{{ article.title }}</h1>
      <p class="muted">Published {{ article.published }} · {{ article.readTime }}</p>
      <p class="detail-excerpt">{{ article.excerpt }}</p>
    </header>

    <img v-if="article.image" class="detail-poster" :src="article.image" :alt="'Poster for ' + article.title" />

    <div class="detail-actions">
      <button type="button" :aria-pressed="Boolean(saved)" @click="toggleWatchlist(article.id)">
        {{ saved ? '♥ Remove from watchlist' : '♡ Add to watchlist' }}
      </button>
      <RouterLink :to="'/write-review/' + article.id">Write a review</RouterLink>
    </div>

    <section v-if="article.quickFacts?.length" class="quick-facts">
      <h2>Quick facts</h2>
      <ul>
        <li v-for="fact in article.quickFacts" :key="fact">{{ fact }}</li>
      </ul>
    </section>

    <section class="article-body">
      <h2>Article</h2>
      <p v-for="(paragraph, index) in article.paragraphs" :key="index">{{ paragraph }}</p>
    </section>

    <section v-if="article.verdict" class="verdict">
      <h2>Our verdict</h2>
      <p>{{ article.verdict }}</p>
    </section>
  </article>

  <p v-else role="status">Article not found. Please return to the home page.</p>
</template>
