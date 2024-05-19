<template>
  <div id="app">
    <header>
      <h1>WanderLink</h1>
      <nav>
        <router-link to="/user-profile">User Profile</router-link>
        <router-link to="/travel-resources">Travel Resources</router-link>
        <router-link to="/local-insights">Local Insights</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
header {
  background: #42b983;
  color: white;
  padding: 20px;
  text-align: center;
}
nav {
  margin: 20px 0;
}
nav a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
}
main {
  padding: 20px;
}
</style>



