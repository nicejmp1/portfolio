const lenis = new Lenis();

lenis.on("scroll", (e) => {
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

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

const ani1 = gsap.timeline();
ani1.to("#section2 .about1 div .img .front", { opacity: 0, duration: 0.1, ease: "power3.out" });

ScrollTrigger.create({
    animation: ani1,
    trigger: "#section2 .about1 div .img .front",
    start: "top center",
    end: "bottom 40%",
    scrub: true,
    // markers: true,
});


gsap.set("#section3 .two__intro .two__number h3", { x: -1200 })
gsap.to("#section3 .two__intro .two__number h3", {
    xPercent: 200,
    ease: "none",
    scrollTrigger: {
        trigger: "#section3",
        start: "-=500",
        end: "bottom top",
        scrub: true,
    }
});

const section = document.querySelector("#section3");
const topRight = section.querySelector(".topRight");

gsap.to(topRight, {
    scrollTrigger: {
        trigger: topRight,
        start: "top 5%",  // topRight의 상단이 뷰포트 상단에 도달할 때 시작
        end: () => `+=${section.offsetHeight - 300}px`,  // section4의 전체 높이만큼 스크롤
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
                end: () => `+=${project.offsetHeight - window.innerHeight * 0.8}px`,
                pin: true,
                // markers: true,
                scrub: 3,
                pinSpacing: false
            }
        })
    })
})

const skilldata = document.querySelectorAll(".gauge");

skilldata.forEach(skill => {
    const finalPercent = skill.dataset.percent;

    gsap.fromTo(skill, {
        textContent: "0%"
    }, {
        textContent: finalPercent + "%",
        snap: "textContent",
        scrollTrigger: {
            trigger: skill.parentNode,
            start: "top bottom-=20%",
            end: "bottom top",
            toggleActions: "play none none none",
        },
        ease: "none",
        duration: 2
    });
});

gsap.utils.toArray("#section4 .project__img").forEach((img) => {
    ScrollTrigger.create({
        trigger: img,
        start: "top 80%",
        end: "bottom",
        scrub: 3,
        // markers: true,
        onUpdate: (self) => {
            gsap.to("#section4 .p1", {
                rotation: self.progress * 30,
                x: self.progress * 150,
                y: -self.progress * 1000,
                overwrite: 'auto'
            })

            gsap.to("#section4 .p2", {
                rotation: self.progress * -30,
                x: self.progress * -150,
                y: -self.progress * 1000,
                overwrite: 'auto'
            })

            gsap.to("#section4 .p3", {
                rotation: self.progress * 30,
                x: self.progress * 150,
                y: -self.progress * 1000,
                overwrite: 'auto'
            })
            gsap.to("#section4 .p4", {
                rotation: self.progress * -30,
                x: self.progress * -150,
                y: -self.progress * 1000,
                overwrite: 'auto'
            })
        }
    })
})

gsap.utils.toArray("#section5 .project__img").forEach((img) => {
    ScrollTrigger.create({
        trigger: img,
        start: "top 70%",
        end: "bottom",
        scrub: 3,
        // markers: true,
        onUpdate: (self) => {
            gsap.to("#section5 .p1", {
                rotation: self.progress * 30,
                x: self.progress * 150,
                y: -self.progress * 1000,
                overwrite: 'auto'
            })

            gsap.to("#section5 .p2", {
                rotation: self.progress * -30,
                x: self.progress * -150,
                y: -self.progress * 1000,
                overwrite: 'auto'
            })

            gsap.to("#section5 .p3", {
                rotation: self.progress * 30,
                x: self.progress * 150,
                y: -self.progress * 1000,
                overwrite: 'auto'
            })

            gsap.to("#section5 .p4", {
                rotation: self.progress * -30,
                x: self.progress * -150,
                y: -self.progress * 1000,
                overwrite: 'auto'
            })
        }
    })
})


gsap.utils.toArray("#section6 .project__img").forEach((img) => {
    ScrollTrigger.create({
        trigger: img,
        start: "top 80%",
        end: "bottom",
        scrub: 3,
        // markers: true,
        onUpdate: (self) => {
            gsap.to("#section6 .p1", {
                rotation: self.progress * 30,
                x: self.progress * 150,
                y: -self.progress * 1000,
                overwrite: 'auto'
            })

            gsap.to("#section6 .p2", {
                rotation: self.progress * -30,
                x: self.progress * -150,
                y: -self.progress * 1000,
                overwrite: 'auto'
            })

            gsap.to("#section6 .p3", {
                rotation: self.progress * 30,
                x: self.progress * 150,
                y: -self.progress * 1000,
                overwrite: 'auto'
            })
        }
    })
})

gsap.utils.toArray("#section7 .project__img").forEach((img) => {
    ScrollTrigger.create({
        trigger: img,
        start: "top 70%",
        end: "bottom",
        scrub: 3,
        // markers: true,
        onUpdate: (self) => {
            gsap.to("#section7 .p1", {
                rotation: self.progress * 30,
                x: self.progress * 150,
                y: -self.progress * 1000,
                overwrite: 'auto'
            })

            gsap.to("#section7 .p2", {
                rotation: self.progress * -32,
                x: self.progress * -150,
                y: -self.progress * 1000,
                overwrite: 'auto'
            })

            gsap.to("#section7 .p3", {
                rotation: self.progress * 34,
                x: self.progress * 150,
                y: -self.progress * 1000,
                overwrite: 'auto'
            })
            gsap.to("#section7 .p4", {
                rotation: self.progress * -36,
                x: self.progress * -150,
                y: -self.progress * 1000,
                overwrite: 'auto'
            })
            gsap.to("#section7 .p5", {
                rotation: self.progress * 38,
                x: self.progress * 150,
                y: -self.progress * 1000,
                overwrite: 'auto'
            })
            gsap.to("#section7 .p6", {
                rotation: self.progress * -40,
                x: self.progress * -150,
                y: -self.progress * 1000,
                overwrite: 'auto'
            })
        }
    })
})



gsap.to("progress", {
    value: 100,
    ease: "none",
    scrollTrigger: { scrub: 0.3 }
})

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".snapping",
        pin: true,
        scrub: true,
        // snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".snapping").offsetWidth
    }
});




