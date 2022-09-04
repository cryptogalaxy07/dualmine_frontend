import { useRef } from "react";
import { Col, Container } from "react-bootstrap";
import { SITE_KEY } from "../../config";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import browserHistory from "../../browserHistory";
import { storeAuthToken } from "../../utils/authToken";
import toast, { Toaster } from "react-hot-toast";
import { FaBtc, FaMinus, FaPlus, FaArrowRight } from "react-icons/fa";
// import reCAPTCHA from "react-google-recaptcha";
import ReCaptcha from "@matt-block/react-recaptcha-v2";

export default function SignUpPage() {
    const firstname = useRef("");
    const lastname = useRef("");
    const username = useRef("");
    const email = useRef("");
    const password = useRef("");
    const confirm = useRef("");
    const term = useRef("");

    const navigate = useNavigate();

    const LoginSubmit = async () => {
        if (
            firstname.current.value == "" ||
            lastname.current.value == "" ||
            username.current.value == "" ||
            email.current.value == "" ||
            password.current.value == "" ||
            confirm.current.value != password.current.value
        ) {
            toast.error("Wrong input. Try again or refresh to reset it.");
            return false;
        }

        if (!term.current.checked) {
            toast.error(
                " you need to fill up or mark In order to process or something like that."
            );
            return false;
        }

        console.log(
            firstname.current.value,
            lastname.current.value,
            username.current.value,
            email.current.value,
            password.current.value
        );
        try {
            const { token } = await api.post("/sign-up", {
                firstname: firstname.current.value,
                lastname: lastname.current.value,
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            });
            toast.success("You are successfully logged in!");

            storeAuthToken(token);

            browserHistory.push("/signin");
            navigate("/signin");
        } catch {
            toast.error("Your registration request failed. Please try again.");
            return false;
        }
    };

    return (
        <Container className="login-container py-5 justify-content-center">
            <Toaster />
            <Col lg={12} md={12} sm={12} className="py-5 text-center">
                <h1 className="fw-300 m-4">Get Register For Free</h1>
                <h3 className="text-center">
                    Register account and start earning money!
                </h3>
            </Col>
            <Col lg={8} md={8} sm={8} className=" text-center m-auto">
                <form className="login-form form-inline d-flex flex-row flex-wrap">
                    <div className="form-group mb-3 col-md-6 px-3">
                        <input
                            type="text"
                            ref={firstname}
                            name="firstName"
                            className="form-control"
                            id="firstname"
                            aria-describedby="emailHelp"
                            placeholder="first name"
                            required
                        />
                    </div>
                    <div className="form-group mb-3 col-md-6 px-3">
                        <input
                            type="text"
                            ref={lastname}
                            name="lastName"
                            className="form-control"
                            id="lastname"
                            placeholder="last name"
                            required
                        />
                    </div>
                    <div className="form-group mb-3 col-md-6 px-3">
                        <input
                            type="text"
                            ref={username}
                            name="username"
                            className="form-control"
                            id="username"
                            aria-describedby="emailHelp"
                            placeholder="username"
                            required
                        />
                    </div>
                    <div className="form-group mb-3 col-md-6 px-3">
                        <input
                            type="email"
                            ref={email}
                            name="email"
                            className="form-control"
                            id="email"
                            placeholder="email address"
                            required
                        />
                    </div>
                    <div className="form-group mb-3 col-md-6 px-3">
                        <input
                            type="password"
                            ref={password}
                            name="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="password"
                            required
                        />
                    </div>
                    <div className="form-group mb-3 col-md-6 px-3">
                        <input
                            type="password"
                            ref={confirm}
                            name="con-password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="confirm password"
                            required
                        />
                    </div>
                    {/* <div className="form-group px-3">
                        <ReCaptcha
                            siteKey="6Lc89RQhAAAAACe68zohcJY_Wy5CDDC0VfkRvt9e"
                            theme="light"
                            size="normal"
                            className="px-3"
                            onSuccess={(captcha) =>
                                console.log(`Successful, result is ${captcha}`)
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
                        />
                    </div> */}

                    <div className="my-3 col-md-12 px-3 check-group">
                        <input
                            type="checkbox"
                            ref={term}
                            className="form-check-input p-0 mt-0"
                            id="exampleCheck1"
                            required
                        />
                        {/* <label
                            className="form-check-label float-left px-2"
                            htmlFor="exampleCheck1"
                        >
                            I have read and agree to the Terms of Use
                        </label> */}
                        <span className="form-check-label float-left px-2 d-flex align-self-center">
                            I have read and agree to the{" "}
                            <a
                                href="https://dualmine.com/terms"
                                className="text-info text-decoration-none"
                            >
                                Terms of Use{" "}
                            </a>
                        </span>
                    </div>
                    <button
                        type="button"
                        className="text-white mt-20 btn btn-danger-gradient btn-rounded btn-md btn-arrow"
                        onClick={() => {
                            LoginSubmit();
                        }}
                    >
                        <span>
                            Register
                            <FaArrowRight className="ti-arrow" />
                        </span>
                    </button>
                </form>
            </Col>
        </Container>
    );
}
