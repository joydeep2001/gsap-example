gsap.registerPlugin(ScrollTrigger);
let scrollCount = 0;

const leftColumn = document.querySelector(".left");
const rightColumn = document.querySelector(".right");
var current = "blue";

window.addEventListener("keyup", (e) => {
  if (e.key == "ArrowUp") {
    //up
    prev();
  }
  if (e.key == "ArrowDown") {
    //down

    next();
  }
});

// document.addEventListener("mousewheel", scroll);
// document.addEventListener("DOMMouseScroll", scroll);

var w;
function scroll(e) {
  clearTimeout(w);
  //e.preventDefault();
  var e = window.event || e;
  w = setTimeout(() => {
    w = undefined;
    if (e.wheelDelta < 0 || e.detail > 0) {
      next();
    }
    if (e.wheelDelta > 0 || e.detail < 0) {
      prev();
    }
  }, 100);
}

function next() {
  let r, l;

  switch (current) {
    // case "gold": {
    //   //to show blue and start over
    //   l = "0";
    //   r = "-200";
    //   current = "blue";

    //   break;
    // }
    case "blue": {
      //to show red
      l = "-100";
      r = "-100";
      current = "red";
      break;
    }
    case "red": {
      //to show gold
      l = "-200";
      r = "0";
      current = "gold";
      break;
    }
  }

  leftColumn.style.transform = `translateY(${l}vh)`;
  rightColumn.style.transform = `translateY(${r}vh)`;
}
function prev() {
  let r, l;

  switch (current) {
    case "red": {
      //to show blue and start over
      l = "0";
      r = "-200";
      current = "blue";
      break;
    }
    // case "blue": {
    //   //to show gold
    //   l = "-200";
    //   r = "0";
    //   current = "gold";
    //   break;
    // }
    case "gold": {
      //to show red
      l = "-100";
      r = "-100";
      current = "red";
      break;
    }
  }

  leftColumn.style.transform = `translateY(${l}vh)`;
  rightColumn.style.transform = `translateY(${r}vh)`;
}
function isScrollUp(currentScroll) {
  console.log(currentScroll);
  if (currentScroll > lastScroll + 50) {
    lastScroll = currentScroll;
    return true;
  }
  return false;
}
function isScrollDown() {}
const timeline1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".aos",
    start: "top top",
    end: "top -100%",
    markers: true,
    pin: true,

    onUpdate: function (self) {},
    onEnter: function () {
      document.addEventListener("mousewheel", scroll);
      document.addEventListener("DOMMouseScroll", scroll);
    },
    onLeave: function () {
      document.removeEventListener("mousewheel", scroll);
      document.removeEventListener("DOMMouseScroll", scroll);
    },
    onLeaveBack: function () {
      document.removeEventListener("mousewheel", scroll);
      document.removeEventListener("DOMMouseScroll", scroll);
    },
    onEnterBack: function () {
      document.addEventListener("mousewheel", scroll);
      document.addEventListener("DOMMouseScroll", scroll);
    },
  },
});

// timeline1
//   .addLabel("l-step1")
//   .to(
//     ".left",
//     {
//       y: "-100vh",
//       duration: 1,
//     },
//     1
//   )
//   .addLabel("l-step2")
//   .to(
//     ".left",
//     {
//       y: "-200vh",
//       duration: 2,
//     },
//     3
//   );
// timeline1
//   .addLabel("r-step1")
//   .to(
//     ".right",
//     {
//       y: "-100vh",
//       duration: 1,
//     },
//     1
//   )
//   .addLabel("r-step1")
//   .to(
//     ".right",
//     {
//       y: "0vh",
//       duration: 2,
//     },
//     3
//   );

// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: ".left",
//       start: "top top",
//       // markers: true,
//       pin: true,
//     },
//   })
//   .to(".left", {
//     y: "0%",
//     duration: 1,
//   })
//   .to(".left", {
//     y: "-33.3333%",
//     duration: 1,
//   });

// gsap.utils.toArray(".content").forEach((ref, index) => {
//   if (index === 0)
//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: ref,
//           start: "top top",
//           end: "top -100%",
//           // markers: true,
//           toggleActions: "restart none restart reverse",
//         },
//         onEnter: function () {
//           console.log(ref.offsetHeight);
//         },
//       })
//       .to(ref, {
//         marginTop: 0,
//         duration: 0,
//       })
//       .to(ref, {
//         marginTop: ref.offsetHeight * -1,
//         duration: 1,
//       });
//   else {
//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: ref,
//           start: "top top",
//           end: "top -100%",
//           // markers: true,
//           toggleActions: "restart none restart reverse",

//           onEnter: function () {
//             console.log(ref.offsetHeight);
//           },
//         },
//       })
//       .to(ref, {
//         marginTop: 0,
//         duration: 0,
//       })
//       .to(ref, {
//         marginTop: ref.offsetHeight * -1,
//         duration: 1,
//       });
//   }
// });

// gsap.utils.toArray(".pic").forEach((ref, index) => {
//   if (index === 0)
//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: ".pic.first",
//           start: "top top",

//           markers: true,
//           toggleActions: "restart none restart reverse",
//         },
//         onEnter: function () {
//           console.log(ref.offsetHeight);
//         },
//       })
//       .to(".pic.third", {
//         marginTop: 0,
//         duration: 0,
//       })
//       .to(".pic.third", {
//         marginTop: ref.offsetHeight,
//         duration: 1,
//       });
//   else {
//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: ".pic.first",
//           start: "top top",
//           end: "top -100%",
//           markers: true,
//           toggleActions: "restart none restart reverse",

//           onEnter: function () {
//             console.log(ref.offsetHeight);
//           },
//         },
//       })
//       .to(".pic.third", {
//         marginTop: 0,
//         duration: 0,
//       })
//       .to(".pic.third", {
//         marginBottom: ref.offsetHeight * -1,
//         duration: 1,
//       });
//   }
// });
