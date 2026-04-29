import "./InfraBanner.css"
import InfraBgLeft from "../../assets/images/infra-ban-bg-left.png"
import InfraBgRight from "../../assets/images/infra-ban-bg-right.png"
import BtnArr from "../../assets/images/btn-arr-wh.svg"
import InfraImg from "../../assets/images/infra-img.svg"

const InfraBanner = () => {
    return (
        <section className="infra-banner position-relative">
            <img src={InfraBgLeft} alt="" className="infra-bg-left position-absolute" />
            <img src={InfraBgRight} alt="" className="infra-bg-right position-absolute" />
            <div className="container position-relative">
                <div className="row text-center justify-content-center">
                    <div className="col-xxl-9 mb-4 pb-2">
                        <h1 className="main-h1 mb-3">One platform for complete <span>cold email infrastructure</span></h1>
                        <p className="mx-auto mb-4 pb-2 fs-18 text-muted">One platform to set up, manage, and scale cold email infrastructure.</p>
                        <a href="https://app.theboomerang.co/login?menu=Signup" className="btn btn-primary mx-auto gap-2 py-3" target="_blank">Get Started <img src={BtnArr} alt="" /></a>
                    </div>
                    <div className="col-12">
                        <img src={InfraImg} alt="" className="infra-ban-img w-100" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfraBanner;