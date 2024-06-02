<template>
  <div class="home">
    <Navbar />
    <div class="content">
      <h1>Welcome to WanderLink</h1>
      <div class="card">
        <img src="https://source.unsplash.com/random/800x400?travel" alt="Travel Image">
        <h2>Explore the World</h2>
        <p>Find your next adventure with WanderLink.</p>
      </div>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  }
};
</script>

<style scoped>

.home {
  text-align: center;
  margin-top: 50px;
}

.card {
  margin: 20px auto;
  padding: 20px;
  max-width: 600px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: auto;
}

.content {
  padding: 20px;
}
</style>










