import "./FAQ.css"
import { useMemo, useState, useRef, useEffect } from "react";
import FaqArr from "../../assets/images/faq-arr.svg"
import FaqActiveArr from "../../assets/images/faq-active-arr.svg"
import FaqChevron from "../../assets/images/faq-chevron.svg"
import BtnArr from "../../assets/images/btn-arr-or.svg"

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
        <button
            type="button"
            className="faq-head btn no-hover fs-18 fw-medium d-flex align-items-center justify-content-between gap-20 w-100"
            onClick={onToggle}
        >
            <span>{question}</span>
            <img className="faq-chevron flex-shrink-0" src={FaqChevron} alt="" />
        </button>
        <div className="faq-content fs-16">
            <p>{answer}</p>
        </div>
    </div>
);

const FAQ = ({
    heading = "Frequently Asked Questions",
    tabbed = false,
    items = [],
    tabs = [],
    className = "",
    defaultActiveTabIndex = 0,
}) => {
    const safeItems = useMemo(() => (Array.isArray(items) ? items : []), [items]);
    const safeTabs = useMemo(() => (Array.isArray(tabs) ? tabs : []), [tabs]);

    const [activeTabIndex, setActiveTabIndex] = useState(() => {
        const idx = Math.trunc(defaultActiveTabIndex);
        return Number.isFinite(idx) ? idx : 0;
    });

    const [openedItems, setOpenedItems] = useState({}); // Stores { tabIndex: itemIndex }
    const tabRefs = useRef([]);

    const itemsByTabKey = useMemo(() => {
        const map = new Map();
        safeItems.forEach((it) => {
            if (it?.tabKey) {
                if (!map.has(it.tabKey)) map.set(it.tabKey, []);
                map.get(it.tabKey).push(it);
            }
        });
        return map;
    }, [safeItems]);

    const handleTabClick = (idx) => {
        setActiveTabIndex(idx);

        // Small delay ensures the layout has updated relative to the new active tab
        setTimeout(() => {
            if (tabRefs.current[idx] && window.innerWidth <= 767) {
                const element = tabRefs.current[idx];
                const offset = 70;
                const top = element.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({
                    top,
                    behavior: "smooth",
                });
            }
        }, 10);
    };

    const toggleItem = (tabIdx, itemIdx) => {
        setOpenedItems((prev) => ({
            ...prev,
            [tabIdx]: prev[tabIdx] === itemIdx ? null : itemIdx,
        }));
    };

    const renderFaqList = (list, tabIdx) => (
        <div className="faq-tab-content d-flex flex-column gap-3">
            {list.map((it, idx) => (
                <FAQItem
                    key={it.id || it.question || idx}
                    question={it.question}
                    answer={it.answer}
                    isOpen={openedItems[tabIdx] === idx}
                    onToggle={() => toggleItem(tabIdx, idx)}
                />
            ))}
        </div>
    );

    return (
        <section className={`faq-sec bg-off ${className}`}>
            <div className="container">
                {tabbed && (
                    <div className="row mb-md-5 mb-4 pb-md-3">
                        <div className="col-12 text-lg-center">
                            <h2 className="main-h2 mb-4">{heading}</h2>
                            <a href="#" className="faq-cta btn text-accent p-0 gap-2 mx-lg-auto">
                                Still have questions? <img src={BtnArr} alt="" />
                            </a>
                        </div>
                    </div>
                )}

                <div className="row g-lg-5 justify-content-between row-gap-40">
                    <div className="col-md-4 pe-lg-5">
                        {!tabbed ? (
                            <>
                                <h2 className="main-h2 mb-4">{heading}</h2>
                                <a href="#" className="faq-cta btn text-accent p-0 gap-2 mb-lg-5 mb-md-4 mb-2">
                                    Still have questions? <img src={BtnArr} alt="" />
                                </a>
                            </>
                        ) : (
                            <div className="faq-tab-list d-flex flex-column gap-lg-2">
                                {safeTabs.map((t, idx) => {
                                    const isActive = idx === activeTabIndex;
                                    return (
                                        <div
                                            key={t.key || idx}
                                            className="faq-tab-group"
                                            ref={(el) => { if (el) tabRefs.current[idx] = el; }}
                                        >
                                            <button
                                                type="button"
                                                className={`btn d-flex align-items-center fs-18 w-100 no-hover justify-content-between ${isActive ? "active" : ""}`}
                                                onClick={() => handleTabClick(idx)}
                                            >
                                                {t.title}
                                                <img src={isActive ? FaqActiveArr : FaqArr} alt="" />
                                            </button>
                                            <div className={`d-md-none faq-panel-mobile pt-2 pb-3 ${isActive ? "" : "d-none"}`}>
                                                {renderFaqList(itemsByTabKey.get(t.key) || [], idx)}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    <div className={`col-md-8 ${tabbed ? "d-none d-md-block" : ""}`}>
                        {tabbed ? (
                            <div className="faq-panels">
                                {safeTabs.map((t, idx) => (
                                    <div
                                        key={t.key || idx}
                                        className={`faq-panel ${idx === activeTabIndex ? "active" : ""}`}
                                    >
                                        {renderFaqList(itemsByTabKey.get(t.key) || [], idx)}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            renderFaqList(safeItems, 0)
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};




export default FAQ;
