import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import HomePage from "./pages/home";
import FaqPage from "./pages/faq";
import ContactPage from "./pages/contact";
import ProofPage from "./pages/proof";
import ReferralPage from "./pages/referral";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import history from "./browserHistory";
import AuthProvider from "./Authenticate";
import SignInPage from "./pages/auth/signin";
import SignUpPage from "./pages/auth/signup";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import React from 'react';

function App() {

  function getLibrary(provider) {
    return new Web3(provider);
  }
  return (
    <React.StrictMode>
      <div className="App">
        <AuthProvider>
          <Web3ReactProvider getLibrary={getLibrary}>
            <BrowserRouter history={history}>
              <Header />
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/register" element={<SignUpPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/proof" element={<ProofPage />} />
                <Route path="/referral" element={<ReferralPage />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </Web3ReactProvider>
        </AuthProvider>
      </div>
    </React.StrictMode>
  );
}

export default App;
