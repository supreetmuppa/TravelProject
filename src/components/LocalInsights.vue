<template>
    <div class="local-insights">
      <h2>Local Insights</h2>
      <ul>
        <li v-for="insight in insights" :key="insight.id">
          {{ insight.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        insights: [
          { id: 1, name: 'Best Eateries' },
          { id: 2, name: 'Top Attractions' },
          { id: 3, name: 'Local Customs' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .local-insights {
    margin: 20px;
  }
  </style>
  
