// document.querySelectorAll(".eachNavS").forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//       gsap.to(window, {duration: 1, scrollTo:{y:"#section" + (index + 1), offsetY:70}});
//     });
//   });

var secLength, contentWrapper, headlines, imagesPart, totalLength, texts;
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger),
  767 < window.innerWidth &&
    $(".innoSliderWrap").length &&
    ((secLength = $(".innoSliderNav .eachNavS").length),
    (contentWrapper = $(".innoSliderWrap .eachinnoSlider")),
    (headlines = gsap.utils.toArray(contentWrapper)),
    (imagesPart = $(".innoSliderNav")),
    (totalLength = 100 * secLength),
    ScrollTrigger.create({
      trigger: ".InnovSec .container",
      scrub: !0,
      pin: !0,
      start: "top top",
      end: "+=" + totalLength + "%",
    }),
    gsap.set(".eachinnoSlider", {
      zIndex: (t, e, a) => a.length - t,
    }),
    (texts = gsap.utils.toArray(".eachinnoSlider")).forEach((e, t) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: imagesPart,
            id: "heading-st-" + t,
            start: () => "top -" + window.innerHeight * t,
            end: () => "+=" + window.innerHeight,
            scrub: !0,
            toggleActions: "play none reverse none",
            invalidateOnRefresh: !0,
            onEnter: function () {
              var t = $(e).data("id");
              $(imagesPart)
                .find(".eachNavS")
                .removeClass("active")
                .removeClass("nxtactive"),
                $(imagesPart)
                  .find(".eachNavS[data-id=" + t + "]")
                  .addClass("active");
            },
            onEnterBack: function () {
              var t = $(e).data("id");
              $(imagesPart)
                .find(".eachNavS")
                .removeClass("active")
                .removeClass("nxtactive"),
                $(imagesPart)
                  .find(".eachNavS[data-id=" + t + "]")
                  .addClass("active");
            },
          },
        })
        .fromTo(
          e,
          {
            y: () => "100%",
            opacity: () => 0,
          },
          {
            duration: 0.33,
            y: () => "5%",
            opacity: () => 1,
          }
        )
        .to(
          e,
          {
            duration: 0.33,
            y: () => "0%",
            opacity: () => 0,
          },
          0.66
        );
    }),
    $("a.eachNavS").on("click", function (t) {
      t.preventDefault();
      t = $(this).attr("data-id");
      console.log(ScrollTrigger.getById("heading-st-" + (t - 1)).end),
        gsap.to(window, {
          scrollTo: {
            y: ScrollTrigger.getById("heading-st-" + (t - 1)).end - 350,
            autoKill: !1,
          },
          duration: 1,
        });
    })),
  window.innerWidth < 768 &&
    $(".innoSliderWrap").length &&
    ((secLength = $(".innoSliderNav .eachNavS").length),
    (contentWrapper = $(".innoSliderWrap .eachinnoSlider")),
    (headlines = gsap.utils.toArray(contentWrapper)),
    (imagesPart = $(".innoSliderNav")),
    (totalLength = 100 * secLength - 1),
    ScrollTrigger.create({
      trigger: ".InnovSec .container",
      scrub: !0,
      pin: !0,
      start: "top top",
      end: "+=" + totalLength + "%",
    }),
    gsap.set(".eachinnoSlider", {
      zIndex: (t, e, a) => a.length - t,
    }),
    (texts = gsap.utils.toArray(".eachinnoSlider")).forEach((e, t) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: imagesPart,
            id: "heading-st-" + t,
            start: () => "top -" + window.innerHeight * t,
            end: () => "+=" + window.innerHeight,
            scrub: !0,
            toggleActions: "play none reverse none",
            invalidateOnRefresh: !0,
            onEnter: function () {
              var t = $(e).data("id");
              $(imagesPart)
                .find(".eachNavS")
                .removeClass("active")
                .removeClass("nxtactive"),
                $(imagesPart)
                  .find(".eachNavS[data-id=" + t + "]")
                  .addClass("active");
            },
            onEnterBack: function () {
              var t = $(e).data("id");
              $(imagesPart)
                .find(".eachNavS")
                .removeClass("active")
                .removeClass("nxtactive"),
                $(imagesPart)
                  .find(".eachNavS[data-id=" + t + "]")
                  .addClass("active");
            },
          },
        })
        .from(e, {
          x: () => "60%",
          opacity: () => 0,
        })
        .to(e, {
          x: () => "0%",
          opacity: () => 1,
        })
        .to(
          e,
          {
            x: () => "-60%",
            opacity: () => 0,
          },
          2
        );
    }),
    $("a.eachNavS").on("click", function (t) {
      t.preventDefault();
      t = $(this).attr("data-id");
      console.log(ScrollTrigger.getById("heading-st-" + (t - 1)).end),
        gsap.to(window, {
          scrollTo: {
            y: ScrollTrigger.getById("heading-st-" + (t - 1)).end - 350,
            autoKill: !1,
          },
          duration: 1,
        });
    })),
  $(".tooltip").fadeOut(),
  $(".eachNavS").on({
    mouseenter: function () {
      $(this).find(".tooltip").fadeIn();
    },
    mouseleave: function () {
      $(this).find(".tooltip").fadeOut();
    },
  });
