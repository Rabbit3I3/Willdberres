var mySwiper = new Swiper('.swiper-container', {
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.slaider-button-next',
      prevEl: '.slaider-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });