<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '../../store/user.ts'
const userStore = useUserStore()
definePageMeta({
  middleware: ["auth"]
})
const { user } = storeToRefs(userStore)
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{ user.email }} Home</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
