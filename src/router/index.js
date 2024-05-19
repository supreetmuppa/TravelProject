import Vue from 'vue';
import Router from 'vue-router';
import UserProfile from '../components/UserProfile.vue';
import TravelResources from '../components/TravelResources.vue';
import LocalInsights from '../components/LocalInsights.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/user-profile'
    },
    {
      path: '/user-profile',
      name: 'UserProfile',
      component: UserProfile
    },
    {
      path: '/travel-resources',
      name: 'TravelResources',
      component: TravelResources
    },
    {
      path: '/local-insights',
      name: 'LocalInsights',
      component: LocalInsights
    }
  ]
});

