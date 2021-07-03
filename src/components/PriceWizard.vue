<template>
  <div class="car__wizard_wrapper container-lg">
    <div class="q-px-lg q-py-xl">
      <div class="q-col-gutter-xl  row items-start">
        <div class="col-12 col-md-4 text-center">
          <q-img class="q-mb-lg" src="/price-wizard/car-1.svg" />
          <h6 class="no-margin">Car</h6>
          <h4 class="no-margin text-deep-purple-13 text-weight-bolder">
            $20 & UP
          </h4>
        </div>

        <div class="col-12 col-md-4 text-center">
          <q-img class="q-mb-lg" src="/price-wizard/car-2.svg" />
          <h6 class="no-margin">Mid-Size Truck/SUV</h6>
          <h4 class="no-margin  text-deep-purple-13 text-weight-bolder">
            $20 & UP
          </h4>
        </div>

        <div class="col-12 col-md-4 text-center">
          <q-img class="q-mb-lg" src="/price-wizard/car-3.svg" />
          <h6 class="no-margin">Full-Size Truck/SUV</h6>
          <h4 class="no-margin  text-deep-purple-13 text-weight-bolder">
            $25 & UP
          </h4>
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

<style scoped>
.car__wizard_wrapper {
  padding: 100px 0px;
}
.car__wizard_wrapper .q-img {
  width: 90%;
}
</style>
