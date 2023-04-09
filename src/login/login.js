import React from "react";
import "./login.css";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Video from "./video.mp4";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div>
        {" "}
        <Header />{" "}
      </div>
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
        <div className="content">
          <h2> Sign in/up Form</h2>

          <div class="container" id="container">
            <div class="form-container sign-up-container">
              <form action="" method="get">
                <h1>Create Account</h1>
                <span>or use your email for registration</span>

                <button onclick="document.location = 'http://localhost:8081/phpmailer/index.php'">
                  {" "}
                  Sign up
                </button>
              </form>
            </div>

            <input type="text" name="name" placeholder="Name" required />

            <div class="form-container sign-in-container">
              <form action="#" method="POST">
                <h1>Sign in</h1>
                <span>or use your account</span>
                <input type="email" name="email" placeholder="Email" required />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <a href="/patient1">Forgot your password?</a>
                <button  name="login" href='/patient'>Sign In</button>
              </form>
            </div>
            <div class="overlay-container">
              <div class="overlay">
                <div class="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <button class="ghost" id="signIn">
                    Sign In
                  </button>
                </div>
                <div class="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button
                    class="ghost"
                    id="signUp"
                    onclick="document.location = 'http://localhost:8081/sec/patient.php'"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
          <script src="login.js"></script>
        </div>
      </div>
    </>
  );
};

export default Login;
