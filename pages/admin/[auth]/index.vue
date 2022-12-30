<script setup>
import { useUserStore } from '../../../store/user.ts'
const userStore = useUserStore()
const router = useRouter()
const submitUser = async (userData) => {
  try {
    await userStore.handleAuthForm(userData)
    router.push('/admin')
  } catch (e) {
    console.log(e)
  }
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
