import React, { useEffect, useState } from "react";

const UserHeader = () => {

    // toggl bar On lg-sizing
    const [sidebarOpen, setsidebarOpen] = useState(window.innerWidth > 1200);
    const toggleSidebar = () => {
        setsidebarOpen(!sidebarOpen);
    };
    useEffect(() => {
        const handleResize = () => {
            setsidebarOpen(window.innerWidth > 992);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    // Toggl Bar Closed

    return(
        <>
        
        <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <a href="/" className="logo d-flex align-items-center">
                        <img src="/assets/img/Logos.png" alt="Logos" />
                    </a>
                    <i className="bi bi-list toggle-sidebar-btn d-lg-none" onClick={toggleSidebar} />
                </div>{/* End Logo */}
                <div className="search-bar">
                    <form className="search-form d-flex align-items-center" method="POST" action="#">
                        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                        <button type="submit" title="Search"><i className="bi bi-search" /></button>
                    </form>
                </div>{/* End Search Bar */}
                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        <li className="nav-item d-block d-lg-none">
                            <a className="nav-link nav-icon search-bar-toggle " href="#">
                                <i className="bi bi-search" />
                            </a>
                        </li>{/* End Search Icon*/}


                        <li className="nav-item dropdown pe-3">
                            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                <img src="../assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                                {/* <img className="rounded-circle" src={`${process.env.REACT_APP_URL}/${providers.img}`} height={50} /> */}
                                {/* <span className="d-none d-md-block dropdown-toggle ps-2">{providers.bussinessname}</span> */}
                            </a>{/* End Profile Iamge Icon */}
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    {/* <h6>{providers.bussinessname}</h6> */}
                                    {/* <span>{providers.bussinessemailid}</span> */}
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                        <i className="bi bi-person" />
                                        <span>My Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                        <i className="bi bi-gear" />
                                        <span>Account Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                        <i className="bi bi-question-circle" />
                                        <span>Need Help?</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <i className="bi bi-box-arrow-right" />
                                        <span>Sign Out</span>
                                    </a>
                                </li>
                            </ul>{/* End Profile Dropdown Items */}
                        </li>{/* End Profile Nav */}
                    </ul>
                </nav>{/* End Icons Navigation */}
            </header>{/* End Header */}
                <aside id="sidebar" className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
                    <ul className="sidebar-nav" id="sidebar-nav">
                        <li className="nav-item">
                            <a className="nav-link ">
                                <i className="bi bi-grid" />
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link collapsed">
                                <i className="bi bi-menu-button-wide" /><span>Dashboard</span>
                            </a>
                        </li>


                        <li className="nav-heading">Pages</li>
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="users-profile.html">
                                <i className="bi bi-person" />
                                <span>Profile</span>
                            </a>
                        </li>{/* End Profile Page Nav */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="pages-faq.html">
                                <i className="bi bi-question-circle" />
                                <span>F.A.Q</span>
                            </a>
                        </li>{/* End F.A.Q Page Nav */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="pages-contact.html">
                                <i className="bi bi-envelope" />
                                <span>Contact</span>
                            </a>
                        </li>{/* End Contact Page Nav */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="pages-register.html">
                                <i className="bi bi-card-list" />
                                <span>Register</span>
                            </a>
                        </li>{/* End Register Page Nav */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="pages-login.html">
                                <i className="bi bi-box-arrow-in-right" />
                                <span>Login</span>
                            </a>
                        </li>{/* End Login Page Nav */}
                    </ul>
                </aside>
        
        </>
    )
}
export default UserHeader;