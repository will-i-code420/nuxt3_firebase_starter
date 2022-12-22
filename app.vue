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
      <NuxtPage />
    </v-main>
    <v-footer
      class="bg-indigo-lighten-1 text-center d-flex flex-column"
    >
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="text"
        ></v-btn>
      </div>

      <div class="pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </div>

      <v-divider></v-divider>

      <div>
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script setup>
const drawer = ref(false)
const drawerItems = reactive([
  { icon: '', title: 'Data', link: '/data' },
  { icon: '', title: 'About', link: '/about' },
  { icon: '', title: 'Contact', link: '/contact' }
])
const icons = reactive([
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram'
])
</script>
