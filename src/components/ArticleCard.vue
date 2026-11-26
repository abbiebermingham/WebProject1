<script setup>
defineProps({
  article: Object
})
</script>

<template>
  <div class="article-card">
    <img
        :src="article.image"
        :alt="article.title + ' movie poster'"
        class="movie-poster"/>

    <div class="card-info">
      <span class="card-title">
        {{ article.title }}
      </span>

      <span class="genre">
        {{ article.genre }}
      </span>

    </div>

    <div class="card-bottom">

      <p>{{ article.description }}</p>


      <RouterLink :to="'/article/' + article.id">
        See more
      </RouterLink>

    </div>

  </div>
</template>

<style scoped>
.article-card {
  width: 100%;
  min-width: 0;
  height: 214px;
  border: 1px solid #555;
  border-radius: 5px;
  padding: 9px;
  background-color: white;
  overflow: hidden;
}

.movie-poster {
  display: block;
  width: 100%;
  height: 145px;
  object-fit: contain;
  background-color: #e2e2e2;
}

.card-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin-top: 8px;
}

.card-title {
  font-size: 11px;
  min-width: 0;
}

.genre {
  border: 1px solid #555;
  border-radius: 15px;
  padding: 3px 8px;
  font-size: 9px;
  white-space: nowrap;
  flex-shrink: 0;
}

.card-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
}

.card-bottom p {
  font-size: 9px;
  color: #888;
  margin: 8px 0 0;
  flex: 1;
}

.card-bottom a {
  font-size: 10px;
  color: blue;
  text-decoration: none;
  margin-top: 5px;
  white-space: nowrap;
}

.card-bottom a:hover {
  text-decoration: underline;
}
</style>