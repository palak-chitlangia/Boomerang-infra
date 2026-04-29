import "./ComparisonChart.css";
import BoltLogo from "../../assets/images/bolt-logo.png";
import ScLogo from "../../assets/images/sc-logo.png";
import PhantomLogo from "../../assets/images/phantom-logo.png";
import GhostLogo from "../../assets/images/ghost-logo.png";
import BoomerangLogo from "../../assets/images/boomerang-col-logo.svg";
import EnrLogo from "../../assets/images/enr-logo.png";
import ClayLogo from "../../assets/images/clay-logo.png";
import BcLogo from "../../assets/images/bc-logo.png";
import TrigifyLogo from "../../assets/images/trigify-logo.png";
import LiLogo from "../../assets/images/li-logo.png";
import MentionsLogo from "../../assets/images/mentions-logo.png";
import SyftenLogo from "../../assets/images/syften-logo.png";
import B24Logo from "../../assets/images/b24-logo.png"
import CompCross from "../../assets/images/comp-cross.svg";
import CompTick from "../../assets/images/comp-tick.svg";
import PointerArr from "../../assets/images/pointer-arr.svg";
import PerfectTag from "../../assets/images/perfect-tag.svg";

import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TABS = [
    { key: "sales-navigator", label: "Sales Navigator" },
    { key: "waterfall-enrichment", label: "Waterfall Enrichment" },
    { key: "competitor-followers", label: "Competitor Followers" },
    { key: "social-listening", label: "Social Listening" },
];

const ComparisonChart = ({ defaultActiveTabKey = "sales-navigator", activeTabKey, onTabChange }) => {
    const rootRef = useRef(null);
    const tabsContentRef = useRef(null);
    const isTabsContentInViewportRef = useRef(false);
    const [uncontrolledActiveTabKey, setUncontrolledActiveTabKey] = useState(() => {
        const nextActive = TABS.some((t) => t.key === defaultActiveTabKey) ? defaultActiveTabKey : TABS[0]?.key;
        return nextActive;
    });

    const resolvedActiveTabKey = activeTabKey ?? uncontrolledActiveTabKey;
    const setResolvedActiveTabKey = (nextKey) => {
        if (activeTabKey == null) {
            setUncontrolledActiveTabKey(nextKey);
        }
        onTabChange?.(nextKey);
    };

    const tabs = useMemo(
        () => TABS,
        []
    );

    const tabColumns = useMemo(() => {
        const salesNavigatorCols = [
            {
                logo: ScLogo,
                items: ["Browser extension dependent", "Limited export volumes", "Raw, unprocessed data"],
                price: "$34",
                isBoomerang: false,
            },
            {
                logo: GhostLogo,
                items: ["Automation setup required", "Not reliable at scale", "Raw exports require cleanup"],
                price: "$12",
                isBoomerang: false,
            },
            {
                logo: PhantomLogo,
                items: ["Requires LinkedIn Login", "Struggles with large searches", "Manual cleanup required"],
                price: "$8",
                isBoomerang: false,
            },
            {
                logo: BoltLogo,
                items: ["Active LinkedIn session needed", "Limited result depth", "No enrichment"],
                price: "$2",
                isBoomerang: false,
            },
            {
                logo: BoomerangLogo,
                items: ["No login required", "Handles large searches", "Clean exports with enrichment"],
                price: "$3",
                isBoomerang: true,
            },
        ];

        const waterfallEnrichmentCols = [
            {
                logo: EnrLogo,
                items: ["Focused on person/org data", "Partial, basic cleanup", "Moderate, no deep logic controls"],
                price: "$55",
                isBoomerang: false,
            },
            {
                logo: BcLogo,
                items: ["Limited to contact builds", "Partial cleanup", "Moderate, list-by-list focus"],
                price: "$49",
                isBoomerang: false,
            },
            {
                logo: ClayLogo,
                items: ["General enrichment", "Partial, needs manual cleanup", "Moderate, workflow setup"],
                price: "$27",
                isBoomerang: false,
            },
            {
                logo: BoomerangLogo,
                items: ["Built-in in dashboard and flexible to use", "Clean & Outreach ready data", "Simple, automated workflows"],
                price: "$15",
                isBoomerang: true,
            },
        ];

        const competitorFollowersCols = [
            {
                logo: LiLogo,
                items: ["LinkedIn-based scraping", "LinkedIn login + extension", "Manual steps"],
                price: "$34",
                isBoomerang: false,
            },
            {
                logo: TrigifyLogo,
                items: ["Automation-based scraping", "LinkedIn session required", "Automation setup"],
                price: "$8",
                isBoomerang: false,
            },
            {
                logo: BoomerangLogo,
                items: ["Export competitor followers safely", "No login or extension needed", "Minimal effort"],
                price: "$3",
                isBoomerang: true,
            },
        ];

        const socialListeningCols = [
            {
                logo: B24Logo,
                items: ["3 keywords", "Twitter, Reddit, Instagram, Facebook", "Slack integration available"],
                price: "$199",
                isBoomerang: false,
            },
            {
                logo: MentionsLogo,
                items: ["15 keywords", "Twitter, LinkedIn, Reddit and many more", "No integration available"],
                price: "$79",
                isBoomerang: false,
            },
            {
                logo: SyftenLogo,
                items: ["3 keywords", "Twitter & Youtube monitoring", "Slack integration available"],
                price: "$20",
                isBoomerang: false,
            },
            {
                logo: BoomerangLogo,
                items: ["Unlimited keywords", "Twitter, LinkedIn, Rediit and many more", "Slack integration available"],
                price: "$3",
                isBoomerang: true,
            },
        ];

        return {
            "sales-navigator": salesNavigatorCols,
            "waterfall-enrichment": waterfallEnrichmentCols,
            "competitor-followers": competitorFollowersCols,
            "social-listening": socialListeningCols,
        };
    }, []);

    const animateCols = useCallback(() => {
        const scope = tabsContentRef.current || rootRef.current;
        if (!scope) return;

        const cols = scope.querySelectorAll(".js-comp-col");
        if (!cols.length) return;

        const pointers = scope.querySelectorAll(".comp-pointer");

        gsap.killTweensOf(cols);
        gsap.killTweensOf(pointers);

        gsap.set(cols, { opacity: 0, y: 40 });
        gsap.set(pointers, { opacity: 0, y: 10, scale: 0.98 });

        const tl = gsap.timeline();
        const stagger = 0.12;
        const colDuration = 0.6;

        cols.forEach((col, idx) => {
            const startAt = idx * stagger;

            tl.to(
                col,
                {
                    opacity: 1,
                    y: 0,
                    duration: colDuration,
                    ease: "power3.out",
                    clearProps: "opacity,transform",
                },
                startAt
            );

            const pointer = col.querySelector(".comp-pointer");
            if (pointer) {
                tl.to(
                    pointer,
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.35,
                        ease: "back.out(1.7)",
                        clearProps: "opacity,transform",
                    },
                    startAt + colDuration
                );
            }
        });
    }, []);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!rootRef.current) return;

        const ctx = gsap.context(() => {
            if (!tabsContentRef.current) return;
            ScrollTrigger.create({
                trigger: tabsContentRef.current,
                start: "top 80%",
                end: "bottom 20%",
                onEnter: () => {
                    isTabsContentInViewportRef.current = true;
                    animateCols();
                },
                onEnterBack: () => {
                    isTabsContentInViewportRef.current = true;
                    animateCols();
                },
                onLeave: () => {
                    isTabsContentInViewportRef.current = false;
                },
                onLeaveBack: () => {
                    isTabsContentInViewportRef.current = false;
                },
            });
        }, rootRef);

        return () => {
            ctx.revert();
        };
    }, [animateCols]);

    useLayoutEffect(() => {
        animateCols();
    }, [resolvedActiveTabKey, animateCols]);

    return (
        <section ref={rootRef} className="comparison-chart-sec pt-5 bg-accent">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-8 col-xl-9 col-lg-10 text-center mb-mb-5 mb-4 text-white">
                        <h2 className="main-h2 mb-3">Comparison Chart</h2>
                        <p>
                            A service-by-service comparison of Boomerang and other tools to help you understand
                            feature coverage and pricing differences.
                        </p>
                    </div>

                    <div className="col-12">
                        <div className="comparison-tabs">
                            <div className="overflow-auto">
                            <div className="comparison-tabs-header d-flex align-items-end justify-content-center mb-5 pb-2 mx-auto">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.key}
                                        type="button"
                                        className={`col btn gap-10 no-hover${resolvedActiveTabKey === tab.key ? " active" : ""}`}
                                        onClick={() => setResolvedActiveTabKey(tab.key)}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                            </div>
                            <div ref={tabsContentRef} className="comp-tabs-content bg-white d-flex align-items-end">
                                <div key={resolvedActiveTabKey} className="mx-auto active">
                                    <div className="comp-cols d-flex align-items-end justify-content-center gap-25">
                                        {(tabColumns[resolvedActiveTabKey] || []).map((col, idx) => (
                                            <div
                                                key={`${resolvedActiveTabKey}-${idx}`}
                                                className={`comp-col d-flex flex-column gap-30 justify-content-between position-relative js-comp-col${
                                                    col.isBoomerang ? " bg-primary text-white" : ""
                                                }`}
                                            >
                                                
                                                {col.isBoomerang && (
                                                    <div className="comp-pointer position-absolute w-100">
                                                        <img src={PerfectTag} alt="" width="156" className="perfect-tag" />
                                                        <img src={PointerArr} alt="" />
                                                    </div>
                                                )}
                                                <div>
                                                    <img src={col.logo} alt="" className="comp-col-logo d-block mx-auto mb-2" />
                                                    <div className="comp-col-content d-flex flex-column gap-10">
                                                        {col.items.map((text, itemIdx) => (
                                                            <div key={itemIdx} className="d-flex align-items-center gap-10">
                                                                <img src={col.isBoomerang ? CompTick : CompCross} alt="" />
                                                                {text}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="comp-price text-center fw-bold">{col.price}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonChart;
