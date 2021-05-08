<template>
  <div>
    <!-- Footer Area-->
    <footer class="footer-area section-padding-130">
      <div class="container">
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
        <div class="row justify-between q-py-lg">
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
  background-color: #151e2e;
  padding-top: 50px;
  padding-bottom: 100px;
}

.footer__text p {
  color: rgba(255, 255, 255, 0.65);
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
  color: #ffffff;
}
.single-footer-widget .footer-menu li a {
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 0.875rem;
  display: block;
  font-size: 0.875rem;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
}
.single-footer-widget .footer-menu li a:hover,
.single-footer-widget .footer-menu li a:focus {
  color: #ffffff;
}
.single-footer-widget .footer-menu li:last-child a {
  margin-bottom: 0;
}

.app-download-btn-group a img {
  max-width: 180px;
}
.exec_email {
  border: 1px solid rgba(255, 255, 255, 0.65);
  background-color: transparent;
  padding: 10px;
  color: rgba(255, 255, 255, 0.65);
  border-radius: 3px;
}
.exec_email:hover {
}
.exec_email:focus {
  border: 1px solid #ffffff !important;
  border-radius: 3px;
}

.footer__bottom {
  position: relative;
  z-index: 1;
  background-color: #0d131c;
  color: rgba(255, 255, 255, 0.65);
}
</style>
