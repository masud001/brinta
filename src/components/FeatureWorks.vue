<template>
  <div class="feature__wrapper  bg__color q-px-md">
    <SectionHeader :title="sectionTitle"></SectionHeader>
    <div class="features__section">
      <div class="container-md">
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-sm-6 col-md-4">
            <div class="feature__block full-height bg-white">
              <div class="feature__img">
                <q-img
                  src="/feature-images/feature-1.jpg"
                  :ratio="16 / 9"
                  alt=""
                />
              </div>
              <div class="feature__text q-pa-lg">
                <p class=" q-mb-sm q-mr-lg">
                  <q-icon name="far fa-calendar-alt" /> 03/July/2021
                </p>
                <a class="text-h5 no-margin" href="/"
                  >Hand Wash / Machine Wash</a
                >
                <p class=" q-mb-sm q-mr-lg text-subtitle1 ">
                  We offer speedy service with our state of the art tunnel wash
                  or you can ask for a VIP Hand Wash Service. We provide a wide
                  variety of services...
                </p>
              </div>
              <q-item class=" q-py-md ">
                <q-item-section avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>Image avatar</q-item-section>
              </q-item>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <div class="feature__block full-height bg-white">
              <div class="feature__img">
                <q-img
                  src="/feature-images/feature-2.jpg"
                  :ratio="16 / 9"
                  alt=""
                />
              </div>
              <div class="feature__text q-pa-lg">
                <p class=" q-mb-sm q-mr-lg">
                  <q-icon name="far fa-calendar-alt" /> 03/July/2021
                </p>
                <a class="text-h5 no-margin" href="/"
                  >Complete Detail Services</a
                >
                <p class=" q-mb-sm q-mr-lg text-subtitle1 ">
                  From waxing to shampooing, scratch removal to headlight
                  restoration, we do it all. Come on in and visit us now.
                </p>
              </div>
              <q-item class=" q-py-md ">
                <q-item-section avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>Image avatar</q-item-section>
              </q-item>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <div class="feature__block full-height bg-white">
              <div class="feature__img">
                <q-img
                  src="/feature-images/feature-3.jpg"
                  :ratio="16 / 9"
                  alt=""
                />
              </div>
              <div class="feature__text q-pa-lg">
                <p class=" q-mb-sm q-mr-lg">
                  <q-icon name="far fa-calendar-alt" /> 03/July/2021
                </p>
                <a class="text-h5 no-margin" href="/">BECOME A VIP MEMBER</a>
                <p class=" q-mb-sm q-mr-lg text-subtitle1 ">
                  Receive 10% Cash Back in form of reward points on every
                  transaction. You can redeem you points and use them towards
                  any detail of your choice.
                </p>
              </div>
              <q-item class=" q-py-md ">
                <q-item-section avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>Image avatar</q-item-section>
              </q-item>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "./SectionHeader";
export default {
  name: "FeatureWorks",
  data() {
    return {
      sectionTitle: "featured works"
    };
  },
  components: {
    SectionHeader
  }
};
</script>

<style lang="scss" scoped>
.bg__color {
  background-color: #faf5ff;
}
.features__section {
  padding: 100px 0px;
}
.feature__block {
  box-shadow: 0px 7px 25px 0px rgb(0 0 0 / 10%);
  position: relative;
  overflow: hidden;
  border-radius: 5px;
}
.feature__img {
  position: relative;
  overflow: hidden;
}
.feature__text {
  border-bottom: 1px solid #a2acbd;
  p {
    color: #596982;
    font-size: 14px;
  }
  a {
    color: #243f67;
    text-decoration: none;
    &:hover,
    &:focus {
      color: rgb(135, 40, 226);
    }
  }
}
</style>
