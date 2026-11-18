<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { store } from '../data/store'
const route = useRoute()
const router = useRouter()
const article = computed(() => store.articles.find(a => a.id === Number(route.params.id)))
const name = ref('')
const rating = ref(5)
const reviewText = ref('')
function submitReview() {
  if (!article.value || !name.value.trim() || !reviewText.value.trim()) return
  store.reviews.push({ id: Date.now(), articleId: article.value.id, name: name.value.trim(), rating: Number(rating.value), text: reviewText.value.trim() })
  router.push('/reviews')
}
</script>
<template>
  <h1>Write a review</h1>
  <form v-if="article" class="form-card" @submit.prevent="submitReview">
    <h2>{{ article.title }}</h2>
    <label>Your name <input v-model.trim="name" required maxlength="60" /></label>
    <label>Your rating <select v-model.number="rating"><option v-for="n in 5" :key="n" :value="n">{{ n }} stars</option></select></label>
    <label>Your review <textarea v-model.trim="reviewText" required maxlength="1000" rows="5"></textarea></label>
    <div class="actions"><RouterLink to="/reviews">Cancel</RouterLink><button type="submit">Submit review</button></div>
  </form>
  <p v-else>Movie not found.</p>
</template>
