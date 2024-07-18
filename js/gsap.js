const targets = gsap.utils.toArray(".split");

targets.forEach((target) => {
    let SplitClient = new SplitType(target, {
        type: "lines, words, chars",
    });
    let lines = SplitClient.lines;
    let words = SplitClient.words;
    let chars = SplitClient.chars;
});

gsap.set(".text h1 .char", { y: 400, opacity: 0 });
gsap.set(".text p .char", { opacity: 0, y: 20 });

setTimeout(() => {
    const tl = gsap.timeline();
    tl.to(".text h1 .char", {
        y: 0,
        opacity: 1,
        stagger: {
            amount: 4,
            from: "random",
        },
        duration: 1,
        ease: "bounce.out",
    });
    tl.to(".text p .char", {
        opacity: 1,
        y: 0,
        stagger: {
            amount: 1,
            from: "random",
        },
        duration: 3,
    });
}, 1400);


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".intro_number").forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        end: "+=1100",
        pin: true,
        scrub: 0.5,
        pinSpacing: false,
        markers: true
    });
});

gsap.utils.toArray(".skill__title").forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "-=40",
        endTrigger: "#section4",
        end: "bottom",
        pin: true,
        scrub: 0.5,
        pinSpacing: false,
        markers: true
    });
});







