<script setup>
definePageMeta({
  middleware: ["auth"]
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Page: {{ $route.params.user }} Profile</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
