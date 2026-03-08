import { useState,useEffect } from "react";
import axios from "axios";
import "./SignUpForm.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import logo from "../../../assets/logo.png"
import { api } from "../../../Utils/axiosConfig.js";
import { apiTryCatch } from "../../../Utils/trycatch.js";




function SignUpForm() {
  const navigate = useNavigate();
  

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role:"",
  });

  async function SubmitForm(e) {
    e.preventDefault();

    // try {
    //   const response = await api.post(
    //     "user/signup",
    //     data
    //   );

    //   setData({
    //     name: "",
    //     email: "",
    //     phone: "",
    //     password: "",
    //     role:"",
    //   });

    //   toast.success(response?.data?.message);
    // // Navigte to OTP page only one navigate use at a time
    //   navigate("/otp", { state: { email: data.email } });
    // } catch (err) {
    //   toast.error(err?.response?.data?.message);
    // }
  


await apiTryCatch (async () => {
  const response = await api.post("user/signup", data);

  setData({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });

  toast.success(response.data.message);

  navigate("/otp", { state: { email: data.email } });
});

  }
    /* ================= TESTIMONIALS ================= */

  const testimonials = [
    {
      text: "Search and find your dream job is now easier than ever. Just browse a job and apply if you need to.",
      name: "Amit Singh",
      role: "UI Designer at Google",
    },
    {
      text: "Hirebase helped me land my first remote job within 2 weeks. Super easy and fast process.",
      name: "Sarah Ahmed",
      role: "Frontend Developer at Microsoft",
    },
    {
      text: "The clean interface and smart filters saved me hours of job searching every day.",
      name: "Rahul Verma",
      role: "Product Manager at Amazon",
    },
    {
      text: "Best job portal I’ve used. Simple signup and instant responses from companies.",
      name: "Emily Watson",
      role: "HR Specialist at Meta",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* BACKGROUND GLOW */}
      <div className="bg-circle-wrapper">
        <div className="bg-circle c1"></div>
        <div className="bg-circle c2"></div>
        <div className="bg-circle c3"></div>
      </div>

      <div className="signup-layout">
        <div className="signup-logo"><img src={logo} alt="" /></div>
        {/* ================= LEFT SIDE ================= */}
        <div className="signup-left">

             {/* Decorative star in top-right */}
        <svg
          className="decorative-star"
          width="80"
          height="80"
          viewBox="0 0 480 480"
        >
          <path
            d="M366.7 265.4c-27.7-5.6-27.7-45.2 0-50.7a85.2 85.2 0 0 0 43.6-143.8s-1.2-1.2-1.2-1.2a85.2 85.2 0 0 0-143.7 43.6c-5.6 27.7-45.2 27.7-50.7 0A85.2 85.2 0 0 0 70.9 69.7S69.7 71 69.7 71a85.2 85.2 0 0 0 43.6 143.8c27.7 5.5 27.7 45.1 0 50.7a85.2 85.2 0 0 0-42.4 144.9 85.2 85.2 0 0 0 143.8-43.6c5.5-27.7 45.1-27.7 50.7 0a85.2 85.2 0 0 0 144.9 42.4 85.2 85.2 0 0 0-43.6-143.8Z"
            fill="#FFFFFF"
          />
        </svg>

        {/* Decorative star in top-right */}
        <svg
          className="decorative-star4"
          width="80"
          height="80"
          viewBox="0 0 480 480"
        >
          <path d="M70.9 69.7 69.7 71a85.2 85.2 0 0 0 43.6 143.8L240 240l-25.4-126.7A85.2 85.2 0 0 0 71 69.7ZM69.7 409.1l1.2 1.2a85.2 85.2 0 0 0 143.8-43.6L240 240l-126.7 25.3a85.2 85.2 0 0 0-43.6 143.8ZM410.3 70.9l-1.2-1.2a85.2 85.2 0 0 0-143.8 43.6L240 240l126.7-25.4A85.2 85.2 0 0 0 410.3 71ZM366.7 265.4 240 240l25.4 126.7A85.2 85.2 0 0 0 409 410.3l1.2-1.2a85.2 85.2 0 0 0-43.6-143.7Z" fill="#FFFFFF"/>

        </svg>

 {/* Decorative star2 in top-right */}
        <svg
          className="decorative-star2"
          width="80"
          height="80"
          viewBox="0 0 480 480"
        >
           <path
            d="M240 240A240 240 0 0 0 0 480a240 240 0 0 0 240-240ZM240 240A240 240 0 0 0 0 0a240 240 0 0 0 240 240ZM480 0a240 240 0 0 0-240 240A240 240 0 0 0 480 0ZM480 480a240 240 0 0 0-240-240 240 240 0 0 0 240 240Z"
            fill="#FFFFFF"
          />

        </svg>
        {/* Decorative star3 in top-right */}
        {/* <svg
          className="decorative-star3"
          width="80"
          height="80"
          viewBox="0 0 480 480"
        >
           <path d="M70.9 69.7 69.7 71a85.2 85.2 0 0 0 43.6 143.8L240 240l-25.4-126.7A85.2 85.2 0 0 0 71 69.7ZM69.7 409.1l1.2 1.2a85.2 85.2 0 0 0 143.8-43.6L240 240l-126.7 25.3a85.2 85.2 0 0 0-43.6 143.8ZM410.3 70.9l-1.2-1.2a85.2 85.2 0 0 0-143.8 43.6L240 240l126.7-25.4A85.2 85.2 0 0 0 410.3 71ZM366.7 265.4 240 240l25.4 126.7A85.2 85.2 0 0 0 409 410.3l1.2-1.2a85.2 85.2 0 0 0-43.6-143.7Z" fill="#FFFFFF"/>

        </svg> */}



          <div className="testimonial-content">
           <h1>
            What’s our <br /> Jobseekers Said.
          </h1>

          <p className="testimonial-text">
            “{testimonials[index].text}”
          </p>

          <div className="user">
            <strong>{testimonials[index].name}</strong>
            <span>{testimonials[index].role}</span>
          </div>

            {/* FLOATING WHITE CARD */}
            <div className="bottom-card">
              <h4>Get your right job and right place apply now</h4>

              <p>
                Join thousands of professionals building their careers with HireBase.

              </p>

              {/* ⭐ AVATAR GROUP ADDED HERE */}
              <div className="avatar-group">
                <div className="avatar"><img src="https://images.pexels.com/photos/5920775/pexels-photo-5920775.jpeg" alt="" /></div>
                <div className="avatar"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                <div className="avatar"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                <div className="avatar"><img src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                <span className="avatar-text">10,000+ Users</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FORM SIDE ================= */}
        <div className="form-container-signup">
          <form className="simple-form-signup" onSubmit={SubmitForm}>
            <h2 className="form-title">Create Account</h2>

            <label>Name</label>
            <input
              type="text"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Enter your name"
              required
            />

            <label>Email</label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="Enter your email"
              required
            />

          <div className="two-part-signupform">
            <div className="left-side-part">
                <label>Phone Number</label>
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              placeholder="phone number"
              required
            />
            </div>
            <div className="right-side-part">
                       <label>Role</label>
    <select value={data.role}
      onChange={(e)=>setData({...data,role:e.target.value})} required>
      <option value="">-- Select --</option>
     <option value="employee">Employee</option>
<option value="employer">Employer</option>

    </select>
            </div>
          </div>

       

            <label>Password</label>
            <input
              type="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              placeholder="Enter password"
              required
            />

            <button type="submit">Create Account</button>

            <div className="text-center1">
              <p>
                Already have an account?{" "}
                <Link to="/login">
                  <span>Login</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
