import Header_slide from "./blocks/slides/slide_01";
import Nav from "./blocks/nav";
import See_more from "./blocks/see-more";
import Slider_control from "./blocks/slider-control";
import Socials from "./blocks/socials";
import Swipers from "./blocks/swiper";
import Mobile_nav from "./blocks/mobile-nav";
import React, { useState } from 'react';


const Header = () => {
const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false); // Создаем состояние для мобильного меню

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen); // Переключаем состояние
    };
    
    return (
        <header className="header">
            <Swipers />
            {/* <div className="header_slide"><Header_slide /></div> */}
            <div className="header_content">
                <div className="header_nav">
                    <Nav toggleMobileMenu={toggleMobileMenu}/>
                </div>
                <div className="header_socials">
                    <Socials />
                </div>
                <div className="header_see-more">
                    <See_more />
                </div>
                <div className="header_slider-control">
                    <Slider_control />
                </div>
                <div className="header_scrollbar">
                    <div className="swiper-scrollbar"></div>
                </div>
            </div>

            <Mobile_nav isOpen={isMobileMenuOpen} onClose={toggleMobileMenu}/>
        </header>
    );
};

export default Header;
