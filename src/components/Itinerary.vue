<template>
  <div class="itinerary mx-auto mt-5 row">
    <div class="col-lg-6 col-md-12">
      <h2>Create Itinerary</h2>
      <form @submit.prevent="createItinerary">
        <div class="mb-3">
          <label for="title" class="form-label">Title:</label>
          <input type="text" v-model="title" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description:</label>
          <textarea v-model="description" class="form-control" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Create Itinerary</button>
      </form>
      <h2 class="mt-4">Your Itineraries</h2>
      <div v-for="itinerary in itineraries" :key="itinerary.id" class="itinerary-item mt-3 p-3 border rounded">
        <h3>{{ itinerary.title }}</h3>
        <p>{{ itinerary.description }}</p>
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
import { db, collection, addDoc, getDocs, query, where } from '../firebase';
import { auth } from '../firebase';

export default {
  data() {
    return {
      title: '',
      description: '',
      itineraries: []
    };
  },
  async created() {
    this.fetchItineraries();
  },
  methods: {
    async fetchItineraries() {
      const user = auth.currentUser;
      if (user) {
        const q = query(collection(db, 'itineraries'), where('uid', '==', user.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          this.itineraries.push({ id: doc.id, ...doc.data() });
        });
      }
    },
    async createItinerary() {
      const user = auth.currentUser;
      if (user) {
        try {
          const docRef = await addDoc(collection(db, 'itineraries'), {
            uid: user.uid,
            title: this.title,
            description: this.description
          });
          this.itineraries.push({ id: docRef.id, title: this.title, description: this.description });
          this.title = '';
          this.description = '';
        } catch (error) {
          console.error('Error adding itinerary: ', error);
        }
      }
    }
  }
};
</script>

<style scoped>
.itinerary-item {
  margin-bottom: 20px;
}
</style>





   
