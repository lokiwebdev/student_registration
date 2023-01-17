import React, { useState } from "react";
// import { NavDropdown } from 'react-bootstrap'
import { Link, Navigate, NavLink } from "react-router-dom";
import logo from "../assets/student.png"

const Navbar = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <section className="navbar-bg">
                <nav className="navbar navbar-expand-lg navbar-light  ">
                    <div className="container">
                        <NavLink className="logoContainer" to="/">
                            <img src={logo} alt="logo" className="logo" />
                            <h2>
                                <span>S</span>tudent
                                <span>A</span>pp
                            </h2>
                        </NavLink>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={() => setShow(!show)}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">
                                        Contact
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/student/create">
                                        Add Student
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/viewStudents">
                                        View Students
                                    </NavLink>
                                </li>

                                <div className="social-links">
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                                        <i class='fab fa-facebook-f' />
                                    </a>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
                                        <i class='fab fa-twitter' />
                                    </a>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                                        <i class='fab fa-instagram' />
                                    </a>
                                    <a href="https://www.linkedin.com/in/lokinder007/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                        <i class='fab fa-linkedin-in' />
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
};

export default Navbar;
