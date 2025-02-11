//courses
var swiper = new Swiper(".slider-wrapper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    centerSlide:'true',
    fade:'true',
    grabCursor:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    breakpoints:{
  0:{
      slidesPerview:1,
  },
  620:{
      slidesPerview:2,
  },
  1024:{
      slidesPerview:3,
  },
},
  });

  //staffs
  ScrollReveal().reveal(".staff-card", {
    duration: '1000',
  interval: '500',
  easing: 'ease-in',
  origin:"bottom",
  
  });
  //contact
  function change(){
    document.getElementById("msg").style.display='none';
    document.getElementById("form").style.display='block';
    document.getElementById("contact").style.display='none';
    document.getElementById("hidden").style.display='block';
}
function change1(){
    document.getElementById("msg").style.display='block';
    document.getElementById("form").style.display='none';
    document.getElementById("contact").style.display='block';
    document.getElementById("hidden").style.display='none';
}
//register
function account(){
document.getElementById("signup").style.display='none';
document.getElementById("login").style.display='block'


}
function account1(){
    document.getElementById("signup").style.display='block';
    document.getElementById("login").style.display='none'
    
    
    }
//about
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
ScrollReveal().reveal("#about .p1", {
  ...scrollRevealOption,
  easing: 'ease-in',
  delay: 400,
});
ScrollReveal().reveal("#about .p2", {
  ...scrollRevealOption,
  easing: 'ease-in',
  delay: 700,
});
ScrollReveal().reveal("#about .p3", {
  ...scrollRevealOption,
  easing: 'ease-in',
  delay: 1000,
});
