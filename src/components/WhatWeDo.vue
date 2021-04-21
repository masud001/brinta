<template>
  <div class="q-pb-xl">
    <div class="">
      <q-parallax src="https://cdn.quasar.dev/img/parallax2.jpg">
        <!-- <template v-slot:media>
          <img src="https://cdn.quasar.dev/img/parallax1.jpg" />
        </template> -->
        <div class="container-lg">
          <div class="q-px-lg">
            <div class="row q-col-gutter-lg">
              <div class="col-12 col-sm-12 col-md-6">
                <h1
                  class="text-white q-ma-none text-uppercase text-h2 q-mb-lg "
                >
                  what we do
                </h1>
                <div class="text-h6 q-mb-lg text-white">
                  Need a quick wash? Or do you need massive car cleaning with
                  interior cleaning, coat waxing and tire shine? We are equipped
                  with the best washing equipments that will make your car
                  pretty in just a few minutes. Want your car to get a shiny
                  look? Our team will take care of that!
                </div>
                <q-btn color="primary" label="Primary" size="lg" />
              </div>
              <div class="col-12 col-sm-6 col-md-6">
                <div class="row q-col-gutter-md">
                  <div class="col-md-6">
                    <q-card class="my-card">
                      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                        <div class="text-h5 absolute-bottom text-right">
                          Title
                        </div>
                      </q-img>
                    </q-card>
                  </div>
                  <div class="col-md-6">
                    <q-card class="my-card">
                      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                        <div class="text-h5 absolute-bottom text-right">
                          Title
                        </div>
                      </q-img>
                    </q-card>
                  </div>
                  <div class="col-md-6">
                    <q-card class="my-card">
                      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                        <div class="text-h5 absolute-bottom text-right">
                          Title
                        </div>
                      </q-img>
                    </q-card>
                  </div>
                  <div class="col-md-6">
                    <q-card class="my-card">
                      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                        <div class="text-h5 absolute-bottom text-right">
                          Title
                        </div>
                      </q-img>
                    </q-card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-parallax>
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

<style lang="scss" scoped></style>
