import React from 'react'
import {FaGreaterThan} from "react-icons/fa"
import "./Kyc.css"

function Kyc() {
    return (
        <React.Fragment>
            <section className="kyc-section">
            <div className="container">
            <div className="row">
            
            <div className="col-lg-3 leftkyc">

            <div className="leftkycside">
            <h1>KYC Form</h1>
            <p>Complete and Submit the form to accept payment</p>

            <div className="list">

            <div className="contact">
            <p>Contact</p>
            <FaGreaterThan className="greater"/>
            </div>

            <p>Business Overview</p>
            <p>Business Details</p>

            </div>
          


            </div>

            </div>

            <div className="col-lg-9 rightkyc">


            <div className="flexing">
            <p>Contact Info</p>
            <img src="../../img/Vector.png" alt="vector"/>
            </div>

            {/*contact info*/}

            <div className="personal">
            

            <div className="labelone">
            <label>Contact Name<span style={{color:"red"}}>*</span></label>
            <input type="text"/>
            
            </div>
            <div className="labeltwo">
            <label>Contact Number<span style={{color:"red"}}>*</span></label>
            <input type="text"/>
            </div>
            <div className="labelthree">
            <label>Contact Email <span style={{color:"red"}}>*</span></label>
            <input type="text"/>
            </div>

            </div>

        
            <div className="bottomkyc">
            <button>Save</button>
            <button>Save & Next</button>
            </div>

            </div>


            </div>
            
            </div>
            
            </section>
        </React.Fragment>
    )
}

export default Kyc
