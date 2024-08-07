import prev from '/icon/chevron-down (2).svg'
import next from '/icon/chevron-down.svg'

const Slider_control = () => {
    return ( 
        <div className="slider-control">
            <div className="slider-control_arrows">
                <button id='btn-next' className="btn_next"><img src={next} alt="next" /></button>
                <button id='btn-prev' className="btn_prev"><img src={prev} alt="prev" /></button>
            </div>
            <div className="slider-control_count">
                {/* <span className="slider-control_current">1</span>
                /
                <span className="slider-control_total">5</span> */}

            </div>

        </div>
     );
}
 
export default Slider_control;