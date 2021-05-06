<template>
<div class=" bg-color">
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
  </div>
</template>

<script>
export default {
  name: "EssentialLink"
};
</script>

<style scoped>

.bg-color{
  background-color:#FAF5FF;
  color:#000;
}


</style>
