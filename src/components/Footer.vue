<template>
  <v-footer color="#FFFFFF" class="d-flex flex-column">
    <div class="d-flex w-100 px-6 pb-10 pt-8">
      <v-row>
        <v-col cols="12" sm="3">
          <h4 class="mt-2">Contact Info</h4>
          <span class="text-caption">
            <v-icon class="mr-1">phone</v-icon><br />
            +1312-415-6666
          </span>
          <br />
          <span class="text-caption">
            <v-icon class="mr-1">Hours of Operation </v-icon>Mon-Fri
            09:00-18:00 <br />except public holidays
          </span>
          <br />
          <span class="text-caption">
            <v-icon class="mr-1"></v-icon>300 East Randolph Street<br />
            Chicago,Illinois
          </span>
          <br />
        </v-col>
        <v-col cols="12" sm="3">
          <h4 class="mt-2">Gallery</h4>
          <v-row>
            <v-col v-for="n in 6" :key="n" class="d-flex child-flex" cols="4">
              <v-img
                :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                aspect-ratio="1"
                cover
                class="bg-grey-lighten-2"
              >
              </v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <div class="px-4 py-8 bgTop text-center w-100 text-black">
      <v-icon class="mr-2" color="black"></v-icon>
      <strong>
        Copyright {{ new Date().getFullYear() }}. All Rights Reserved by WanderLink
      </strong>
      <div class="mt-4">
        <a href="https://play.google.com/store/apps/details?id=com.example.app" target="_blank">
          <v-btn color="green" class="mr-2">
            <v-icon left>google-play</v-icon>
            Download on Android
          </v-btn>
        </a>
        <a href="https://apps.apple.com/app/example-app/id1234567890" target="_blank">
          <v-btn color="black">
            <v-icon left>apple</v-icon>
            Download on iPhone
          </v-btn>
        </a>
      </div>
    </div>
  </v-footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.v-footer {
  padding: 0 0 !important;
}
.bgTop {
  background-color: #f4f6fa;
}
</style>

