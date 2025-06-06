import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import GameView from '../views/GameView.vue'
import HubView from '../views/HubView.vue'

const routes = [
  { path: '/', name: 'Login', component: LoginView },
  { path: '/register', name: 'Register', component: RegisterView },
  { path: '/hub/:nickname', name: 'HubView', component: HubView  },
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

export default router