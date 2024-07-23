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
        end: () => "+=" + document.querySelector(".bg").offsetHeight,
        pin: true,
        scrub: 1,
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
                end: () => `+=${project.offsetHeight - 550}px`,
                pin: true,
                markers: true,
                scrub: 3,
                pinSpacing: false
            }
        })
    })
})

gsap.to("progress", {
    value: 100,
    ease: "none",
    scrollTrigger: { scrub: 0.3 }
})

function changeImage(newSrc) {
    document.querySelector(".avata").src = newSrc;
}

gsap.utils.toArray(".img").forEach((img) => {
    ScrollTrigger.create({
        trigger: img,
        start: "top center",
        markers: true,
        end: () => "+=" + document.querySelector(".img").offsetHeight,
        onEnter: () => changeImage("../assets/img/face_2.jpg"),
        onEnterBack: () => changeImage("../assets/img/face_1.jpg")
    })
})

// section5 애니메이션
gsap.set("#section5 .project__img", { y: 400 })

gsap.utils.toArray("#section5 .project__img").forEach((img) => {
    ScrollTrigger.create({
        trigger: img,
        start: "top 60%",
        end: "bottom",
        scrub: 3,
        markers: true,
        onUpdate: (self) => {
            gsap.to("#section5 .p1", {
                rotation: self.progress * 30,
                x: self.progress * 150,
                y: -self.progress * 900,
                duration: 0.1,
                overwrite: 'auto'
            })

            gsap.to("#section5 .p2", {
                rotation: self.progress * -30,
                x: self.progress * -150,
                y: -self.progress * 900,
                duration: 0.1,
                overwrite: 'auto'
            })

            gsap.to("#section5 .p3", {
                rotation: self.progress * 30,
                x: self.progress * 150,
                y: -self.progress * 900,
                duration: 0.1,
                overwrite: 'auto'
            })
        }
    })
})

// section6 애니메이션
gsap.set("#section6 .project__img", { y: 400 })

gsap.utils.toArray("#section6 .project__img").forEach((img) => {
    ScrollTrigger.create({
        trigger: img,
        start: "top 60%",
        end: "bottom",
        scrub: 3,
        markers: true,
        onUpdate: (self) => {
            gsap.to("#section6 .p1", {
                rotation: self.progress * 30,
                x: self.progress * 150,
                y: -self.progress * 900,
                duration: 0.1,
                overwrite: 'auto'
            })

            gsap.to("#section6 .p2", {
                rotation: self.progress * -30,
                x: self.progress * -150,
                y: -self.progress * 900,
                duration: 0.1,
                overwrite: 'auto'
            })

            gsap.to("#section6 .p3", {
                rotation: self.progress * 30,
                x: self.progress * 150,
                y: -self.progress * 900,
                duration: 0.1,
                overwrite: 'auto'
            })
        }
    })
})

// section6 애니메이션
gsap.set("#section7 .project__img", { y: 400 })

gsap.utils.toArray("#section7 .project__img").forEach((img) => {
    ScrollTrigger.create({
        trigger: img,
        start: "top 60%",
        end: "bottom",
        scrub: 3,
        markers: true,
        onUpdate: (self) => {
            gsap.to("#section7 .p1", {
                rotation: self.progress * 30,
                x: self.progress * 150,
                y: -self.progress * 900,
                duration: 0.1,
                overwrite: 'auto'
            })

            gsap.to("#section7 .p2", {
                rotation: self.progress * -30,
                x: self.progress * -150,
                y: -self.progress * 900,
                duration: 0.1,
                overwrite: 'auto'
            })

            gsap.to("#section7 .p3", {
                rotation: self.progress * 30,
                x: self.progress * 150,
                y: -self.progress * 900,
                duration: 0.1,
                overwrite: 'auto'
            })
        }
    })
})


