import { defineStore } from 'pinia';
import { apiClient } from '../main.js'

export const useSharedStore = defineStore('shared', {
    state: () => ({
        View: "Главная"
    }),
    getters: {
        getView: (state) => state.View,
    },
    actions: {
        updateView(newView) {
            this.View = newView;
        },
    }
})

export const useAuthStore = defineStore('auth', {
    state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    async login(credentials) {
      try {
        await apiClient.post('/login', credentials)
        this.isAuthenticated = true
      } catch (error) {
        console.error('Ошибка входа:', error)
        throw error
      }
    }
  }
})