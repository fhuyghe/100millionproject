import React from "react";
import "./splash.scss";
import { Route, Link } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import EmailSignupForm from '../EmailSignupForm'

const Splash = () => {
  return (
    <>
      <Route path="/" render={props => <Header {...props} />} />

      <div className="splash-page">
        <div className="logo">
          <Link to="/">
            <img src="100_Million_Title-500.gif" alt="100 Million Project"/>
          </Link>
        </div>

        {/* <div className="mobile-text">
          <p>
            100 Million people didn't vote in the past U.S. presidential
            election
          </p>
          <p>
            We traveled from state to state to meet them and understand why they
            choose not to participate
          </p>
        </div> */}
        <div className="upper">
          <p>
            Inaction is the greatest threat to democracy. <br/>
            In the 2016 election, over 100 million people did not vote.
          </p>
          <p>It's time to find out why.</p>
          <p>Coming Soon.</p>
        </div>
        
        <div className="lower"> 
        
          <EmailSignupForm />
          
          <p className="hash-tag">#the100million</p>
          
        <div className="social-icons">
          <a href="https://www.facebook.com/the100million" target="_blank"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com/the100_million" target="_blank"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/the100_million" target="_blank"><i className="fab fa-instagram"></i></a>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Splash;
