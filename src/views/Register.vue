<template>
  <section class="title">
    <h1>Descripter.Ai</h1>
    <p>Faça descrições performáticas de forma simples para seus produtos ou anúncios.</p>
  </section>

  <main id="login-form">
    <section class="container-form">
      <form class="form-home">
        <label for="email">Email</label>
        <input type="text" id="email" v-model="email" class="mb-3">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" class="mb-3">
        <button type="button" @click="login" class="ma-3">Register</button>
        <span v-if="message"> {{ message }} </span>
      </form>
      <router-link to="/login">Logar</router-link>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      password: '',
      email: '',
      drawer: null
    }
  },
  methods: {
    async login() {
      const response = await this.axios.post('/users', {
        name: this.name,
        email: this.email,
        password: this.password,
      })
      if (response.data.success) {
        this.$store.commit('setAuthenticated', true)
      }
    },
  }
}
</script>