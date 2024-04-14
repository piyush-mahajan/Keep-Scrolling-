gsap.registerPlugin(ScrollTrigger);
gsap.set(".el-1", { height: "0%" });
gsap.set(".el-2", { filter: "blur(10px)" });
gsap.to(".section-stick", {
  ease: "easeInOut",
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".el-1",
    start: "center center",
    end: "center center",
    toggleActions: "play none none reset",
    markers: false,
    scrub: false,
  },
});
gsap.to(".eye-content", {
  ease: "none",
  scrollTrigger: {
    trigger: ".eye-content",
    start: "center center",
    end: "+=700",
    markers: false,
    pin: true,
    pinSpacing: true,
    scrub: 1,
  },
});
gsap.to(".el-1", {
  height: "100%",
  ease: "none",
  scrollTrigger: {
    trigger: ".el-1",
    start: "center center",
    end: "+=500",
    markers: false,
    scrub: 0.5,
  },
});
gsap.to(".el-2", {
  filter: "blur(0px)",
  ease: "none",
  scrollTrigger: {
    trigger: ".eye-content",
    start: "center center",
    end: "+=500",
    markers: false,
    scrub: 0.5,
  },
});
