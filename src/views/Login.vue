    <template>
        <HomeTitle />

        <main id="login-form">
            <section class="container-form">
                <form class="form-home">
                    <input type="text" id="email" v-model="email" placeholder="E-mail">
                    <input v-show="showInput" type="password" id="password" v-model="password" placeholder="Senha">
                    <button type="button" @click="login">Login</button>
                </form>
                <span v-if="message"> {{ message }} </span>
            </section>
        </main>
    </template>

    <script>
    import HomeTitle from '../components/default/HomeTitle.vue';
    import Cookie from '../services/cookie';
    import { stateUsers } from '../store/users';
    const Users = stateUsers()

    export default {
        components: {
            HomeTitle
        },
        data() {
            return {
                email: '',
                password: '',
                message: '',
                showInput: false
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
    }
    </style>