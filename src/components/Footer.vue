<template>
  <div>
    <!-- Footer Area-->
    <footer class="footer-area section-padding-130">
      <!-- footer animation  -->
      <!-- <div class="highway"></div>
      <div class="city"></div>
      <div class="car">
        <img src="images/footer/car.png" alt="" />
      </div>
      <div class="wheel">
        <img src="images/footer/wheel.png" class="back_wheel" alt="" />
        <img src="images/footer/wheel.png" class="front_wheel" alt="" />
      </div> -->
      <!-- footer animation end  -->
      <div class="container q-px-md">
        <div class="row q-col-gutter-md">
          <!-- Single Widget-->
          <div class="col-12 col-sm-6 col-md-4 col-lg-4">
            <div class="single-footer-widget">
              <!-- Widget Title-->
              <h5 class="widget-title">About us</h5>
              <!-- Footer Menu-->
              <div class="footer__text">
                <p>
                  We do our best to offer a Good Wash, Good Value, Fast Service
                  and a Friendly Experience to every customer. Try us out. If
                  you don't experience all four, talk to a manager and help us
                  make every car a show car.
                </p>
                <h6 class=" q-pt-lg q-my-none">
                  <address>
                    12351 NW 18 St Pembroke Pines, Fl 33026 +1 954-534-9323
                  </address>
                </h6>
              </div>
            </div>
          </div>
          <!-- Single Widget-->
          <div class="col-12 col-sm-6 col-md-4 col-lg-4">
            <div class="single-footer-widget">
              <!-- Widget Title-->
              <h5 class="widget-title">My Services</h5>
              <!-- Footer Menu-->
              <div class="footer-menu">
                <ul>
                  <li><a href="#">Supervisor’s Package </a></li>
                  <li><a href="#">Director’s Package</a></li>
                  <li><a href="#">Manager’s Package</a></li>
                  <li>
                    <a href="#">Vice Presidential Package</a>
                  </li>
                  <li><a href="#">Presidential Package</a></li>
                  <li><a href="#">Ultra-Presidential Package</a></li>
                  <li><a href="#">Executive Package</a></li>
                  <li><a href="#">Chairmen’s Package</a></li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Single Widget-->
          <div class="col-12 col-sm-6 col-md-4 col-lg-4">
            <div class="single-footer-widget">
              <!-- Widget Title-->
              <h5 class="widget-title">Sign up for E-mail Deal</h5>
              <!-- Footer Menu-->
              <div class="footer__text">
                <p>
                  Fill out the form and Wash me! will let you know about
                  specials offers, coupons and news.
                </p>
              </div>
              <div class="email__area">
                <input class="exec_email full-width" placeholder="Email" />
                <q-btn class="btn__primary q-mt-lg" label="Subscribe" />
              </div>
            </div>
          </div>
          <!-- Single Widget-->
        </div>
      </div>
    </footer>
    <!-- Footer Bottom-->
    <div class="footer__bottom">
      <div class="container">
        <div class="row  q-px-md justify-between q-py-lg">
          <div class="">
            All Rights Reserved by &copy;
            <span class=" text-weight-bold text-h6"
              >Executive Wash & Detail</span
            >
          </div>
          <div class="footer__bottom_social_icon">
            <span class=" q-mr-lg text-h6 text-capitalize">Follow us : </span>
            <a href="/" class=" text-white text-h5">
              <q-icon name="fab fa-facebook"
            /></a>
            <a href="/" class=" text-white text-h5">
              <q-icon name="fab fa-twitter"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      text: ""
    };
  }
};
</script>

<style lang="scss" scoped>
/* Footer CSS */
.footer__bottom_social_icon {
  a {
    margin-left: 15px;
    display: inline-block;
    text-decoration: none;
    i {
      &:hover,
      &:focus {
        color: rgb(135, 40, 226);
      }
    }
  }
}
.footer-area {
  position: relative;
  margin-top: 50px;
  z-index: 1;
  padding-top: 50px;
  padding-bottom: 100px;
  background-image: url("/images/footer/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  overflow: hidden;
}
.highway {
  position: absolute;
  width: 500%;
  height: 150px;
  display: block;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url("/images/footer/road.jpg");
  background-repeat: repeat-x;
  z-index: 1;
  animation: highway 10s linear infinite;
}
@keyframes highway {
  100% {
    transform: translateX(-3400px);
  }
}
.city {
  position: absolute;
  width: 500%;
  height: 250px;
  display: block;
  bottom: 150px;
  left: 0;
  right: 0;
  background-image: url("/images/footer/city1.svg");
  background-repeat: repeat-x;
  z-index: 1;
  animation: city 40s linear infinite;
}

@keyframes city {
  100% {
    transform: translateX(-1400px);
  }
}

.car {
  width: 300px;
  left: 18%;
  bottom: 25px;
  transform: translateX(-50%);
  position: absolute;
  z-index: 2;
}
.car img {
  width: 100%;
  animation: car 1s linear infinite;
}
@keyframes car {
  100% {
    transform: translateY(-2px);
  }
  50% {
    transform: translateY(2px);
  }
  0% {
    transform: translateY(-2px);
  }
}
.wheel {
  left: 18%;
  bottom: 92px;
  transform: translateX(-50%);
  position: absolute;
  z-index: 2;
}
.wheel img {
  width: 55px;
  height: 55px;
  animation: wheel 1s linear infinite;
}
.back_wheel {
  position: absolute;
  left: -124px;
}
.front_wheel {
  position: absolute;
  left: 60px;
}
@keyframes wheel {
  100% {
    transform: rotate(360deg);
  }
}

.footer__text p {
  color: #000;
  /* text-shadow: 1px 1px #ffffff; */
  /* mix-blend-mode: difference; */
}
.footer-menu ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.single-footer-widget {
  position: relative;
  z-index: 1;
}
.single-footer-widget .widget-title {
  margin-bottom: 1.3rem;
  color: #080808;
  mix-blend-mode: difference;
}
.single-footer-widget .footer-menu li a {
  color: #000;
  /* text-shadow: 1px 1px #ffffff; */
  margin-bottom: 0.875rem;
  display: block;
  font-size: 0.875rem;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  /* mix-blend-mode: difference; */
}
.single-footer-widget .footer-menu li a:hover,
.single-footer-widget .footer-menu li a:focus {
  color: rgb(135, 40, 226);
}
.single-footer-widget .footer-menu li:last-child a {
  margin-bottom: 0;
}

.app-download-btn-group a img {
  max-width: 180px;
}
.exec_email {
  border: 1px solid rgba(43, 40, 40, 0.65);
  background-color: transparent;
  padding: 10px;
  color: rgba(255, 255, 255, 0.65);
  border-radius: 3px;
}
.exec_email:hover {
}
.exec_email:focus {
  border: 1px solid #000000 !important;
  border-radius: 3px;
}

.footer__bottom {
  position: relative;
  z-index: 1;
  background-color: #0d131c;
  color: rgba(255, 255, 255, 0.65);
}
</style>
