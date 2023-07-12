gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const innoSliderNav = $(".innoSliderNav");
const timelineInnov = gsap.timeline({
  scrollTrigger: {
    trigger: ".InnovSec",
    start: "top -10%",
    end: "top -600%",
    // markers: true,
    scrub: 1,
    pin: true,
  },
});

document.querySelectorAll(".eachinnoSlider").forEach((slider, index) => {
  console.log(slider.style);
  slider.style.top = `${index * 100}%`;
  slider.style.left = 0;
});
const navs = document.querySelectorAll(".eachNavS");

gsap.utils.toArray(".eachinnoSlider").forEach((ref, index) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ref,
        start: "top 90%",
        end: "top -5%",
        // markers: true,
        scrub: 2,
        pin: true,
        onEnter: function () {
          let index = parseInt(ref.dataset.id) - 1;
          navs[index].classList.add("active");
        },
        onLeave: function () {
          let index = parseInt(ref.dataset.id) - 1;
          navs[index].classList.remove("active");
        },
        onEnterBack: function () {
          let index = parseInt(ref.dataset.id) - 1;
          navs[index].classList.add("active");
        },
        onLeaveBack: function () {
          let index = parseInt(ref.dataset.id) - 1;
          navs[index].classList.remove("active");
        },
      },
    })
    .to(ref, {
      y: "100%",
      opacity: 0,
      duration: 0,
    })
    .to(ref, {
      y: "-50%",
      opacity: 1,
      duration: 2,
    })
    .to(ref, {
      y: "-.5%",
      opacity: 1,
      duration: 2,
    })
    .to(ref, {
      y: "-100%",
      opacity: 0,
      duration: 2,
    });
});
