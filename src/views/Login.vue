<template>
    <main id="login-form">
        <section class="container">
            <form class="text-center">
                <label for="email">Email</label>
                <input type="text" id="email" v-model="email" class="mb-3">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" class="mb-3">
                <button type="button" @click="login" class="ma-3">Login</button>
                <span v-if="message"> {{ message }} </span>
            </form>
        </section>
    </main>
</template>

<script>
import Cookie from '../services/cookie';
import { stateUsers } from '@/store/users';
const Users = stateUsers()

export default {
    data() {
        return {
            email: '',
            password: '',
            message: ''
        }
    },
    methods: {
        async login() {
            const payload = {
                email: this.email,
                password: this.password
            }
            this.message = '';

            this.axios.post('/users/authenticate', payload)
                .then(result => {
                    const { id, name, email, token } = result.data
                    Cookie.setToken(token);

                    Users.storeUser({ id, name, email, token })
                    this.$router.push({name: 'home'})
                })

                .catch(e => {
                    this.message = e?.response?.data?.message ?? ''
                })
        },
    }
}
</script>
<style scoped>
.container{

}
</style>