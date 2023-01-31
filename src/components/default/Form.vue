<template>
  <section class="container-form">
    <form class="form-home" @submit.prevent="submit">
      <div v-for="field in fields" :key="field.name">
        <input :type="field.type" :name="field.name" v-model="formData[field.name]" :placeholder="formData[field.placeholder]"/>
      </div>
      <button type="submit">Enviar</button>
    </form>
  </section>
  </template>
  
  <script>
  export default {
    name: "Form",
    props: ['fields'],
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
  