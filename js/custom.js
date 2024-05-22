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


