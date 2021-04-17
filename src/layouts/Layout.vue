<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar class="container-lg">
        <q-toolbar-title>
          ExecWash
        </q-toolbar-title>

        <div class="flex">
          <q-btn stretch flat label="home" to="/" />
          <q-btn stretch flat label="services" to="/ServicesPage" />
          <q-btn stretch flat label="appointment" to="/AppointmentPage" />
          <q-btn stretch flat label="gallery" to="/GalleryPage" />
          <q-btn stretch flat label="about us" to="/AboutUsPage" />
          <q-btn stretch flat label="contact us" to="/ContactUsPage" />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

export default {
  name: "Layout",
  // components: { EssentialLink },
  data() {
    return {
      tab: ""
    };
  }
};
</script>
