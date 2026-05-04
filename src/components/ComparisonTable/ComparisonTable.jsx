import { useState } from "react";
import "./ComparisonTable.css";
import CheckIconPr from "../../assets/images/check-icon-pr.svg";
import CheckIconGr from "../../assets/images/check-icon-gr.svg";
import CrossIcon from "../../assets/images/cross-icon.svg";

const ComparisonTable = () => {
    const tabs = [
        { key: "all", label: "All Features" },
        { key: "infrastructure", label: "Infrastructure" },
        { key: "deliverability", label: "Deliverability" },
        { key: "management", label: "Management" },
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].key);

    const tabTableContent = {
        all: (
            <div className="pack-comp-table overflow-auto mx-auto">
                <div className="comp-table-cont">
                    <div className="comp-table-row comp-table-head d-grid">
                        <div className="comp-table-cell comp-table-head-item fs-16 text-muted">Features</div>
                        <div className="comp-table-cell comp-table-head-item text-center boom-cell">Boomerang</div>
                        <div className="comp-table-cell comp-table-head-item text-center text-muted fs-16">Inboxkit</div>
                        <div className="comp-table-cell comp-table-head-item text-center text-muted fs-16">ZapMail</div>
                    </div>
                    <div className="comp-table-row d-grid">
                        <div className="comp-table-cell">
                            <p className="fs-16 fw-bold mb-1">Google Reseller</p>
                            <p className="fs-14 text-muted mb-0">Official reseller with enhanced infrastructure</p>
                        </div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 boom-cell"><img src={CheckIconPr} alt="" /></div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10"><img src={CheckIconGr} alt="" /></div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10"><img src={CrossIcon} alt="" /></div>
                    </div>
                    <div className="comp-table-row d-grid">
                        <div className="comp-table-cell">
                            <p className="fs-16 fw-bold mb-1">API Access</p>
                            <p className="fs-14 text-muted mb-0">Full API with webhooks for automation</p>
                        </div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 boom-cell"><img src={CheckIconPr} alt="" /></div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10"><img src={CheckIconGr} alt="" /></div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10"><img src={CrossIcon} alt="" /></div>
                    </div>
                    <div className="comp-table-row d-grid">
                        <div className="comp-table-cell">
                            <p className="fs-16 fw-bold mb-1">Platform Integrations</p>
                            <p className="fs-14 text-muted mb-0">Number of email platform imports supported</p>
                        </div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 boom-cell fw-bold">
                            17
                            <div className="comp-progress-bar w-100">
                                <div className="comp-progress h-100" style={{ width: "85%" }}></div>
                            </div>
                        </div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 fs-16 text-muted">
                            17
                            <div className="comp-progress-bar w-100">
                                <div className="comp-progress h-100" style={{ width: "75%" }}></div>
                            </div>
                        </div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 fs-16 text-muted">
                            5
                            <div className="comp-progress-bar w-100">
                                <div className="comp-progress h-100" style={{ width: "20%" }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="comp-table-row d-grid">
                        <div className="comp-table-cell">
                            <p className="fs-16 fw-bold mb-1">Add-on Mailbox</p>
                            <p className="fs-14 text-muted mb-0">Cost per additional mailbox setup</p>
                        </div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 boom-cell fs-18 fw-bold">$1.8</div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 fs-16 text-muted">$3</div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 fs-16 text-muted">$3</div>
                    </div>
                    <div className="comp-table-row d-grid">
                        <div className="comp-table-cell">
                            <p className="fs-16 fw-bold mb-1">Deliverability Rate</p>
                            <p className="fs-14 text-muted mb-0">Average inbox placement rate</p>
                        </div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 boom-cell fs-18 fw-bold">
                            95%
                            <div className="comp-progress-bar w-100">
                                <div className="comp-progress h-100" style={{ width: "95%" }}></div>
                            </div>
                        </div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 fs-16 text-muted">95%</div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 fs-16 text-muted">No Guarantee</div>
                    </div>
                    <div className="comp-table-row d-grid">
                        <div className="comp-table-cell">
                            <p className="fs-16 fw-bold mb-1">Auto DNS Configuration</p>
                            <p className="fs-14 text-muted mb-0">DKIM, DMARC, SPF setup without knowledge</p>
                        </div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 boom-cell"><img src={CheckIconPr} alt="" /></div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10"><img src={CheckIconGr} alt="" /></div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10"><img src={CheckIconGr} alt="" /></div>
                    </div>
                    <div className="comp-table-row d-grid">
                        <div className="comp-table-cell">
                            <p className="fs-16 fw-bold mb-1">Setup Time</p>
                            <p className="fs-14 text-muted mb-0">Time from signup to sending first email</p>
                        </div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 boom-cell fs-18 fw-bold">Within 6 hours</div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 fs-16 text-muted">10 minutes</div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 fs-16 text-muted">4-6 hours</div>
                    </div>
                </div>
            </div>
        ),

        infrastructure: (
            <div className="pack-comp-table overflow-auto mx-auto">
                <div className="comp-table-cont">
                    <div className="comp-table-row comp-table-head d-grid">
                        <div className="comp-table-cell comp-table-head-item fs-16 text-muted">Features</div>
                        <div className="comp-table-cell comp-table-head-item text-center boom-cell">Boomerang</div>
                        <div className="comp-table-cell comp-table-head-item text-center text-muted fs-16">Inboxkit</div>
                        <div className="comp-table-cell comp-table-head-item text-center text-muted fs-16">ZapMail</div>
                    </div>
                    <div className="comp-table-row d-grid">
                        <div className="comp-table-cell">
                            <p className="fs-16 fw-bold mb-1">Google Reseller</p>
                            <p className="fs-14 text-muted mb-0">Official reseller with enhanced infrastructure</p>
                        </div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 boom-cell"><img src={CheckIconPr} alt="" /></div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10"><img src={CheckIconGr} alt="" /></div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10"><img src={CrossIcon} alt="" /></div>
                    </div>
                    <div className="comp-table-row d-grid">
                        <div className="comp-table-cell">
                            <p className="fs-16 fw-bold mb-1">Auto DNS Configuration</p>
                            <p className="fs-14 text-muted mb-0">DKIM, DMARC, SPF setup without knowledge</p>
                        </div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 boom-cell"><img src={CheckIconPr} alt="" /></div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10"><img src={CheckIconGr} alt="" /></div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10"><img src={CheckIconGr} alt="" /></div>
                    </div>
                    <div className="comp-table-row d-grid">
                        <div className="comp-table-cell">
                            <p className="fs-16 fw-bold mb-1">Setup Time</p>
                            <p className="fs-14 text-muted mb-0">Time from signup to sending first email</p>
                        </div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 boom-cell fs-18 fw-bold">Within 6 hours</div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 fs-16 text-muted">10 minutes</div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 fs-16 text-muted">4-6 hours</div>
                    </div>
                </div>
            </div>
        ),

        deliverability: (
            <div className="pack-comp-table overflow-auto mx-auto">
                <div className="comp-table-cont">
                    <div className="comp-table-row comp-table-head d-grid">
                        <div className="comp-table-cell comp-table-head-item fs-16 text-muted">Features</div>
                        <div className="comp-table-cell comp-table-head-item text-center boom-cell">Boomerang</div>
                        <div className="comp-table-cell comp-table-head-item text-center text-muted fs-16">Inboxkit</div>
                        <div className="comp-table-cell comp-table-head-item text-center text-muted fs-16">ZapMail</div>
                    </div>
                    <div className="comp-table-row d-grid">
                        <div className="comp-table-cell">
                            <p className="fs-16 fw-bold mb-1">Deliverability Rate</p>
                            <p className="fs-14 text-muted mb-0">Average inbox placement rate</p>
                        </div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 boom-cell fs-18 fw-bold">
                            95%
                            <div className="comp-progress-bar w-100">
                                <div className="comp-progress h-100" style={{ width: "95%" }}></div>
                            </div>
                        </div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 fs-16 text-muted">95%</div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 fs-16 text-muted">No Guarantee</div>
                    </div>
                </div>
            </div>
        ),

        management: (
            <div className="pack-comp-table overflow-auto mx-auto">
                <div className="comp-table-cont">
                    <div className="comp-table-row comp-table-head d-grid">
                        <div className="comp-table-cell comp-table-head-item fs-16 text-muted">Features</div>
                        <div className="comp-table-cell comp-table-head-item text-center boom-cell">Boomerang</div>
                        <div className="comp-table-cell comp-table-head-item text-center text-muted fs-16">Inboxkit</div>
                        <div className="comp-table-cell comp-table-head-item text-center text-muted fs-16">ZapMail</div>
                    </div>
                    <div className="comp-table-row d-grid">
                        <div className="comp-table-cell">
                            <p className="fs-16 fw-bold mb-1">API Access</p>
                            <p className="fs-14 text-muted mb-0">Full API with webhooks for automation</p>
                        </div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 boom-cell"><img src={CheckIconPr} alt="" /></div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10"><img src={CheckIconGr} alt="" /></div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10"><img src={CrossIcon} alt="" /></div>
                    </div>
                    <div className="comp-table-row d-grid">
                        <div className="comp-table-cell">
                            <p className="fs-16 fw-bold mb-1">Platform Integrations</p>
                            <p className="fs-14 text-muted mb-0">Number of email platform imports supported</p>
                        </div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 boom-cell fw-bold">
                            17
                            <div className="comp-progress-bar w-100">
                                <div className="comp-progress h-100" style={{ width: "85%" }}></div>
                            </div>
                        </div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 fs-16 text-muted">
                            17
                            <div className="comp-progress-bar w-100">
                                <div className="comp-progress h-100" style={{ width: "75%" }}></div>
                            </div>
                        </div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 fs-16 text-muted">
                            5
                            <div className="comp-progress-bar w-100">
                                <div className="comp-progress h-100" style={{ width: "20%" }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="comp-table-row d-grid">
                        <div className="comp-table-cell">
                            <p className="fs-16 fw-bold mb-1">Add-on Mailbox</p>
                            <p className="fs-14 text-muted mb-0">Cost per additional mailbox setup</p>
                        </div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 boom-cell fs-18 fw-bold">$1.8</div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 fs-16 text-muted">$3</div>
                        <div className="comp-table-cell d-flex flex-column align-items-center justify-content-center gap-10 fs-16 text-muted">$3</div>
                    </div>
                </div>
            </div>
        ),
    };


    return (
        <section className="comparison-table-sec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-10 text-center px-md-4 mb-4">
                        <h2 className="main-h2 mb-3">Why we lead the pack</h2>
                        <p className="fs-18 text-muted">As the official <span className="fw-bold text-primary">Google Reseller</span> in the cold email infrastructure space, we provide unparalleled deliverability and scale.</p>
                    </div>
                    <div className="col-12">
                        <div className="pack-comp-tabs">
                            <div className="pack-comp-tab-header d-flex justify-content-center gap-10 mb-5 pb-lg-3 flex-wrap" role="tablist" aria-label="Comparison table tabs">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.key}
                                        type="button"
                                        className={`btn no-hover ${activeTab === tab.key ? "active" : ""}`}
                                        role="tab"
                                        id={`pack-comp-tab-${tab.key}`}
                                        aria-selected={activeTab === tab.key}
                                        aria-controls={`pack-comp-panel-${tab.key}`}
                                        tabIndex={activeTab === tab.key ? 0 : -1}
                                        onClick={() => setActiveTab(tab.key)}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                            <div className="pack-comp-content">
                                {tabs.map((tab) => (
                                    <div
                                        key={tab.key}
                                        className={`pack-comp-panel ${activeTab === tab.key ? "is-active" : "is-inactive"}`}
                                        role="tabpanel"
                                        id={`pack-comp-panel-${tab.key}`}
                                        aria-labelledby={`pack-comp-tab-${tab.key}`}
                                        aria-hidden={activeTab !== tab.key}
                                    >
                                        {tabTableContent[tab.key]}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;