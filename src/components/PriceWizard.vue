<template>
  <div class="car__wizard_wrapper container-lg">
    <div class=" q-px-lg q-py-xl">
      <div class="row q-col-gutter-lg">
        <div
          class="col-12 col-sm-6 col-md-4"
          v-for="priceCard in priceCards"
          :key="priceCard.id"
        >
          <q-card class="my-card full-width ">
            <q-parallax :src="priceCard.imgLink" :height="250" />

            <q-card-section>
              <div class="text-h6  flex justify-between">
                <div class="carName">{{ priceCard.carName }}</div>
                <q-chip
                  outline
                  color="primary possiblePrice"
                  text-color="white"
                  icon="directions"
                >
                  {{ priceCard.possiblePrice }}
                </q-chip>
              </div>
              <div class="text-subtitle2">
                {{ priceCard.additionalContent }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PriceWizard",
  data() {
    return {
      priceCards: [
        {
          id: "1",
          imgLink: "https://loremflickr.com/320/240/car",
          carName: "Private Car",
          possiblePrice: "$20 & UP",
          additionalContent: "by John Doe"
        },
        {
          id: "2",
          imgLink: "https://loremflickr.com/320/240/car",
          carName: "Full-Size Truck/SUV",
          possiblePrice: "$20 & UP",
          additionalContent: "by John Doe"
        },
        {
          id: "3",
          imgLink: "https://loremflickr.com/320/240/car",
          carName: "Mid-Size Truck/SUV",
          possiblePrice: "$20 & UP",
          additionalContent: "by John Doe"
        },
        {
          id: "4",
          imgLink: "https://loremflickr.com/320/240/car",
          carName: "Mid-Size Truck/SUV",
          possiblePrice: "$20 & UP",
          additionalContent: "by John Doe"
        }
      ]
    };
  }
};
</script>

<style></style>
