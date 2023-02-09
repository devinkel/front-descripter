<template>
    <Form formTitle="form-home login-form" :hiddenClass="hiddenClassEmail" :showPasswordField="showForm" :fields="formFields" :is-loading="isLoading" @submit-form="handleSubmit"  :error-message="message"/>
</template>

<script>
import Form from '../../default/Form.vue';
import LoginForm from './create/loginForm'
import Cookie from '../../../services/cookie';
import { stateUsers } from '../../../store/users';
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
            hiddenClassEmail: '',
            isLoading: false
        }
    },
    methods: {
        async handleSubmit(formData) {
            if (this.showForm === true) {
                this.message = ''
                this.isLoading = true
                await this.axios.post('/users/checkemail', { email: formData.email })
                    .then(result => {
                        if (result.data.email) {
                            this.email = result.data.email;
                            this.showForm = false;
                            this.hiddenClassEmail = 'hidden'
                        }
                        this.isLoading = false
                    })
                    .catch(e => {
                        this.message = e?.response?.data?.message ?? 'Usuário não encontrado';
                        this.isLoading = false
                    })
                    
            } else {
                formData.email = this.email;
                await this.axios.post('/users/authenticate', formData)
                    .then(result => {
                        const { id, name, email, token } = result.data
                        Cookie.setToken(token);
    
                        Users.storeUser({ id, name, email, token })
                        this.$router.push({ name: 'descripter' })
                        this.isLoading = false 
                    })
    
                    .catch(e => {
                        this.message = e?.response?.data?.message ?? ''
                        this.isLoading = false 
                    })

            }
        },

    },
}
</script>
