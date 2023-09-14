var swiper = new Swiper(".mySwiper", {
    loop:true,    
    autoplay: true,
    autoplay: {
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },  
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});
export default{ 
  swiper
}