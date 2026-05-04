import "./CTA.css"

import BtnArr from "../../assets/images/btn-chev-wh.svg"
import ctaBg from "../../assets/images/cta-bg.svg"
import verifiedPr from "../../assets/images/verified-pr.svg"
import { FiBarChart2 } from "react-icons/fi";
import { MdOutlineSpeed } from "react-icons/md";
import { PiDatabase } from "react-icons/pi";

const CTA = ({className}) => {
    return (
        <section className={`cta-sec position-relative ${className ? className : ''}`}>
            <img src={ctaBg} alt="" className="cta-bg position-absolute" />
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-9">
                        <h5 className="sub-head mx-auto mb-3">Advanced Lead Intelligence</h5>
                        <h2 className="main-h2 text-center mb-4 pb-2">Scale your outbound with <span>precision data sourcing</span></h2>
                        <div className="d-flex justify-content-center fs-16 column-gap-25 row-gap-10 align-items-center mb-5 flex-wrap">
                            <div className="text-muted d-flex align-items-center gap-10">
                                <img src={verifiedPr} alt="" />
                                <span>B2B Verified Data</span>
                            </div>
                            <div className="text-muted d-flex align-items-center gap-10">
                                <img src={verifiedPr} alt="" />
                                <span>API-First Integration</span>
                            </div>
                        </div>

                        <div className="cta-stat-grid d-grid gap-15 mx-auto mb-4 pb-2">
                            <div className="cta-stat-box">
                                <div className="stat-head fs-12 fw-semibold text-muted d-flex align-items-center gap-10 mb-2">
                                    <FiBarChart2 />
                                    <span>VERIFICATION</span>
                                </div>
                                <div className="stat-body d-flex align-items-end gap-10">
                                    <h3 className="fw-bold mb-0">99.8%</h3>
                                    <div className="stat-badge badge-green">↑ LIVE</div>
                                </div>
                            </div>
                            <div className="cta-stat-box">
                                <div className="stat-head fs-12 fw-semibold text-muted d-flex align-items-center gap-10 mb-2">
                                    <MdOutlineSpeed />
                                    <span>LATENCY</span>
                                </div>
                                <div className="stat-body d-flex align-items-end gap-10">
                                    <h3 className="fw-bold mb-0">42ms</h3>
                                    <div className="stat-badge text-primary">STABLE</div>
                                </div>
                            </div>
                            <div className="cta-stat-box">
                                <div className="stat-head fs-12 fw-semibold text-muted d-flex align-items-center gap-10 mb-2">
                                    <PiDatabase />
                                    <span>DATA POINTS</span>
                                </div>
                                <div className="stat-body d-flex align-items-end gap-10">
                                    <h3 className="fw-bold mb-0">12.4M</h3>
                                    <div className="stat-badge text-primary">SYNCED</div>
                                </div>
                            </div>
                        </div>
                        <a href="https://app.theboomerang.co/login?menu=Signup" className="btn btn-primary gap-3 mx-auto fs-18" target="_blank">Get Started Free <img src={BtnArr} alt="" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
