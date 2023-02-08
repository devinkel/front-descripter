<template>
    <Form formTitle="form-home register-form" :hiddenClass="''" :fields="formFields" :is-loading="isLoading" @submit-form="handleSubmit" />
    <span v-if="message "> {{ message }} </span>
</template>

<script>
import Form from '../../default/Form.vue';
import RegisterForm from './create/registerForm'

export default {
    name: "RegisterForm",
    components: {
        Form
    },
    data() {
        return {
            formFields: RegisterForm.fields,
            message: '',
        }   
    },
    methods: {
        async handleSubmit(formData) {

            payload = {
                name: this.name,
                email: this.email,
                password: this.password,
            }

            await this.axios.post('/users', payload)
            if (response.data.success) {
                this.$store.commit('setAuthenticated', true)
            }
        },

    },
}
</script>
