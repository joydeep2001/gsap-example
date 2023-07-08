// jQuery(document).ready(function($) {
//     $('.slick.marquee').slick({
//       speed: 5000,
//       autoplay: true,
//       autoplaySpeed: 0,
//       centerMode: true,
//       cssEase: 'linear',
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       variableWidth: true,
//       infinite: true,
//       initialSlide: 1,
//       arrows: false,
//       buttons: false
//     });
//   });

// $('.orgSlider').slick({
//     vertical: true,
//     verticalSwiping: true,
//     slidesToShow: 1,
//     slidesToScroll: 1
// });
// $(document).ready(function() {
//     $('.orgSlider').slick({
//       slidesToShow: 3,
//       slidesToScroll: 1,
//         arrows: false,
//         dots: true,
//         vertical: true,
//         verticalSwiping: true,
//         centerMode: true,
//     });
//   });


const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    const target = document.querySelector(tab.dataset.tabTarget);
    target.classList.add("active");
  });
});


function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();


// $('.innovSlider').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.innoSliderW'
// });
// $('.innoSliderW').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.innovSlider',
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true
// });


$('.marSlider1').slick({
  centerMode: true,
  centerPadding: '100px',
  speed: 8000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: false,
  cssEase: 'linear',
  draggable:false,
  focusOnSelect:false,
  pauseOnFocus:false,
  pauseOnHover:false,
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  responsive: [
  {
      breakpoint: 1101,
      settings: {
          rows: 1,
          slidesToShow: 3,
      }
  },
  {
      breakpoint: 992,
      settings: {
          rows: 1,
          slidesToShow: 2,
      }
  },
  {
      breakpoint: 641,
      settings: {
          rows: 2,
          slidesToShow: 1,
      }
  }
  ]
});

$('.marSlider2').slick({
  centerMode: true,
  // centerPadding: '60px',
  speed: 8000,
  rtl: true,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: false,
  cssEase: 'linear',
  draggable:false,
  focusOnSelect:false,
  pauseOnFocus:false,
  pauseOnHover:false,
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  responsive: [
  {
      breakpoint: 1101,
      settings: {
          rows: 1,
          slidesToShow: 3,
      }
  },
  {
      breakpoint: 992,
      settings: {
          rows: 1,
          slidesToShow: 2,
      }
  },
  {
      breakpoint: 641,
      settings: {
          rows: 2,
          slidesToShow: 1,
      }
  }
  ]
});


// $('.marqee1').slick({
//   centerMode: true,
//   centerPadding: '60px',
//   speed: 8000,
//   autoplay: true,
//   autoplaySpeed: 0,
//   centerMode: false,
//   cssEase: 'linear',
//   draggable:false,
//   focusOnSelect:false,
//   pauseOnFocus:false,
//   pauseOnHover:false,
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   infinite: true,
//   initialSlide: 1,
//   arrows: false,
//   buttons: false,
//   responsive: [
//       {
//           breakpoint: 1101,
//           settings: {
//               rows: 1,
//               slidesToShow: 3,
//           }
//       },
//       {
//           breakpoint: 992,
//           settings: {
//               rows: 1,
//               slidesToShow: 2,
//           }
//       },
//       {
//           breakpoint: 641,
//           settings: {
//               rows: 2,
//               slidesToShow: 1,
//           }
//       }
//   ]
// });



// 28-06-23

$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
     $('header').addClass('fixedHeader');
  } else {
     $('header').removeClass('fixedHeader');
  }
});

var typing=new Typed(".bannerTyping", {
  strings: ["", "Future", "Digital", "AI"],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});



// // Get all sections that have an ID defined
// const sections = document.querySelectorAll(".eachinnoSlider[id]");

// // Add an event listener listening for scroll
// window.addEventListener("scroll", navHighlighter);

// function navHighlighter() {
  
//   // Get current scroll position
//   let scrollY = sections.scrollY;
  
//   // Now we loop through sections to get height, top and ID values for each
//   sections.forEach(current => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     sectionId = current.getAttribute("id");
    
//     /*
//     - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
//     - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
//     */
//     if (
//       scrollY > sectionTop &&
//       scrollY <= sectionTop + sectionHeight
//     ){
//       document.querySelector(".eachNavS[href*=" + sectionId + "]").classList.add("active");
//     } else {
//       document.querySelector(".eachNavS[href*=" + sectionId + "]").classList.remove("active");
//     }
//   });
// }


