import React, { useState, useEffect } from 'react';

function BannerTime() {
    const [currentTime, setCurrentTime] = useState('');
    const [currentYear, setCurrentYear] = useState('');
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            // 시간 설정 (오후/오전 표시 제거)
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            // 년도 및 월/일 설정 (월/일만 표시)
            const year = now.getFullYear();
            const month = now.getMonth() + 1;  // getMonth는 0부터 시작하므로 1을 더해줍니다.
            const day = now.getDate();  // getDate는 날짜를 반환합니다.

            // 형식 조정
            setCurrentTime(`${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
            setCurrentYear(year.toString());
            setCurrentDate(`${month}.${day}`);
        }, 1000);

        // 컴포넌트가 언마운트될 때 인터벌을 정리
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="banner">
            <div className="banner__title">
                <h1>portfolio</h1>
                <span>frontend / developer</span>
            </div>
            <div className="banner__time">
                <ul>
                    <li><span>{currentTime}</span></li>
                    <li><span>{currentYear}</span></li>
                    <li><span>{currentDate}</span></li>
                </ul>
            </div>
        </section>
    );
}

export default BannerTime;
