<template>
  <div>
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>

    <button @click="$router.push('/')">
      ← Go Back
    </button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const article = {
  title: 'Project Hail Mary',
  description: 'Full article details go here.'
}
</script>