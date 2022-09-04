import React, { useContext, useEffect, useState } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
    FaFacebookF,
    FaTwitter,
    FaTelegramPlane,
    FaTelegram,
} from "react-icons/fa";
import { AuthContext } from "../../Authenticate";

export default function Header() {
    const { isLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    return (
        <div>
            <Image
                src="/assets/images/topbar4.jpg"
                className="fixed-top d-inline-block image-responsive"
            />
            <div className="Header">
                <Navbar
                    collapseOnSelect
                    expand="lg"
                    variant="dark"
                    className="h2-nav"
                >
                    <Container>
                        <Navbar.Brand
                            className="me-3"
                            style={{ cursor: "pointer" }}
                        >
                            <Image
                                src="/assets/images/logo.png"
                                onClick={() => navigate("/")}
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-45">
                                <a
                                    href="/#calculate"
                                    className="px-3 text-white nav-link"
                                >
                                    Pricing
                                </a>
                                <Link
                                    to="/proof"
                                    className="px-3 text-white nav-link"
                                >
                                    Proof
                                </Link>
                                <a
                                    href="/#about"
                                    className="px-3 text-white nav-link"
                                >
                                    About us
                                </a>
                                <Link
                                    to="/referral"
                                    className="px-3 text-white nav-link"
                                >
                                    Referral program
                                </Link>
                                <Link
                                    to="/faq"
                                    className="px-3 text-white nav-link"
                                >
                                    Faq
                                </Link>
                                <Link
                                    to="/contact"
                                    className="px-3 text-white nav-link"
                                >
                                    Contact
                                </Link>
                                <Nav.Link
                                    className="px-3 text-white nav-link"
                                    href="https://www.facebook.com/CryptonitsCRT"
                                >
                                    <FaFacebookF />
                                </Nav.Link>
                                <Nav.Link
                                    className="px-3 text-white nav-link"
                                    href="https://twitter.com/Dualmine_com"
                                >
                                    <FaTwitter />
                                </Nav.Link>
                                <Nav.Link
                                    className="px-3 text-white nav-link"
                                    href="https://t.me/dualmine"
                                >
                                    <FaTelegramPlane />
                                </Nav.Link>
                            </Nav>
                            <Nav className="ms-auto"></Nav>
                            {!isLogin ? (
                                <Nav className="ms-auto border rounded-pill px-3">
                                    <Link
                                        to="/signin"
                                        className="text-white nav-link"
                                    >
                                        Login
                                    </Link>
                                    <span className="nav-link">- OR -</span>
                                    <Link
                                        to="/register"
                                        className="text-white nav-link"
                                    >
                                        Register
                                    </Link>
                                </Nav>
                            ) : (
                                <Nav className="ms-auto border rounded-pill px-3">
                                    <Link
                                        to="/dashboard/#/orderoverview"
                                        className="text-white nav-link"
                                        onClick={() => {
                                            window.location.href =
                                                "https://dualmine.io/dashboard/#/orderoverview";
                                        }}
                                    >
                                        Dashboard
                                    </Link>
                                </Nav>
                            )}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}
