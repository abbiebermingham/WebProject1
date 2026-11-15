<script setup>
import { ref } from 'vue'

const username = 'Username'

const reviews = ref([
  { id: 1, title: 'Project Hail Mary', rating: 4, image: '' },
  { id: 2, title: 'Game Night', rating: 5, image: '' },
  { id: 3, title: 'Interstellar', rating: 3, image: '' },
])

function editReview(id) {
  console.log('edit', id)
}

function deleteReview(id) {
  reviews.value = reviews.value.filter(r => r.id !== id)
}

function deleteAccount() {
  console.log('delete account')
}
</script>

<template>
  <main class="reviews-page">

    <!-- Profile -->
    <section class="profile">
      <div class="avatar">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
        </svg>
      </div>
      <span class="username">{{ username }}</span>
    </section>

    <!-- Tabs -->
    <div class="tabs">
      <span class="pill active">My Reviews</span>
      <RouterLink to="/watchlist" class="pill">My Watchlist</RouterLink>
    </div>

    <!-- Review cards -->
    <article v-for="review in reviews" :key="review.id" class="review-card">
      <div class="thumb">
        <img v-if="review.image" :src="review.image" :alt="review.title" />
      </div>

      <div class="review-info">
        <div class="stars" :aria-label="`${review.rating} out of 5 stars`">
          <span v-for="n in 5" :key="n">{{ n <= review.rating ? '★' : '☆' }}</span>
        </div>
      </div>

      <div class="actions">
        <button class="btn" @click="editReview(review.id)">Edit</button>
        <button class="btn danger" @click="deleteReview(review.id)">Delete</button>
      </div>
    </article>

    <button class="delete-account" @click="deleteAccount">Delete my account?</button>
  </main>
</template>

<style scoped>
.reviews-page {
  padding: 24px 40px 60px;
  max-width: 900px;
}

.profile {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 20px;
}

.avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.username {
  font-size: 14px;
}

.tabs {
  display: flex;
  gap: 24px;
  margin-bottom: 20px;
}

.pill {
  padding: 6px 16px;
  border: 1px solid #000;
  border-radius: 999px;
  font-size: 12px;
  color: #000;
  background: #fff;
  text-decoration: none;
}

.pill.active {
  background: #000;
  color: #fff;
}

.review-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 8px 14px;
  margin-bottom: 24px;
  border: 1px solid #000;
}

.thumb {
  width: 90px;
  height: 70px;
  background: #d9d9d9;
  flex-shrink: 0;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.review-info {
  flex: 1;
}

.stars {
  font-size: 14px;
  letter-spacing: 2px;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn {
  width: 66px;
  padding: 5px 0;
  border: 1px solid #000;
  border-radius: 999px;
  background: #fff;
  font-size: 11px;
  cursor: pointer;
}

.btn.danger {
  border-color: #e03131;
  color: #e03131;
}

.delete-account {
  margin: 8px 0 0 20px;
  background: none;
  border: none;
  color: #e03131;
  font-size: 11px;
  cursor: pointer;
}
</style>