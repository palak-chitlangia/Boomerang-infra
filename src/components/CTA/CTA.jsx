import "./CTA.css"
import BtnArr from "../../assets/images/btn-arr-bl.svg"

const CTA = () => {
    return (
        <section className="cta-sec position-relative text-white">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h5 className="sub-head mx-auto mb-3 text-white fs-16">Advanced Lead Intelligence</h5>
                        <h2 className="main-h2 text-center mb-4 pb-2">Scale your outbound with <span>precision data sourcing</span></h2>
                        <div className="d-flex justify-content-center fs-16 column-gap-25 row-gap-10 align-items-center mb-5 flex-wrap">
                            <div className="d-flex align-items-center gap-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
                                    <path d="M7.16634 20.75L5.58301 18.0833L2.58301 17.4167L2.87467 14.3333L0.833008 12L2.87467 9.66667L2.58301 6.58333L5.58301 5.91667L7.16634 3.25L9.99967 4.45833L12.833 3.25L14.4163 5.91667L17.4163 6.58333L17.1247 9.66667L19.1663 12L17.1247 14.3333L17.4163 17.4167L14.4163 18.0833L12.833 20.75L9.99967 19.5417L7.16634 20.75ZM7.87467 18.625L9.99967 17.7083L12.1663 18.625L13.333 16.625L15.6247 16.0833L15.4163 13.75L16.958 12L15.4163 10.2083L15.6247 7.875L13.333 7.375L12.1247 5.375L9.99967 6.29167L7.83301 5.375L6.66634 7.375L4.37467 7.875L4.58301 10.2083L3.04134 12L4.58301 13.75L4.37467 16.125L6.66634 16.625L7.87467 18.625ZM9.12467 14.9583L13.833 10.25L12.6663 9.04167L9.12467 12.5833L7.33301 10.8333L6.16634 12L9.12467 14.9583Z" fill="#6366F1" />
                                </svg>
                                <span>B2B Verified Data</span>
                            </div>
                            <div className="d-flex align-items-center gap-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
                                    <path d="M7.16634 20.75L5.58301 18.0833L2.58301 17.4167L2.87467 14.3333L0.833008 12L2.87467 9.66667L2.58301 6.58333L5.58301 5.91667L7.16634 3.25L9.99967 4.45833L12.833 3.25L14.4163 5.91667L17.4163 6.58333L17.1247 9.66667L19.1663 12L17.1247 14.3333L17.4163 17.4167L14.4163 18.0833L12.833 20.75L9.99967 19.5417L7.16634 20.75ZM7.87467 18.625L9.99967 17.7083L12.1663 18.625L13.333 16.625L15.6247 16.0833L15.4163 13.75L16.958 12L15.4163 10.2083L15.6247 7.875L13.333 7.375L12.1247 5.375L9.99967 6.29167L7.83301 5.375L6.66634 7.375L4.37467 7.875L4.58301 10.2083L3.04134 12L4.58301 13.75L4.37467 16.125L6.66634 16.625L7.87467 18.625ZM9.12467 14.9583L13.833 10.25L12.6663 9.04167L9.12467 12.5833L7.33301 10.8333L6.16634 12L9.12467 14.9583Z" fill="#6366F1" />
                                </svg>
                                <span>API-First Integration</span>
                            </div>
                        </div>
                        <a href="https://app.theboomerang.co/login?menu=Signup" className="btn btn-tertiary gap-3 mx-auto fs-18" target="_blank">Get Started Free <img src={BtnArr} alt="" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
