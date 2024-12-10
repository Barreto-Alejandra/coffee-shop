import "../css/style.sass";
import "../css/main.scss";

// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";


// functions
class Carousel {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);

    if (this.container) {
      this.initSwiper();
    } else {
      console.warn(`Swiper container "${containerSelector}" not found.`);
    }
  }

  initSwiper() {
    this.swiper = new Swiper(this.container, {
      effect: "fade", 
      slidesPerView: 1, 
      loop: true, 
      autoplay: {
        delay: 3500, 
        disableOnInteraction: false, 
      },
    });
  }
}


// Run apps
window.addEventListener("DOMContentLoaded", (e) => {
  new Carousel('.js-swiper');
});