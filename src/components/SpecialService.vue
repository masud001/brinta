<template>
  <div class="q-pb-xl overflow-hidden ">
    <div class="container-md">
      <SectionHeader :title="sectionTitle"></SectionHeader>
      <div class="q-px-lg price_table__wrapper">
        <!-- Circle Shape Animation-->
        <div class="circle-shape-animation">
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
          <div class="circle5"></div>
          <div class="circle6"></div>
          <div class="circle7"></div>
          <div class="circle8"></div>
        </div>

        <div class="row q-col-gutter-lg">
          <div
            class="col-12 col-sm-6 col-md-4"
            v-for="price in prices"
            :key="price.id"
          >
            <div class="pricing-table price-single full-height bg-white">
              <div class="head">
                <div class="title mb-3">{{ price.category }}</div>
              </div>
              <div class="content full-height">
                <div class="price">
                  <h1>${{ price.value }}</h1>
                </div>
                <ul>
                  <li v-for="item in price.items" :key="item">{{ item }}</li>
                </ul>
                <div class="sign-up">
                  <a href="/" class="btn bordered radius">
                    Learn More
                  </a>
                </div>
              </div>
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
  name: "SpecialService",
  data() {
    return {
      sectionTitle: " Our special services",
      prices: [
        {
          id: 1,
          category: "SUPER SHINE POLISH",
          value: "99",
          items: ["light Claybar", "Highspeed 3m Polish", "Carnuba Wax"]
        },
        {
          id: 2,
          category: "SWIRL REMOVAL SERVICE",
          value: "149",
          items: ["3m Swirl removal", "3m Polish", "Carnuba Wax"]
        },
        {
          id: 3,
          category: "WET SAND",
          value: "199",
          items: ["Wet sand", "Compound", "Swirl Removal", "Polish Wax"]
        },
        {
          id: 4,
          category: "Vice Presidential Package",
          value: "30",
          items: ["Includes Manager’s Package", "Super Shine Spray Wax"]
        },
        {
          id: 5,
          category: "COMPOUND",
          value: "149",
          items: []
        },
        {
          id: 6,
          category: "SCRATCH REMOVAL",
          value: "24",
          items: ["Per Scratch"]
        },
        {
          id: 7,
          category: "HEADLIGHT RESTORATION",
          value: "39",
          items: []
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
.price_table__wrapper {
  padding-top: 100px;
  padding-top: 100px;
  position: relative;
}
.pricing-table {
  box-shadow: 0px 0px 18px #ccc;
  text-align: center;
  padding: 30px 0px;
  border-radius: 5px;
  position: relative;
  min-height: 460px;
}
.pricing-table .head {
  border-bottom: 1px solid #eee;
  padding-bottom: 50px;
  transition: all 0.5s ease;
}
.pricing-table:hover .head {
  border-bottom: 1px solid #8e2de2;
}

.pricing-table .head .title {
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
}

.pricing-table .content .price {
  background: linear-gradient(to right, #8e2de2 0%, #4a00e0 100%);
  width: 90px;
  height: 90px;
  margin: auto;
  line-height: 90px;
  border-radius: 50%;
  border: 5px solid #fff;
  box-shadow: 0px 0px 10px #ccc;
  margin-top: -50px;
  transition: all 0.5s ease;
}
.pricing-table:hover .content .price {
  transform: scale(1.2);
}
.pricing-table .content .price h1 {
  color: #ffffff !important;
  font-size: 30px;
  font-weight: 700;
  line-height: 80px;
  margin: 0;
}
.pricing-table .content ul {
  list-style-type: none;
  margin-bottom: 20px;
  padding-top: 10px;
  padding-left: 0;
}

.pricing-table .content ul li {
  margin: 20px 0px;
  font-size: 14px;
  color: rgb(96, 125, 139);
}

.pricing-table .content .sign-up {
  background: linear-gradient(to right, #8e2de2 0%, #4a00e0 100%);
  border-radius: 40px;
  font-weight: 500;
  position: absolute;
  display: inline-block;
  bottom: 5%;
  transform: translateX(-50%);
  left: 50%;
}

.pricing-table .btn {
  color: #fff;
  padding: 14px 25px;
  display: inline-block;
  text-align: center;
  font-weight: 600;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3 linear;
  transition: all 0.3 linear;
  border: none;
  font-size: 14px;
  text-transform: capitalize;
  position: relative;
  text-decoration: none;
  margin: 2px;
  z-index: 9999;
  text-decoration: none;
  border-radius: 50px;
}

.pricing-table .btn:hover {
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
}

.pricing-table .btn.bordered {
  z-index: 50;
  color: #333;
}
.pricing-table:hover .btn.bordered {
  color: #fff !important;
}

.pricing-table .btn.bordered:after {
  background: #fff none repeat scroll 0 0;
  border-radius: 50px;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3 linear;
  transition: all 0.3 linear;
  width: 100%;
  z-index: -1;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  transform: scale(1);
}
.pricing-table:hover .btn.bordered:after {
  opacity: 0;
  transform: scale(0);
}

.circle-shape-animation .circle1 {
  width: 30px;
  height: 30px;
  background-color: #0d6efd;
  position: absolute;
  top: 19%;
  left: 16%;
  z-index: 1;
  border-radius: 50%;
  opacity: 0.15;
  -webkit-animation: circle-zoom-in-out linear 12s infinite;
  animation: circle-zoom-in-out linear 12s infinite;
}
.circle-shape-animation .circle2 {
  width: 30px;
  height: 30px;
  background-color: #f4284a;
  position: absolute;
  top: 24%;
  left: 77%;
  z-index: 1;
  border-radius: 50%;
  opacity: 0.15;
  -webkit-animation: circle-zoom-in-out linear 9s infinite;
  animation: circle-zoom-in-out linear 9s infinite;
}
.circle-shape-animation .circle3 {
  width: 30px;
  height: 30px;
  background-color: #f1c40f;
  position: absolute;
  top: 64%;
  left: 91%;
  z-index: 1;
  border-radius: 50%;
  opacity: 0.15;
  -webkit-animation: circle-zoom-in-out linear 16s infinite;
  animation: circle-zoom-in-out linear 16s infinite;
}
.circle-shape-animation .circle4 {
  width: 40px;
  height: 40px;
  background-color: #f1c40f;
  position: absolute;
  top: 74%;
  left: 36%;
  z-index: 1;
  border-radius: 50%;
  opacity: 0.15;
  -webkit-animation: circle-zoom-in-out linear 10s infinite;
  animation: circle-zoom-in-out linear 10s infinite;
}
.circle-shape-animation .circle5 {
  width: 100px;
  height: 100px;
  background-color: #f1c40f;
  position: absolute;
  top: 0%;
  left: 100%;
  z-index: 1;
  border-radius: 50%;
  opacity: 0.15;
  -webkit-animation: circle-zoom-in-out linear 10s infinite;
  animation: circle-zoom-in-out linear 10s infinite;
}
.circle-shape-animation .circle6 {
  width: 60px;
  height: 60px;
  background-color: #f1c40f;
  position: absolute;
  top: 13%;
  left: 0%;
  z-index: 1;
  border-radius: 50%;
  opacity: 0.15;
  animation: circle-zoom-in-out linear 10s infinite;
}
.circle-shape-animation .circle7 {
  width: 70px;
  height: 70px;
  background-color: #671696;
  position: absolute;
  top: 53%;
  left: 100%;
  z-index: 1;
  border-radius: 50%;
  opacity: 0.15;
  animation: circle-zoom-in-out linear 10s infinite;
}
.circle-shape-animation .circle8 {
  width: 100px;
  height: 100px;
  background-color: red;
  position: absolute;
  top: 62%;
  left: -5%;
  z-index: 1;
  border-radius: 50%;
  opacity: 0.15;
  -webkit-animation: circle-zoom-in-out linear 10s infinite;
  animation: circle-zoom-in-out linear 10s infinite;
}

@-webkit-keyframes circle-zoom-in-out {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
}

@keyframes circle-zoom-in-out {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
}
</style>
