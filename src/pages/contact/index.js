import React from "react";
import { Container, Row, Col, Accordion, Form, Button } from "react-bootstrap";
import "./contact.css";
import ReCaptcha from "@matt-block/react-recaptcha-v2";
import { FaBtc, FaMinus, FaPlus, FaArrowRight } from "react-icons/fa";

export default function ContactPage() {
    return (
        <div className="FaqPage">
            <div className="position-relative overflow-hidden">
                <iframe
                    className="position-absolute"
                    src="/assets/particle/index.html"
                    width="100%"
                    height={600}
                    title="Earth"
                />
                <Container className="py-5 m-b-32 pl-0 pr-0 ">
                    <Row>
                        <Col lg={4} md={8}>
                            <div
                                className="font-30 fw-bold text-white font-mon login-container"
                                style={{ textAlign: "left" }}
                            >
                                Contact with us!
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bg-col" style={{ textAlign: "left" }}>
                <Container className="py-5 pl-0 pr-0">
                    <Row>
                        <Col lg={5} md={5} sm={5}>
                            <h1 className="font-36 height-40 color-t font-mon">
                                Question? Comment?
                            </h1>
                            <div className="Qeu-color m-t-30 mb-30 font-14">
                                Ask a question or provide feedback about our
                                products <br></br> and services. We feel free to
                                contact us we will gladly answer all your
                                questions.
                            </div>
                            <h3 className="font-24 height-30 color-t font-mon">
                                Address
                            </h3>
                            <p className="Qeu-color font-14 m-t-8">
                                CRYPTONITS LTD. <br></br>
                                20-22 Wenlock Road <br></br>
                                London N1 7GU England <br></br>
                                Registration no. 11227919
                            </p>
                            <h3 className="font-24 height-30 color-t m-t-16 font-mon">
                                Phone
                            </h3>
                            <div className="Qeu-color font-14 m-t-8">
                                Reception : 020 8242 6626
                            </div>
                            <h3 className="font-24 height-30 color-t m-t-16 font-mon">
                                Email
                            </h3>
                            <div
                                className="Qeu-color font-14 m-t-8"
                                style={{ color: "#3e4555" }}
                            >
                                office@dualmine.io
                            </div>
                        </Col>
                        <Col lg={7} md={7}>
                            <Form className="m-t-30">
                                <Row className="mb-3 ">
                                    <Form.Group
                                        as={Col}
                                        controlId="formGridEmail"
                                        className="pl-0 "
                                    >
                                        <Form.Control
                                            type="email"
                                            placeholder="email address"
                                            className="f-con"
                                        />
                                    </Form.Group>

                                    <Form.Group
                                        as={Col}
                                        controlId="formGridPassword"
                                    >
                                        <Form.Control
                                            type="password"
                                            placeholder="name"
                                            className="f-con"
                                        />
                                    </Form.Group>
                                </Row>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formGridAddress1"
                                >
                                    <Form.Control
                                        placeholder="title"
                                        className="f-con"
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Control
                                        as="textarea"
                                        rows={7}
                                        placeholder="Your message"
                                        className="f-con"
                                    />
                                </Form.Group>
                                {/* <ReCaptcha
                                    siteKey="6Lc89RQhAAAAACe68zohcJY_Wy5CDDC0VfkRvt9e"
                                    theme="light"
                                    size="normal"
                                    onSuccess={(captcha) =>
                                        console.log(
                                            `Successful, result is ${captcha}`
                                        )
                                    }
                                    onExpire={() =>
                                        console.log(
                                            "Verification has expired, re-verify."
                                        )
                                    }
                                    onError={() =>
                                        console.log(
                                            "Something went wrong, check your conenction"
                                        )
                                    }
                                /> */}
                                <button
                                    type="button"
                                    className="text-white mt-20 btn btn-danger-gradient btn-rounded btn-md btn-arrow"
                                >
                                    <span>
                                        Submit
                                        <FaArrowRight className="ti-arrow" />
                                    </span>
                                </button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
