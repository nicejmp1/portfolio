const targets = gsap.utils.toArray(".split");

targets.forEach((target) => {
    let SplitClient = new SplitType(target, { type: "lines, words, chars" });
    let lines = SplitClient.lines;
    let words = SplitClient.words;
    let chars = SplitClient.chars;

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
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".intro_number").forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        end: "+=1000",
        pin: true,
        scrub: 0.5,
        pinSpacing: false,
        // markers: true
    });
});

gsap.set("#section4 .two__intro .two__number h3", { x: -1000 })
gsap.to("#section4 .two__intro .two__number h3", {
    xPercent: 200,
    ease: "none",
    scrollTrigger: {
        trigger: "#section4",
        start: "-=500",
        end: "bottom top",
        scrub: true,
    }
});

const section = document.querySelector("#section4");
const topRight = section.querySelector(".topRight");

gsap.to(topRight, {
    scrollTrigger: {
        trigger: topRight,
        start: "top 5%",  // topRight의 상단이 뷰포트 상단에 도달할 때 시작
        end: () => `+=${section.offsetHeight - 280}px`,  // section4의 전체 높이만큼 스크롤
        pin: true,
        scrub: true
    },
});

const projects = document.querySelectorAll(".project");

projects.forEach(project => {
    const topProject = project.querySelectorAll(".project__title");

    topProject.forEach(title => {
        gsap.to(title, {
            scrollTrigger: {
                trigger: title,
                start: "top top",
                end: () => `+=${project.offsetHeight - 550}px`,
                pin: true,
                markers: true,
                scrub: true,
                pinSpacing: false
            }
        })
    })
})

// 요소 초기 설정 (보이지 않도록 설정)
gsap.utils.toArray(".test").forEach((text) => {
    gsap.set(text.querySelectorAll("p"), { yPercent: 100, autoAlpha: 0 });
    gsap.set(text.querySelectorAll("h2"), { xPercent: -100, autoAlpha: 0 });
});

// 스크롤 트리거를 사용하여 요소가 나타나게 설정
gsap.utils.toArray(".test").forEach((text) => {
    // p 요소 애니메이션
    gsap.to(text.querySelectorAll("p"), {
        yPercent: 0,
        autoAlpha: 1,
        duration: 3,
        ease: "circ.out",
        stagger: {
            amount: 1,
            from: "random"
        },
        scrollTrigger: {
            trigger: text,
            start: "top center",
            end: "+=500",
            // markers: true,
            scrub: 1,
        }
    });

    // h2 요소 애니메이션
    gsap.to(text.querySelectorAll("h2"), {
        xPercent: 0,
        autoAlpha: 1,
        duration: 3,
        ease: "circ.out",
        stagger: {
            amount: 1,
            from: "random"
        },
        scrollTrigger: {
            trigger: text,
            start: "top center",
            end: "+=100",
            // markers: true,
            scrub: 1
        }
    });
});

gsap.to("progress", {
    value: 100,
    ease: "none",
    scrollTrigger: { scrub: 0.3 }
})

