<template>
  <q-page class="index__page_wrapper">
    <!-- <HomeSlider></HomeSlider> -->
    <HeroArea></HeroArea>
    <PriceWizard></PriceWizard>
    <WhatWeDo></WhatWeDo>
    <PricingTable></PricingTable>
    <!-- <Features></Features> -->
    <FeatureWorks></FeatureWorks>
    <SpecialService></SpecialService>
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
import SpecialService from "components/SpecialService.vue";
import Testimonials from "components/Testimonials.vue";
import FeatureWorks from "components/FeatureWorks.vue";

export default {
  name: "PageIndex",
  data() {
    return {};
  },
  components: {
    // HomeSlider,
    HeroArea,
    PriceWizard,
    // Features,
    WhatWeDo,
    PricingTable,
    SpecialService,
    Testimonials,
    FeatureWorks
  }
};
</script>
