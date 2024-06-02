<template>
    <div class="about container mt-5">
      <div class="row">
        <div class="col-lg-12">
          <h1>About WanderLink</h1>
          <p class="lead">We are a digital startup committed to revolutionizing travel with WanderLink, a unique platform connecting like-minded travelers and driving innovation and impact in the digital travel space.</p>
          <p>The WanderLink platform is accessible through both web and mobile devices, providing a seamless digital experience for users to connect and plan group trips with like-minded solo travelers.</p>
          
          <h2>Our Mission, Vision, and Goals</h2>
          <p>Empower travelers to forge meaningful connections and create unforgettable experiences through WanderLink.</p>
          <p>Build a global community of passionate travelers united by shared exploration and a love for diversity.</p>
          <p>Establish WanderLink as a go-to platform for travel companionship by gaining 1 million users in the first year and developing a travel ecosystem that can scale as demand grows.</p>
          
          <h2>Platform & Features</h2>
          <ul>
            <li>User Profiles: Detailed bios with interests, travel styles, and languages spoken. Verification system for safety (ID verification, profile reviews). Travel history and wish list destinations.</li>
            <li>Travel Resources: Travel tips, checklists, and packing guides. Information on visas, vaccinations, and local customs.</li>
            <li>Local Insights: Recommendations for activities, eateries, and accommodations. Local hosts or guides who can offer personal tours.</li>
            <li>Matching Algorithm: Match travelers based on common interests, destinations, travel dates, and preferences. Filters for age, gender, interests, and travel style to find compatible travel partners.</li>
            <li>Itinerary Creation and Sharing: Tools to create and share itineraries with potential travel companions. Option to join pre-planned trips or invite others to your own.</li>
            <li>Reviews and Ratings: System for rating travel companions after a trip. Reviews to provide feedback on experiences with other travelers.</li>
          </ul>
          
          <h2>Our Team</h2>
          <p>Coleman Sweeney</p>
          <p>Supreet Muppavarapu</p>
          <p>Madeline Beach</p>
          <p>Holger Geyer</p>
          
          <h2>Contact Us</h2>
          <p>For more information, visit our website or contact us at <a href="mailto:info@wanderlink.com">info@wanderlink.com</a>.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'About'
  };
  </script>
  
  <style>
  .about {
    min-height: 100vh;
    padding: 2rem;
    background-color: #f7f9fc;
  }
  
  .about h1, .about h2 {
    color: #2d89ef;
    margin-bottom: 1rem;
  }
  
  .about p, .about li {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  .about ul {
    list-style-type: none;
    padding: 0;
  }
  
  .about ul li {
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;
  }
  
  .about ul li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #2d89ef;
  }
  </style>
