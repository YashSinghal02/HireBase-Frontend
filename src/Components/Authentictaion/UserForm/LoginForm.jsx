import "./LoginForm.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import logo from "../../../assets/logo.png";
import { api } from "../../../Utils/axiosConfig.js";
import { apiTryCatch } from "../../../Utils/trycatch.js";


function LoginForm() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // async function SubmitForm(e) {
  //   e.preventDefault();
  //   await apiTryCatch(async () => {
  //     const response = await api.post("/user/login", data);
  //     console.log("Server response:", response.data);
  //     console.log(response.headers.authorization);
  //     // localStorage.setItem("accessToken",response.headers.authorization)
  //     const token = response.headers.authorization.split(" ")[1];
  //     localStorage.setItem("accessToken", token);
  //     const {useId, role}=response.data;
      
  //     setData({
  //       email: "",
  //       password: "",
  //     });
  //     toast.success(response?.data?.message);
  //     navigate("/dashboard");
  //   });
  // }

  async function SubmitForm(e) {
  e.preventDefault();

  await apiTryCatch(async () => {
    const response = await api.post("/user/login", data);

    const token = response.headers.authorization.split(" ")[1];
    localStorage.setItem("accessToken", token);

    const { id, role, name, email,phone } = response.data.data;

    localStorage.setItem(
      "userDetails",
      JSON.stringify({ userId: id, role, name, email,phone })
    );
    console.log("Login response:", response.data.data);

    toast.success(response?.data?.message);
    navigate("/dashboard");
  });
}

  return (
    <div className="form-container-login">
      <div className="login-logo">
        <img src={logo} alt="" />
      </div>
      <form className="simple-form-login" onSubmit={SubmitForm}>
        <h2 className="login-title">Log In</h2>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          placeholder="Enter your password"
          required
        />

        <div className="forget-block">
          <div className="check-box-all">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>

          <div className="forget-password">
            <p>Forgot Password?</p>
          </div>
        </div>

        <button type="submit">Login</button>

        {/* <Link to="/allcard"> <button type="submit">Login</button></Link> */}
        <div className="text-center2 mt-3">
          <p className="font-normal2">
            Create an account{" "}
            <Link to="/signup">
              <span className="text-blue-600 font-bold cursor-pointer">
                SignUp
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
