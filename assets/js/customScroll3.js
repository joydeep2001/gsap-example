gsap.registerPlugin(ScrollTrigger);
const timeline1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".aos",
    start: "top top",
    end: "top -100%",
    markers: true,
    pin: true,
    paused: true,
    scrub: true,
    onEnter: function () {
      //   document.addEventListener("scroll", scroll);
    },
    onLeave: function () {
      // document.removeEventListener("scroll", scroll);
    },
    onLeaveBack: function () {
      //   document.removeEventListener("scroll", scroll);
    },
    onEnterBack: function () {
      // document.addEventListener("scroll", scroll);
    },
  },
});

const leftY = ["0vh", "100vh", "200vh"];
const rightY = ["-200vh", "100vh", "0vh"];
let currPos = 0;
function scroll(position) {}

timeline1

  .to(
    ".left",
    {
      y: "-100vh",
      duration: 1,
    },
    1
  )
  .to(
    ".left",
    {
      y: "-200vh",
      duration: 2,
    },
    3
  );
timeline1

  .to(
    ".right",
    {
      y: "-100vh",
      duration: 1,
    },
    1
  )
  .to(
    ".right",
    {
      y: "0vh",
      duration: 2,
    },
    3
  );

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
