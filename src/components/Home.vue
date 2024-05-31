<template>
  <div class="home mt-5">
    <div class="row">
      <div class="col-lg-6 col-md-12">
        <h1>Welcome to WanderLink</h1>
        <p class="lead">Explore the world with our exclusive travel deals and packages, perfect for solo travelers, couples, and families.</p>
        <h2>Special Deals and Packages</h2>
        <div class="card mb-3 shadow-sm">
          <img src="https://source.unsplash.com/random/800x400?paris" class="card-img-top" alt="Paris Image" />
          <div class="card-body">
            <h5 class="card-title">Paris Getaway</h5>
            <p class="card-text">Experience the romance of Paris with our special 5-day package. Prices starting at $999.</p>
            <a href="#" class="btn btn-primary">Book Now</a>
          </div>
        </div>
        <div class="card mb-3 shadow-sm">
          <img src="https://source.unsplash.com/random/800x400?bali" class="card-img-top" alt="Bali Image" />
          <div class="card-body">
            <h5 class="card-title">Bali Adventure</h5>
            <p class="card-text">Discover the beauty of Bali with our exclusive 7-day adventure package. Prices starting at $799.</p>
            <a href="#" class="btn btn-primary">Book Now</a>
          </div>
        </div>
        <div class="card mb-3 shadow-sm">
          <img src="https://source.unsplash.com/random/800x400?new-york" class="card-img-top" alt="New York Image" />
          <div class="card-body">
            <h5 class="card-title">New York City Lights</h5>
            <p class="card-text">Explore the vibrant city of New York with our 3-day city lights package. Prices starting at $499.</p>
            <a href="#" class="btn btn-primary">Book Now</a>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12">
        <h2>Travel Destinations</h2>
        <div class="row">
          <div class="col-sm-6 mb-3">
            <img src="https://source.unsplash.com/random/400x300?travel,people" class="img-thumbnail" alt="Travel Image" />
          </div>
          <div class="col-sm-6 mb-3">
            <img src="https://source.unsplash.com/random/400x300?adventure,people" class="img-thumbnail" alt="Adventure Image" />
          </div>
          <div class="col-sm-6 mb-3">
            <video width="100%" controls class="img-thumbnail">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="col-sm-6 mb-3">
            <img src="https://source.unsplash.com/random/400x300?nature,people" class="img-thumbnail" alt="Nature Image" />
          </div>
        </div>
        <h3>Solo Travelers</h3>
        <p>Whether you're a seasoned solo traveler or planning your first solo trip, we've got the perfect packages and tips to make your journey unforgettable.</p>
        <h3>Download the App</h3>
        <p>Get the WanderLink app on your mobile device for a better experience.</p>
        <a href="https://play.google.com/store/apps/details?id=your.android.app.id" class="btn btn-primary mb-2">Download for Android</a>
        <a href="https://apps.apple.com/us/app/your-ios-app-id" class="btn btn-primary mb-2">Download for iOS</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>
.home {
  text-align: left;
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
.media img,
.media video {
  max-width: 100%;
  height: auto;
}
</style>










