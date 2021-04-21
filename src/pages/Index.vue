<template>
  <q-page class="index__page_wrapper">
    <HomeSlider></HomeSlider>
    <PriceWizard></PriceWizard>
    <WhatWeDo></WhatWeDo>
    <Features></Features>
  </q-page>
</template>

<script>
import HomeSlider from "components/HomeSlider.vue";
import PriceWizard from "components/PriceWizard.vue";
import Features from "components/Features.vue";
import WhatWeDo from "components/WhatWeDo.vue";
export default {
  name: "PageIndex",
  data() {
    return {};
  },
  components: {
    HomeSlider,
    PriceWizard,
    Features,
    WhatWeDo
  }
};
</script>
