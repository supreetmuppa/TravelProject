<template>
  <div id="app">
    <header>
      <h1>WanderLink</h1>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/user-profile">User Profiles</router-link></li>
          <li><router-link to="/travel-resources">Travel Resources</router-link></li>
          <li><router-link to="/local-insights">Local Insights</router-link></li>
          <li><router-link to="/matching-algorithm">Matching Algorithm</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style src="./assets/styles.css"></style>



