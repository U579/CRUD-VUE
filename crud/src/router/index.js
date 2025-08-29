import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'UsersList', component: () => import('../pages/UsersList.vue') },
  { path: '/edit', name: 'EditUser', component: () => import('../pages/EditUser.vue') },
  { path: '/register', name: 'RegisterUser', component: () => import('../pages/RegisterUser.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
