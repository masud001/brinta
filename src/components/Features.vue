<template>
  <div class="bg-blue-1">
    <div class="container-lg">
      <SectionHeader :title="sectiontitle"></SectionHeader>
      <div class="q-px-lg q-py-xl">
        <div class="row q-col-gutter-lg">
          <div
            class="col-12 col-sm-6 col-md-3"
            v-for="(data, i) of featuresData"
            :key="i"
          >
            <q-card class="my-card card__height" flat>
              <div class="image__wrapper">
                <q-img class="card__image" :src="data.bgImg" :ratio="16 / 9">
                  <div class="image__overlay">
                    <div class="overlay__content">
                      <q-icon name="style" />
                      <p>text</p>
                    </div>
                  </div>
                </q-img>
              </div>

              <q-card-section class="card__section">
                <div class="text-overline text-orange-9">Overline</div>
                <div class="text-h5 q-mt-sm q-mb-xs text-capitalize">
                  {{ data.title }}
                </div>
                <div class="text-caption text-grey">
                  {{ data.content }}
                </div>

                <div class="q-py-md q-pl-md q-mt-auto absolute-bottom">
                  <q-btn class="btn__primary" label="learn more" />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "./SectionHeader";
export default {
  name: "Features",
  data() {
    return {
      sectiontitle: "featured works",
      showText: {},
      featuresData: [
        {
          id: 1,
          bgImg: "/feature-images/car-1.svg",
          visitedNumber: "12345",
          title: "title",
          content: "Lorem ipsum dolor sit amet, consectetur"
        },
        {
          id: 2,
          bgImg: "/feature-images/car-2.svg",
          visitedNumber: "12345",
          title: "title",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          id: 3,
          bgImg: "/feature-images/car-3.svg",
          visitedNumber: "12345",
          title: "title",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          id: 4,
          bgImg: "/feature-images/car-4.svg",
          visitedNumber: "12345",
          title: "title",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ]
    };
  },

  components: {
    SectionHeader
  }
};
</script>

<style>
.icons__eye {
  position: absolute;
  bottom: 15px;
  right: 15px;
}
.card__height {
  min-height: 443px;
}
.card__section {
  min-height: 269px !important;
}
.image__wrapper {
  position: relative;
}
.q-img__content > div.image__overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background: rgb(135, 40, 226);
  background: linear-gradient(
    90deg,
    rgba(135, 40, 226, 1) 0%,
    rgba(84, 6, 224, 1) 100%
  );
  z-index: 99;
}
.image__wrapper:hover .image__overlay {
  opacity: 1;
}
.overlay__content {
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
}
.card__image .q-img__image {
  background-size: contain !important;
}
</style>
