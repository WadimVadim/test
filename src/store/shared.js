import { defineStore } from 'pinia';

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