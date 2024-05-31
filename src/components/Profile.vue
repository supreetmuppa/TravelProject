<template>
  <div class="profile mx-auto mt-5 row">
    <div class="col-lg-6 col-md-12">
      <h2>User Profile</h2>
      <form @submit.prevent="updateProfile">
        <div class="mb-3">
          <label for="name" class="form-label">Name:</label>
          <input type="text" v-model="name" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <input type="email" v-model="email" class="form-control" required readonly />
        </div>
        <div class="mb-3">
          <label for="interests" class="form-label">Interests:</label>
          <input type="text" v-model="interests" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">Update Profile</button>
      </form>
      <p v-if="errorMessage" class="text-danger mt-3">{{ errorMessage }}</p>

      <h2>Potential Matches</h2>
      <div v-for="match in matches" :key="match.user.uid" class="match-item mt-3 p-3 border rounded">
        <h3>{{ match.user.name }}</h3>
        <p>Matching Score: {{ match.score.toFixed(2) }}</p>
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
import { db, auth, doc, getDoc, setDoc, collection, getDocs } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { matchUsers } from '../utils/matching';

export default {
  data() {
    return {
      uid: '',
      name: '',
      email: '',
      interests: '',
      errorMessage: '',
      matches: []
    };
  },
  async created() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        this.uid = user.uid;
        const docRef = doc(db, 'profiles', this.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const profile = docSnap.data();
          this.name = profile.name;
          this.email = profile.email;
          this.interests = profile.interests || '';
          this.fetchMatches();
        }
      }
    });
  },
  methods: {
    async fetchMatches() {
      const profiles = [];
      const querySnapshot = await getDocs(collection(db, 'profiles'));
      querySnapshot.forEach((doc) => {
        if (doc.id !== this.uid) {
          profiles.push({ uid: doc.id, ...doc.data() });
        }
      });
      this.matches = await matchUsers(profiles, { interests: this.interests.split(',').map(i => i.trim()) });
    },
    async updateProfile() {
      try {
        await setDoc(doc(db, 'profiles', this.uid), {
          name: this.name,
          email: this.email,
          interests: this.interests
        });
        this.errorMessage = 'Profile updated successfully!';
        this.fetchMatches();
      } catch (error) {
        this.errorMessage = error.message;
      }
    }
  }
};
</script>

<style scoped>
.match-item {
  margin-top: 20px;
  padding: 10px;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>





