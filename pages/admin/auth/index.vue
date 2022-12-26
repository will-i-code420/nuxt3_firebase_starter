<script setup>
const loginUser = async (formData) => {
  const { email, password } = formData
  const user = await useFirebaseAuth('login', email, password)
  console.log(user.value)
}
const registerUser = async (formData) => {
  console.log(formData)
}
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10">
        <LoginForm @login-user="loginUser" @register-user="registerUser"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
