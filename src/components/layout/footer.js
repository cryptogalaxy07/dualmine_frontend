import React from "react";
import { Button, Col, Container, Row, Image, Nav } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="Footer bg-white p-con-footer">
            <Container>
                <Row className=" align-items-center mb-5">
                    <Col lg={9} md={7} sm={12} className="text-start">
                        <h6 className="color-light-gray font-date">
                            Are you ready?
                        </h6>
                        <h2 className="font-foot-lg color-primary">
                            Get 100 GH/s hash power for free on sign up.
                        </h2>
                    </Col>
                    <Col lg={3} md={5} sm={12} className="text-center d-flex">
                        <Nav.Link
                            href="/Register"
                            className="text-white mt-20 btn btn-danger-gradient btn-rounded btn-md btn-arrow"
                        >
                            <span>
                                Start mining!
                                <FaArrowRight className="ti-arrow" />
                            </span>
                        </Nav.Link>
                    </Col>
                </Row>
                <Row className="justify-content-around mb-3 mt-5">
                    <Col lg={8} md={8} sm={12}>
                        <Image
                            src="/assets/images/gif2.gif"
                            width="100%"
                            className="img-fluid"
                        />
                    </Col>
                </Row>
            </Container>
            <hr className="my-5 color-light-gray" />
            <Container className="pb-11">
                <Row className="text-start pb-5">
                    <Col lg={3} md={3} sm={6}>
                        <div className="footer-title mb-3 color-primary">
                            Contact
                        </div>
                        <div className="font-progressin mb-2 color-light-gray">
                            CRYPTONITS LTD.
                            <br /> 20-22 Wenlock Road
                            <br /> London N1 7GU England <br /> Registration no.
                            1127919
                        </div>
                        <div className="fs-8 color-light-gray">
                            Phone: 020 8242 6626
                        </div>
                        <div className="fs-8 color-light-gray">
                            E-mail:{" "}
                            <a
                                href="#"
                                className="color-primary text-decoration-none"
                            >
                                office@dualmine.io
                            </a>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={6}>
                        <div className="footer-title mb-3 color-primary">
                            Social
                        </div>
                        <div className="fs-6 col-md-12 col-sm-4 color-primary mb-2">
                            <a
                                href="https://facebook.com/Dualmine/"
                                className="footer-social-link-icon"
                            >
                                <FaFacebookF />
                            </a>
                        </div>
                        <div className="fs-6 col-md-12 col-sm-4 color-primary">
                            <a
                                href="https://twitter.com/Dualmine_com"
                                className="footer-social-link-icon"
                            >
                                <FaTwitter />
                            </a>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={6}>
                        <div className="footer-title mb-2 color-primary">
                            Payments
                        </div>
                        <Image src="/assets/images/payments_icons.jpg" />
                    </Col>
                    <Col lg={3} md={3} sm={6}>
                        <div className="footer-title mb-2 color-primary">
                            Security
                        </div>
                        <Image src="/assets/images/security_icons.jpg" />
                    </Col>
                </Row>
                <Row className=" fs-7 my-2 mt-5">
                    <Col
                        lg={3}
                        md={3}
                        sm={12}
                        className="text-start color-light-gray px-4"
                    >
                        ©2018 dualmine.io
                    </Col>
                    <Col
                        lg={9}
                        md={9}
                        sm={12}
                        className="d-flex align-items-end text-right justify-content-end"
                    >
                        <Nav.Link
                            className="color-light-gray nav-link px-3"
                            href="https://dualmine.com/terms"
                        >
                            Terms of Use
                        </Nav.Link>
                        <Nav.Link
                            className="color-light-gray nav-link px-3"
                            href="https://dualmine.com/disclaimer"
                        >
                            Disclaimer
                        </Nav.Link>
                        <Nav.Link
                            className="color-light-gray nav-link px-3"
                            href="https://dualmine.com/privacy"
                        >
                            Privacy Policy
                        </Nav.Link>
                        <Nav.Link
                            className="color-light-gray nav-link px-3"
                            href="https://dualmine.com/legal"
                        >
                            Proof of legal
                        </Nav.Link>
                    </Col>
                </Row>
            </Container>
            <hr className="mb-30 color-light-gray" />
            <Container>
                <Row>
                    <Col
                        lg={12}
                        md={12}
                        sm={12}
                        className="d-flex align-items-center justify-content-center font-14 font-primary"
                    >
                        <div className="font-18 line-height-22 font-weight-400">
                            Equipment We Use :{" "}
                        </div>
                        <div className="ml-30">
                            <Image className="p" src="/assets/images/amd.jpg" />
                            <Image
                                className=""
                                src="/assets/images/nvidia.jpg"
                            />
                            <Image
                                className=""
                                src="/assets/images/intel.jpg"
                            />
                            <Image
                                className=""
                                src="/assets/images/bitmain.jpg"
                            />
                            <Image className="" src="/assets/images/ati.jpg" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="footer-bottom"></div>
        </div>
    );
}
