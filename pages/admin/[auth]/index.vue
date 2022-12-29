<script setup>
const route = useRoute()
const submitUser = async (userData) => {
  const { formType, email, password } = userData
  const user = await useFirebaseAuth(formType, email, password)
  console.log(user.value)
}
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10">
        <AuthForm :formType='$route.params.auth' @submit-user="submitUser" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
