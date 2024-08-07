import Header_slide_location from "../Header_slide_location";

const Header_slide_4 = () => {
    return (
        <div className="slide slide--thailand">
            <div className="slide_header">
                <div
                    className="slide_tagline"
                    data-swiper-parallax-opacity="0"
                    data-swiper-parallax="150%"
                >
                    <span>EXPLORE</span>
                </div>
                <h1 className="slide_title" data-swiper-parallax="-100%">
                    <span>Thailand</span>
                </h1>
            </div>
            <div className="slide_location" data-swiper-parallax="-500">
                <Header_slide_location title="Pattaya"/>
                <Header_slide_location title="Phuket"/>
                <Header_slide_location title="Samui"/>
            </div>
        </div>
    );
};

export default Header_slide_4;
