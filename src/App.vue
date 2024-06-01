<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <div class="navbar-brand">WanderLink</div>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/" active-class="active">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login" active-class="active">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register" active-class="active">Register</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/profile" active-class="active">Profile</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/itinerary" active-class="active">Itinerary</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/recommendations" active-class="active">Recommendations</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about" active-class="active">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="navbar-underline"></div>
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
/* Apply a modern font */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f2f5;
  color: #333;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

#app {
  flex: 1;
  display: flex;
  flex-direction: column;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Roboto', sans-serif;
  color: #333;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
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

/* Navbar */
.navbar {
  background-color: #f3f2f8; 
  color: #323232; 
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%; 
}

.navbar .container-fluid {
  width: 100%;
}

.navbar .navbar-brand {
  font-weight: 700;
  font-size: 2rem;
  color: #323232; 
  margin-right: 30px; /* Adjust this value for extra spacing */
}

.navbar .navbar-nav {
  display: flex;
  flex-direction: row;
  list-style: none;
  padding-left: 0;
}

.navbar .navbar-nav .nav-item {
  margin-left: 15px;
  margin-right: 15px;
  position: relative; /* Add relative positioning */
}

.navbar .navbar-nav .nav-item .nav-link {
  color: black; /* Dark gray */
  font-weight: bold;
  padding-bottom: 10px; /* Add padding to create space for underline */
  transition: color 0.3s ease;
}

.navbar .navbar-nav .nav-item .nav-link:before {
  content: '';
  position: absolute;
  top: -10px; /* Adjust this value to control the space above the item */
  left: 0;
  width: 100%;
  height: 2px;
  background-color: black;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.navbar .navbar-nav .nav-item .nav-link:hover:before,
.navbar .navbar-nav .nav-item .nav-link.active:before {
  opacity: 1;
}

.navbar .navbar-nav .nav-item .nav-link:hover,
.navbar .navbar-nav .nav-item .nav-link.active {
  color: black; /* Change text color to white on hover and when active */
}
.navbar .navbar-nav .nav-item .nav-link:hover {
  color: #006bff; /* or 0056b3 */
  background-color: #f0f0f0; /* Slight color change to grey on hover */
}
.navbar .navbar-nav .nav-item .nav-link {
  color: black; 
  font-weight: bold;
  transition: color 0.3s ease;
  text-decoration: none; 
}

.navbar-brand {
  color: black;
  margin-bottom: 20px;
}


.navbar-underline {
  width: 100%;
  height: 2px;
  background-color: black;
}

.container.mt-4 {
  flex: 1; 
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: flex-start;
  margin-top: -2px;
}

.container {
  flex: 1; 
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: flex-start;
}

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
  #app {
    display: grid;
    grid-template-columns: 1fr;
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

</style>
