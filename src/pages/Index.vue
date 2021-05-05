<template>
  <q-page class="index__page_wrapper">
    <!-- <HomeSlider></HomeSlider> -->
    <HeroArea></HeroArea>
    <PriceWizard></PriceWizard>
    <WhatWeDo></WhatWeDo>
    <PricingTable></PricingTable>
    <Features></Features>
    <Testimonials></Testimonials>
    
  </q-page>
</template>

<script>
// import HomeSlider from "components/HomeSlider.vue";
import HeroArea from "components/HeroArea.vue";
import PriceWizard from "components/PriceWizard.vue";
import Features from "components/Features.vue";
import WhatWeDo from "components/WhatWeDo.vue";
import PricingTable from "components/PricingTable.vue";
import Testimonials from "components/Testimonials.vue";

export default {
  name: "PageIndex",
  data() {
    return {};
  },
  components: {
    // HomeSlider,
    HeroArea,
    PriceWizard,
    Features,
    WhatWeDo,
    PricingTable,
    Testimonials,
  }
};
</script>
