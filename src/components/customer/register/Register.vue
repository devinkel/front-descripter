<template>
    <Form formTitle="form-home register-form" :hiddenClass="''" :fields="formFields" :is-loading="isLoading" @submit-form="handleSubmit" />
    <span v-if="message "> {{ message }} </span>
</template>

<script>
import Form from '../../default/Form.vue';
import RegisterForm from './create/registerForm'
import { stateUsers } from '@/store/users';
const Users = stateUsers()

export default {
    name: "RegisterForm",
    components: {
        Form
    },
    data() {
        return {
            formFields: RegisterForm.fields,
            message: '',
            isLoading: false
        }   
    },
    methods: {
        async handleSubmit(formData) {

            const payload = {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            }

            await this.axios.post('/users', payload).then( result => {
                console.log(result.data)
            })
           
        },

    },
}
</script>
