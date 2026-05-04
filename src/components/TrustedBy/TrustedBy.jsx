import "./TrustedBy.css";
import BrandLogo1 from "../../assets/images/brand-logo-1.png";
import BrandLogo2 from "../../assets/images/brand-logo-2.png";
import BrandLogo3 from "../../assets/images/brand-logo-3.png";
import BrandLogo4 from "../../assets/images/brand-logo-4.png";
import BrandLogo5 from "../../assets/images/brand-logo-5.png";
import BrandLogo6 from "../../assets/images/brand-logo-6.png";
import BrandLogo7 from "../../assets/images/brand-logo-7.png";
import BrandLogo8 from "../../assets/images/brand-logo-8.png";
import BrandLogo9 from "../../assets/images/brand-logo-9.png";
import BrandLogo10 from "../../assets/images/brand-logo-10.png";
import AgenciesLogo1 from "../../assets/images/agencies-logo-1.png";
import AgenciesLogo2 from "../../assets/images/agencies-logo-2.png";
import AgenciesLogo3 from "../../assets/images/agencies-logo-3.png";
import AgenciesLogo4 from "../../assets/images/agencies-logo-4.png";
import AgenciesLogo5 from "../../assets/images/agencies-logo-5.png";
import AgenciesLogo6 from "../../assets/images/agencies-logo-6.png";
import AgenciesLogo7 from "../../assets/images/agencies-logo-7.png";
import AgenciesLogo8 from "../../assets/images/agencies-logo-8.png";
import AgenciesLogo9 from "../../assets/images/agencies-logo-9.png";
import AgenciesLogo10 from "../../assets/images/agencies-logo-10.png";

const TrustedBy = () => {
    return (
        <section className="trusted-by-sec pt-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12">
                        <h2 className="text-center mb-4 pb-2">Trusted by 1500+ marketing teams</h2>
                        <div className="d-flex justify-content-center">
                            <div className="trusted-by-box brands-logos w-100 d-grid position-relative">
                                <div className="trusted-col-head position-absolute">Brands</div>
                                <a href="https://playbooksystems.io/" target="_blank"><img src={BrandLogo1} alt="" /></a>
                                <a href="https://michaeloutbound.com/" target="_blank"><img src={BrandLogo2} alt="" /></a>
                                <a href="https://connectjade.com/" target="_blank"><img src={BrandLogo3} alt="" /></a>
                                <a href="https://bookedcallsdaily.com/" target="_blank"><img src={BrandLogo4} alt="" /></a>
                                <a href="https://endorsedai.com/" target="_blank"><img src={BrandLogo5} alt="" /></a>
                                <a href="https://clienttribe.com/" target="_blank"><img src={BrandLogo6} alt="" /></a>
                                <a href="https://housesofgrowth.com/" target="_blank"><img src={BrandLogo7} alt="" /></a>
                                <a href="https://productist.ai/" target="_blank"><img src={BrandLogo8} alt="" /></a>
                                <a href="https://elevateclientsinc.com/" target="_blank"><img src={BrandLogo9} alt="" /></a>
                                <a href="https://growtoro.com/" target="_blank"><img src={BrandLogo10} alt="" /></a>
                            </div>
                            <div className="trusted-by-box agencies-logos w-100 d-grid position-relative border-start-0">
                                <div className="trusted-col-head position-absolute">Agencies</div>
                                <a href="https://scrapeamax.com/" target="_blank"><img src={AgenciesLogo1} alt="" /></a>
                                <a href="https://emailethos.agency/" target="_blank"><img src={AgenciesLogo2} alt="" /></a>
                                <a href="https://wiseemedia.com/" target="_blank"><img src={AgenciesLogo3} alt="" /></a>
                                <a href="https://ayudavets.com/" target="_blank"><img src={AgenciesLogo4} alt="" /></a>
                                <a href="https://outreachbloom.com/" target="_blank"><img src={AgenciesLogo5} alt="" /></a>
                                <a href="https://catalyze-x.com/" target="_blank"><img src={AgenciesLogo6} alt="" /></a>
                                <a href="https://vitae.ai/" target="_blank"><img src={AgenciesLogo7} alt="" /></a>
                                <a href="https://roonii.com/" target="_blank"><img src={AgenciesLogo8} alt="" /></a>
                                <a href="https://growleads.io/" target="_blank"><img src={AgenciesLogo9} alt="" /></a>
                                <a href="https://socials4tradesoutreach.com/" target="_blank"><img src={AgenciesLogo10} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;