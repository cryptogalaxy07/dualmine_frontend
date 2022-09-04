import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
// import "react-input-range/lib/css/index.css";
import MyApexChart from "./MyApexChart";
import "./index.css";
import { Link } from "react-router-dom";
import { FaBtc, FaMinus, FaPlus, FaArrowRight } from "react-icons/fa";

export default function ReferralPage() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div style={{ textAlign: "left" }}>
            <div className="position-relative overflow-hidden">
                <iframe
                    className="position-absolute"
                    src="/assets/particle/index.html"
                    width="100%"
                    height={318}
                    title="Earth"
                />
                <Container className="login-container pb-4">
                    <Row className="py-1">
                        <Col lg={8} md={8} sm={12} className="py-5 px-0">
                            <h2 className="fs-ft fw-bold text-white mb-3">
                                Invite your friends to DUALMINE
                            </h2>
                            <h6 className="fs-5 text-white subtitle">
                                and get 10% of their hash power!
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bg-white position-relative overflow-hidden py-5">
                <Container>
                    <Row className="pr-3">
                        <Col lg={6} md={6} sm={12}>
                            <h2
                                className="font-primary color-primary lh-base mt-20 mb-30"
                                style={{ fontSize: "21px" }}
                            >
                                You will get 10% hash power from each purchased
                                cloud mining contracts of DUALMINE.
                            </h2>
                            <h4 className="font-primary fs-5 lh-base fw-light color-light-gray mb-30">
                                You can simple increase Your income and give
                                Your friends opportunity to earn money. Your
                                friends don't lose 10%, only You get 10%! We
                                provide online statistics with data for all
                                conversion in real time.
                            </h4>
                            <h2 className="font-primary fs-3 lh-lg color-primary mt-10 mb-10">
                                It's super simply:
                            </h2>
                            <div className="mb-8">
                                <h5
                                    className="pl-0"
                                    style={{ color: "#3e4555" }}
                                >
                                    1.Sign up and log in
                                </h5>
                            </div>
                            <div className="mb-8">
                                <h5
                                    className="pl-0"
                                    style={{ color: "#3e4555" }}
                                >
                                    2.Copy your own referral link
                                </h5>
                            </div>
                            <div className="mb-8">
                                <h5
                                    className="pl-0"
                                    style={{ color: "#3e4555" }}
                                >
                                    3.Give it to your friends
                                </h5>
                            </div>
                            <div className="mb-8">
                                <h5
                                    className="pl-0"
                                    style={{ color: "#3e4555" }}
                                >
                                    4.Get 10% of their hash power
                                </h5>
                            </div>
                            {/* <div className="mt-20">
                                <Link
                                    to="/register"
                                    className="mt-30 mb-30 border rounded-pill bg-gradient-r-border bg-gradient-r-p text-white btn-md btn btn-danger-gradiant btn-arrow btn-rounded"
                                >
                                    Sign up & Join referral program
                                </Link>
                            </div> */}
                            <Link
                                // type="button"
                                to="/register"
                                className="text-white mt-20 btn btn-danger-gradient btn-rounded btn-md btn-arrow"
                            >
                                <span>
                                    Sign up & Join referral program
                                    <FaArrowRight className="ti-arrow" />
                                </span>
                            </Link>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <MyApexChart />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
