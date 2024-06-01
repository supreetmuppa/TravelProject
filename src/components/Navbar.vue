<template>
    <v-app-bar height="80" color="#FEF5F8" scroll-behavior="elevate" id="inspire">
      <v-img src="/1.png" class=""></v-img>
       <v-spacer></v-spacer>
      <v-menu transition="slide-x-transition">
        <template v-slot:activator="{props}">
          <v-btn color="#6347F9" v-bind="props">Home +</v-btn>
        </template>
        
        
      </v-menu>
      <v-menu transition="slide-x-transition">
        <template v-slot:activator="{props}">
          
        </template>
        
      </v-menu>
      <v-menu transition="slide-x-transition">
        <template v-slot:activator="{props}">
          <v-btn color="#6347F9" v-bind="props">Hotel</v-btn>
        </template>
      </v-menu>
      <v-menu transition="slide-x-transition">
        <template v-slot:activator="{props}">
          <v-btn color="#6347F9" v-bind="props">Pages +</v-btn>
        </template>
        
      </v-menu>
      <v-menu transition="slide-x-transition">
        <template v-slot:activator="{props}">
          <v-btn color="#6347F9" v-bind="props">Blog</v-btn>
        </template>
      </v-menu>
      <v-menu transition="slide-x-transition">
        <template v-slot:activator="{props}">
          <v-btn color="#6347F9" v-bind="props">Contact</v-btn>
        </template>
      </v-menu>
     
    </v-app-bar>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .expl {
    background-color: white;
    color: #6347f9;
  }

  .v-app-bar {
  justify-content: center;
  }

  .v-app-bar .v-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  </style>
  
