import { createApp } from 'vue';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import './style.css';
import App from './App.vue';
import {createRouter,createWebHistory } from 'vue-router';
import { ref, provide, onMounted } from 'vue';
import Home from './pages/Home.vue'
import Favorites from './pages/favorites.vue';
import Profile from './pages/profile.vue';
import Registrat from './components/Registrat.vue';
import SignIn from './components/SignIn.vue';

const app = createApp(App)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/favorites', name: 'Favorites', component: Favorites },
  { path: '/Profile', name: 'Profile', component: Profile },
  { path: '/Registrat', name: 'Registrat', component: Registrat },
  { path: '/SignIn', name: 'SignIn', component: SignIn },
  { path: '/App', name: 'App', component: App }
]

const router = createRouter({
     history: createWebHistory(),
     routes,
})

onMounted(() => {
  const saved = localStorage.getItem('darkMode')
  const isDarkOS = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (saved === 'true' || (saved === null && isDarkOS)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})

const SignInPerson = ref(localStorage.getItem('userEmail') || '');
app.provide('SignInPerson', SignInPerson);

app.use(router)
app.use(autoAnimatePlugin)

app.mount('#app');
