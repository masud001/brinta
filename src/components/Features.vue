<template>
  <div class="bg-blue-1">
    <div class="container-lg">
      <div class="feature__title  text-center text-uppercase q-pt-lg text-h3">
        {{ sectiontitle }}
      </div>

      <div class="q-px-lg q-py-xl">
        <div class="row q-col-gutter-lg">
          <div
            class="col-12 col-sm-6 col-md-3"
            v-for="data in featuresData"
            :key="data.id"
          >
            <q-card class="my-card" flat bordered>
              <q-img
                :src="data.bgImg"
                @mouseover="showText = true"
                @mouseleave="showText = false"
              >
                <div
                  class=" absolute-full text-subtitle2 flex  text-center vertical-middle"
                  v-show="showText"
                >
                  <div class="icons__eye">
                    <q-icon name="fas fa-eye"></q-icon>
                    <span class=" q-ml-md ">{{ data.visitedNumber }}</span>
                  </div>
                </div>
              </q-img>

              <q-card-section>
                <div class="text-overline text-orange-9">Overline</div>
                <div class="text-h5 q-mt-sm q-mb-xs text-capitalize">
                  {{ data.title }}
                </div>
                <div class="text-caption text-grey">
                  {{ data.content }}
                </div>
                <div class="q-py-md q-gutter-sm">
                  <q-btn color="primary" label="learn more" />
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
export default {
  name: "Features",
  data() {
    return {
      showText: false,
      sectiontitle: "FEATURED WORKS",
      featuresData: [
        {
          id: 1,
          bgImg: "https://loremflickr.com/320/240/dog",
          visitedNumber: "12345",
          title: "title",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          id: 2,
          bgImg: "https://loremflickr.com/320/240/dog",
          visitedNumber: "12345",
          title: "title",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          id: 3,
          bgImg: "https://loremflickr.com/320/240/dog",
          visitedNumber: "12345",
          title: "title",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          id: 4,
          bgImg: "https://loremflickr.com/320/240/dog",
          visitedNumber: "12345",
          title: "title",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ]
    };
  }
};
</script>

<style>
.icons__eye {
  position: absolute;
  bottom: 15px;
  right: 15px;
}
</style>
