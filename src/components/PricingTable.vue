<template>
  <div class="q-pb-xl">
    <div class="container-md">
      <SectionHeader :title="sectiontitle"></SectionHeader>
      <div class="q-px-lg pricitable__wrapper">
        <div class="row q-col-gutter-lg">
          <div
            class="col-12 col-sm-6 col-md-4"
            v-for="price in prices"
            :key="price.id"
          >
            <div class="pricing-table gprice-single full-height bg-white">
              <div class="head">
                <div class="title mb-3">{{ price.catagory }}</div>
              </div>
              <div class="content">
                <div class="price">
                  <h1>${{ price.value }}</h1>
                </div>
                <ul>
                  <li>5 GB Ram</li>
                  <li>40GB SSD Cloud Storage</li>
                  <li>Month Subscription</li>
                  <li>Responsive Framework</li>
                  <li>
                    <del> Monthly Billing Software </del>
                  </li>
                  <li>
                    <del>1 Free Website</del>
                  </li>
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
  name: "PricingTable",
  data() {
    return {
      sectiontitle: " executive wash packages",
      prices: [
        {
          id: 1,
          catagory: "Basic",
          value: "20"
        },
        {
          id: 2,
          catagory: "Standerd",
          value: "20"
        },
        {
          id: 3,
          catagory: "Gold",
          value: "20"
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
.pricitable__wrapper {
  padding-top: 100px;
  padding-top: 100px;
}
.pricing-table {
  box-shadow: 0px 0px 18px #ccc;
  text-align: center;
  padding: 30px 0px;
  border-radius: 5px;
  position: relative;
  min-height: 550px;
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
  position: relative;
  display: inline-block;
}

.pricing-table .btn {
  color: #fff;
  padding: 14px 40px;
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
</style>
