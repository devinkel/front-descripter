<template>
  <section class="container-form">
    <Form ref="form" @submit.prevent="submit">
      <div v-for="field in fields" :key="field.name" :class="`input-box-${field.name} ${hiddenClass}`">
        <Field :name="field.name" v-if="!showPasswordField || field.name !== 'password'" :rules="field.rules">
          <input :type="field.type" v-model="formData[field.name]" :placeholder="field.placeholder"/>
        </Field>
        <ErrorMessage :name="field.name" />
      </div>
      <button type="submit" :disabled="isLoading">
        <span v-if="!isLoading">Enviar</span>
        <img v-if="isLoading" src="../../assets/images/loading-dots.svg" />
      </button>
      <span class="message-error" v-if="errorMessage">{{ errorMessage }}</span>
    </Form>
  </section>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  props: ['fields', 'showPasswordField', 'formTitle', 'hiddenClass', 'isLoading', 'errorMessage'],
  data() {
    return {
      formData: {},
    }
  },
  methods: {
    async submit() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.$emit('submit-form', this.formData)
      }
    },
  },
}
</script>
