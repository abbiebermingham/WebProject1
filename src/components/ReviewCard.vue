
<script setup>
import { computed } from 'vue'
import { store } from '../data/store'
const props = defineProps({ review: { type: Object, required: true } })
const article = computed(() => store.articles.find(item => item.id === props.review.articleId))
</script>
<template>
  <article class="review-card">
    <img v-if="article?.image" :src="article.image" :alt="article.title" />
    <div><h3>{{ article?.title || 'Deleted article' }}</h3>
      <p :aria-label="review.rating + ' out of 5 stars'">{{ '★'.repeat(review.rating) }}{{ '☆'.repeat(5 - review.rating) }}</p>
      <p>{{ review.text }}</p><p class="muted">By {{ review.name }}</p>
    </div>
  </article>
</template>
