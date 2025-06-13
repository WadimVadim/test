import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import GameView from '../views/GameView.vue'
import HubView from '../views/HubView.vue'


const routes = [
  { path: '/', name: 'Login', component: LoginView },
  { path: '/register', name: 'Register', component: RegisterView },
  { path: '/hub', name: 'HubView', component: HubView, meta: { requiresAuth: true }},
  // { path: '/hub', name: 'HubView', component: HubView  },
  { path: '/game', name: 'GameView', component: GameView  },
  // { path: '/home', name: 'HomeView', component: HomeView },
  // { path: '/faq', name: 'FaqView', component: FaqView  },
  // { path: '/ratting', name: 'RattingView', component: RattingView  },
  // { path: '/profile', name: 'ProfileView', component: ProfileView  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!getCookie('game-cookies')
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/hub')
  } else {
    next()
  }
})

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

export default router