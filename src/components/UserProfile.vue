<template>
  <div class="user-profile">
    <h2>User Profile</h2>
    <div>
      <img :src="user.profilePicture" alt="Profile Picture" />
      <h3>{{ user.name }}</h3>
      <p>{{ user.bio }}</p>
      <ul>
        <li v-for="interest in user.interests" :key="interest">{{ interest }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        profilePicture: 'https://via.placeholder.com/150',
        name: 'John Doe',
        bio: 'Passionate traveler and photographer.',
        interests: ['Hiking', 'Photography', 'Food']
      }
    }
  }
}
</script>

<style scoped>
.user-profile {
  text-align: center;
}
</style>
