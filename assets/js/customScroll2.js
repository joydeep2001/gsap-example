gsap.registerPlugin(ScrollTrigger);
const innoSliderNav = $(".innoSliderNav");
const timelineInnov = gsap.timeline({
  scrollTrigger: {
    trigger: ".InnovSec",
    start: "top -10%",
    end: "top -600%",
    markers: true,
    scrub: 2,
    pin: true,
  },
});

gsap.utils.toArray(".eachinnoSlider").forEach((ref, index) => {
  if (index === 0)
    timelineInnov
      .to(ref, {
        y: "0%",
        opacity: 1,
        duration: 3,
      })
      .to(ref, {
        y: "-100%",
        opacity: 0,
        duration: 3,
      });
  else
    timelineInnov
      .to(ref, {
        y: "100%",
        opacity: 0,
        duration: 0,
      })
      .to(ref, {
        y: "-.5%",
        opacity: 1,
        duration: 2,
      })
      .to(ref, {
        y: "-45%",
        opacity: 1,
        duration: 3,
      })
      .to(ref, {
        y: "-100%",
        opacity: 0,
        duration: 3,
      });
});
