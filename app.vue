<template>
  <v-app>
    <v-app-bar :elevation="2">
      <v-app-bar-title>Application</v-app-bar-title>
        <NuxtLink
          v-for="(item, i) in drawerItems"
          :key="i"
          :to="item.link"
          class="mx-3 hidden-sm-and-down"
        >
          <v-btn>{{ item.title }}</v-btn>
        </NuxtLink>
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="hidden-md-and-up"
        ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" location="right" temporary floating>
      <v-list nav :items="drawerItems" item-title="title" to="link">
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <NuxtWelcome />
    </v-main>
  </v-app>
</template>

<script setup>
const drawer = ref(false)
const drawerItems = reactive([
  { icon: '', title: 'Data', link: '/data' },
  { icon: '', title: 'About', link: '/about' },
  { icon: '', title: 'Contact', link: '/contact' }
])
</script>
