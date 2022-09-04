import React, { useEffect } from "react";
import Header from "./../../components/layout/header";
import { Row, Col, Container, Nav, Image } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./proof.css";
import {
    FaTwitter,
    FaTelegram,
    FaFacebookF,
    FaLink,
    FaUnlink,
} from "react-icons/fa";

const data = [
    {
        data: "24 August 04:55 AM",
        amount: "0.00017689 BTC",
        address: "3DNyReKpQ2mRAoQJLcirb8CpZQrnKqo2fP",
    },
    {
        data: "24 August 04:49 AM",
        amount: "6617.00000000 CRT",
        address: "TGogx7p5TmQQSy7o6QmS1kiojGwfccycfo",
    },
    {
        data: "23 August 06:14 AM",
        amount: "0.00096436 BTC",
        address: "3DqPPoYTJWvSFCy31nLo37YcyPtfPL5Hke",
    },
    {
        data: "23 August 06:14 AM",
        amount: "5667.00000000 CRT",
        address: "TLrT6sm8o3VzsBVt7CrmSCRMcDnSWeUcDD",
    },
    {
        data: "22 August 04:55 AM",
        amount: "0.00005392 BTC",
        address: "bc1qlj9kkmmse7hqnhewezsxsqj3qnv3t2q5352gpw",
    },
    {
        data: "22 August 04:49 AM",
        amount: "6167.00000000 CRT",
        address: "TRWPas2wXM3qYS7srSmcBU7Q3b75E282kp",
    },
];

export default function ProofPage() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    return (
        <div className="m-sm-5">
            <Row className="my-50" />
            <Row className="pt-45 justify-content-center ">
                <Col lg={9} md={9} sm={12} className="text-justify pr-40">
                    <div data-aos="fade-right" data-aos-duration="1200">
                        <p className="ff-normal fs-36 lh-40 fw-300 color-primary text-center">
                            Proof of legal & Payouts
                        </p>
                        <p className="fs-16 color-light-gray">
                            We know that many people worry about mining sites
                            that they will disappear or not paying. For that
                            reason we want to show you that our company is legal
                            and you don't need to worry about. The best way to
                            trust us will be your research about our company.
                            You will see on own eyes that everything is allright
                            with our company. Please read and check all this
                            information below:
                        </p>
                        <p className="fs-16 color-light-gray">
                            CRYTONITS LTD is the owner of Dualmine.com and is
                            the officially registered British company. All
                            company activities comply with legal requirements of
                            the Great Britain, where CRYPTONITS LTD. is
                            registered. We have an office in London
                        </p>
                        <p className="mt-40 fs-16 color-light-gray">
                            <strong> Company Name:</strong>
                            CRYPTONITS LTD.
                            <br />
                            <strong>Location</strong>
                            London, United Kingdom.
                            <br />
                            <strong>Registered office address:</strong>
                            20-22 Wenlock Road, London N1 7GU England
                            <br />
                            <strong>Company No.:</strong>
                            11227919
                        </p>
                        <p className="mt-40 fs-16 color-light-gray">
                            Now please verify this information in official
                            documents:
                        </p>
                        <span className="btn-group mt-5u">
                            <Nav.Link
                                href="https://beta.companieshouse.gov.uk/company/11227919"
                                className="btn btn-danger btn-danger-gradient fs-16 l-button text-white"
                            >
                                VERIFY COMPANY INFO
                            </Nav.Link>
                            <Nav.Link
                                href="https://dualmine.com/files/cert.pdf"
                                className="btn btn-danger btn-danger-gradient fs-16 l-button text-white"
                            >
                                CHECK COMPANY CERTIFICATE
                            </Nav.Link>
                            <Nav.Link
                                href="https://beta.companieshouse.gov.uk/company/11227919/officers"
                                className="btn btn-danger btn-danger-gradient fs-16 l-button text-white"
                            >
                                {" "}
                                CHECK WHO'S COMPANY DIRECTOR/CEO
                            </Nav.Link>
                        </span>
                        <p className="mt-40 fs-16 color-light-gray">
                            {" "}
                            You can check also our social media channels, if
                            something were wrong, our community wrote about
                            this.
                        </p>
                        <span className="btn-group mt-5u">
                            <Nav.Link
                                href="https://facebook.com/Dualmine/"
                                className="btn btn-info btn-info-gradient fs-16 l-button text-white"
                            >
                                <FaFacebookF
                                    style={{
                                        marginBottom: "3px",
                                        marginRight: "1px",
                                    }}
                                />
                                FaceBook
                            </Nav.Link>
                            <Nav.Link
                                href="https://twitter.com/Dualmine_com"
                                className="btn btn-info btn-info-gradient fs-16 l-button text-white"
                            >
                                <FaTwitter
                                    style={{
                                        marginBottom: "3px",
                                        marginRight: "3px",
                                    }}
                                />
                                Twitter
                            </Nav.Link>
                            <Nav.Link
                                href="https://t.me/dualmine"
                                className="btn btn-info btn-info-gradient fs-16 l-button text-white"
                            >
                                <FaTelegram
                                    style={{
                                        marginBottom: "3px",
                                        marginRight: "1px",
                                    }}
                                />{" "}
                                Telegram
                            </Nav.Link>
                        </span>
                        <Row className="py-5 align-items-center text-center mt-4">
                            <Col lg={3} md={4} sm={12}>
                                <div>
                                    <Image
                                        className="rounded-circle border img-fluid"
                                        src="/assets/images/lukasz_borzeszkowski.jpg"
                                    />
                                </div>
                            </Col>
                            <Col lg={9} md={8} sm={12}>
                                <div className="title-how quote text-center color-pink mb-4 fs-20">
                                    As you can see we don't hide anything. We
                                    are legal and transparency. You can also
                                    check below our payouts proofs. I will be
                                    very happy if you will trust me and take
                                    mining journey with our company.
                                </div>
                                {/* <div className="fs-5 color-light-gray text-center">
                Lukasz Borzeszkowski
                <br />
                CEO BUALMINE
              </div> */}
                                <Image
                                    src="assets/images/ceo.jpg"
                                    style={{ width: "auto" }}
                                />
                            </Col>
                        </Row>
                        <Col lg={12} md={12} sm={12} className="mt-40">
                            <h3 className="color-light-gray">Payouts</h3>
                            <p className="fs-16 mb-10 color-light-gray">
                                Below you have payment proofs. When you get your
                                payout, please upload screen here:
                            </p>
                            <p className="fs-16 mt-40 color-light-gray">
                                We are strongly care about our customers
                                privacy, but to proof you that we are paying
                                company we will show you some random payouts
                                from May 2018:
                            </p>
                            <table className="table table-striped">
                                <thead className="btn-danger btn-danger-gradient">
                                    <tr>
                                        <th>Data</th>
                                        <th>Amount</th>
                                        <th>Wallet address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((val, key) => {
                                        return (
                                            <tr key={key}>
                                                <td className="fs-16 color-light-gray">
                                                    {val.data}
                                                </td>
                                                <td className="fs-16 color-light-gray">
                                                    {val.amount}
                                                </td>
                                                <td className="fs-16 color-primary t-address">
                                                    <Nav.Link
                                                        href={
                                                            key % 2 == 0
                                                                ? "https://blockchain.info/address/" +
                                                                  val.address
                                                                : "https://tronscan.io/#/address/" +
                                                                  val.address
                                                        }
                                                        className="color-primary fw-200"
                                                    >
                                                        <i className="fa fa-link p-1"></i>
                                                        {val.address}
                                                    </Nav.Link>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </Col>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
