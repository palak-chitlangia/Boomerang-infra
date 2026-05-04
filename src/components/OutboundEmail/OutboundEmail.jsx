import "./OutboundEmail.css";
import InfraHealth from "../../assets/images/infra-health.gif";
import MeterIcon from "../../assets/images/meter-icon.svg";
import DedicateIcon from "../../assets/images/dedicate-icon.svg";
import DnsIcon from "../../assets/images/dns-icon.svg";
import BulkMailIcon from "../../assets/images/bulk-mail-icon.svg";
import SetupImg from "../../assets/images/setup-img.svg";
import PanelsImg from "../../assets/images/panels-img.svg";
import DnsImg from "../../assets/images/dns-img.svg";
import OperationsImg from "../../assets/images/operations-img.svg";

const OutboundEmail = () => {
    return (
        <section className="outbound-email-sec bg-off py-5">
            <div className="container">
                <div className="row mb-md-5 mb-4">
                    <div className="col-12">
                        <h2 className="main-h2 text-md-center col-xl-12 col-lg-8 col-md-9 mx-auto mb-2">Domain Infrastructure for Outbound Email</h2>
                        <p className="text-md-center text-muted col-xl-7 col-lg-8 col-md-10 mx-auto">Connect your domain and complete the required setup so your sending infrastructure is ready to scale.</p>
                    </div>
                </div>
                <div className="row align-items-center mb-5 row-gap-40">
                    <div className="col-lg-6 pe-lg-5">
                        <h3 className="mb-3">Scale your outreach without limits</h3>
                        <p className="fs-14 text-muted mb-4">Our 'Feature Overview Dashboard' provides all the tools you need to maintain a healthy email infrastructure. Buy mailboxes in bulk, isolate reputation per domain, and let our automated systems handle the technical DNS heavy lifting.</p>
                        <a href="https://app.theboomerang.co/login?menu=Signup" className="btn btn-secondary" target="_blank">Get started now</a>
                    </div>
                    <div className="col-lg-6">
                        <img src={InfraHealth} alt="" className="w-100 rounded-4" />
                    </div>
                </div>
                <div className="row row-gap-30">
                    <div className="col-lg-3 col-md-6">
                        <div className="outbound-card h-100 d-flex flex-column justify-content-between">
                            <div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h4 className="mb-0">Quick Setup</h4>
                                    <img src={MeterIcon} alt="" />
                                </div>
                                <p className="fs-14 text-muted mb-3">Ready in few hours. Connect your domain and start sending immediately.</p>
                            </div>
                            <img src={SetupImg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="outbound-card h-100 d-flex flex-column justify-content-between">
                            <div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h4 className="mb-0">Dedicated Panels</h4>
                                    <img src={DedicateIcon} alt="" />
                                </div>
                                <p className="fs-14 text-muted mb-3">Complete isolation means maximum protection and zero cross-contamination.</p>
                            </div>
                            <img src={PanelsImg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="outbound-card h-100 d-flex flex-column justify-content-between">
                            <div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h4 className="mb-0">DNS Configuration</h4>
                                    <img src={DnsIcon} alt="" />
                                </div>
                                <p className="fs-14 text-muted mb-3">DKIM, DMARC, and SPF records configured automatically for inbox placement.</p>
                            </div>
                            <img src={DnsImg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="outbound-card h-100 d-flex flex-column justify-content-between">
                            <div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h4 className="mb-0">Bulk Operations</h4>
                                    <img src={BulkMailIcon} alt="" />
                                </div>
                                <p className="fs-14 text-muted mb-3">Scale quickly with AI-powered setup. Manage hundreds of mailboxes at once.</p>
                            </div>
                            <img src={OperationsImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OutboundEmail;