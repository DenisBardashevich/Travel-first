import React, { useEffect, useRef } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import Header_slide_1 from "./slides/slide_01";
import Header_slide_2 from "./slides/slide_02";
import Header_slide_3 from "./slides/slide_03";
import Header_slide_4 from "./slides/slide_04";
import Header_slide_5 from "./slides/slide_05";

const Swipers = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        // Инициализация Swiper
        swiperRef.current = new Swiper(".swiper", {
            loop: true,
            parallax: true,
            speed: 1000,
            keyboard: {
                enabled: true,
            },
            pagination: {
                el: ".slider-control_count",
                type: "fraction",
            },
            navigation: {
                nextEl: "#btn-prev",
                prevEl: "#btn-next",
            },
            scrollbar: {
                el: ".swiper-scrollbar",
            },
            autoplay: { // Добавляем автопрокрутку
                delay: 3000, // Задержка в миллисекундах (3 секунды)
                disableOnInteraction: false, // Автопрокрутка не отключается при взаимодействии
            },
        });

        return () => {
            if (swiperRef.current) {
                swiperRef.current.destroy();
                swiperRef.current = null;
            }
        };
    }, []);

    return (
        <div className="swiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide"><Header_slide_1 /></div>
                <div className="swiper-slide"><Header_slide_2 /></div>
                <div className="swiper-slide"><Header_slide_3 /></div>
                <div className="swiper-slide"><Header_slide_4 /></div>
                <div className="swiper-slide"><Header_slide_5 /></div>
                
            </div>
            
        </div>
    );
};

export default Swipers;
