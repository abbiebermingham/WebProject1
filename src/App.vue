
<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-layout">


    <NavBar />


    <div class="page-content">
      <RouterView />
    </div>


    <Footer />

  </div>
</template>

<style scoped>

.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}


.page-content {
  flex: 1;
}
</style>
