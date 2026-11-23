
<script setup>
import { computed, ref } from 'vue'
import {
  store,
  toggleWatchlist,
  updateWatchlist
} from '../data/store.js'

const savedMovies = computed(() => {

  return store.articles.filter(movie =>
      store.watchlist.includes(movie.id)
  )

})
const editingId = ref(null)


const editStatus = ref('Want to watch')
const editNotes = ref('')


function editMovie(movie) {

  editingId.value = movie.id


  const details = store.watchlistDetails[movie.id] || {}

  editStatus.value = details.status || 'Want to watch'
  editNotes.value = details.notes || ''

}

function saveChanges(id) {

  updateWatchlist(
      id,
      editStatus.value,
      editNotes.value
  )
  editingId.value = null
}


function removeMovie(id) {

  toggleWatchlist(id)
}
</script>


<template>

  <main class="watchlist-page">


    <h1>My Watchlist</h1>
    <p>Movies you have saved to watch later.</p>


    <div v-if="savedMovies.length === 0">
      <p>Your watchlist is empty!</p>

      <RouterLink to="/">
        Browse Movies
      </RouterLink>

    </div>


    <div v-else class="watchlist-grid">

      <div
          v-for="movie in savedMovies"
          :key="movie.id"
          class="movie-card"
      >


        <img
            v-if="movie.image"
            :src="movie.image"
            :alt="movie.title"
        />


        <h2>{{ movie.title }}</h2>


        <p>{{ movie.category }}</p>

        <div class="movie-detail">
          <p>
            <strong>Status:</strong>
            {{store.watchlistDetails[movie.id]?.status || 'Want to watch'}}
          </p>

<p>
  <strong>Notes:</strong>
  {{store.watchlistDetails[movie.id]?.notes || 'No notes yet'}}
</p>
        </div>


        <RouterLink
            :to="`/article/${movie.id}`"
            class="details-link"
        >
          See more
        </RouterLink>

<button
  type="button"
  class="edit-btn"
  @click="editMovie(movie)"
  >
  Edit Movie
</button>

        <div v-if="editingId === movie.id" class="edit-form">

          <label>Watch Status:</label>

          <select v-model="editStatus">
            <option>Want to watch</option>
            <option>Watched</option>
          </select>

        <label>Personal Notes:</label>

          <textarea
            v-model="editNotes"
            placeholder="Write your notes here"
            maxlength="200"
            ></textarea>

          <button
            type="button"
            class="save-btn"
            @click="saveChanges(movie.id)"
            >
            Save Changes
          </button>

          <button
            type="button"
            class="cancel-btn"
            @click="editingId = null">

            Cancel
          </button>




        </div>


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

.watchlist-page {
  max-width: 1100px;
  margin: 40px auto;
  padding: 20px;
}


h1 {
  font-size: 36px;
  margin-bottom: 10px;
}


.watchlist-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;
}


.movie-card {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}


.movie-card img {
  width: 100%;
  height: 250px;
  object-fit: contain;
}


.movie-card h2 {
  font-size: 22px;
  margin: 15px 0;
}


.details-link {
  display: block;
  color: #258ac4;
  margin-bottom: 15px;
}


.remove-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 12px 18px;
  border-radius: 6px;
  cursor: pointer;
}


.remove-btn:hover {
  background-color: #c0392b;
}


@media (max-width: 900px) {
  .watchlist-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}


@media (max-width: 600px) {
  .watchlist-grid {
    grid-template-columns: 1fr;
  }
}



.movie-details {
  margin: 15px 0;
  font-size: 14px;
}


.edit-btn {
  background-color: #55b4ec;
  color: black;
  border: none;
  padding: 12px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  width: 100%;
}


.edit-form {
  margin: 15px 0;
  padding: 15px;
  background-color: #f4f4f4;
  border-radius: 5px;
}


.edit-form label {
  display: block;
  margin: 10px 0 5px;
}


.edit-form select,
.edit-form textarea {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}


.edit-form textarea {
  min-height: 80px;
  resize: vertical;
}


.save-btn {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
}


.cancel-btn {
  background-color: #888;
  color: white;
  border: none;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
}

</style>