import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlanetsView from '../views/PlanetsView.vue'
import FilmsView from '../views/FilmsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/planets',
      name: 'planets',
      component: () => PlanetsView,
    },
    {
      path: '/films',
      name: 'films',
      component: () => FilmsView,
    }
  ],
})

export default router
