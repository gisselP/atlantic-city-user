import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactsView from '@/views/ContactsView.vue'

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      { path: '', name: 'home', component: HomeView },
      { path: 'about-us', name: 'about', component: AboutView },
      { path: 'contacts', name: 'contacts', component: ContactsView }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router