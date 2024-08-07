import Header_slide_location from "../Header_slide_location";

const Header_slide_5 = () => {
    return (
        <div className="slide slide--morocco">
            <div className="slide_header">
                <div
                    className="slide_tagline"
                    data-swiper-parallax-opacity="0"
                    data-swiper-parallax="150%"
                >
                    <span>EXPLORE</span>
                </div>
                <h1 className="slide_title" data-swiper-parallax="-100%">
                    <span>Morocco</span>
                </h1>
            </div>
            <div className="slide_location" data-swiper-parallax="-500">
                <Header_slide_location title="Marrakesh"/>
                <Header_slide_location title="Fès"/>
                <Header_slide_location title="Meknes"/>
            </div>
        </div>
    );
};

export default Header_slide_5;
