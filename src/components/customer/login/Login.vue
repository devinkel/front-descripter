<template>
    <Form v-if="showForm" :fields="formFields" @submit-form="handleSubmit" />
    <span v-if="message "> {{ message }} </span>
</template>

<script>
import Form from '../../default/Form.vue';
import LoginForm from './create/loginForm'
import Cookie from '../../../services/cookie';
import { stateUsers } from '@/store/users';
const Users = stateUsers()

export default {
    name: "LoginForm",
    components: {
        Form
    },
    data() {
        return {
            formFields: LoginForm.fields,
            showForm: true,
            email: '',
            message: '',
        }
    },
    methods: {
        async handleSubmit(formData) {
            if (this.showForm === true) {
                this.axios.post('/users/checkemail', { email: formData.email })
                    .then(result => {
                        if (result.data.email) {
                            this.showForm = false;
                            this.email = result.data.email;
                        }
                    })
                    .catch(e => {
                        this.message = e?.response?.data?.message;
                    })
            } else {
                formData.email = this.email;
                this.axios.post('/users/authenticate', formData)
                    .then(result => {
                        const { id, name, email, token } = result.data
                        Cookie.setToken(token);
    
                        Users.storeUser({ id, name, email, token })
                        this.$router.push({ name: 'home' })
                    })
    
                    .catch(e => {
                        this.message = e?.response?.data?.message ?? ''
                    })
            }
        },

    },
}
</script>
