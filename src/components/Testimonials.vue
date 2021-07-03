<template>
  <div class="text-dark container-lg   q-pb-xl q-px-md">
    <SectionHeader :title="sectiontitle"></SectionHeader>
    <div class="slide testimonial__wrapper">
      <div class="ancestor" id="box-1">
        <div class="slide_text">
          <p id="tanya_text" v-if="!isHidden">
            “Best car wash around. Always do an amazing job, detailed work,
            price is great. I moved to plantation and still drive out to get my
            car detailed”
          </p>
          <p id="john_text" v-else>
            “I'm picky about my car washes. Executive is among the best. I'm so
            happy it's close to my home and the price is right. I'll be a
            regular.”
          </p>
          <p class="name" v-if="!isHidden">
            Ryan Yocum <span class="profession">Car Owner</span>
          </p>
          <p class="name" v-else>
            Dean Gaveau
            <span class="profession">Car Owner</span>
          </p>
        </div>

        <div class="portrait">
          <img
            class="portrait_img"
            :src="images[Math.abs(count) % images.length]"
            alt="portrait_img"
          />
        </div>

        <div class="nav">
          <!-- (isHidden = !isHidden) -->
          <span @click="prev(), (isHidden = !isHidden)">
            <img src="images/icon-prev.svg" class="nav-left" alt="prev-img" />
          </span>
          <!-- (isHidden = !isHidden) -->
          <span @click="next(), (isHidden = !isHidden)">
            <img src="images/icon-next.svg" class="nav-right" alt="next-img" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "./SectionHeader";
export default {
  name: "Testimonials",
  data: () => {
    return {
      count: 0,
      sectiontitle: "what our client says",
      slide: "style",
      isHidden: false,
      images: ["/images/image-tanya.jpg", "/images/image-john.jpg"]
    };
  },
  methods: {
    next() {
      this.count += 1;
      // console.log("increment", (this.count += 1));
    },
    prev() {
      this.count -= 1;
      // console.log("decrement", (this.count -= 1));
    }
  },
  components: {
    SectionHeader
  }
};
</script>

<style>
.testimonial__wrapper {
  padding: 50px 0px 100px 0px;
}
.ancestor {
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-rows: auto;
  place-items: center;
  position: relative;
  padding: 80px;
}

.slide {
  background-image: url("/images/pattern-bg.svg"), url("/images/pattern-bg.svg");
  background-position: center right, left bottom, left top;
  background-repeat: no-repeat;
}

.slide_text {
  background-image: url("/images/pattern-quotes.svg");
  background-position: left top;
  background-repeat: no-repeat;
  grid-column: 1 / 3;
  position: relative;
  left: 100px;
}

#john_text,
#tanya_text {
  font-size: 2rem;
  margin-bottom: 20px;
}

.name,
.profession {
  font-weight: 700;
}

.profession {
  color: hsl(240, 18%, 77%);
}

.portrait_img {
  -webkit-box-shadow: 9px 10px 32px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 10px 32px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 9px 10px 32px 0px rgba(0, 0, 0, 0.75);
}

.images {
  grid-column: 2 /4;
}

.nav {
  grid-column: 3 / 4;
  background-color: rgb(255, 255, 255);
  color: var(--dark-blue);
  padding: 1em;
  position: absolute;
  top: 86%;
  left: 11%;
  border-radius: 2rem;
  border: none;
  z-index: 30;
  cursor: pointer;
  padding: 1rem;
}

.nav-left,
.nav-right {
  padding: 0 20px 0 20px;
}

.slider-prev {
  padding-right: 1.5em;
}

.slider-next {
  padding-left: 1.5em;
}

.attribution {
  font-size: 11px;
  text-align: center;
}

.attribution a {
  color: hsl(228, 45%, 44%);
}

/* Small devices (tablets, 600px and up) */
@media only screen and (max-width: 900px) {
  .ancestor {
    display: grid;
    grid-template-columns: 2fr;
    grid-template-rows: auto auto;
    place-items: center;
    padding: 0;
  }

  .portrait_img {
    width: 200px;
    margin-top: 10px;
  }

  .slide {
    background-image: url("/images/pattern-bg.svg"),
      url("/images/pattern-curve.svg");
    background-position: top, left bottom;
    background-repeat: no-repeat;
    background-size: 300px, 100px;
  }

  .slide_text {
    background-image: url("/images/pattern-quotes.svg");
    background-position: center;
    background-repeat: no-repeat;
    grid-column: 1 / 2;
    grid-row: 3/4;
    position: relative;
    left: 0;
    text-align: center;
  }

  #john_text,
  #tanya_text {
    font-size: 2rem;
    margin-bottom: 0;
  }

  .name,
  .profession {
    font-weight: 700;
  }

  .profession {
    color: hsl(240, 18%, 77%);
  }

  .images {
    grid-column: 1 /2;
    grid-row: 1/2;
  }

  .portrait_photo {
    box-shadow: 18px 10px 36px 1px rgba(0, 0, 0, 0.75);
  }

  .nav {
    grid-column: 1 / 2;
    grid-row: 2/3;
    background-color: rgb(255, 255, 255);
    color: var(--dark-blue);
    padding: 1em;
    border-radius: 2rem;
    border: none;
    z-index: 30;
    cursor: pointer;
    padding: 1rem;
    position: relative;
    top: -26px;
    left: 0;
  }

  .nav-left,
  .nav-right {
    padding: 0 20px 0 20px;
  }

  .slider-prev {
    padding-right: 1.5em;
  }

  .slider-next {
    padding-left: 1.5em;
  }

  .attribution {
    font-size: 11px;
    text-align: center;
  }

  .attribution a {
    color: hsl(228, 45%, 44%);
  }
}

@media only screen and (max-width: 600px) {
  .ancestor {
    display: grid;
    grid-template-columns: 2fr;
    grid-template-rows: auto auto;
    place-items: center;
  }

  .slide {
    background-image: url("/images/pattern-bg.svg"),
      url("/images/pattern-curve.svg");
    background-position: center top, left bottom, center;
    background-repeat: no-repeat;
  }

  .slide_text {
    background-image: url("/images/pattern-quotes.svg");
    background-position: left top;
    background-repeat: no-repeat;
    grid-column: 1 / 2;
    grid-row: 3/4;
  }

  #john_text,
  #tanya_text {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  .name,
  .profession {
    font-weight: 700;
  }

  .profession {
    color: hsl(240, 18%, 77%);
  }

  .images {
    grid-column: 1 /2;
    grid-row: 1/2;
  }

  .portrait_photo {
    box-shadow: 18px 10px 36px 1px rgba(0, 0, 0, 0.75);
    box-shadow: -18px 10px 36px 1px rgba(0, 0, 0, 0.75);
    box-shadow: 18px 10px 36px 1px rgba(0, 0, 0, 0.75);
  }

  .nav {
    grid-column: 1 / 2;
    grid-row: 2/3;
    background-color: rgb(255, 255, 255);
    color: var(--dark-blue);
    padding: 1em;
    border-radius: 2rem;
    border: none;
    z-index: 30;
    cursor: pointer;
    padding: 1rem;
  }

  .nav-left,
  .nav-right {
    padding: 0 20px 0 20px;
  }

  .slider-prev {
    padding-right: 1.5em;
  }

  .slider-next {
    padding-left: 1.5em;
  }

  .attribution {
    font-size: 11px;
    text-align: center;
  }

  .attribution a {
    color: hsl(228, 45%, 44%);
  }
}
</style>
