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





gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector(".scroll-container");
pageContainer.setAttribute("data-scroll-container", "");

const scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true,
  getDirection: true
});

scroller.on("scroll", function (t) {
  document.documentElement.setAttribute("data-direction", t.direction);
});



ScrollTrigger.scrollerProxy(pageContainer, {
        scrollTop(value) {
            return arguments.length ?
            scroller.scrollTo(value, 0, 0) :
            scroller.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                left: 0, 
                top: 0, 
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        // pinType: pageContainer.style.transform ? "transform" : "fixed"
    });

    // ScrollTrigger.matchMedia({
      
    //   "(min-width: 576px)": function() {
    //     // gsap.registerPlugin(ScrollTrigger);
      
    //       let slideSections = gsap.utils.toArray(".latest-track__slider--model__card");
      
    //       gsap.to(slideSections, {
    //           xPercent: -100 * (slideSections.length - 1),
    //           ease: "none",
    //           scrollTrigger: {
    //               scroller: "[data-scroll-container]",
    //               trigger: ".latest-track__slider",
    //               start: "top",
    //               pin: true,
    //               scrub: 1,
    //               // snap: 1 / (sections.length - 1),
    //               end: () => "+=" + document.querySelector(".latest-track__slider").offsetWidth,
    //               // invalidateOnRefresh: true
    //           }
    //       }); 
    //   },
    //   });

      // let horizontalSections = document.querySelectorAll(".latest-track__slider");

      // horizontalSections.forEach((horizontalSection) => {
      //   let pinWrap = horizontalSection.querySelector(".latest-track__slider--model__wrap");
      //   let pinWrapWidth = pinWrap.offsetWidth;
      //   let horizontalScrollLength = pinWrapWidth - window.innerWidth;
      //   gsap.to(pinWrap, {
      //       scrollTrigger: {
      //           scroller: "[data-scroll-container]",
      //           scrub: true,
      //           trigger: horizontalSection,
      //           pin: true,
      //           start: "top top",
      //           end: () => `+=${pinWrapWidth}`,
      //           invalidateOnRefresh: true
      //       },
      //       x: -horizontalScrollLength,
      //       ease: "none"
      //   });
      // });
      
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
      // window.addEventListener('scroll', scrollBgProgress);
      scroller.on('scroll', scrollBgProgress);
      }
  
      scroller.on('scroll', ScrollTrigger.update);
      ScrollTrigger.addEventListener('refresh', () => scroller.update());
      ScrollTrigger.refresh();

