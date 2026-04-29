import "./FAQ.css"
import { useMemo, useState } from "react";
import FaqArr from "../../assets/images/faq-arr.svg"
import FaqActiveArr from "../../assets/images/faq-active-arr.svg"
import FaqChevron from "../../assets/images/faq-chevron.svg"
import BtnArr from "../../assets/images/btn-arr-pr.svg"

const FAQ = ({
    heading = "Frequently Asked Questions",
    tabbed = false,
    items,
    tabs,
    className = "",
    defaultActiveTabIndex = 0,
}) => {
    const safeItems = useMemo(() => (Array.isArray(items) ? items : []), [items]);
    const safeTabs = useMemo(() => (Array.isArray(tabs) ? tabs : []), [tabs]);

    const itemsByTabKey = useMemo(() => {
        const map = new Map();
        for (const it of safeItems) {
            const key = it?.tabKey;
            if (!key) continue;
            if (!map.has(key)) map.set(key, []);
            map.get(key).push(it);
        }
        return map;
    }, [safeItems]);

    const [activeTabIndex, setActiveTabIndex] = useState(() => {
        const idx = Math.trunc(defaultActiveTabIndex);
        return Number.isFinite(idx) ? idx : 0;
    });
    const [openIndexByTab, setOpenIndexByTab] = useState({});
    const [openIndex, setOpenIndex] = useState(null);

    const safeActiveTabIndex = tabbed
        ? Math.min(Math.max(activeTabIndex, 0), Math.max(safeTabs.length - 1, 0))
        : 0;

    const activeOpenIndex = tabbed ? openIndexByTab[safeActiveTabIndex] ?? null : openIndex;

    const toggleOpen = (idx) => {
        if (tabbed) {
            setOpenIndexByTab((prev) => ({
                ...prev,
                [safeActiveTabIndex]: prev[safeActiveTabIndex] === idx ? null : idx,
            }));
            return;
        }
        setOpenIndex((prev) => (prev === idx ? null : idx));
    };

    return (
        <section className={`faq-sec ${className}`}>
            <div className="container">
                <div className="row mb-5 pb-2">
                    <div className="col-12">
                        <h2 className="main-h2 text-center mb-3">{heading}</h2>
                        <a href="#" className="btn text-primary gap-2 mx-auto">Still have questions? <img src={BtnArr} alt="" /></a>
                    </div>
                </div>
                <div className="row justify-content-center row-gap-50">
                    {tabbed ? (
                        <div className="col-lg-4 col-md-5 pe-lg-5">
                            <div className="faq-tab-list d-flex flex-column gap-3">
                                {safeTabs.map((t, idx) => (
                                    <button
                                        key={t.key ?? t.title ?? idx}
                                        type="button"
                                        className={`btn d-flex align-items-center fs-18 w-100 no-hover justify-content-between ${idx === safeActiveTabIndex ? "active" : ""}`}
                                        onClick={() => setActiveTabIndex(Math.min(Math.max(idx, 0), Math.max(safeTabs.length - 1, 0)))}
                                    >
                                        {t.title} <img src={idx === safeActiveTabIndex ? FaqActiveArr : FaqArr} alt="" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : null}

                    <div className={`col-lg-8 ${tabbed ? "col-md-7" : ""}`}>
                        {tabbed ? (
                            <div className="faq-panels">
                                {safeTabs.map((t, tabIdx) => {
                                    const panelItems = itemsByTabKey.get(t.key) ?? [];
                                    const panelOpenIndex = openIndexByTab[tabIdx] ?? null;
                                    const isActive = tabIdx === safeActiveTabIndex;

                                    return (
                                        <div
                                            key={t.key ?? t.title ?? tabIdx}
                                            className={`faq-panel ${isActive ? "active" : ""}`}
                                        >
                                            <div className="faq-tab-content d-flex flex-column gap-3">
                                                {panelItems.map((it, idx) => {
                                                    const isOpen = panelOpenIndex === idx;

                                                    return (
                                                        <div key={it.id ?? it.question ?? idx} className={`faq-item ${isOpen ? "open" : ""}`}>
                                                            <button
                                                                type="button"
                                                                className="faq-head btn no-hover d-flex align-items-center fs-18 fw-medium justify-content-between w-100"
                                                                onClick={() => {
                                                                    if (!isActive) setActiveTabIndex(tabIdx);
                                                                    if (tabbed) {
                                                                        setOpenIndexByTab((prev) => ({
                                                                            ...prev,
                                                                            [tabIdx]: prev[tabIdx] === idx ? null : idx,
                                                                        }));
                                                                    }
                                                                }}
                                                            >
                                                                <span>{it.question}</span>
                                                                <img className="faq-chevron" src={FaqChevron} alt="" />
                                                            </button>
                                                            <div className="faq-content fs-16">
                                                                <p>{it.answer}</p>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="faq-tab-content d-flex flex-column gap-3">
                                {safeItems.map((it, idx) => {
                                    const isOpen = activeOpenIndex === idx;
                                    return (
                                        <div key={it.id ?? it.question ?? idx} className={`faq-item ${isOpen ? "open" : ""}`}>
                                            <button
                                                type="button"
                                                className="faq-head btn no-hover d-flex align-items-center fs-18 fw-medium justify-content-between w-100"
                                                onClick={() => toggleOpen(idx)}
                                            >
                                                <span>{it.question}</span>
                                                <img className="faq-chevron" src={FaqChevron} alt="" />
                                            </button>
                                            <div className="faq-content fs-16">
                                                <p>{it.answer}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
