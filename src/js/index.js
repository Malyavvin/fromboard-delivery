import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  autoHeight: true, 
  slidesPerView: 1,
  centeredSlides: true,
  breakpoints: {
        1023: {
            slidesPerView: 2,
            centeredSlides: false,
        },
    },
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let toggle = document.querySelector('#menu-toggle');
let burger__el = document.querySelectorAll('.burger__el');




toggle.addEventListener('click', ()=>{
  
  if (toggle.checked) {

    for (var i = 0; i < burger__el.length; i++) {
      burger__el[i].classList.add('active');
    }
  document.body.style.overflow = 'hidden';
  } 
  else {
     for (var i = 0; i < burger__el.length; i++) {
        burger__el[i].classList.remove('active');
      }
    document.body.style.overflow = 'scroll';
  }
  
  })
  