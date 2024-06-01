<template>
    <div class="landing-page">
      <Navbar />
  
      <header class="hero">
        <h1>Welcome to WanderLink</h1>
        <p>Your adventure starts here</p>
        <router-link to="/register" class="cta-button">Join Now</router-link>
      </header>
  
      <section class="specials">
        <h2>Specials for Solo Travelers</h2>
        <div class="special-cards">
          <div class="card">
            <img src="https://source.unsplash.com/random/800x400?paris" alt="Paris">
            <h3>Paris Adventure</h3>
            <p>Experience the romance and adventure of Paris solo. Prices starting at $999.</p>
          </div>
          <div class="card">
            <img src="https://source.unsplash.com/random/800x400?bali" alt="Bali">
            <h3>Bali Retreat</h3>
            <p>Find peace and adventure in Bali. Prices starting at $799.</p>
          </div>
          <div class="card">
            <img src="https://source.unsplash.com/random/800x400?new-york" alt="New York">
            <h3>New York City Lights</h3>
            <p>Explore the vibrant city of New York. Prices starting at $499.</p>
          </div>
        </div>
      </section>
  
      <section class="images">
        <h2>Beautiful Destinations and Hotels</h2>
        <div class="image-gallery">
          <img src="https://source.unsplash.com/random/800x400?hotel" alt="Hotel">
          <img src="https://source.unsplash.com/random/800x400?beach" alt="Beach">
          <img src="https://source.unsplash.com/random/800x400?mountains" alt="Mountains">
          <img src="https://source.unsplash.com/random/800x400?city" alt="City">
        </div>
      </section>
  
      <section class="fun-groups">
        <h2>Traveling Groups Having Fun</h2>
        <div class="image-gallery">
          <img src="https://source.unsplash.com/random/800x400?group-travel" alt="Group Travel">
          <img src="https://source.unsplash.com/random/800x400?friends" alt="Friends">
          <img src="https://source.unsplash.com/random/800x400?party" alt="Party">
          <img src="https://source.unsplash.com/random/800x400?adventure" alt="Adventure">
        </div>
      </section>
  
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from './Navbar.vue';
  import Footer from './Footer.vue';
  
  export default {
    name: 'LandingPage',
    components: {
      Navbar,
      Footer
    }
  };
  </script>
  
  <style scoped>
  .landing-page {
    text-align: center;
    font-family: 'Arial', sans-serif;
  }
  
  .hero {
    background-image: url('https://source.unsplash.com/random/1600x900?travel');
    background-size: cover;
    color: white;
    padding: 100px 20px;
  }
  
  .hero h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  
  .hero p {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
  
  .cta-button {
    background-color: #2d89ef;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
  }
  
  .cta-button:hover {
    background-color: #1c5fa8;
  }
  
  .specials, .images, .fun-groups {
    padding: 50px 20px;
  }
  
  .special-cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  .card {
    width: 300px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 10px;
    padding: 20px;
    background: white;
    text-align: left;
  }
  
  .card img {
    width: 100%;
    height: auto;
  }
  
  .image-gallery {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  .image-gallery img {
    width: 300px;
    height: auto;
    margin: 10px;
    border-radius: 8px;
    transition: transform 0.2s;
  }
  
  .image-gallery img:hover {
    transform: scale(1.05);
  }
  </style>
   
