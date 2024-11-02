import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_container">
          {/* Main Links Section */}
          <div className="footer-row">
            <div className="footer_column">
              <h3>ONLINE SHOPPING</h3>
              <a href="#">Men</a>
              <a href="#">Women</a>
              <a href="#">Kids</a>
              <a href="#">Beauty</a>
              <a href="#">Gift Card</a>
              <a href="#">Myntra Insider</a>
            </div>
            <div className="footer_column">
              <h3>CUSTOMER POLICIES</h3>
              <a href="#">Contact Us</a>
              <a href="#">FAQ</a>
              <a href="#">T&C</a>
              <a href="#">Terms of Use</a>
              <a href="#">Shipping</a>
              <a href="#">Cancellation</a>
              <a href="#">Returns</a>
            </div>
            <div className="footer_column">
              <h3>USEFUL LINKS</h3>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
              <a href="#">Site Map</a>
              <a href="#">Corporate Information</a>
              <a href="#">Whitehat</a>
              <a href="#">Cleartrip</a>
              <a href="#">Myntra Insider</a>
            </div>
          </div>

          {/* Additional Section */}
          <div className="footer-additional">
            <div className="footer_column_experience">
              <h3>EXPERIENCE MYNTRA APP ON MOBILE</h3>
              <div className="footer-image">
                <img src="images/foot1.png" alt="Footer1" />
                <img src="images/foot2.png" alt="Footer2" />
              </div>
              <h3>KEEP IN TOUCH</h3>
              <div className="footer-icon">
              <a href="#"><FaFacebookSquare /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaInstagram /></a>
              </div>
            </div>
            <div className="footer-commitments">
              <div className="footer-commitment-item">
                <img src="images/origional.png" alt="Original" />
                <p><strong>100% ORIGINAL</strong> guarantee for all products at myntra.com</p>
              </div>
              <div className="footer-commitment-item">
                <img src="images/14days.png" alt="14 days" />
                <p><strong>Return within 14 days</strong> of receiving your order</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <hr />
        <div className="copyright">
          © 2023 www.myntra.com. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
