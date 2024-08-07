import instagram from '/icon/instagram.svg'
import facebook from '/icon/facebook.svg'
import twitter from '/icon/twitter.svg'


const Socials = () => {
    return ( 
            <div className="socials">
                <a href="https://www.instagram.com/denis___ka/"><img src={instagram} alt="instagram" /></a>
                <a href="#"><img src={facebook} alt="facebook" /></a>
                <a href="#"><img src={twitter} alt="twitter" /></a>
            </div>
     );
}
 
export default Socials;