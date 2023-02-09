<template>
  <section class="container-form">
    <form :class="formTitle" @submit.prevent="submit">
      <div v-for="field in fields" :key="field.name" :class="`input-box-${field.name} ${hiddenClass}`">
        <input v-if="!showPasswordField || field.name !== 'password'" :type="field.type" :name="field.name" v-model="formData[field.name]" :placeholder="field.placeholder"/>
      </div>
      <button type="submit" :disabled="isLoading">
        <span v-if="!isLoading">Enviar</span>
        <img v-if="isLoading" src="../../assets/images/loading-dots.svg" />
      </button>
      <span class="message-error" v-if="errorMessage">{{ errorMessage }}</span>
    </form>
  </section>
  </template>
  
  <script>
  export default {
    name: "Form",
    props: ['fields', 'showPasswordField', 'formTitle', 'hiddenClass', 'isLoading', 'errorMessage'],
    data() {
      return {
        formData: {},
      }
    },
    methods: {
      submit() {
        this.$emit('submit-form', this.formData)
      },
    },
  }
  </script>
  