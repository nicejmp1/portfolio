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


// 이미지 배열을 초기화합니다.
const $avatarImgSqc = [];

for (let i = 1; i <= 2; i++) {
    $avatarImgSqc.push(`/assets/img/face-${i}.jpg`);
}

// 이미지를 미리 로딩하는 함수입니다.
function preloading(preImgs) {
    let imgTotal = preImgs.length;
    for (let i = 0; i < imgTotal; i++) {
        let img = new Image();
        img.src = preImgs[i];
    }
}

preloading($avatarImgSqc);

// 이미지 객체와 이미지 태그를 정의합니다.
const $img = { crntImg: 0 },
    $imgTag = document.querySelector('.avata');

// TweenMax 애니메이션을 설정합니다.
let $tween_avata = TweenMax.to($img, 1, {
    crntImg: $avatarImgSqc.length - 1,
    roundProps: 'crntImg',
    immediateRender: true,
    onUpdate: function () {
        $imgTag.setAttribute('src', $avatarImgSqc[$img.crntImg]);
    }
});

// ScrollMagic 컨트롤러를 정의합니다.
const $controller = new ScrollMagic.Controller();

// ScrollMagic Scene을 설정합니다.
new ScrollMagic.Scene({
    duration: 5000,
    triggerElement: '#trigger',
    triggerHook: 0
})
    .setTween($tween_avata)
    .addTo($controller);

gsap.to("#section4 .two__intro .two__number span", {
    xPercent: 200,
    ease: "none",
    scrollTrigger: {
        trigger: "#section4",
        start: "top top",
        end: "bottom top",
        scrub: true,
    }
});


gsap.utils.toArray(".text-top").forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        endTrigger: ".text2",
        end: "top",
        pin: true,
        markers: true,
        scrub: 0.5,
        pinSpacing: false,
    })
})

