

<template>
  <nav class="navbar">
    <RouterLink to="/" class="logo">MovieTalk</RouterLink>
    <div class="links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/reviews">Reviews</RouterLink><RouterLink to="/watchlist">Watchlist</RouterLink>
    <RouterLink to="Login">Login</RouterLink>


    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 0 40px;
  height: 75px;
  background: #57b4f0;
}

.links {
  display: flex;
  gap: 24px;
}

.links a {
  color: #222;
  text-decoration: none;
  font-size: 14px;
}

.links a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}

.logo {
  color: #000;
  text-decoration: none;
  font-size: 24px;
}
</style>