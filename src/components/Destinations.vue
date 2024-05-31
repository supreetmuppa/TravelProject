<template>
  <div class="destinations">
    <h2>Find Compatible Travel Partners</h2>
    <form @submit.prevent="findMatches">
      <label for="interest">Interest:</label>
      <input id="interest" v-model="interest" type="text" />

      <label for="travelStyle">Travel Style:</label>
      <input id="travelStyle" v-model="travelStyle" type="text" />

      <button type="submit">Find Matches</button>
    </form>
    <div class="results">
      <div v-for="match in matches" :key="match.userId" class="card">
        <img src="https://source.unsplash.com/random/800x400?destination" alt="Destination Image" />
        <h2>{{ match.name }}</h2>
        <p>Interests: {{ match.interests.join(', ') }}</p>
        <p>Travel Style: {{ match.travelStyle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { db, collection, getDocs } from '../firebase'

export default {
  data() {
    return {
      interest: '',
      travelStyle: '',
      matches: []
    }
  },
  methods: {
    async findMatches() {
      const profilesRef = collection(db, 'profiles')
      const snapshot = await getDocs(profilesRef)
      this.matches = snapshot.docs
        .map((doc) => doc.data())
        .filter((profile) => {
          const interestMatch = profile.interests.includes(this.interest)
          const travelStyleMatch =
            profile.travelStyle.toLowerCase() === this.travelStyle.toLowerCase()
          return interestMatch && travelStyleMatch
        })
    }
  }
}
</script>

<style scoped>
.results {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 calc(33% - 20px);
  box-sizing: border-box;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.card img {
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}

.card h2 {
  margin-top: 0;
}
</style>
