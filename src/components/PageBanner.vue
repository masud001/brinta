<template>
  <!-- page banner START -->
  <div
    class="page__banner  section__bg flex justify-center q-py-lg items-center"
  >
    <div class="banner__content text-center">
      <h1 class="text-capitalize q-my-none text-weight-bold">
        {{ title }}
      </h1>
    </div>
  </div>
  <!-- page banner END -->
</template>

<script>
export default {
  name: "PageBanner",
  data() {
    return {};
  },
  props: ["title"]
};
</script>

<style lang="scss" scoped>
.page__banner.section__bg {
  background-color: #ededed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/images/service/service-banner.jpg"),
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(70, 66, 66, 0.5));
  background-blend-mode: overlay;
  height: 500px;
}

.banner__content {
  background: -webkit-linear-gradient(#452955, #00000073);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
