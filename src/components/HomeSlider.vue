<template>
  <q-page>
    <!-- NOTE: carousel  section -->
    <div class="Home__slider">
      <q-carousel
        swipeable
        animated
        arrows
        v-model="slide"
        :autoplay="autoplay"
        infinite
        height="500px"
      >
        <q-carousel-slide
          v-for="data in slides"
          :name="data.id"
          :key="data.id"
          class="column no-wrap flex-center"
          :img-src="data.imgLink"
        >
          <div class="q-mt-md text-center q-px-lg">
            <h4
              class="text-5 text-white q-ma-none q-pa-xl-lg"
              transition="rotate"
            >
              {{ data.text }}
            </h4>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "HomeSlider",
  data() {
    return {
      slide: 1,
      autoplay: true,
      slides: [
        {
          id: 1,
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
          imgLink: "https://cdn.quasar.dev/img/mountains.jpg"
        },
        {
          id: 2,
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
          imgLink: "https://cdn.quasar.dev/img/parallax1.jpg"
        },
        {
          id: 3,
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
          imgLink: "https://cdn.quasar.dev/img/parallax2.jpg"
        },
        {
          id: 4,
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
          imgLink: "https://cdn.quasar.dev/img/quasar.jpg"
        }
      ]
    };
  }
};
</script>

<style></style>
