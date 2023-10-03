var mySwiper = new Swiper('#property-slider .swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView:1,
    spaceBetween:30,
    centeredSlide:true,
    breakpoints:{
      640:{
        slidesPerView:1,
        spaceBetween:10,
      },
      768:{
        slidesPerView:2,
        spaceBetween:20,
      },
      1024:{
        slidesPerView:3,
        spaceBetween:30,
      },
    }
  });
  var mySwiper = new Swiper('#testimonial-slider .swiper-container', {
    loop: true
    
  });
  var mySwiper =new Swiper('#card-section .swiper-container',{
    loop:true,
    slidesPerView:2,
    spaceBetween:30,
    centeredSlide:true,
    breakpoints:{
      640:{
        slidesPerView:3,
        spaceBetween:10,
      },
      768:{
        slidesPerView:5,
        spaceBetween:20,
      },
      1024:{
        slidesPerView:6,
        spaceBetween:30,
      },
    }
  });