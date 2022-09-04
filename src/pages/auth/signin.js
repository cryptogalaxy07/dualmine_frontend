import { useContext, useEffect, useRef } from "react";
import { Col, Container } from "react-bootstrap";
import browserHistory from "../../browserHistory";
import { SITE_KEY } from "../../config";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { getStoredAuthToken, storeAuthToken } from "../../utils/authToken";
import { AuthContext } from "../../Authenticate";
import JwtDecode from "jwt-decode";
import toast, { Toaster } from "react-hot-toast";
import { FaBtc, FaMinus, FaPlus, FaArrowRight } from "react-icons/fa";
// import reCAPTCHA from "react-google-recaptcha";
import ReCaptcha from "@matt-block/react-recaptcha-v2";

export default function SignInPage() {
    const email = useRef("");
    const password = useRef("");
    const { isLogin, setLogin, user, setUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const login = async () => {
        if (email.current.value == "" || password.current.value == "") {
            toast.error("Wrong input. Try again or refresh to reset it.");
            return false;
        }

        try {
            const { token } = await api.post("/sign-in", {
                email: email.current.value,
                password: password.current.value,
            });

            toast.success("You are successfully logged in!");

            console.log(token);
            storeAuthToken(token);
            const newUser = JwtDecode(token);
            setLogin(true);
            setUser(newUser);
            // browserHistory.push('/dashboard/#/orderoverview')
            // navigate('/dashboard/#/orderoverview')
            window.location.href =
                "https://dualmine.io/dashboard/#/orderoverview";
        } catch {
            toast.error(
                "Your login request failed. Please try again or refresh to reset it."
            );
        }
    };

    // useEffect(() => {

    //     const token = getStoredAuthToken()
    //     console.log(token)
    //     const getUser = async (token) => {
    //         if (token) {
    //             try {
    //                 await api.post('/verify-token')
    //                 browserHistory.push('/')
    //                 navigate('/')
    //             }
    //             catch {
    //                 return false;
    //             }
    //         } else {
    //             return false;
    //         }
    //     }

    //     getUser(token)

    // }, [])

    return (
        <Container className="login-container py-5 justify-content-center">
            <Col lg={12} md={12} sm={12} className="py-5 text-center">
                <h1 className="fw-300">Sign in</h1>
                <h3 className="text-center">To your account</h3>
            </Col>
            <Col lg={7} md={7} sm={8} className=" text-center m-auto">
                <form className="login-form">
                    <div className="form-group mb-3">
                        <input
                            type="email"
                            ref={email}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Email"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="password"
                            ref={password}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                        />
                    </div>
                    {/* <ReCaptcha
                        siteKey="6Lc89RQhAAAAACe68zohcJY_Wy5CDDC0VfkRvt9e"
                        theme="light"
                        size="normal"
                        onSuccess={(captcha) =>
                            console.log(`Successful, result is ${captcha}`)
                        }
                        onExpire={() =>
                            console.log("Verification has expired, re-verify.")
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
                        onClick={() => {
                            login();
                        }}
                    >
                        <span>
                            Login
                            <FaArrowRight className="ti-arrow" />
                        </span>
                    </button>
                </form>
            </Col>
            <Toaster />
        </Container>
    );
}
