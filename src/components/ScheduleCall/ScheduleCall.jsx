import "./ScheduleCall.css";
import CalendlyWidget from "./CalendlyWidget"
import CallRevImg1 from "../../assets/images/call-rev-img-1.png";
import CallRevImg2 from "../../assets/images/call-rev-img-2.png";
import CallRevImg3 from "../../assets/images/call-rev-img-3.png";
import RevStars from "../../assets/images/rev-stars.svg";

const ScheduleCall = () => {
    return (
        <section className="schedule-call-sec">
            <div className="container">
                <div className="row align-items-center justify-content-center mb-5">
                    <div className="col-xxl-7 text-center">
                        <h5 className="sub-head mx-auto">Schedule Consultation</h5>
                        <h2 className="main-h2">Book your strategy call</h2>
                        <p className="fs-18 text-muted mb-0">Get personalized insights on how Boomerang can transform your cold email campaigns and achieve inbox placement rates of 95%+</p>
                    </div>
                </div>
                <div className="row row-gap-30">
                    <div className="col-lg-8">
                        <div className="calender-box h-100">
                            <CalendlyWidget />

                        </div>
                    </div>
                    <div className="col-lg-4 ps-lg-5">
                        <div className="call-rev-box mb-4">
                            <div className="d-flex align-items-center gap-15 mb-4">
                                <img src={CallRevImg1} alt="Call Review" className="call-rev-img rounded-4" width="64" />
                                <div>
                                    <h4 className="fs-18 fw-bold mb-0">Namit Jindal</h4>
                                    <p className="fs-14 text-primary fw-medium mb-0">Founder, Deliverability Ninja</p>
                                </div>
                            </div>
                            <p className="fs-14 text-muted">I've been working with the Boomerang team and Akhilesh for a while now! Super Reliable and excellent customer support. They cover all our data needs.</p>
                            <div className="d-flex align-items-center gap-10">
                                <img src={RevStars} alt="Stars" />
                                <span className="fs-12 fw-semibold text-muted">5/5 RATING</span>
                            </div>
                        </div>
                        {/* <p className="fs-14 text-uppercase text-muted fw-semibold ls-base mb-4 ps-3">Recent Success Stories</p> */}
                        <div className="call-rev-box mb-4">
                            <div className="d-flex align-items-center gap-15 mb-4">
                                <img src={CallRevImg2} alt="Call Review" className="rounded-4" width="64" />
                                <div>
                                    <h4 className="fs-18 fw-bold mb-0">Abdul Kadir</h4>
                                    <p className="fs-14 text-primary fw-medium mb-0">Founder, Revenue Partner</p>
                                </div>
                            </div>
                            <p className="fs-14 text-muted">Been ordering multiple lists on Boomerang and have been getting them quickly. The customer support is also amazing and prices are great. Would 100% recommend buying from them.</p>
                            <div className="d-flex align-items-center gap-10">
                                <img src={RevStars} alt="Stars" />
                                <span className="fs-12 fw-semibold text-muted">5/5 RATING</span>
                            </div>
                        </div>
                        <div className="call-rev-box">
                            <div className="d-flex align-items-center gap-15 mb-4">
                                <img src={CallRevImg3} alt="Call Review" className="rounded-4" width="64" />
                                <div>
                                    <h4 className="fs-18 fw-bold mb-0">Banjo Adesuyi</h4>
                                    <p className="fs-14 text-primary fw-medium mb-0">Creative Director, BFAMedia</p>
                                </div>
                            </div>
                            <p className="fs-14 text-muted">Amazing company! Great Service, Fast Turnaround.</p>
                            <div className="d-flex align-items-center gap-10">
                                <img src={RevStars} alt="Stars" />
                                <span className="fs-12 fw-semibold text-muted">5/5 RATING</span>
                            </div>
                        </div>
                        {/* <div className="people-rev-box d-flex align-items-center gap-15 mb-4">
                            <img src={PeopleAvatar} alt="Call Review" width="40" />
                            <div>
                                <h4 className="fs-14 fw-bold mb-0">Sarah K., Head of Growth</h4>
                                <p className="fs-12 text-muted mb-0">Join the world's best sales teams.</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScheduleCall;