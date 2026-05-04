import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import BtnArr from "../../assets/images/btn-arr-wh.svg";
import HamIcon from "../../assets/images/ham-icon.svg";

import { useEffect, useState } from "react";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const closeSidebar = () => setIsSidebarOpen(false);
    const toggleSidebar = () => setIsSidebarOpen((v) => !v);

    useEffect(() => {
        if (!isSidebarOpen) return;

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKeyDown = (e) => {
            if (e.key === "Escape") closeSidebar();
        };

        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = prevOverflow;
        };
    }, [isSidebarOpen]);

    return (
        <>
            <header className="py-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-7 d-flex align-items-center gap-25">
                            <div className="logo">
                                <a href="https://www.theboomerang.co/"><img src={Logo} alt="Logo" /></a>
                            </div>
                            <nav className="navbar navbar-expand d-lg-block d-none navbar-light justify-content-end py-0 gap-20">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav m-auto d-lg-flex gap-lg-3 fs-16">
                                        <li className="nav-item">
                                            <a className="nav-link" href="https://docs.google.com/spreadsheets/d/1hw98_23BLlLKrGmeA6NnUaVdUilQ2NKIuihA3suiyjM/edit?gid=0#gid=0" target="_blank">Pricing</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="https://www.theboomerang.co/affiliate" onClick={closeSidebar}>Affiliate</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="https://love.theboomerang.co/ ">Testimonials</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-xl-6 col-5 d-flex align-items-center justify-content-end gap-15">
                            <a href="https://app.theboomerang.co/login?menu=Login&login_choice=Email-Login" className="btn no-hover d-lg-flex d-none" target="_blank">Log In</a>
                            <a href="https://app.theboomerang.co/login?menu=Signup" className="btn btn-primary gap-2 px-3 d-lg-flex d-none" target="_blank">Get 100 Free Leads <img src={BtnArr} /></a>
                            <button
                                className="btn no-hover sidebar-toggler d-lg-none d-block"
                                type="button"
                                aria-label="Open menu"
                                aria-expanded={isSidebarOpen}
                                onClick={toggleSidebar}
                            >
                                <img src={HamIcon} alt="Ham Icon" width="20" />
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className={`sidebar position-fixed d-flex justify-content-start${isSidebarOpen ? " open" : ""}`}
                    aria-hidden={!isSidebarOpen}
                >
                    <div className="sidebar-backdrop position-absolute w-100 h-100" onClick={closeSidebar}></div>
                    <div className="sidebar-content bg-white d-flex flex-column gap-50 position-relative w-100 h-100">
                        <div className="sidebar-header">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="logo">
                                    <a href="https://www.theboomerang.co/"><img src={Logo} alt="Logo" /></a>
                                </div>
                                <button type="button" className="btn no-hover sidebar-close" aria-label="Close menu" onClick={closeSidebar}>
                                    ×
                                </button>
                            </div>
                        </div>
                        <div className="sidebar-body">
                            <ul className="navbar-nav m-auto d-flex flex-column gap-10 fs-16">
                                <li className="nav-item">
                                    <a className="nav-link" href="https://docs.google.com/spreadsheets/d/1hw98_23BLlLKrGmeA6NnUaVdUilQ2NKIuihA3suiyjM/edit?gid=0#gid=0" target="_blank">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.theboomerang.co/affiliate" onClick={closeSidebar}>Affiliate</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://love.theboomerang.co/ " onClick={closeSidebar}>Testimonials</a>
                                </li>
                            </ul>
                        </div>
                        <div className="sidebar-footer d-flex flex-column gap-10">
                            <a href="https://app.theboomerang.co/login?menu=Login&login_choice=Email-Login" className="btn no-hover mb-2" onClick={closeSidebar} target="_blank">Log In</a>
                            <a href="https://app.theboomerang.co/login?menu=Signup" className="btn btn-primary gap-2 px-4" onClick={closeSidebar} target="_blank">Get 100 Free Leads <img src={BtnArr} /></a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
