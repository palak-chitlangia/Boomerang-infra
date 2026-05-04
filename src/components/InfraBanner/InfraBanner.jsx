import "./InfraBanner.css"
import BtnArr from "../../assets/images/btn-arr-wh.svg"
import InfraImg from "../../assets/images/infra-img.svg"

const InfraBanner = () => {
    return (
        <section className="infra-banner position-relative border-bottom">
            <div className="container position-relative">
                <div className="row text-center justify-content-center">
                    <div className="col-lg-9 col-md-11 mb-4 pb-2">
                        <h1 className="main-h1 mb-3"><span>One platform for complete</span> cold email infrastructure</h1>
                        <p className="col-xl-7 mx-auto mb-4 pb-2 fs-18 text-muted">One platform to set up, manage, and scale cold email infrastructure.</p>
                        <a href="https://app.theboomerang.co/login?menu=Signup" className="btn btn-secondary mx-auto gap-2" target="_blank">Get Started <img src={BtnArr} alt="" /></a>
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