import "./Footer.css"
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-wh.svg"
import PinIcon from "../../assets/images/pin-icon.svg"
import CallIcon from "../../assets/images/call-icon.svg"
import MailIcon from "../../assets/images/mail-icon.svg"
import XIcon from "../../assets/images/x-icon.svg"
import RedditIcon from "../../assets/images/reddit-icon.svg"

const Footer = () => {
    return (
        <footer className="position-relative text-white">
            <div className="container position-relative">
                <div className="row justify-content-center pb-5 row-gap-50">
                    <div className="col-lg-3">
                        <a href="https://www.theboomerang.co/"><img src={Logo} alt="" className="mb-4" /></a>
                        <p className="fs-14 mb-0">Boomerang helps you scrape and enrich data from Clay, Crunchbase and more to create clean, ready-to-use lists for your campaigns.</p>
                    </div>
                    <div className="col-lg-3 d-lg-block d-none"></div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="mb-3 fs-16 fw-medium">Contact Us</h5>
                        <a href="#" className="d-flex align-items-center gap-2 fs-12 fw-bold mb-3">
                            <img src={PinIcon} alt="" />
                            <p className="mb-0">DILWARA BYPASS, Nasirabad, Ajmer, Rajasthan, 305601</p>
                        </a>
                        <a href="tel:+918955306465" className="d-flex align-items-center gap-2 fs-12 fw-bold mb-3">
                            <img src={CallIcon} alt="" />
                            <p className="mb-0">+918955306465</p>
                        </a>
                        <a href="mailto:friends@theboomerang.co" className="d-flex align-items-center gap-2 fs-12 fw-bold mb-3">
                            <img src={MailIcon} alt="" />
                            <p className="mb-0">friends@theboomerang.co</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="mb-3 fs-16 fw-medium">We're Online</h5>
                        <div className="d-flex gap-2">
                            <a href="https://x.com/BoomerangT29526" target="_blank"><img src={XIcon} alt="" /></a>
                            <a href="https://www.reddit.com/user/theboomerang_co/" target="_blank"><img src={RedditIcon} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="row py-lg-5 py-4">
                    <div className="col-12">
                        <div className="foo-lg-text">
                            <svg width="100%" viewBox="0 0 1235 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_4070_2566)">
                                    <path d="M80.75 66.88C88.4767 68.5267 94.6834 72.39 99.37 78.47C104.056 84.4233 106.4 91.2633 106.4 98.99C106.4 110.137 102.473 119.004 94.62 125.59C86.8934 132.05 76.0634 135.28 62.13 135.28H0V1.9H60.04C73.5934 1.9 84.17 5.00333 91.77 11.21C99.4967 17.4167 103.36 25.84 103.36 36.48C103.36 44.3333 101.27 50.8567 97.09 56.05C93.0367 61.2433 87.59 64.8533 80.75 66.88ZM32.49 55.86H53.77C59.09 55.86 63.1434 54.72 65.93 52.44C68.8434 50.0333 70.3 46.55 70.3 41.99C70.3 37.43 68.8434 33.9467 65.93 31.54C63.1434 29.1333 59.09 27.93 53.77 27.93H32.49V55.86ZM56.43 109.06C61.8767 109.06 66.0567 107.857 68.97 105.45C72.01 102.917 73.53 99.3067 73.53 94.62C73.53 89.9333 71.9467 86.26 68.78 83.6C65.74 80.94 61.4967 79.61 56.05 79.61H32.49V109.06H56.43ZM188.324 136.61C175.784 136.61 164.257 133.697 153.744 127.87C143.357 122.044 135.061 113.937 128.854 103.55C122.774 93.0367 119.734 81.2567 119.734 68.21C119.734 55.1633 122.774 43.4467 128.854 33.06C135.061 22.6733 143.357 14.5667 153.744 8.74001C164.257 2.91334 175.784 0 188.324 0C200.864 0 212.327 2.91334 222.714 8.74001C233.227 14.5667 241.461 22.6733 247.414 33.06C253.494 43.4467 256.534 55.1633 256.534 68.21C256.534 81.2567 253.494 93.0367 247.414 103.55C241.334 113.937 233.101 122.044 222.714 127.87C212.327 133.697 200.864 136.61 188.324 136.61ZM188.324 106.97C198.964 106.97 207.451 103.424 213.784 96.33C220.244 89.2367 223.474 79.8633 223.474 68.21C223.474 56.43 220.244 47.0567 213.784 40.09C207.451 32.9967 198.964 29.45 188.324 29.45C177.557 29.45 168.944 32.9333 162.484 39.9C156.151 46.8667 152.984 56.3033 152.984 68.21C152.984 79.99 156.151 89.4267 162.484 96.52C168.944 103.487 177.557 106.97 188.324 106.97ZM337.689 136.61C325.149 136.61 313.622 133.697 303.109 127.87C292.722 122.044 284.426 113.937 278.219 103.55C272.139 93.0367 269.099 81.2567 269.099 68.21C269.099 55.1633 272.139 43.4467 278.219 33.06C284.426 22.6733 292.722 14.5667 303.109 8.74001C313.622 2.91334 325.149 0 337.689 0C350.229 0 361.692 2.91334 372.079 8.74001C382.592 14.5667 390.826 22.6733 396.779 33.06C402.859 43.4467 405.899 55.1633 405.899 68.21C405.899 81.2567 402.859 93.0367 396.779 103.55C390.699 113.937 382.466 122.044 372.079 127.87C361.692 133.697 350.229 136.61 337.689 136.61ZM337.689 106.97C348.329 106.97 356.816 103.424 363.149 96.33C369.609 89.2367 372.839 79.8633 372.839 68.21C372.839 56.43 369.609 47.0567 363.149 40.09C356.816 32.9967 348.329 29.45 337.689 29.45C326.922 29.45 318.309 32.9333 311.849 39.9C305.516 46.8667 302.349 56.3033 302.349 68.21C302.349 79.99 305.516 89.4267 311.849 96.52C318.309 103.487 326.922 106.97 337.689 106.97ZM575.024 1.9V135.28H542.534V55.29L512.704 135.28H486.484L456.464 55.1V135.28H423.974V1.9H462.354L499.784 94.24L536.834 1.9H575.024ZM630.878 27.93V54.91H674.388V79.99H630.878V109.25H680.088V135.28H598.388V1.9H680.088V27.93H630.878ZM769.201 135.28L741.461 84.93H733.671V135.28H701.181V1.9H755.711C766.225 1.9 775.155 3.73667 782.501 7.41C789.975 11.0833 795.548 16.15 799.221 22.61C802.895 28.9433 804.731 36.0367 804.731 43.89C804.731 52.7567 802.198 60.6733 797.131 67.64C792.191 74.6067 784.845 79.5467 775.091 82.46L805.871 135.28H769.201ZM733.671 61.94H753.811C759.765 61.94 764.198 60.4833 767.111 57.57C770.151 54.6567 771.671 50.54 771.671 45.22C771.671 40.1533 770.151 36.1633 767.111 33.25C764.198 30.3367 759.765 28.88 753.811 28.88H733.671V61.94ZM908.157 111.72H858.377L850.397 135.28H816.387L864.647 1.9H902.267L950.527 135.28H916.137L908.157 111.72ZM899.797 86.64L883.267 37.81L866.927 86.64H899.797ZM1084.53 135.28H1052.04L997.705 53.01V135.28H965.215V1.9H997.705L1052.04 84.55V1.9H1084.53V135.28ZM1196.63 44.08C1194.22 39.6467 1190.74 36.29 1186.18 34.01C1181.74 31.6033 1176.49 30.4 1170.41 30.4C1159.89 30.4 1151.47 33.8833 1145.14 40.85C1138.8 47.69 1135.64 56.8733 1135.64 68.4C1135.64 80.6867 1138.93 90.3133 1145.52 97.28C1152.23 104.12 1161.41 107.54 1173.07 107.54C1181.05 107.54 1187.76 105.514 1193.21 101.46C1198.78 97.4067 1202.83 91.58 1205.37 83.98H1164.14V60.04H1234.82V90.25C1232.41 98.3567 1228.29 105.894 1222.47 112.86C1216.77 119.827 1209.48 125.464 1200.62 129.77C1191.75 134.077 1181.74 136.23 1170.6 136.23C1157.42 136.23 1145.64 133.38 1135.26 127.68C1125 121.854 1116.95 113.81 1111.13 103.55C1105.43 93.29 1102.58 81.5733 1102.58 68.4C1102.58 55.2267 1105.43 43.51 1111.13 33.25C1116.95 22.8633 1125 14.82 1135.26 9.12C1145.52 3.29333 1157.23 0.379995 1170.41 0.379995C1186.37 0.379995 1199.79 4.24333 1210.69 11.97C1221.71 19.6967 1228.99 30.4 1232.54 44.08H1196.63Z" fill="url(#paint0_linear_4070_2566)" />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_4070_2566" x1="617.41" y1="136.61" x2="617.41" y2="0" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#1C1C1C" />
                                        <stop offset="1" stopColor="#828282" stopOpacity="0" />
                                    </linearGradient>
                                    <clipPath id="clip0_4070_2566">
                                        <rect width="1235" height="137" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container copyright fs-14 pb-3">
                <div className="row align-items-center row-gap-15">
                    <div className="col-lg-8 text-lg-start text-center">© 2026 All Rights Reserved Boomerang powered by CHITLANGIA INFOTECH PRIVATE LIMITED.</div>
                    <div className="col-lg-4 d-flex justify-content-lg-end justify-content-center gap-30">
                        <a href="https://www.theboomerang.co/privacy-policy" rel="nofollow">Privacy policy</a>
                        <a href="https://www.theboomerang.co/terms-and-conditions" rel="nofollow">Terms and conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;