import React, { useEffect, useState } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "./faq.css";

export default function FaqPage() {
    const [count, setCount] = useState(0);
    const [flags, setFlags] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ]);
    const faq_data = [
        {
            title: "Do you have any proofs of legal & payouts?",
            content: "Yes! You can check it by clicking >>>> Check Proofs <<<<",
        },
        {
            title: "Is this working automatic?",
            content:
                "Yes. Everything is working automatic, you don't need to be all time online or have open web browser. You can go to sleep and mining will be continue.",
        },
        {
            title: "When does mining start?",
            content:
                "Cloud Mining Contracts start immediately after payment confirmations.",
        },
        {
            title: "How to withdraw funds to the wallet?",
            content:
                "Insert your wallet address. Click on Withdraw button and type amount of coins you would like to withdraw. You will see your transaction in Withdrawal section with status.",
        },
        {
            title: "What are your payment methods?",
            content:
                "We accepted only payments with cryptocurrencies Bitcoin and Ethereum.",
        },
        {
            title: "Is it possible to mine different coins at the same time?",
            content:
                "Yes, we are DualMine and we have such an option for our clients. You can mine two bigest cryptocurrencies Bitcoin and Ethereum at the same time or one of them.",
        },
        {
            title: "Where is your mining farm located?",
            content:
                "Our Mining Data Centers are located in Central Europe. For security reasons, we do not disclose the exact location of our mining farms.",
        },
        {
            title: "How frequently will I receive my payouts?",
            content:
                "Payouts are generated daily, but you will receive your payouts only once they have accumulated to a certain quantity. For example, as to March 2018, the minimum payout for BTC was 0.005 BTC in May 2018 is 0.003 BTC. This minimum payouts are set in order to avoid that customers pay excessive fees for receiving small payouts in their wallets.",
        },
        {
            title: "How long does the contract last?",
            content:
                "Two years. After 2 years You can extend contract on next 2 years.",
        },
        {
            title: "What is Reinvest? How do I use it?",
            content:
                "The Reinvest function allows You to buy more hash power for coins that You mine with us. You can payouts it on Your wallet or You can buy more hash power and increase income.",
        },
        {
            title: "How does the Referral Program work?",
            content:
                "Invite your friends to DualMine and get 10% of their hash power! You will get 10% hash power from each purchased cloud mining contracts of Dualmine. You can simple increase Your income and give Your friends opportunity to earn money. Your friends don't lose 10%, only You get 10%!",
        },
        {
            title: "Do I have to have an active investment to participate in your Referral Program?",
            content:
                "No, we do not require presence of any active deposits to participate in our Referral Program. You can invite new members and receive affiliate commissions event if you did not make any investments yet.",
        },
        {
            title: "How can I promote my referral link?",
            content:
                "There are a lot of ways promoting your referral link. You can provide your it to your friends during personal communication, emails, messengers chats, etc. You can also create a banner or text advertising campaigns (of course you should obey the advertising system rules). You can post your links in different kinds of investment-related chats, groups and forums. You can use any other king of promotions, but please remember, that we strictly forbid sending any kind of SPAM content.",
        },
        {
            title: "Can I withdraw from free 100 gh/s or referrer bonus?",
            content:
                "You can withdraw all your balance when you purchased minimum request.",
        },
        {
            title: "How do I purchase mining contract?",
            content:
                "It is very simple. Once you have your account created new user menu will show once you are logged in. On top of the page click on 'Order' link. Once you are on that page you can see your 'deposit address', you should send BTC/ETH to this address and after confirmation we will activate your mining contract.",
        },
        {
            title: "How to buy hashpower using the mined coins?",
            content:
                "The “Buy Using Balance' function allows you to buy additional mining hashpower, using the mined coins that you have on your balance. Once you click on “Buy Using Balance” button, the order will be automatically activated. You will just need to check the details of this order and click on “Pay” button. The payment will be done from your account balance.",
        },
        {
            title: "What is the maximal investments amount?",
            content:
                "At the moment we don't limit the maximal investment amount.",
        },
        {
            title: "What does the payout amount depend on?",
            content:
                "You can go to the “calculator” which is on the top of our website to see how you can calculate your estimated profit. Profit per day depends on many factors, such as Block reward, Difficulty, Blocks mined etc and they can't be predicted precisely. In our calculator we get coin price daily from coinmarketcap.com. All the mined coins will be automatically added to your balance.",
        },
        {
            title: "Are you a legal business?",
            content:
                "Yes, sure. We are an officially registered company in UK. You can find our registration information in the Companies Registry. Our company registration number is: 11227919.",
        },
        {
            title: "In what time zone is the site based? ",
            content: "Our website uses GMT+1 London timezone.",
        },
    ];

    const updateFlags = (index) => {
        let newArr = [...flags];
        newArr.map((data, i) => {
            if (i === index) {
                newArr[i] = !newArr[i];
            } else {
                newArr[i] = false;
            }
        });
        setFlags(newArr);
    };
    return (
        <div className="FaqPage">
            <div className="position-relative overflow-hidden">
                <iframe
                    className="position-absolute"
                    src="/assets/particle/index.html"
                    width="100%"
                    height={200}
                    title="Earth"
                />
                <Container className="py-5 pl-0 pr-0">
                    <Row className=" text-start">
                        <Col lg={8} md={8} sm={12} className="">
                            <br></br>
                            <div className=" fw-bold text-white font-30  font-mon">
                                Can't find the answer you need?
                            </div>
                            <br></br>
                            <div className="fs-5 text-white mb-3 font-mon">
                                Please contact us and we will be happy to help!
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bg-white">
                <Container className="py-5">
                    <Accordion defaultActiveKey="0" flush>
                        {faq_data.map((item, index) => (
                            <Accordion.Item
                                eventKey={index}
                                className="border-0  "
                            >
                                <Accordion.Header
                                    onClick={() => updateFlags(index)}
                                    className="font-18 font-primary"
                                >
                                    <strong className="fs-3 px-2 color-pink font-primary ">
                                        {flags[index] === true ? "-" : "+"}
                                    </strong>{" "}
                                    &nbsp;{item.title}
                                </Accordion.Header>
                                <Accordion.Body className="text-start color-light-gray">
                                    {item.content}
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Container>
            </div>
        </div>
    );
}
