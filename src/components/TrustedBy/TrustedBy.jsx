import "./TrustedBy.css";
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
                        <h2 className="text-center mb-4 pb-2">Trusted by 500+ marketing teams</h2>
                        <div className="trusted-by-cont d-flex justify-content-center">
                            <div className="trusted-by-box agencies-logos w-100 d-grid position-relative">
                                <div className="trusted-col-head position-absolute">Agencies</div>
                                <a href="https://scrapeamax.com/" target="_blank"><img src={AgenciesLogo1} alt="" /></a>
                                <a href="https://emailethos.agency/" target="_blank"><img src={AgenciesLogo2} alt="" /></a>
                                <a href="https://wiseemedia.com/" target="_blank"><img src={AgenciesLogo3} alt="" /></a>
                                <a href="https://ayudavets.com/" target="_blank"><img src={AgenciesLogo4} alt="" /></a>
                                <a href="https://outreachbloom.com/" target="_blank"><img src={AgenciesLogo5} alt="" /></a>
                                <a href="https://catalyze-x.com/" target="_blank"><img src={AgenciesLogo6} alt="" /></a>
                                <a href="https://vitae.ai/" target="_blank"><img src={AgenciesLogo7} alt="" /></a>
                                <a href="https://roonii.com/" target="_blank"><img src={AgenciesLogo8} alt="" /></a>
                                <a href="https://scrapeamax.com/" target="_blank"><img src={AgenciesLogo9} alt="" /></a>
                                <a href="https://scrapeamax.com/" target="_blank"><img src={AgenciesLogo10} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;