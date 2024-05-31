<template>
  <div class="recommendations mx-auto mt-5 row">
    <div class="col-lg-6 col-md-12">
      <h2>Local Insights & Recommendations</h2>
      <div class="media mb-4">
        <img src="https://source.unsplash.com/random/400x300?local,food" class="mr-3 img-thumbnail" alt="Local Food" />
        <div class="media-body">
          <h5 class="mt-0">Best Local Cuisine</h5>
          <p>Explore the best local cuisines and street foods around the world.</p>
        </div>
      </div>
      <div class="media mb-4">
        <img src="https://source.unsplash.com/random/400x300?local,market" class="mr-3 img-thumbnail" alt="Local Market" />
        <div class="media-body">
          <h5 class="mt-0">Local Markets</h5>
          <p>Discover vibrant local markets and unique shopping experiences.</p>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-12">
      <h2>Travel Photos & Videos</h2>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommendations'
};
</script>

<style scoped>
/* Additional styles if needed */
</style>



  
