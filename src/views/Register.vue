<template>
    <v-app id="inspire">

      <v-main>
          <v-form>
            <v-text-field label="Username" v-model="name" />
            <v-text-field label="Email" v-model="email" />
            <v-text-field label="Password" v-model="password" type="password" />
            <v-btn @click="login">Register</v-btn>
          </v-form>
      </v-main>
    </v-app>
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