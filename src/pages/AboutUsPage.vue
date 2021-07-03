<template>
  <div class="about_us__page">
    <!-- page banner START -->
    <PageBanner title="about us"></PageBanner>
    <!-- page banner END -->
    <div class="section__page q-my-xl">
      <div class="container-md">
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-md-6">
            <div class="about_image">
              <img src="/images/about_us.svg" alt="about us" />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="about_content">
              <h4 class="text-weight-bold q-my-none q-mb-lg text-capitalize ">
                short story about our company
              </h4>
              <p>
                Executive Wash was established in 2001. It is a family owned
                business and a lot of pride is taken into its integrity. We are
                one of the very few still existent high quality hand washes.
                What makes us stand out from the rest is that we have put in
                place many things to help achieve a complex and speedy wash
                without one machine touching your vehicle. Our establishment
                truly emphasizes the importance of the meaning quality to our
                staff and detailers. Executive Wash does not take any shortcuts
                when it comes customer service and we are geniuses in choosing
                the right product for your vehicle. Come see us soon and witness
                what we are about.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageBanner from "components/PageBanner.vue";
export default {
  name: "AboutUsPage",
  components: {
    PageBanner
  },
  data() {
    return {
      title: "About Us"
    };
  }
};
</script>

<style lang="scss" scoped>
.about_image {
  img {
    width: 100%;
  }
}
</style>
