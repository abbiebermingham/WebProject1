<script setup>
import { ref } from 'vue'

const watchlist = ref([
  {
    id: 1,
    title: 'Project Hail Mary',
    date: '30th March 2026',
    readTime: '4 min read',
    image: '/images/projecthailmary.jpg'
  },
  {
    id: 3,
    title: 'Interstellar',
    date: '30th March 2026',
    readTime: '4 min read',
    image: '/images/Interstellar.jpg'
  },
  {
    id: 4,
    title: 'A Quiet Place',
    date: '30th March 2026',
    readTime: '4 min read',
    image: '/images/A Quiet Place.jpg'
  }
])

function removeFromWatchlist(id) {
  watchlist.value = watchlist.value.filter(film => film.id !== id)
}
</script>

<template>
  <main class="watchlist-page">

    <!-- Heading -->
    <header class="heading">
      <h1>My Watchlist</h1>
      <p>Films you have saved to watch later</p>
    </header>

    <!-- Filter -->
    <div class="filters">
      <button class="pill active">All</button>
    </div>

    <!-- Cards -->
    <section class="grid">
      <article v-for="film in watchlist" :key="film.id" class="card">
        <div class="thumb">
          <img v-if="film.image" :src="film.image" :alt="film.title" />
        </div>

        <div class="card-footer">
          <div class="card-text">
            <h3>{{ film.title }}</h3>
            <span>{{ film.date }}</span>
            <span>{{ film.readTime }}</span>
          </div>
          <button class="btn" @click="removeFromWatchlist(film.id)">Remove</button>
        </div>
      </article>

      <!-- Empty-state card -->
      <div class="empty-card">
        <p>Nothing else saved yet</p>
        <RouterLink to="/" class="btn browse">Browse films</RouterLink>
      </div>
    </section>

  </main>
</template>

<style scoped>
.watchlist-page {
  padding: 28px 40px 60px;
}

.heading h1 {
  margin: 0;
  font-size: 28px;
  font-weight: 400;
}

.heading p {
  margin: 2px 0 0;
  font-size: 11px;
  color: #555;
}

.filters {
  margin: 20px 0 28px;
}

.pill {
  padding: 10px 28px;
  border: none;
  border-radius: 999px;
  background: #000;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 40px;
  align-items: start;
}

.card {
  border: 1px solid #000;
  border-radius: 6px;
  padding: 8px;
  background: #fff;
}

.thumb {
  width: 100%;
  aspect-ratio: 4 / 3;
  background: #e0e0e0;
  border: 1px solid #555;
  overflow: hidden;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 12px;
}

.card-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.card-text h3 {
  margin: 0 0 4px;
  font-size: 11px;
  font-weight: 700;
}

.card-text span {
  font-size: 10px;
  font-weight: 700;
  color: #666;
}

.btn {
  padding: 5px 16px;
  border: 1px solid #000;
  border-radius: 999px;
  background: #fff;
  color: #000;
  font-size: 11px;
  text-decoration: none;
  cursor: pointer;
}

.empty-card {
  grid-column: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  min-height: 120px;
  border: 1px solid #555;
  padding: 24px;
  text-align: center;
}

.empty-card p {
  margin: 0;
  font-size: 11px;
  color: #555;
}

.browse {
  padding: 8px 36px;
  font-size: 12px;
}
</style>