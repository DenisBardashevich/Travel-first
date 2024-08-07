import close_btn from '/icon/Close-Btn.svg'


const Mobile_nav = ({ isOpen, onClose }) => {
    return (
        <>
            <div className={`mobile-nav-overlay ${isOpen ? 'mobile-nav-overlay--open' : ''}`} onClick={onClose}></div>
            <div className={`mobile-nav ${isOpen ? 'mobile-nav--open' : ''}`}>
                <button className="mobile-nav_btn" onClick={onClose}>
                    <img src={close_btn} alt="Close" />
                </button>
                <ul className='mobile-nav_list'>
                    <li><a className='active' href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </>
    );
}

export default Mobile_nav;