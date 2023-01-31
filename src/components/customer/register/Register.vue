<template>
    <Form :fields="formFields" @submit-form="handleSubmit" />
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

            const response = await this.axios.post('/users', {
                name: this.name,
                email: this.email,
                password: this.password,
            })
            if (response.data.success) {
                this.$store.commit('setAuthenticated', true)
            }
        },

    },
}
</script>
