    <template>
        <section class="title">
            <h1>Descripter.Ai</h1>
            <p>Faça descrições performáticas de forma simples para seus produtos ou anúncios.</p>
        </section>

        <main id="login-form">
            <section class="container-form">
                <div class="out-form">
                    <span>Não possui conta?</span>
                    <router-link to="/register">Registre-se</router-link>
                </div>
                <form class="form-home">
                    <input type="text" id="email" v-model="email" placeholder="E-mail">
                    <input type="password" id="password" v-model="password" placeholder="Senha">
                    <button type="button" @click="login">Login</button>
                    <span v-if="message"> {{ message }} </span>
                </form>
            </section>
        </main>
    </template>

    <script>
    import Cookie from '../services/cookie';
    import { RouterLink } from 'vue-router';
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

    #login-form {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    </style>