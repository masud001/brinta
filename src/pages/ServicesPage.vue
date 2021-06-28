<template>
  <div class="service__page__wrapper">
    <!-- servicing banner START -->
    <div
      class="service__page_banner  section__bg flex justify-center q-py-lg items-center"
    >
      <div class="service__content text-center">
        <h1 class="text-capitalize q-my-none text-weight-bold">
          our service
        </h1>
        <p class=" text-h4  q-my-none text-capitalize ">
          Home
          <span>
            <!-- <q-icon name="fas fa-angle-right" /> -->
            >
          </span>
          service
        </p>
      </div>
    </div>
    <!-- servicing banner END -->

    <!-- service page what we do section start  -->
    <div class="section__wrapper q-py-lg">
      <div
        class="section__title q-mt-lg q-pb-lg flex justify-center text-center"
      >
        <div class="service__content text-center">
          <p class=" text-capitalize text-h5 text-weight-bold ">
            what we do
          </p>
          <h1 class="text-capitalize q-my-none text-h4 text-weight-bold">
            quality servicing opportunities
          </h1>
        </div>
      </div>
      <div class="container-md relative-position">
        <!-- Circle Shape Animation-->
        <div class="circle-shape-animation">
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
        </div>
        <div class="row q-col-gutter-lg q-pt-lg">
          <!-- single service  -->
          <div class="col-12 col-sm-6 col-md-4">
            <div class="single__service shadow-1 q-pa-lg">
              <div class="service__image q-mb-lg">
                <img src="/images/service/car.png" alt="" srcset="" />
              </div>
              <h1 class=" text-h5 q-mt-none q-mb-md text-capitalize">
                quality servicing
              </h1>
              <p class=" text-caption q-my-none ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum nisi ratione nemo vel, perferendis molestias.
              </p>
              <q-btn class="btn__primary q-mt-lg" label="read more" />
            </div>
          </div>
          <!-- single service  -->
          <div class="col-12 col-sm-6 col-md-4">
            <div class="single__service shadow-1 q-pa-lg">
              <div class="service__image q-mb-lg">
                <img src="/images/service/car.png" alt="" srcset="" />
              </div>
              <h1 class=" text-h5 q-mt-none q-mb-md text-capitalize">
                quality servicing
              </h1>
              <p class=" text-caption q-my-none ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum nisi ratione nemo vel, perferendis molestias.
              </p>
              <q-btn class="btn__primary q-mt-lg" label="read more" />
            </div>
          </div>
          <!-- single service  -->
          <div class="col-12 col-sm-6 col-md-4">
            <div class="single__service shadow-1 q-pa-lg">
              <div class="service__image q-mb-lg">
                <img src="/images/service/car.png" alt="" srcset="" />
              </div>
              <h1 class=" text-h5 q-mt-none q-mb-md text-capitalize">
                quality servicing
              </h1>
              <p class=" text-caption q-my-none ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum nisi ratione nemo vel, perferendis molestias.
              </p>
              <q-btn class="btn__primary q-mt-lg" label="read more" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- service page what we do section end  -->

    <!-- pricing table area start -->
    <PricingTable></PricingTable>
    <!-- pricing table area end -->
    <!-- carte services start -->
    <CarteServices></CarteServices>

    <WashServices></WashServices>
    <!-- carte services end -->

    <!-- servicing news letter START -->
    <div
      class="newsletter__section__wrapper section__bg flex q-mt-lg justify-center items-center"
    >
      <div class="newsletter__section">
        <div class="text-center">
          <p class="text-capitalize text-h5 text-weight-bold">
            get our service
          </p>
          <h1 class=" q-my-none text-h4 text-weight-bold text-capitalize">
            ready to get out premium service
          </h1>

          <h1 class=" q-my-none text-h4 text-weight-bold text-capitalize">
            feel free to contact us
          </h1>
        </div>
        <div class="flex justify-center ">
          <q-btn class="btn__primary q-mt-lg q-mx-md" label="get our service" />
          <q-btn class="btn__primary q-mt-lg q-mx-md" label="Contact us" />
        </div>
      </div>
    </div>
    <!-- servicing news letter END -->
  </div>
</template>

<script setup>
import PricingTable from "components/PricingTable.vue";
import CarteServices from "components/CarteServices.vue";
import WashServices from "components/WashServices.vue";
export default {
  name: "PageServicePage",
  data() {
    return {};
  },
  components: {
    PricingTable,
    CarteServices,
    WashServices
  }
};
</script>

<style lang="scss" scoped>
.service__page_banner.section__bg {
  background-color: #ededed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/images/service/service-banner.jpg"),
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(70, 66, 66, 0.5));
  background-blend-mode: overlay;
  height: 500px;
}

.service__content {
  background: -webkit-linear-gradient(rgb(69, 41, 85), rgb(164, 11, 224));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.single__service {
  border-bottom: 2px solid rgb(161, 34, 211);
  .service__image {
    width: 150px;
  }
  img {
    width: 100%;
  }
}

.newsletter__section {
  p,
  h1 {
    background: -webkit-linear-gradient(rgb(69, 41, 85), rgb(164, 11, 224));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.newsletter__section__wrapper.section__bg {
  background-color: #ededed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/images/service/service-banner.jpg"),
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(70, 66, 66, 0.5));
  background-blend-mode: overlay;
  height: 500px;
}

.circle-shape-animation .circle1 {
  width: 30px;
  height: 30px;
  background-color: #0d6efd;
  position: absolute;
  top: 19%;
  left: 16%;
  z-index: 1;
  border-radius: 50%;
  opacity: 0.15;
  -webkit-animation: circle-zoom-in-out linear 12s infinite;
  animation: circle-zoom-in-out linear 12s infinite;
}
.circle-shape-animation .circle2 {
  width: 30px;
  height: 30px;
  background-color: #f4284a;
  position: absolute;
  top: 24%;
  left: 77%;
  z-index: 1;
  border-radius: 50%;
  opacity: 0.15;
  -webkit-animation: circle-zoom-in-out linear 9s infinite;
  animation: circle-zoom-in-out linear 9s infinite;
}
.circle-shape-animation .circle3 {
  width: 30px;
  height: 30px;
  background-color: #f1c40f;
  position: absolute;
  top: 64%;
  left: 91%;
  z-index: 1;
  border-radius: 50%;
  opacity: 0.15;
  -webkit-animation: circle-zoom-in-out linear 16s infinite;
  animation: circle-zoom-in-out linear 16s infinite;
}
.circle-shape-animation .circle4 {
  width: 30px;
  height: 30px;
  background-color: #f1c40f;
  position: absolute;
  top: 74%;
  left: 36%;
  z-index: 1;
  border-radius: 50%;
  opacity: 0.15;
  -webkit-animation: circle-zoom-in-out linear 10s infinite;
  animation: circle-zoom-in-out linear 10s infinite;
}

@-webkit-keyframes circle-zoom-in-out {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
}

@keyframes circle-zoom-in-out {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
}
</style>
