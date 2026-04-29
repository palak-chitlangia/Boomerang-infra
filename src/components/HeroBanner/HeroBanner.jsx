import "./HeroBanner.css";
import HeroImg from "../../assets/images/alpha-boomerang-hero.gif";

const HeroBanner = () => {
    return (
        <section className="hero-banner text-white position-relative">
            <div className="container position-relative">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-11 position-relative pe-0 text-lg-start text-center">
                        <h1 className="main-h1">Complete B2B data, <span className="text-white">Just a Click Away.</span></h1>
                        <p className="mb-lg-5 mb-4">Boomerang lets you access complete public data on any professional profile or company without needing a user account or relying on official APIs.</p>
                        <div className="d-flex align-items-center justify-content-lg-start justify-content-center gap-20">
                            <a className="btn btn-tertiary py-3 px-4 fw-bold">Export Leads</a>
                            <a className="btn btn-tertiary py-3 px-4 fw-bold">Book a Demo</a>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center">
                        <img src={HeroImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;