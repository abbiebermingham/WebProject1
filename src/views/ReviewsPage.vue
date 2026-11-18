<!-- REVIEWS PAGE: displays all submitted reviews -->
<script setup>
import { store } from '../data/store'
import ReviewCard from '../components/ReviewCard.vue'
</script>
<template>
  <h1>Reviews</h1>
  <div class="review-grid"><ReviewCard v-for="review in store.reviews" :key="review.id" :review="review" /></div>
  <p v-if="!store.reviews.length">No reviews yet.</p>
  <RouterLink to="/edit-reviews">Edit my reviews</RouterLink>
</template>
