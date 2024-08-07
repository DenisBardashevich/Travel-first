import Header_slide_location from "../Header_slide_location";

const Header_slide_1 = () => {
    return (
        <div className="slide slide--norway">
            <div className="slide_header">
                <div
                    className="slide_tagline"
                    data-swiper-parallax-opacity="0"
                    data-swiper-parallax="150%"
                >
                    <span>EXPLORE </span>
                </div>
                <h1 className="slide_title" data-swiper-parallax="-100%">
                    <span>Norway</span>
                </h1>
            </div>
            <div className="slide_location" data-swiper-parallax="-500">
                <Header_slide_location title="Trondheim"/>
                <Header_slide_location title="Geirangerfjord"/>
                <Header_slide_location title="Lofoten"/>
            </div>
        </div>
    );
};

export default Header_slide_1;
