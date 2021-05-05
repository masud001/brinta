<template>
    <div>
    		<!-- Footer Area-->
		<footer class="footer-area section-padding-130">
			<div class="container">
				<div class="row g-5">
					<!-- Single Widget-->
					<div class="col-12  col-sm-6 col-md-3 col-lg-3">
						<div class="single-footer-widget">
							<!-- Widget Title-->
							<h5 class="widget-title">About</h5>
							<!-- Footer Menu-->
							<div class="footer-menu">
								<ul>
									<li><a href="#">About Us</a></li>
									<li><a href="#">Corporate Sale</a></li>
									<li><a href="#">Terms &amp; Policy</a></li>
									<li><a href="#">Community</a></li>
									<li><a href="#">Help &amp; Support</a></li>
								</ul>
							</div>
						</div>
					</div>
					<!-- Single Widget-->
					<div class="col-12  col-sm-6 col-md-3 col-lg-3">
						<div class="single-footer-widget">
							<!-- Widget Title-->
							<h5 class="widget-title">Support</h5>
							<!-- Footer Menu-->
							<div class="footer-menu">
								<ul>
									<li><a href="#">Help</a></li>
									<li><a href="#">Support</a></li>
									<li><a href="#">Privacy Policy</a></li>
									<li>
										<a href="#">Term &amp; Conditions</a>
									</li>
									<li><a href="#">Help &amp; Support</a></li>
								</ul>
							</div>
						</div>
					</div>
					<!-- Single Widget-->
					<div class="col-12   col-sm-6 col-md-3 col-lg-3">
						<div class="single-footer-widget">
							<!-- Widget Title-->
							<h5 class="widget-title">Contact</h5>
							<!-- Footer Menu-->
							<div class="footer-menu">
								<ul>
									<li><a href="#">Call Center</a></li>
									<li><a href="#">Email Us</a></li>
									<li>
										<a href="#">Term &amp; Conditions</a>
									</li>
									<li><a href="#">Help Center</a></li>
									<li><a href="#">Help &amp; Support</a></li>
								</ul>
							</div>
						</div>
					</div>
					<!-- Single Widget-->
					<div class="col-12   col-sm-6 col-md-3 col-lg-3">
						<div class="single-footer-widget">
							<!-- Widget Title-->
							<h5 class="widget-title">Download Our App</h5>
							<div class="app-download-btn-group">
								<a class="mb-4 d-block" href="#"
									><img
										src="img/core-img/google-play.png"
										alt="" /></a
								><a class="d-block" href="#"
									><img
										src="img/core-img/app-store.png"
										alt=""
								/></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
		<!-- Footer Bottom-->
		
    </div>
</template>

<script>
    export default {
        name:"Footer",
    }
</script>

<style scoped>

/* Footer CSS */
.footer-area {
	position: relative;
    margin-top:50px;
	z-index: 1;
	background-color: #151e2e;
    padding-top:50px;
    padding-bottom:100px;
}
.footer-menu ul{
    margin:0;
    padding:0;
    list-style:none;
}
.single-footer-widget {
	position: relative;
	z-index: 1;
}
.single-footer-widget .widget-title {
	margin-bottom: 2rem;
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
	color: #f1c40f;
}
.single-footer-widget .footer-menu li:last-child a {
	margin-bottom: 0;
}

.app-download-btn-group a img {
	max-width: 180px;
}

.footer-bottom-area {
	position: relative;
	z-index: 1;
	background-color: #0d131c;
}
@media only screen and (max-width: 575px) {
	.footer-bottom-area .copywrite-text p {
		font-size: 14px;
	}
}
.footer-bottom-area .copywrite-text a {
	color: rgba(255, 255, 255, 0.65);
	font-size: 1rem;
	-webkit-transition-duration: 500ms;
	transition-duration: 500ms;
}
@media only screen and (max-width: 575px) {
	.footer-bottom-area .copywrite-text a {
		font-size: 14px;
	}
}
.footer-bottom-area .copywrite-text a:hover,
.footer-bottom-area .copywrite-text a:focus {
	color: #0d6efd;
}
.footer-bottom-area .social-btn-group a {
	display: inline-block;
	margin-right: 1.25rem;
	color: #ffffff;
	font-size: 1rem;
}
.footer-bottom-area .social-btn-group a:hover,
.footer-bottom-area .social-btn-group a:focus {
	color: #f1c40f;
}
.footer-bottom-area .social-btn-group a:last-child {
	margin-right: 0;
}
</style>