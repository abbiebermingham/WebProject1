
<script setup>
// Import computed from Vue
import { computed } from 'vue'

// Import the movies and watchlist function
import { store, toggleWatchlist } from '../data/store.js'

// Find the movies that are in the watchlist
const savedMovies = computed(() => {

  return store.articles.filter(movie =>
      store.watchlist.includes(movie.id)
  )

})

// Function to remove a movie
function removeMovie(id) {
  toggleWatchlist(id)
}
</script>

<template>

  <main class="watchlist-page">

    <!-- Page heading -->
    <h1>My Watchlist</h1>

    <p>Movies you have saved to watch later.</p>

    <!-- Empty watchlist message -->
    <div v-if="savedMovies.length === 0">

      <p>Your watchlist is empty!</p>

      <RouterLink to="/">
        Browse Movies
      </RouterLink>

    </div>

    <!-- Show saved movies -->
    <div v-else class="watchlist-grid">

      <div
          v-for="movie in savedMovies"
          :key="movie.id"
          class="movie-card"
      >

        <!-- Movie poster -->
        <img
            v-if="movie.image"
            :src="movie.image"
            :alt="movie.title"
        />

        <!-- Movie title -->
        <h2>{{ movie.title }}</h2>

        <!-- Movie category -->
        <p>{{ movie.category }}</p>

        <!-- See more link -->
        <RouterLink
            :to="`/article/${movie.id}`"
            class="details-link"
        >
          See more
        </RouterLink>

        <!-- Remove button -->
        <button
            type="button"
            class="remove-btn"
            @click="removeMovie(movie.id)"
        >
          Remove from Watchlist
        </button>

      </div>

    </div>

  </main>

</template>

<style scoped>
/* Main page */
.watchlist-page {
  max-width: 1100px;
  margin: 40px auto;
  padding: 20px;
}

/* Heading */
h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

/* Movie grid */
.watchlist-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;
}

/* Movie cards */
.movie-card {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Movie posters */
.movie-card img {
  width: 100%;
  height: 250px;
  object-fit: contain;
}

/* Movie title */
.movie-card h2 {
  font-size: 22px;
  margin: 15px 0;
}

/* See more link */
.details-link {
  display: block;
  color: #258ac4;
  margin-bottom: 15px;
}

/* Remove button */
.remove-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 12px 18px;
  border-radius: 6px;
  cursor: pointer;
}

/* Hover effect */
.remove-btn:hover {
  background-color: #c0392b;
}

/* Tablet */
@media (max-width: 900px) {
  .watchlist-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile */
@media (max-width: 600px) {
  .watchlist-grid {
    grid-template-columns: 1fr;
  }
}
</style>
