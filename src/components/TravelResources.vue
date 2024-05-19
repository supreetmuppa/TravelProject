<template>
    <div class="travel-resources">
      <h2>Travel Resources</h2>
      <ul>
        <li v-for="resource in resources" :key="resource.id">
          {{ resource.name }}
        </li>
      </ul>
    </div>
  </template>
  
  
  <script>
 
  export default {
    data() {
      return {
        resources: [
          { id: 1, name: 'Travel Tips' },
          { id: 2, name: 'Checklists' },
          { id: 3, name: 'Packing Guides' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .travel-resources {
    margin: 20px;
  }
  </style>
  
