import { defineStore } from "pinia";

export const stateUsers = defineStore('users', {
    state: () => ({
        userState: {}
    }),

    actions: {
        storeUser(user) {
            this.userState = user
        }
    },
    getters: {
        getUser() {
            return this.userState
        }
    },

})