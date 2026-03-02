import { Link, useNavigate } from "react-router-dom";
import "./OTPSignup.css";
import { IoArrowBack } from "react-icons/io5";
import axios from "axios";
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { api } from "../../../Utils/axiosConfig.js";
import { apiTryCatch } from "../../../Utils/trycatch.js";



// When OTP page loads, state is empty.
// useLocation receives email from signup.
// useEffect copies that email into state.
// prev keeps other fields unchanged.

function OTPSignup() {
     const navigate = useNavigate();
   const location = useLocation();


      const[data,setData]=useState({
        email:"",
        otp1:"",
        otp2:"",
        otp3:"",
        otp4:""
              
      });

      
useEffect(()=>{
  setData(prev => ({
    ...prev,
    email: location.state?.email
  }))
},[])

      async function OTPSend(e) {
        e.preventDefault();
 const finalOtp = data.otp1 + data.otp2 + data.otp3 + data.otp4;
      //   try {
      //       const response=await api.post("/user/otp",{email: data.email,
      //   otp: finalOtp});
      //   console.log("response.data",response.data)
      //   toast.success(response?.data?.message);
      //    navigate("/login", { replace: true }); 
      //   } catch (error) {
      //       console.error("Error submitting form:", error);
      // console.log(error?.response?.data?.message);
      // toast.error(error?.response?.data?.message);
      //   }
      
     await apiTryCatch (async () => {
       const response =  await api.post("/user/otp",{email: data.email, otp: finalOtp})
        console.log("response.data",response.data)
        toast.success(response?.data?.message);
         navigate("/login", { replace: true }); 
      })
      }





  return (
    <div className="otp-page">

      {/* Background glow circles */}
      <div className="big-circles">
        <div className="big-circle1"></div>
        <div className="big-circle2"></div>
      </div>

      {/* Card */}
      <div className="otp-container">
        <div className="otp-card">

          <h2>OTP Verification</h2>

          <p className="subtitle">
           Please enter the 4-digit code sent to your registered email address.
          </p>

          {/* OTP Inputs */}
<form onSubmit={OTPSend}>
  <div className="otp-boxes">

    <input
      className="otp-input"
      inputMode="numeric"
      value={data.otp1}
      onChange={(e) => {
        const value = e.target.value.replace(/[^0-9]/g, "").slice(-1);
        setData({ ...data, otp1: value });
        if (value) e.target.nextSibling.focus();
      }}
    />

    <input
      className="otp-input"
      inputMode="numeric"
      value={data.otp2}
      onChange={(e) => {
        const value = e.target.value.replace(/[^0-9]/g, "").slice(-1);
        setData({ ...data, otp2: value });
        if (value) e.target.nextSibling.focus();
      }}
      onKeyDown={(e) => {
        if (e.key === "Backspace" && !data.otp2) {
          e.target.previousSibling.focus();
        }
      }}
    />

    <input
      className="otp-input"
      inputMode="numeric"
      value={data.otp3}
      onChange={(e) => {
        const value = e.target.value.replace(/[^0-9]/g, "").slice(-1);
        setData({ ...data, otp3: value });
        if (value) e.target.nextSibling.focus();
      }}
      onKeyDown={(e) => {
        if (e.key === "Backspace" && !data.otp3) {
          e.target.previousSibling.focus();
        }
      }}
    />

    <input
      className="otp-input"
      inputMode="numeric"
      value={data.otp4}
      onChange={(e) => {
        const value = e.target.value.replace(/[^0-9]/g, "").slice(-1);
        setData({ ...data, otp4: value });
      }}
      onKeyDown={(e) => {
        if (e.key === "Backspace" && !data.otp4) {
          e.target.previousSibling.focus();
        }
      }}
    />

  </div>

  <button type="submit" className="otp-btn">
    Confirm
  </button>
</form>



          

          <p className="resend">
            Didn’t receive code? <strong>Resend Code</strong>
          </p>

          <Link to="/signup"><button className="back">
            <IoArrowBack /> Back
          </button></Link>

        </div>
      </div>
    </div>
  );
}

export default OTPSignup;
