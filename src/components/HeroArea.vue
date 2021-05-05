<template>
    <div class="">
    <!-- Welcome Area-->
    <section class="bg-color hero-section welcome-area ">
    <!-- Circle Shape Animation-->
      <div class="circle-shape-animation">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
      </div>

		<div class="hero-background-bottom-shape">
			<img src="hero-area/mymen-bg.png"/>
		</div>

		<div class="container-md full-height">
			<div class="row content__row justify-between items-center">
			<div class="col-12 col-md-6 col-lg-5">
					<!-- Content-->
            <div class="welcome-text-area">
              <h2 class="qm-0"> We know What you want from a  <span class="">Car wash </span> </h2>
              <h5 class=""> We are equipped with the best washing equipments that will make your car pretty in just a few minutes.</h5>
              <div class="button-group d-flex align-items-center mt-30 " >
				  <q-btn class="btn__primary" label="learn more" />
				  
				  
				  </div>
            </div>
			</div>
				<div class="col-12 col-md-6 ">

					<!-- Welcome Image-->
            <div class="welcome-area-thumb text-center">
				<img src="/hero-area/coming-soon.png" alt=""></div>
				</div>
			</div>
		</div>

	</section>
    </div>
</template>

<script setup>
export default{
    name:"HeroArea",
    data(){
        return{}

    }
}
</script>

<style  scoped>
.bg-color{
	background-color:#FAF5FF;
}
.content__row{
        justify-content: center;
    display: flex;
    position: relative;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
}
.hero-section.welcome-area {
    height: 800px;
    overflow: hidden;
}
.welcome-area{
	position:relative;
}
.hero-section.welcome-area .hero-background-bottom-shape img {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
}
.welcome-area-thumb img{
	width:100%;
}
.welcome-text-area h2 {
    font-size: 4rem;
    margin-bottom: 2rem;
    font-weight: 700;
    line-height:1.2;
}
.welcome-text-area h2 span{
      color: rgb(135, 40, 226);
  color: linear-gradient(
    90deg,
    rgba(135, 40, 226, 1) 0%,
    rgba(84, 6, 224, 1) 100%
  );
}
.hero-section.welcome-area .welcome-area-thumb::after {
    position: absolute;
    width: 180px;
    height: 150px;
    background-image: url(/hero-area/dot2.png);
    content: "";
    right: 0;
    bottom: 50px;
    z-index: -5;
    opacity: 0.3;
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
    width: 30px;
    height: 30px;
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

@-webkit-keyframes circle-zoom-in-out {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1); }
  50% {
    -webkit-transform: scale(1.5);
            transform: scale(1.5); } }

@keyframes circle-zoom-in-out {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1); }
  50% {
    -webkit-transform: scale(1.5);
            transform: scale(1.5); } }
</style>