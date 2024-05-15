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
  const showMenu = () => {
    document.querySelector(".mobile-menu__burger").classList.toggle("active");
    document.querySelector(".menu-container__list").classList.toggle("show-menu");
    document.querySelector("body").classList.toggle("overflow-hide");
  };


  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf);


// gsap.registerPlugin(ScrollTrigger);
// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// lenis.on('scroll', ScrollTrigger.update)

// gsap.ticker.add((time)=>{
//   lenis.raf(time * 1000)
// })

// gsap.ticker.lagSmoothing(0)


// ScrollTrigger.normalizeScroll(true);

// const container = document.querySelector(".scroll-container")

// let height
// function setHeight() {
//   height = container.clientHeight
//   document.body.style.height = height + "px"
// }
// ScrollTrigger.addEventListener("refreshInit", setHeight)

// // smooth scrolling container
// gsap.to(container, {
//   y: () => -(height - document.documentElement.clientHeight),
//   ease: "none",
//   scrollTrigger: {
//     trigger: document.body,
//     start: "top top",
//     end: "bottom bottom",
//     scrub: 0.5,
//     invalidateOnRefresh: true
//   }
// })

// const sections = gsap.utils.toArray('.appear-down')

// sections.forEach(function (sec, i) {	
//   const y = sec.offsetTop - 100
//   gsap.fromTo(sec, {
//     y: 100,
//     opacity: 0,
//     scale: 0.9,
//   }, {
//     y: 0,
//     opacity: 1,
//     scale: 1,
//     scrollTrigger: {
//       trigger: sec,
//       scrub: 1,
//       start: 'top bottom',
//       end: '+=200',
//     }
//   })
// })



// ScrollTrigger.matchMedia({
      
//         "(min-width: 200px)": function() {
//           gsap.registerPlugin(ScrollTrigger);
        
//             let slideSections = gsap.utils.toArray(".latest-track__slider--model__card");
        
//             gsap.to(slideSections, {
//                 xPercent: -100 * (slideSections.length - 1),
//                 ease: "none",
//                 scrollTrigger: {
//                     // scroller: "[data-scroll-container]",
//                     trigger: ".latest-track__slider",
//                     start: "top",
//                     pin: true,
//                     scrub: true,
//                     snap: 1 / (sections.length - 1),
//                     end: () => "+=" + document.querySelector(".latest-track__slider").offsetWidth,
//                     // invalidateOnRefresh: true
//                 }
//             }); 
//         },
//         });

    const mediaQuery = window.matchMedia('(min-width: 200px)')
      if (mediaQuery.matches) {
      const bgProgress = document.querySelector('.pre-footer__overlay');
      const goalBlock = document.querySelector('.pre-footer'); 
    
      const scrollBgProgress = () => {
        
        let scrollBgDistance = ((goalBlock.getBoundingClientRect().top) + 100);
        let bgProgressPercentage =
          (scrollBgDistance /
            (goalBlock.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
      
        let val = Math.floor(bgProgressPercentage);
        bgProgress.style.opacity = val;
      
        if (val < 0) {
          bgProgress.style.opacity = '0';
        }
      };
      window.addEventListener('scroll', scrollBgProgress);
      // scroller.on('scroll', scrollBgProgress);
    }
    

    //parallax element on banner
    document.addEventListener("mousemove", parallax);
      function parallax(e) {
        document
          .querySelectorAll(".banner__object--image").forEach(function (move) {
            var movingValue = move.getAttribute("data-value");
            var x = (e.clientX * movingValue) / 150;
            var y = (e.clientY * movingValue) / 150;

            move.style.transform =
              "translateX(" + x + "px) translateY(" + y + "px)";
          });
      };

      //parallax element on banner for About page
    document.addEventListener("mousemove", parallaxAbout);
    function parallaxAbout(e) {
      document
        .querySelectorAll(".about-bn__element").forEach(function (move) {
          var movingValue = move.getAttribute("data-value");
          var x = (e.clientX * movingValue) / 70;
          var y = (e.clientY * movingValue) / 70;

          move.style.transform =
            "translateX(" + x + "px) translateY(" + y + "px)";
        });
    };
 
    //auto sliding tracks block
      new Splide('.track-splide', {
      type: 'loop',
      drag: 'free',
      // focus: 'center',
      perPage: 1,
      gap: '50px',
      pagination: false,
      // arrows: false,
      autoScroll: {
        speed: 0.7,
      },
      breakpoints: {
        1400: {
          gap: '40px',
        },
        1200: {
          gap: '35px',
        },
        1024: {
          gap: '30px',
        },
        767: {
          gap: '20px',
        },
        600: {
          gap: '15px',
        },
      },
    }).mount(window.splide.Extensions);


// const pageContainer = document.querySelector(".scroll-container");
// pageContainer.setAttribute("data-scroll-container", "");

// const scroller = new LocomotiveScroll({
//   el: pageContainer,
//   smooth: true,
//   getDirection: true
// });

// scroller.on("scroll", function (t) {
//   document.documentElement.setAttribute("data-direction", t.direction);
// });



// ScrollTrigger.scrollerProxy(pageContainer, {
//         scrollTop(value) {
//             return arguments.length ?
//             scroller.scrollTo(value, 0, 0) :
//             scroller.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//             return {
//                 left: 0, 
//                 top: 0, 
//                 width: window.innerWidth,
//                 height: window.innerHeight
//             };
//         },
//         pinType: pageContainer.style.transform ? "transform" : "fixed"
//     });

//     ScrollTrigger.matchMedia({
      
//       "(min-width: 200px)": function() {
//         // gsap.registerPlugin(ScrollTrigger);
      
//           let slideSections = gsap.utils.toArray(".latest-track__slider--model__card");
      
//           gsap.to(slideSections, {
//               xPercent: -100 * (slideSections.length - 1),
//               ease: "none",
//               scrollTrigger: {
//                   scroller: "[data-scroll-container]",
//                   trigger: ".latest-track__slider",
//                   start: "top",
//                   pin: true,
//                   scrub: 1,
//                   // snap: 1 / (sections.length - 1),
//                   end: () => "+=" + document.querySelector(".latest-track__slider").offsetWidth,
//                   // invalidateOnRefresh: true
//               }
//           }); 
//       },
//       });

//       const mediaQuery = window.matchMedia('(min-width: 200px)')
//       if (mediaQuery.matches) {
//       const bgProgress = document.querySelector('.pre-footer__overlay');
//       const goalBlock = document.querySelector('.pre-footer'); 
    
//       const scrollBgProgress = () => {
        
//         let scrollBgDistance = ((goalBlock.getBoundingClientRect().top) + 100);
//         let bgProgressPercentage =
//           (scrollBgDistance /
//             (goalBlock.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
      
//         let val = Math.floor(bgProgressPercentage);
//         bgProgress.style.opacity = val;
      
//         if (val < 0) {
//           bgProgress.style.opacity = '0';
//         }
//       };
//       // window.addEventListener('scroll', scrollBgProgress);
//       scroller.on('scroll', scrollBgProgress);
//       }
  
//       scroller.on('scroll', ScrollTrigger.update);



// ScrollTrigger.addEventListener('refresh', () => scroller.update());
// ScrollTrigger.refresh();



