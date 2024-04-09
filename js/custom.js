window.onscroll=function(){
    navFix();
  }
  navbar = document.getElementById('nav_top');
  function navFix(){
    if (window.pageYOffset > 70){
      navbar.classList.add('fixed')
    }
    else{
      navbar.classList.remove('fixed')
    }
  };

  document.querySelector(".mobile-menu__burger").addEventListener("click", () => {
    showMenu();
  });




const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
})

// gsap.registerPlugin(ScrollTrigger)


// scroller.on('scroll', ScrollTrigger.update)

// ScrollTrigger.scrollerProxy(
//     '.loco-container', {
//         scrollTop(value) {
//             return arguments.length ?
//             scroller.scrollTo(value, 0, 0) :
//             scroller.scroll.instance.scroll.y
//         },
//         getBoundingClientRect() {
//             return {
//                 left: 0, top: 0, 
//                 width: window.innerWidth,
//                 height: window.innerHeight
//             }
//         }
//     }
// )

// ScrollTrigger.create({
//     trigger: '.image-mask',
//     scroller: '.loco-container',
//     start: 'top+=30% 50%',
//     end: 'bottom-=40% 50%',
//     animation: gsap.to('.image-mask', {backgroundSize: '120%'}),
//     scrub: 2,
//     // markers: true
// })


// ScrollTrigger.addEventListener('refresh', () => scroller.update())


// ScrollTrigger.refresh()


const showMenu = () => {
  document.querySelector(".mobile-menu__burger").classList.toggle("active");
  document.querySelector(".menu-container").classList.toggle("show-menu");
  document.querySelector("body").classList.toggle("overflow-hide");
};