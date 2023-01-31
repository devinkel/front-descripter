<template>
    <div>
      <button @click="showLoginForm = true">Login</button>
      <button @click="showLoginForm = false">Registro</button>
      
      <template v-if="showLoginForm">
        <LoginForm :key="'login'"/>
      </template>
      <template v-else>
        <RegisterForm :key="'register'"/>
      </template>
    </div>
  </template>
  
  <script>
  import LoginForm from '../customer/login/Login.vue';
  import RegisterForm from '../customer/register/Register.vue';
  
  export default {
    name: "TabForm",
    components: {
      LoginForm,
      RegisterForm
    },
    data() {
      return {
        showLoginForm: true
      }
    }
  }
  </script>
  