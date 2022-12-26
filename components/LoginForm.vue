<script setup>
const emit = defineEmits(['login-user', 'register-user'])
const form = ref(null)
const formType = ref('login')
const valid = ref(true)
const email = ref('')
const emailRules = ref([
  v => !!v || 'E-mail is required',
  v => /.+@.+\..+/.test(v) || 'Input valid email address'
])
const password = ref('')
const passwordRules = ref([
  v => !!v || 'Password Required',
  v => (v && v.length >= 6) || 'Password must be longer than 6 characters',
  v => (v && v.length <= 32) || 'Password can\'t be more than 32 characters'
])
const reset = () => {
  form.value.reset()
}
const validate = async () => {
  const { valid } = await form.value.validate()
  if (valid && formType.value === 'login') {
    const userCredentials = { email: email.value, password: password.value }
    console.log('submitting login form')
    emit('login-user', userCredentials)
  } else if (valid && formType.value === 'login') {
    const userCredentials = { email: email.value, password: password.value }
    console.log('submitting registration form')
    emit('register-user', userCredentials)
  }
}
const resetValidation = () => {
  form.value.resetValidation()
}
</script>

<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      type="email"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :rules="passwordRules"
      label="Password"
      type="password"
      required
    ></v-text-field>
    <v-btn
      color="success"
      class="mr-4"
      @click="validate"
    >
      {{ formType === 'login' ? 'Login' : 'Register'}}
    </v-btn>
    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>
    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
</template>

<style scoped></style>
