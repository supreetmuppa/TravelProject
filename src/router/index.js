import Vue from 'vue';
import Router from 'vue-router';
import UserProfile from '../components/UserProfile.vue';
import TravelResources from '../components/TravelResources.vue';
import LocalInsights from '../components/LocalInsights.vue';
import MatchingAlgorithm from '../components/MatchingAlgorithm.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: UserProfile
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
    },
    {
      path: '/matching-algorithm',
      name: 'MatchingAlgorithm',
      component: MatchingAlgorithm
    }
  ]
});

