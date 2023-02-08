<template>
  <section class="tab-form">
    <button @click="activeTab = 'login'" :class="{'active': activeTab === 'login'}">Login</button>
    <button @click="activeTab = 'register'" :class="{'active': activeTab === 'register'}">Registro</button>

  </section>
  <component :key="activeTab" :is="forms[activeTab]"></component>
</template>

<script>
import LoginForm from '../customer/login/Login.vue';
import RegisterForm from '../customer/register/Register.vue';
import { markRaw } from 'vue';

export default {
  name: 'TabForm',
  components: {
    LoginForm: markRaw(LoginForm),
    RegisterForm: markRaw(RegisterForm)
  },
  data() {
    return {
      activeTab: 'login',
      forms: {
        login: LoginForm,
        register: RegisterForm
      }
    }
  }
}
</script>

<style scoped>
.tab-form {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
}

.tab-form button {
  appearance: none;
  border: 0;
  background: transparent;
  text-transform: uppercase;
  font-family: 'Dior';
  letter-spacing: 2.2px;
  font-weight: 600;
  color: var(--vt-c-divider-dark-1);
  cursor: pointer;
  transition: .3s;
  padding: 5px;
}

.tab-form button:hover,
.tab-form button.active {
  color: var(--turquesa);
}
</style>
