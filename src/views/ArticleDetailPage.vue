<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { store, toggleWatchlist } from '../data/store.js'


const route = useRoute()
const article = computed(() =>
    store.articles.find(
        movie => movie.id === Number(route.params.id)
    )
)


const saved = computed(() =>
    article.value &&
    store.watchlist.includes(article.value.id)
)
</script>

<template>

  <main class="article-details">


    <RouterLink to="/" class="back-link">
      ← Go back to articles
    </RouterLink>


    <article v-if="article" class="detail">


      <header class="detail-heading">

        <span class="movie-tag">
          {{ article.tag }}
        </span>

        <h1>{{ article.title }}</h1>

        <p class="muted">
          Published {{ article.published }}
          · {{ article.readTime }}
        </p>

        <p class="detail-excerpt">
          {{ article.excerpt }}
        </p>

      </header>


      <img
          v-if="article.image"
          class="detail-poster"
          :src="article.image"
          :alt="article.title"
      />


      <div class="detail-actions">

        <button
            type="button"
            class="watchlist-btn"
            @click="toggleWatchlist(article.id)"
        >
          {{ saved ? 'Remove from Watchlist' : 'Add to Watchlist' }}
        </button>



      </div>


      <section
          v-if="article.quickFacts?.length"
          class="quick-facts"
      >

        <h2>Quick Facts</h2>

        <ul>
          <li
              v-for="fact in article.quickFacts"
              :key="fact"
          >
            {{ fact }}
          </li>
        </ul>

      </section>

      <section class="article-body">

        <h2>Article</h2>

        <p
            v-for="(paragraph, index) in article.paragraphs"
            :key="index"
        >
          {{ paragraph }}
        </p>

      </section>


      <section
          v-if="article.verdict"
          class="verdict"
      >

        <h2>Our Verdict</h2>

        <p>{{ article.verdict }}</p>

      </section>

    </article>


    <p v-else>
      Article not found.
    </p>

  </main>

</template>

<style scoped>

.article-details {
  max-width: 1100px;
  margin: 40px auto;
  padding: 30px;
}


.back-link {
  color: #258ac4;
  text-decoration: none;
  font-weight: bold;
}


h1 {
  font-size: 36px;
  margin: 20px 0;
}


p {
  font-size: 18px;
  line-height: 1.7;
}


.detail-poster {
  display: block;
  width: 100%;
  max-width: 400px;
  height: auto;
  margin: 30px auto;
  border-radius: 10px;
}


.detail-actions {
  display: flex;
  gap: 15px;
  align-items: center;
  margin: 25px 0;
}


.watchlist-btn {
  background-color: #55b4ec;
  color: black;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}


.watchlist-btn:hover {
  background-color: #329bd6;
}


.quick-facts,
.article-body,
.verdict {
  margin-top: 35px;
}


@media (max-width: 600px) {
  .article-details {
    padding: 20px;
  }

  .detail-actions {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
