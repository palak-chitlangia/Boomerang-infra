import "./Subscriptions.css";
import { useState } from "react";
import SubsIcon from "../../assets/images/subs-icon.svg";
import AgencyIcon from "../../assets/images/agency-icon.svg";
import BtnArr from "../../assets/images/btn-arr-wh-lg.svg";
import TickIcon from "../../assets/images/tick-icon-gr.svg";

const Subscriptions = () => {
    const [activeTab, setActiveTab] = useState("plans");

    const subscriptionTabContent = (
        <div className="subscription-details bg-white mx-auto">
            <div className="d-flex align-items-md-center align-items-start justify-content-between flex-md-row flex-column gap-30 mb-5">
                <div>
                    <h3 className="main-h2 mb-2">Subscription Details</h3>
                    <p className="fs-14 mb-0">
                        Perfect for teams of all sizes. Scale up or down as needed.
                    </p>
                </div>
                <div className="subs-tag fs-12 fw-bold text-primary">Flexible Scaling</div>
            </div>

            <div className="row g-3 mb-5">
                <div className="col-md-4">
                    <div className="subscription-card bg-off h-100">
                        <p className="fs-14 mb-0 fw-medium">Google Workspace</p>
                        <p className="fs-14 mb-0 fw-medium text-accent">
                            $2/mailbox/month
                        </p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="subscription-card bg-off h-100">
                        <p className="fs-14 mb-0 fw-medium">Microsoft 365</p>
                        <p className="fs-14 mb-0 fw-medium text-accent">
                            Coming soon
                        </p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="subscription-card bg-off h-100">
                        <p className="fs-14 mb-0 fw-medium">Enterprise Azure</p>
                        <p className="fs-14 mb-0 fw-medium text-accent">
                            Coming soon
                        </p>
                    </div>
                </div>
            </div>

            <a href="https://app.theboomerang.co/login?menu=Signup" className="btn btn-primary gap-3 fs-18 w-100 rounded-4 py-3 px-4" target="_blank">
                Get Started for Free <img src={BtnArr} alt="" />
            </a>
        </div>
    );

    const agencyTabContent = (
        <div className="subscription-details bg-white mx-auto">
            <div className="d-flex align-items-md-center align-items-start justify-content-between flex-md-row flex-column gap-30 mb-5">
                <div>
                    <h3 className="main-h2 mb-2">Subscription Details</h3>
                    <p className="fs-14 mb-0">
                        Perfect for teams of all sizes. Scale up or down as needed.
                    </p>
                </div>
                <div className="subs-tag fs-12 fw-bold text-primary">Flexible Scaling</div>
            </div>

            <div className="row g-3 mb-5">
                <div className="col-md-4">
                    <div className="subscription-card bg-off h-100">
                        <p className="fs-14 mb-0 fw-medium">Google Workspace</p>
                        <p className="fs-14 mb-0 fw-medium text-accent">
                            Custom pricing
                        </p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="subscription-card bg-off h-100">
                        <p className="fs-14 mb-0 fw-medium">Microsoft 365</p>
                        <p className="fs-14 mb-0 fw-medium text-accent">
                            Coming soon
                        </p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="subscription-card bg-off h-100">
                        <p className="fs-14 mb-0 fw-medium">Enterprise Azure</p>
                        <p className="fs-14 mb-0 fw-medium text-accent">
                            Coming soon
                        </p>
                    </div>
                </div>
            </div>

            <a href="https://app.theboomerang.co/login?menu=Signup" className="btn btn-primary gap-3 fs-18 w-100 rounded-4 py-3 px-4" target="_blank">
                Get Started for Free <img src={BtnArr} alt="" />
            </a>
        </div>
    );

    return (
        <section className="subscriptions-sec bg-off">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="main-h2 text-center mb-2">
                            Simple pricing that scales with you
                        </h2>
                        <p className="text-center text-muted mx-auto mb-5">
                            All the power of Google Workspace & Microsoft 365.
                        </p>

                        <div className="subcription-tabs d-flex align-items-center flex-column mb-5 pb-4">
                            <div className="subscription-tabs-header d-flex align-items-center gap-10 mb-5 flex-wrap">
                                <button
                                    type="button"
                                    className={`btn no-hover flex-grow-1 gap-10 ${
                                        activeTab === "plans" ? "active" : ""
                                    }`}
                                    onClick={() => setActiveTab("plans")}
                                >
                                    <img src={SubsIcon} alt="" />
                                    Subscription Plans
                                </button>

                                <button
                                    type="button"
                                    className={`btn no-hover flex-grow-1 gap-10 ${
                                        activeTab === "agency" ? "active" : ""
                                    }`}
                                    onClick={() => setActiveTab("agency")}
                                >
                                    <img src={AgencyIcon} alt="" />
                                    Agency / Enterprise
                                </button>
                            </div>

                            {/* Animated Content */}
                            <div
                                key={activeTab}
                                className="subscription-tabs-content w-100 tab-animate show"
                            >
                                {activeTab === "plans"
                                    ? subscriptionTabContent
                                    : agencyTabContent}
                            </div>
                        </div>

                        <p className="fs-16 text-center text-muted fw-medium mb-5">
                            All Plans Include
                        </p>

                        <div className="row fs-16 fw-medium text-muted row-gap-15">
                            <div className="plan-include-col col-md-4 d-flex flex-column gap-35">
                                <div className="d-flex align-items-center gap-10">
                                    <img src={TickIcon} alt="" />
                                    Boomerag protection
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                    <img src={TickIcon} alt="" />
                                    Profile pictures & email forwarding
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                    <img src={TickIcon} alt="" />
                                    Full DNS security (SPF, DKIM, DMARC)
                                </div>
                            </div>

                            <div className="plan-include-col col-md-4 d-flex flex-column gap-35">
                                <div className="d-flex align-items-center gap-10">
                                    <img src={TickIcon} alt="" />
                                    Inbox Placement Tests
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                    <img src={TickIcon} alt="" />
                                    2FA app passwords
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                    <img src={TickIcon} alt="" />
                                    Unlimited workspaces & API access
                                </div>
                            </div>

                            <div className="plan-include-col col-md-4 d-flex flex-column gap-35">
                                <div className="d-flex align-items-center gap-10">
                                    <img src={TickIcon} alt="" />
                                    Email Insights
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                    <img src={TickIcon} alt="" />
                                    Auto-reconnect with 16+ sequencers
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                    <img src={TickIcon} alt="" />
                                    95% inbox rate & 24/7 support
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscriptions;
