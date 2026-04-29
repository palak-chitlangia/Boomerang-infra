import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";
import { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import BtnArr from "../../assets/images/btn-arr-pr.svg";
import RevPlay from "../../assets/images/rev-play.svg";
import RevPause from "../../assets/images/rev-pause.svg";

import TrymThumb from "../../assets/images/trym-thumb.png";
import AyushThumb from "../../assets/images/ayush-thumb.png";
import GurmanThumb from "../../assets/images/gurman-thumb.png";

import TnwLogo from "../../assets/images/tnw-logo.svg";
import SunflowerLogo from "../../assets/images/sunflower-logo.svg";
import DanielImg from "../../assets/images/daniel-img.png";
import PstgLogo from "../../assets/images/pstg-logo.svg";
import BfaLogo from "../../assets/images/bfa-logo.svg";

import VideoPlaceholder from "../../assets/videos/video-placeholder.mp4";

const VideoBox = ({ thumb, name, title }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasEnded, setHasEnded] = useState(true);

    const playVideo = () => {
        videoRef.current.play();
        setIsPlaying(true);
        setHasEnded(false);
    };

    const pauseVideo = () => {
        videoRef.current.pause();
        setIsPlaying(false);
    };

    const onVideoEnd = () => {
        setIsPlaying(false);
        setHasEnded(true);
        videoRef.current.currentTime = 0;
    };

    return (
        <div className="rev-box rev-video-box text-white position-relative">
            {/* Thumbnail only when video has ended */}
            {hasEnded && (
                <img src={thumb} alt={name} className="w-100 h-100" />
            )}

            {/* Video remains visible when paused */}
            <video
                ref={videoRef}
                src={VideoPlaceholder}
                className="w-100 h-100"
                onEnded={onVideoEnd}
                style={{ display: hasEnded ? "none" : "block" }}
            />

            <div className="rev-overlay position-absolute d-flex align-items-end h-100 w-100">
                <div className="d-flex align-items-sm-center align-items-start justify-content-between flex-sm-row flex-column w-100 gap-10">
                    <div>
                        <h5 className="fs-14 fw-bold mb-1">{name}</h5>
                        <p className="fs-12 mb-0">{title}</p>
                    </div>

                    {!isPlaying ? (
                        <img
                            src={RevPlay}
                            alt="Play"
                            role="button"
                            onClick={playVideo}
                        />
                    ) : (
                        <img
                            src={RevPause}
                            alt="Pause"
                            role="button"
                            onClick={pauseVideo}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

const Testimonials = () => {
    return (
        <section className="testimonial-sec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-7 mb-lg-4 mb-5">
                        <h2 className="main-h2 text-center mb-3">
                            Trusted by 200+ teams to deliver top-quality service at scale
                        </h2>
                        <a
                            href="https://love.theboomerang.co/"
                            className="btn text-primary gap-2 mx-auto"
                        >
                            View all testimonials <img src={BtnArr} alt="Arrow" />
                        </a>
                    </div>

                    <div className="col-12">
                        <div className="rev-grid d-grid gap-15">
                            <VideoBox
                                thumb={TrymThumb}
                                name="Trym Vestengen"
                                title="Co-CEO, Co-Founder"
                            />

                            <div className="text-rev-slider position-relative">
                                <Swiper
                                    modules={[Pagination, EffectFade]}
                                    slidesPerView={1}
                                    loop
                                    effect="fade"
                                    fadeEffect={{ crossFade: true }}
                                    pagination={{
                                        el: ".rev-pagination-cont .rev-pagination",
                                        clickable: true,
                                        bulletClass: "rev-pagination-dot",
                                        bulletActiveClass: "active",
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="rev-slide-inner">
                                            <img src={TnwLogo} alt="TNW" className="mb-4" />
                                            <p className="fs-18 mb-4 pb-2">
                                                From the get go they have been <b>super quick, attentive and very fair on pricing.</b> Leads are great quality. The communication is swift and always clear. we simply send them what we are after and its then sent back within a few hours. The best lead provider I've worked with and I've worked with them all. lol. <b>HIGHLY RECOMMEND.</b>
                                            </p>
                                            <div className="rev-author-box d-flex align-items-center gap-15">
                                                <img src={DanielImg} alt="Daniel" />
                                                <div>
                                                    <h5 className="fs-14 fw-bold mb-1">Daniel</h5>
                                                    <p className="fs-12 mb-0">
                                                        CEO/Owner, TNW Marketing Ltd.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="rev-slide-inner">
                                            <img src={TnwLogo} alt="TNW" className="mb-4" />
                                            <p className="fs-18 mb-4 pb-2">
                                                The process is smooth, fast, and the lead quality is
                                                consistently strong.{" "}
                                                <b>Would recommend to anyone scaling outbound.</b>
                                            </p>
                                            <div className="rev-author-box d-flex align-items-center gap-15">
                                                <img src={DanielImg} alt="Sarah" />
                                                <div>
                                                    <h5 className="fs-14 fw-bold mb-1">Sarah</h5>
                                                    <p className="fs-12 mb-0">Head of Growth</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="rev-slide-inner">
                                            <img src={TnwLogo} alt="TNW" className="mb-4" />
                                            <p className="fs-18 mb-4 pb-2">
                                                Fantastic communication and fair pricing. We receive
                                                high quality leads quickly.{" "}
                                                <b>Reliable partner.</b>
                                            </p>
                                            <div className="rev-author-box d-flex align-items-center gap-15">
                                                <img src={DanielImg} alt="James" />
                                                <div>
                                                    <h5 className="fs-14 fw-bold mb-1">James</h5>
                                                    <p className="fs-12 mb-0">Founder</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="rev-pagination-cont position-absolute">
                                    <div className="rev-pagination bg-accent d-flex align-items-center"></div>
                                </div>
                            </div>

                            <div
                                className="rev-box rev-logo-box d-flex align-items-center justify-content-center"
                                style={{ backgroundColor: "#F4D011" }}
                            >
                                <img src={SunflowerLogo} alt="Sunflower" />
                            </div>

                            <div
                                className="rev-box rev-logo-box d-flex align-items-center justify-content-center"
                                style={{ backgroundColor: "#BAD634" }}
                            >
                                <img src={PstgLogo} alt="PSTG" />
                            </div>

                            <VideoBox
                                thumb={AyushThumb}
                                name="Ayush Singh"
                                title="Co-Founder of SBL"
                            />

                            <div
                                className="rev-box rev-logo-box d-flex align-items-center justify-content-center"
                                style={{ backgroundColor: "#000" }}
                            >
                                <img src={BfaLogo} alt="BFA" />
                            </div>

                            <VideoBox
                                thumb={GurmanThumb}
                                name="Gurman Singh"
                                title="Co-Founder"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
