import "./FeaturesStrip.css"
import ShieldIcon from "../../assets/images/shield-icon.svg"
import TickIcon from "../../assets/images/tick-icon.svg"
import ClockIcon from "../../assets/images/clock-icon.svg"
import LockIcon from "../../assets/images/lock-icon.svg"
import GraphIcon from "../../assets/images/graph-icon.svg"

const FeaturesStrip = () => {
    return (
        <section className="features-strip bg-primary text-white">
            <div className="container">
                <div className="features-list d-grid  fs-18 fw-semibold">
                    <div className="feature-item d-flex align-items-center justify-content-center gap-10">
                        <img src={ShieldIcon} alt="" />
                        <span>Zero manual work</span>
                    </div>
                    <div className="feature-item d-flex align-items-center justify-content-center gap-10">
                        <img src={TickIcon} alt="" />
                        <span>95% inbox delivery</span>
                    </div>
                    <div className="feature-item d-flex align-items-center justify-content-center gap-10">
                        <img src={ClockIcon} alt="" />
                        <span>Ready in few hours</span>
                    </div>
                    <div className="feature-item d-flex align-items-center justify-content-center gap-10">
                        <img src={LockIcon} alt="" />
                        <span>Single admin</span>
                    </div>
                    <div className="feature-item d-flex align-items-center justify-content-center gap-10">
                        <img src={GraphIcon} alt="" />
                        <span>Unlimited tests</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesStrip;