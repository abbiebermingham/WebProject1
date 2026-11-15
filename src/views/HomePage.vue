
<script setup>
import { ref, computed } from 'vue'

import Navbar from '../components/NavBar.vue'
import WelcomeSection from '../components/WelcomeSection.vue'
import SearchBar from '../components/SearchBar.vue'
import FilterButtons from '../components/FilterButtons.vue'
import ArticleList from '../components/ArticleList.vue'

// Movie information
const articles = ref([
  {
    id: 1,
    title: 'Project Hail Mary',
    description: 'A mission to save Earth takes an unexpected turn.',
    genre: 'New release',
    date: 6,
    image: '/images/projecthailmary.jpg'
  },
  {
    id: 2,
    title: 'Game Night',
    description: 'A fun night of games becomes a real mystery.',
    genre: 'Comedy',
    date: 5,
    image: '/images/GameNight.jpg'
  },
  {
    id: 3,
    title: 'Interstellar',
    description: 'Explore space and discover the future of humanity.',
    genre: 'Sci-fi',
    date: 4,
    image: '/images/Interstellar.jpg'
  },
  {
    id: 4,
    title: 'A Quiet Place',
    description: 'Silence is the only way to stay alive.',
    genre: 'Horror',
    date: 3,
    image: '/images/A Quiet Place.jpg'
  },
  {
    id: 5,
    title: 'Mission: Impossible',
    description: 'Ethan Hunt returns for another dangerous mission.',
    genre: 'Action',
    date: 2,
    image: '/images/MissionImpossibleTheFinalReckoning.jpg'
  },
  {
    id: 6,
    title: 'The Notebook',
    description: 'A beautiful love story that stands the test of time.',
    genre: 'Romance',
    date: 1,
    image: '/images/TheNotebook.jpg'
  }
])

// Search text
const searchText = ref('')

// Selected filter
const selectedFilter = ref('All')

// Search and sort the movies
const filteredArticles = computed(() => {

  let result = articles.value.filter(article => {
    return (
        article.title.toLowerCase().includes(searchText.value.toLowerCase()) ||
        article.genre.toLowerCase().includes(searchText.value.toLowerCase()) ||
        article.description.toLowerCase().includes(searchText.value.toLowerCase())
    )
  })

  if (selectedFilter.value === 'Newest') {
    result.sort((a, b) => b.date - a.date)
  }

  if (selectedFilter.value === 'Oldest') {
    result.sort((a, b) => a.date - b.date)
  }

  return result
})
</script>

<template>
  <div class="page">

    <!-- Navigation bar -->
    <Navbar />

    <main>

      <!-- Welcome message and search -->
      <div class="top-section">

        <WelcomeSection />

        <SearchBar v-model="searchText" />

      </div>

      <!-- Article heading -->
      <h2>The latest from ReelTalks:</h2>

      <!-- Filter buttons -->
      <FilterButtons
          v-model="selectedFilter"
      />

      <!-- Movie article cards -->
      <ArticleList
          :articles="filteredArticles"
      />

    </main>

    <!-- Footer -->
    <footer></footer>

  </div>
</template>
