<template>
  <v-app>
    <navBar class="app-bar" />
    <v-main>
      <router-view style="width: 1920px; margin: auto" />
    </v-main>
    <mobileAppBar />
  </v-app>
</template>

<script>
import navBar from "./components/nav-bar/nav-bar";
export default {
  name: "App",
  components: { navBar },

  data() {
    return {
      url: "assets/navbar-items/zapuz_logo.svg",
    };
  },
};
</script>

<style>
@media screen and (max-width: 850px) {
  .app-bar {
    display: none !important;
    color: red !important;
  }
}

@media screen and (min-width: 850px) {
  .mobile-appbar {
    display: none !important;
  }
}
</style>
