
<template>
  <header class="navbar">

    <div class="logo">
      MovieTalk
    </div>

    <nav>
      <a href="#">Home</a>
      <a href="#">Reviews</a>
      <a href="#">My Watchlist</a>
    </nav>

  </header>
</template>

<style scoped>
.navbar {
  height: 60px;
  background-color: #55b5ef;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 35px;
}

.logo {
  font-size: 20px;
  color: black;
}

nav {
  display: flex;
  gap: 20px;
  margin-right: 35%;
}

nav a {
  font-size: 11px;
  color: #333;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>
