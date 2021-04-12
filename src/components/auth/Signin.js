import React from "react";
import { Link } from "react-router-dom";

function Signin() {
  return (
      <div class="main-wrapper">
        <div class="account-content">
          {/* <a href="job-list.html" class="btn btn-primary apply-btn">
            Apply Job
          </a> */}
          <div class="container">
            {/* <!-- Account Logo --> */}
            <div class="account-logo">
              <a href="index.html">
                <img src="assets/img/logo2.png" alt="Dreamguy's Technologies" />
              </a>
            </div>
            {/* <!-- /Account Logo --> */}

            <div class="account-box">
              <div class="account-wrapper">
                <h3 class="account-title">Login</h3>
                <p class="account-subtitle">Access to our dashboard</p>

                {/* <!-- Account Form --> */}
                <form action="index.html">
                  <div class="form-group">
                    <label>Email Address</label>
                    <input class="form-control" type="text" />
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <div class="col">
                        <label>Password</label>
                      </div>
                      <div class="col-auto">
                        <a class="text-muted" href="forgot-password.html">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <input class="form-control" type="password" />
                  </div>
                  <div class="form-group text-center">
                    <button class="btn btn-primary account-btn" type="submit">
                      Login
                    </button>
                  </div>
                  <div class="account-footer">
                    <p>
                      Don't have an account yet?{" "}
                      <router>
                        <Link to="/Register">Register</Link>
                      </router>
                    </p>
                  </div>
                </form>
                {/* <!-- /Account Form --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    //   {/* <!-- /Main Wrapper --></div>         */}
  );
}

export default Signin;
