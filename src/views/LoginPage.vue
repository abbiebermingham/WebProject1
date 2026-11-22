<script>

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')

const errorMessage = ref('')

const showPassword = ref(false)

function login() {

  if (
      email.value === 'admin@movietalk.com' && password.value === 'password123'
  ) {
    errorMessage.value = ''

    router.push('/')

  }else{
    errorMessage.value = 'Incorrect email or password'

  }
}
</script>

<template>
  <div class="login-page">
   <div class="login-container">

     <h1>Login to MovieTalk</h1>

     <p>Welcome back! Please log in</p>

     <form @submit.prevent="login">

       <div class="form-group">
         <label for="email">Email</label>

         <input
           id="email"
           v-model="email"
           type="email"
           placeholder="Enter your email"
           required>
       </div>

       <div class="form-group">
         <label for="password">Password</label>

         <input
           id="password"
           v-model="password"
           :type="showPassword ? 'text' : 'password'"
           placeholder="Enter your password"
           required>
       </div>

<button type="submit" class="login-btn">
  Login
</button>

     </form>

<RouterLink to="/" class="home-link">
  Back to Home
</RouterLink>


   </div>



  </div>






</template>