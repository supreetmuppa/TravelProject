<template>
  <div class="matching-algorithm">
    <h2>Find Travel Companions</h2>
    <form @submit.prevent="findMatches">
      <label for="destination">Destination:</label>
      <input id="destination" v-model="destination" type="text" />

      <label for="interests">Interests:</label>
      <input id="interests" v-model="interests" type="text" />

      <button type="submit">Find Matches</button>
    </form>
    <ul v-if="matches.length">
      <li v-for="match in matches" :key="match.id">
        {{ match.name }} - {{ match.commonInterests.join(', ') }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      destination: '',
      interests: '',
      matches: []
    }
  },
  methods: {
    findMatches() {
      // Dummy data for matches
      this.matches = [
        { id: 1, name: 'Alice', commonInterests: ['Hiking', 'Photography'] },
        { id: 2, name: 'Bob', commonInterests: ['Food', 'Travel'] }
      ]
    }
  }
}
</script>

<style scoped>
.matching-algorithm {
  margin: 20px;
}
</style>
