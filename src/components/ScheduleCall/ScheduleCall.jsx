import "./ScheduleCall.css";
import { useMemo, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import CalendlyWidget from "./CalendlyWidget"
import CallRevImg1 from "../../assets/images/call-rev-img-1.png";
import CallRevImg2 from "../../assets/images/call-rev-img-2.png";
import CallRevImg3 from "../../assets/images/call-rev-img-3.png";
import RevStars from "../../assets/images/rev-stars.svg";

import RevPlay from "../../assets/images/rev-play.svg";
import TrymThumb from "../../assets/images/trym-thumb.png";
import AyushThumb from "../../assets/images/ayush-thumb.png";
import GurmanThumb from "../../assets/images/gurman-thumb.png";

const ReviewBox = ({ img, name, title, text, rating = 5, className }) => {
    return (
        <a href="https://love.theboomerang.co/" className="call-rev-box d-block">
            <div className="d-flex align-items-center gap-15 mb-4">
                <img src={img} alt={name} className="rounded-4" width="64" />
                <div>
                    <h4 className="fw-bold mb-0">{name}</h4>
                    <p className="fs-14 text-primary fw-medium mb-0">{title}</p>
                </div>
            </div>
            <p className="fs-14 text-muted">{text}</p>
            <div className="d-flex align-items-center gap-10">
                <img src={RevStars} alt="Stars" />
                <span className="fs-12 fw-semibold text-muted">{rating}/5 RATING</span>
            </div>
        </a>
    );
};

const VideoBox = ({ thumb, name, title }) => {
    return (
        <a href="https://love.theboomerang.co/" className="call-rev-video-box text-white position-relative overflow-hidden d-block">
            {/* Static Thumbnail */}
            <img src={thumb} alt={name} className="w-100 h-100" />

            {/* Overlay */}
            <div className="call-rev-overlay position-absolute d-flex align-items-end h-100 w-100">
                <div className="d-flex align-items-sm-center align-items-start justify-content-between w-100 gap-10">
                    <div>
                        <h5 className="fs-14 fw-bold mb-1">{name}</h5>
                        <p className="fs-12 mb-0">{title}</p>
                    </div>

                    <div
                        href="https://love.theboomerang.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View all testimonials"
                    >
                        <img src={RevPlay} alt="View testimonials" />
                    </div>
                </div>
            </div>
        </a>
    );
};

const ScheduleCall = ({ className }) => {
    const [direction, setDirection] = useState("vertical");

    useEffect(() => {
        const handleResize = () => {
            setDirection(window.innerWidth < 768 ? "horizontal" : "vertical");
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className={`schedule-call-sec ${className ? className : ''}`}>
            <div className="container">
                <div className="row align-items-center justify-content-center mb-5">
                    <div className="col-xxl-7 text-center">
                        <h5 className="sub-head mx-auto mb-3">Schedule Consultation</h5>
                        <h2 className="main-h2 mb-3">Book your strategy call</h2>
                        <p className="fs-18 text-muted mb-0">Get personalized insights on how Boomerang can transform your lead-gen pipeline and unlock 95%+ data accuracy.</p>
                    </div>
                </div>
                <div className="row row-gap-30">
                    <div className="col-md-7">
                        <div className="calender-box position-relative">
                            <CalendlyWidget />
                        </div>
                    </div>
                    <div className="col-md-5 ps-lg-5">
                        <Swiper
                            key={direction}
                            direction={direction}
                            slidesPerView={"auto"}
                            spaceBetween={20}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                            }}
                            speed={3000}
                            loop={true}
                            modules={[Autoplay]}
                            className="call-rev-swiper"
                        >
                            <SwiperSlide>
                                <ReviewBox
                                    img={CallRevImg1}
                                    name="Namit Jindal"
                                    title="Founder, Deliverability Ninja"
                                    text="I've been working with the Boomerang team and Akhilesh for a while now! Super Reliable and excellent customer support. They cover all our data needs."
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <VideoBox
                                    thumb={TrymThumb}
                                    name="Trym Vestengen"
                                    title="Co-CEO, Co-Founder"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ReviewBox
                                    img={CallRevImg2}
                                    name="Abdul Kadir"
                                    title="Founder, Revenue Partner"
                                    text="Been ordering multiple lists on Boomerang and have been getting them quickly. The customer support is also amazing and prices are great. Would 100% recommend buying from them."
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <VideoBox
                                    thumb={AyushThumb}
                                    name="Ayush Singh"
                                    title="Co-Founder of SBL"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ReviewBox
                                    img={CallRevImg3}
                                    name="Banjo Adesuyi"
                                    title="Creative Director, BFAMedia"
                                    text="Amazing company! Great Service, Fast Turnaround."
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <VideoBox
                                    thumb={GurmanThumb}
                                    name="Gurman Singh"
                                    title="Co-Founder"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScheduleCall;