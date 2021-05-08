<template>
  <div class="q-pb-xl">
    <div class="">
      <div class="section__wrapper section__bg">
        <div class="container-lg">
          <div class="q-px-lg">
            <div class="row q-col-gutter-lg">
              <div class="col-12 col-sm-12 col-md-6">
                <h1
                  class=" text-dark q-ma-none text-capitalize text-weight-bolder text-h2 q-mb-lg "
                >
                  what we do
                </h1>
                <div class="text-h6 q-mb-lg text-dark">
                  Need a quick wash? Or do you need massive car cleaning with
                  interior cleaning, coat waxing and tire shine? We are equipped
                  with the best washing equipments that will make your car
                  pretty in just a few minutes. Want your car to get a shiny
                  look? Our team will take care of that!
                </div>
                <q-btn class="btn__primary" label="Primary" size="lg" />
              </div>
              <div class="col-12 col-sm-6 col-md-6">
                <div class="section__image">
                  <img src="/what-we-do/what-we-do-bg-2.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
export default {
  name: "WhatWeDo",
  data() {
    return {};
  }
};
</script>

<style scoped>
.section__wrapper {
  padding: 100px 0px;
}
.section__bg {
  position: relative;
}
.section__bg::after {
  background: #ffffff;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ffffff),
    color-stop(transparent),
    to(#ffffff)
  );
  background: linear-gradient(to right, #ffffff, transparent, #ffffff);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -5;
  top: 0;
  left: 0;
  content: "";
}
.section__bg::before {
  content: "";
  position: absolute;
  background-image: url("/what-we-do/dot-gray.png");
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: -10;
  background-repeat: repeat;
  background-color: #f1f7ff;
}
.section__image img {
  width: 100%;
}
</style>
