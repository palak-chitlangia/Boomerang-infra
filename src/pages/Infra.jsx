import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import InfraBanner from "../components/InfraBanner/InfraBanner";
import FeaturesStrip from "../components/FeaturesStrip/FeaturesStrip";
import TrustedBy from "../components/TrustedBy/TrustedBy";
import ColdEmail from "../components/ColdEmail/ColdEmail";
import OutboundEmail from "../components/OutboundEmail/OutboundEmail";
import ComparisonTable from "../components/ComparisonTable/ComparisonTable";
import Subscriptions from "../components/Subscriptions/Subscriptions";
import ScheduleCall from "../components/ScheduleCall/ScheduleCall";
import FAQ from "../components/FAQ/FAQ";
import CTA from "../components/CTA/CTA";

const Infra = () => {
    const faqItems = [
        {
            question: "What does Boomerang provide?",
            answer: "Boomerang helps you set up and manage cold email infrastructure in one place. This includes domain setup, mailbox provisioning, and tools to manage sending infrastructure without manual overhead.",
        },
        {
            question: "How is Boomerang different from other email infrastructure tools?",
            answer: "Boomerang focuses on simplifying infrastructure management rather than adding complexity. You get centralized control over domains and mailboxes, automation for setup tasks, and flexibility to plug into your existing outreach stack.",
        },
        {
            question: "How quickly can I get started with Boomerang?",
            answer: "Getting started is straightforward. Once you connect your domain, Boomerang handles the required configuration steps so your infrastructure is ready for sending without manual setup.",
        },
        {
            question: "How long does it take to provision mailboxes?",
            answer: "Mailbox provisioning is handled automatically once the setup requirements are completed. Timelines may vary depending on the provider and configuration, but the process is designed to be hands-off.",
        },
        {
            question: "Can I move my existing setup to Boomerang?",
            answer: "Yes. Boomerang is built to work with existing outreach setups, making it easy to transition domains and infrastructure without disrupting your current workflows.",
        },
    ];
    return (
        <div>
            <Header
                TopBar={false}
            />
            <InfraBanner />
            <TrustedBy />
            <ColdEmail />
            <OutboundEmail />
            <ComparisonTable />
            <Subscriptions />
            <ScheduleCall />
            <FAQ
                className="bg-off"
                items={faqItems}
            />
            <CTA />
            <Footer />
        </div>
    );
};

export default Infra;
