import Cookie from '../services/cookie';
import { stateUsers } from '@/store/users';
import axios from '../plugins/axios';



export default {
    async redirectNotAuthAuthenticated(to, from, next) {
        const token = Cookie.getToken()

        if (!token) { next({ name: 'intro' }) }

        if (token) {
            await axios.get('/users/me', {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token
                }
            })
                .then((response) => {
                    const state = stateUsers();
                    if (!state.userState?.id) {
                        state.storeUser(response.data.user)
                    }
                })
                .catch(e => {
                    Cookie.deleteToken()
                    next({ name: 'intro' })
                })
        }

        next();

    },

    redirectAuthAuthenticated(to, from, next) {
        const token = Cookie.getToken()

        if (token) { next({ name: 'descripter' }) }

        next();
    }
}