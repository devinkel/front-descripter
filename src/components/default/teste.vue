<template>
  <section class="container-form">
    <Form ref="form" @submit="handleSubmit" :class="formTitle">
      <div v-for="field in fields" :key="field.name" :class="`input-box-${field.name} ${hiddenClass}`">
        <Field v-if="!showPasswordField || field.name !== 'password'" :name="field.name" :type="field.type" :rules="validateEmail" :placeholder="field.placeholder" />
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
  props: {
    fields: {
      type: Object,
      default: () => { }
    },
    showPasswordField: {
      type: Boolean,
      default: false
    },
    formTitle: {
      type: String,
      default: ''
    },
    hiddenClass: {
      type: String,
      default: ''
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: ''
    }
  },
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    return {
      formData: {},
    }
  },
  methods: {
    async handleSubmit() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        this.$emit('submit-form', this.formData)
      }
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'This field is required';
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }
      // All is good
      return true;
    },
  },
};
</script>