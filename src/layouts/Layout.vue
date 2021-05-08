<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <EssentialLink></EssentialLink>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>

    <Footer></Footer>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import Footer from "components/Footer.vue";
export default {
  components: { EssentialLink, Footer },
  name: "Layout",
  data() {
    return {
      tab: ""
    };
  }
};
</script>
