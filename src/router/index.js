import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import FrontView from '../views/FrontView.vue';
import BackageView from '../views/BackageView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/front',
    name: 'front',
    component: FrontView
  },
  {
    path: '/backage',
    name: 'backage',
    component: BackageView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
