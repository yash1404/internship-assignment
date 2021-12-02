import React from "react";
import { BsFillEyeFill } from "react-icons/bs";
import {IoMdCheckbox} from "react-icons/io"

import "./Otp.css"

function Otp() {
  return (
    <React.Fragment>
      <section className="otp-section">
        <div className="container">
          <div className="header">

            <div className="logo">
              <img src="../../img/logo.png"></img>
            </div>

            <div className="login">
              <p>Already a user?</p>
              <p className="btn">Login In</p>
            </div>

          </div>

          <div className="col-lg-12 whole">
            <div className="row">
              <div className="col-lg-4 lefty">
                <div className="form-input">
                  <h1>Create An Account</h1>

                  <div className="input-field">
                    <div className="eye-icon">
                      <input type="text" placeholder="Enter Mobile" />
                    </div>

                    <div className="eye-icon">
                      <input type="text" placeholder="Enter Email" />
                    </div>

                    <div className="eye-icon">
                      <input type="password" placeholder=" Enter Password" />
                      <BsFillEyeFill className="eye"/>
                    </div>

                    <div className="eye-icon">
                      <input type="password" placeholder="Confirm Password" />
                      <BsFillEyeFill  className="eye"/>
                    </div>

                    <div className="check-box">
                    <IoMdCheckbox className="check"/>
                    <p>I hearby confirm that i am above 18 year old </p>
                    </div>


                    <div className="verify-btn">
                    <button>Verify OTP</button>
                   </div>
 
                   <div className="agree">
                   <p>By creating this account,you agree to our <span style={{
                       color:"#2B83EA" }}>Privacy Policy</span> and <span style={{color:"#2B83EA"}}>Terms Of use</span></p>
                   </div>


                  </div>

                </div>
              </div>
              <div className="col-lg-8 righty">
              <div className="rightside">

              <div className="top">
              <h4>Why Choose SubSpace?</h4>
              <p>2000+ businesses trust their payments with SubSpace</p>
              </div>
              
              <div className="rightimg">
              <img src ="../../img/group.png"></img>
              </div>

              <div className="bottom">
              <p>Need help? we are just a click away. <span style={{color:"black",fontWeight:500}}>Contact Us</span> </p>

              </div>
              
              </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Otp;
