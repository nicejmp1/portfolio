import React, { useEffect, useRef } from 'react';
import { aboutPoto } from '../data';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const About = () => {
    const photoRefs = useRef([]);
    photoRefs.current = [];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        photoRefs.current.forEach((img, index) => {
            console.log(`Registering scroll trigger for image ${index}`);

            // 패럴랙스 스크롤 효과
            gsap.to(img, {
                scrollTrigger: {
                    trigger: img,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,  // 부드럽게 처리
                    toggleActions: "restart pause resume pause",
                    onEnter: () => setActiveImage(index),
                    onLeave: () => setActiveImage(index - 1),
                    onEnterBack: () => setActiveImage(index),
                    onLeaveBack: () => setActiveImage(index + 1),
                    markers: true // 마크다운 표시
                },
                xPercent: -200 + index * 5,  // 좌우 움직임 조정
                ease: "none"
            });
        });

        function setActiveImage(activeIndex) {
            photoRefs.current.forEach((img, index) => {
                console.log(`Setting opacity for image ${index}: ${index === activeIndex ? 1 : 0.3}`);
                gsap.to(img, {
                    opacity: index === activeIndex ? 1 : 0.3,
                    ease: 'none',
                    duration: 0.5
                });
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            console.log('ScrollTriggers killed');
        };
    }, []);

    return (
        <>
            <div className='about__title'>
                <span>Cylinder Seoul is a subsidiary of Cheil <br />
                    Worldwide and the <em>content production</em> brand <br />
                    of Beattie McGuinness Bungay <br />
                    a British <em>advertising</em> agency. </span>
                <p>
                    브랜드와 고객을 효과적으로 연결하는 혁신적인 콘텐츠 <br />
                    제작에 전념하고 있습니다. 데이터 기반 전략을<br />
                    활용하여 영향력 있는 디지털 미디어를 제작하는 것이 제 열정입니다.
                </p>
            </div>
            <div className='about__poto'>
                {aboutPoto.map((poto, index) => (
                    <div className='poto__img' key={index} ref={el => photoRefs.current[index] = el}>
                        <img src={poto.img} alt={poto.title} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default About;
