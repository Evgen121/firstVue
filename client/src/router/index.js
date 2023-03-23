import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import UpdateContact from '../views/UpdateContact.vue'
import AddContact from '../views/AddContact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact/add',
    name: "AddPost",
    component: AddContact
  },
  {
    path: '/contact/edit/:id',
    name: "Update",
    component: UpdateContact
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
