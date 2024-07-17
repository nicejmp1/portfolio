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
        end: "+=800",
        pin: true,
        scrub: 0.5,
        pinSpacing: false,
        markers: true
    });
});

gsap.utils.toArray(".skill__title").forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "-=30",
        endTrigger: "#section4",
        end: "bottom",
        pin: true,
        scrub: 0.5,
        pinSpacing: false,
        markers: true
    });
});


// GSAP 타임라인 초기화
const ani7 = gsap.timeline({ ease: "power2.out" }); // 여기에 원하는 ease 옵션을 추가

// ".text__info" 내의 특정 요소들에 대해 애니메이션 적용
[".left .tl", ".right p .t1", ".right p .t2", ".right p .t3", ".right p .t4", ".right .img.t5"].forEach(selector => {
    ani7.from(selector, { autoAlpha: 0, duration: 1, y: 50 });
});

// ScrollTrigger 설정
gsap.utils.toArray(".text__info").forEach((panel, index) => {
    ScrollTrigger.create({
        animation: ani7,
        trigger: panel,
        start: "top top",
        end: "+=1200",
        pin: true,
        scrub: 0.5,
        pinSpacing: false,
        markers: true
    });
});




