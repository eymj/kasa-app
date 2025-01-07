import "./Footer.css";
import kasaWhiteLogo from '../assets/logo-white.png'

function Footer() {
  return (
    <footer>
        <div className="footer-content">
            <div className="footer-logo">
                <img src={kasaWhiteLogo} alt="" />
            </div>
            <div className="footer-copyright">
                <span>© 2020 Kasa. All rights reserved</span>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
