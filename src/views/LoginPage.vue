
<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'


const router = useRouter()


const email = ref('')
const password = ref('')


 function login() {


  if (email.value !== '' && password.value !== '') {


    router.push('/')


    alert('Login successful! Welcome to MovieTalk!')

  }
}
</script>




<template>
  <main class="login-page">

    <h1>Login to MovieTalk</h1>

    <form @submit.prevent="login">

      <label>Email:</label>
      <input
          type="email"
          v-model="email"
          minlength="5"
          maxlength="50"
          required
      />

      <label>Password:</label>
      <input
          type="password"
          v-model="password"
          minlength="8"
          maxlength="20"
          required
      />

      <button type="submit">
        Login
      </button>

    </form>

  </main>
</template>

<style scoped>
.login-page {
  max-width: 400px;
  margin: 60px auto;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
}

h1 {
  text-align: center;
}

label {
  display: block;
  margin-top: 20px;
}

input {
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  box-sizing: border-box;
}

button {
  background-color: #55b4ec;
  padding: 12px;
  width: 100%;
  margin-top: 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
