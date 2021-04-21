<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <EssentialLink></EssentialLink>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

export default {
  components: { EssentialLink },
  name: "Layout",
  data() {
    return {
      tab: ""
    };
  }
};
</script>
