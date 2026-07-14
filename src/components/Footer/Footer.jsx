import "./Footer.css"
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg"
import PinIcon from "../../assets/images/pin-icon.svg"
import CallIcon from "../../assets/images/call-icon.svg"
import MailIcon from "../../assets/images/mail-icon.svg"
import WhatsappIcon from "../../assets/images/whatsapp-icon.svg"
// import XIcon from "../../assets/images/x-icon.svg"
import RedditIcon from "../../assets/images/reddit-icon.svg"

const Footer = () => {
    return (
        <footer className="position-relative">
            <div className="container position-relative">
                <div className="row justify-content-center pb-5 row-gap-50">
                    <div className="col-lg-3">
                        <a href="https://www.theboomerang.co/"><img src={Logo} alt="" className="mb-4" /></a>
                        <p className="fs-14 fw-medium mb-0">Boomerang helps you scrape and enrich data from Clay, Crunchbase and more to
                            create clean, ready-to-use lists for your campaigns.</p>
                    </div>
                    <div className="col-lg-4 d-lg-block d-none"></div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="mb-3 fs-16 fw-medium">Contact Us</h5>
                        <a href="#" className="d-flex align-items-start gap-2 fs-12 fw-bold mb-3">
                            <img src={PinIcon} alt="" />
                            <p className="mb-0">2nd floor, HDFC bank, near Vinayak cars, Jaipur</p>
                        </a>
                        <a href="tel:+918955306465" className="d-flex align-items-center gap-2 fs-12 fw-bold mb-3">
                            <img src={CallIcon} alt="" />
                            <p className="mb-0">+91 89553 06465</p>
                        </a>
                        <a href="mailto:friends@theboomerang.co" className="d-flex align-items-center gap-2 fs-12 fw-bold mb-3">
                            <img src={MailIcon} alt="" />
                            <p className="mb-0">friends@theboomerang.co</p>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className="mb-3 fs-16 fw-medium">We're Online</h5>
                        <div className="d-flex gap-2">
                            <a href="https://wa.me/918955306465" target="_blank"><img src={WhatsappIcon} alt="" /></a>
                            {/* <a href="https://x.com/BoomerangT29526" target="_blank"><img src={XIcon} alt="" /></a> */}
                            <a href="https://www.reddit.com/user/theboomerang_co/" target="_blank"><img src={RedditIcon} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="foo-copyright text-muted py-3">
                <div className="container copyright fs-14">
                    <div className="row align-items-center row-gap-15">
                        {/* <div className="col-lg-8 text-lg-start text-center">© 2026 All Rights Reserved Boomerang powered by CHITLANGIA INFOTECH PRIVATE LIMITED.</div>
                        <div className="col-lg-4 d-flex justify-content-lg-end justify-content-center gap-30">
                            <a href="https://www.theboomerang.co/privacy-policy" rel="nofollow">Privacy policy</a>
                            <a href="https://www.theboomerang.co/terms-and-conditions" rel="nofollow">Terms and conditions</a>
                        </div> */}
                        <div className="col-12 d-flex justify-content-center gap-30">
                            <a href="https://www.theboomerang.co/privacy-policy" rel="nofollow">Privacy policy</a>
                            <a href="https://www.theboomerang.co/terms-and-conditions" rel="nofollow">Terms and conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;