import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Profile from '../components/Profile.vue'
import Itinerary from '../components/Itinerary.vue'
import Recommendations from '../components/Recommendations.vue'
import About from '../components/About.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/itinerary', name: 'Itinerary', component: Itinerary },
  { path: '/recommendations', name: 'Recommendations', component: Recommendations },
  { path: '/about', name: 'About', component: About }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
