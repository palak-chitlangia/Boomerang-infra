import "./ColdEmail.css";
import InboxIcon from "../../assets/images/inbox-icon.svg";
import CodeIcon from "../../assets/images/code-icon.svg";
import PuzzleIcon from "../../assets/images/puzzle-icon.svg";
import BoltIcon from "../../assets/images/bolt-icon.svg";
import EngageIcon from "../../assets/images/engage-icon.svg";
import ControlIcon from "../../assets/images/control-icon.svg";
import TeamIcon from "../../assets/images/team-icon.svg";
import RobotIcon from "../../assets/images/robot-icon.svg";

const ColdEmail = () => {
    return (
        <section className="cold-email-sec pt-5 mt-lg-5 mt-md-4 mt-3">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="main-h2 text-md-center mb-2 col-xl-12 col-lg-8 col-md-9 mx-auto">Cold Email Infrastructure That Works At Scale</h2>
                        <p className="text-md-center text-muted col-xl-7 col-lg-8 col-md-10 mx-auto mb-md-5 mb-4 pb-md-0 pb-2">Scale your outreach with confidence using infrastructure built for volume and reliable deliverability.</p>
                        <div className="cold-mail-grid d-grid gap-30 mb-5 pb-lg-4">
                            <div className="cold-mail-item">
                                <img src={InboxIcon} alt="" className="mb-4" />
                                <h4 className="mb-3">High Inbox Placement</h4>
                                <p className="fs-14 text-muted mb-0">Official Google mailboxes pre configured for maximum reach.</p>
                            </div>
                            <div className="cold-mail-item">
                                <img src={CodeIcon} alt="" className="mb-4" />
                                <h4 className="mb-3">Developer-Friendly API</h4>
                                <p className="fs-14 text-muted mb-0">Build custom workflows with webhooks and integrate directly into your existing stack.</p>
                            </div>
                            <div className="cold-mail-item">
                                <img src={PuzzleIcon} alt="" className="mb-4" />
                                <h4 className="mb-3">Works With Your Stack</h4>
                                <p className="fs-14 text-muted mb-0">Works seamlessly with every major email tool, CRM, and automation platform.</p>
                            </div>
                            <div className="cold-mail-item">
                                <img src={BoltIcon} alt="" className="mb-4" />
                                <h4 className="mb-3">Setup in few hours</h4>
                                <p className="fs-14 text-muted mb-0">Get started in few hours with our streamlined onboarding and instant provisioning.</p>
                            </div>
                            <div className="cold-mail-item">
                                <img src={EngageIcon} alt="" className="mb-4" />
                                <h4 className="mb-3">Engagement Insights</h4>
                                <p className="fs-14 text-muted mb-0">Track opens, clicks, and replies through a simple reporting view.</p>
                            </div>
                            <div className="cold-mail-item">
                                <img src={ControlIcon} alt="" className="mb-4" />
                                <h4 className="mb-3">Centralised Control</h4>
                                <p className="fs-14 text-muted mb-0">Complete management of your email infrastructure.</p>
                            </div>
                            <div className="cold-mail-item">
                                <img src={TeamIcon} alt="" className="mb-4" />
                                <h4 className="mb-3">Team Access</h4>
                                <p className="fs-14 text-muted mb-0">Add multiple users and manage access across team as needed.</p>
                            </div>
                            <div className="cold-mail-item">
                                <img src={RobotIcon} alt="" className="mb-4" />
                                <h4 className="mb-3">Infra Automation</h4>
                                <p className="fs-14 text-muted mb-0">Setup, DNS, and warmups we handle it all so you can focus on writing emails.</p>
                            </div>
                        </div>
                        <a href="https://app.theboomerang.co/login?menu=Signup" className="btn btn-primary mx-auto py-3" target="_blank">Ready to boost your deliverability? Get started today</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ColdEmail;