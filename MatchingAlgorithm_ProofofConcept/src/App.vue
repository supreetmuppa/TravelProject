<template>
  <div>
    <input v-model="destination" placeholder="Destination" />
    <input v-model="interests" placeholder="Interests" />
    <button @click="findMatches">Find Matches</button>
    <ul>
      <li v-for="(match, index) in matches" :key="index">{{ match }}</li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const destination = ref('');
    const interests = ref('');
    const threshold = ref(0.5);
    const matches = ref([]);

    const findMatches = async () => {
      console.log('Sending request to server with data:', {
         destination: destination.value,
         interests: interests.value,
         threshold: threshold.value,
       }); // Log the data being sent to the server
      try {
        const response = await fetch(`${process.env.VUE_APP_API_URL}/match`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            destination: destination.value,
            interests: interests.value,
            threshold: threshold.value,
          }),
        });
        const data = await response.json();
        console.log('Matches found:', data.matches); // Log any matches found
        matches.value = data.matches;
      } catch (error) {
        console.error('Error finding matches:', error);
      }
    };

    return {
      destination,
      interests,
      threshold,
      matches,
      findMatches,
    };
  },
};
</script>

<style>
/* styles left out of proof of concept*/
</style>
