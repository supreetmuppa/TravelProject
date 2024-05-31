<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">WanderLink</router-link>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register">Register</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/profile">Profile</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/itinerary">Itinerary</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/recommendations">Recommendations</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <div class="container mt-4">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
});
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f7f9fc;
  color: #333;
}

#app {
  text-align: center;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Verdana', sans-serif;
  color: #2d89ef;
}

button {
  background-color: #2d89ef;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #1c5fa8;
}

input, textarea {
  width: calc(100% - 20px);
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

form {
  max-width: 600px;
  margin: 0 auto;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.img-thumbnail {
  border-radius: 8px;
  transition: transform 0.2s;
}

.img-thumbnail:hover {
  transform: scale(1.05);
}

/* Add media queries for larger screens */
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}

@media (min-width: 3840px) { /* 4K resolution */
  .container {
    max-width: 3500px;
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}

@media (min-width: 3840px) { /* 4K resolution */
  #app {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 4rem;
  }

  body {
    font-size: 18px;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2rem;
  }

  button {
    padding: 15px 30px;
    font-size: 18px;
  }

  input, textarea {
    font-size: 18px;
    padding: 15px;
  }
}

.navbar {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

.navbar a {
  color: #fff;
  margin: 0 15px;
  font-weight: bold;
}

.navbar a:hover {
  text-decoration: underline;
}
</style>








