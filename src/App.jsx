import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import SignUpForm from "./Components/Authentictaion/UserForm/SignUpForm";
// import LoginForm from "./Components/Authentictaion/UserForm/LoginForm";
// import OTPSignup from "./Components/Authentictaion/OTP/OTPSignup";
import VerifyEmail from "./Components/Authentictaion/ForgetPassword/VerifyEmail";
import ResetPassword from "./Components/Authentictaion/ForgetPassword/ResetPassword";
import VerifyOTP from "./Components/Authentictaion/ForgetPassword/VerifyOTP";
import Navbar from "./Components/Navbar/Navbar";

import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home/Home";
import LoginForm from "./Components/Authentictaion/UserForm/LoginForm";
import DashboardLayout from "./Layouts/DashboardLayout";
import Jobs from "./Pages/Jobs/Jobs";
import SignUpForm from "./Components/Authentictaion/UserForm/SignUpForm";
import OTPSignup from "./Components/Authentictaion/OTP/OTPSignup";
import Savedjobs from "./Pages/SavedJobs/Savedjobs";
import AppliedJobs from "./Pages/AppliedJobs/AppliedJobs";
import Settings from "./Pages/Settings/Settings";
import JobDetails from "./Pages/JobDetails/JobDetails";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import Companies from "./Pages/Companies/Companies";
import JobsCreated from "./Pages/JobsCreated/JobsCreated";
import CompanyForm from "./Pages/Companies/CompanyForm/CompanyForm";
import NewJobForm from "./Pages/JobsCreated/NewJobForm/NewJobForm";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import Profile from "./Pages/Profile/Profile";
import EditJobForm from "./Pages/JobsCreated/EditJobForm/EditJobForm";
import ProtectedRoutes from "./Utils/ProtectedRoutes";
import Admin from "./Pages/Admin/Admin";




function App() {
  return (
//  Combine Navbar + Sidebar
<BrowserRouter>
<Toaster position="bottom-right" />
<ScrollToTop/>
  <Routes>

    {/* MAIN LAYOUT (Navbar everywhere) */}
    <Route element={<MainLayout />}>

      {/* Normal Pages */}
      <Route path="/" element={<Home />} />
       <Route path="/about" element={<About/>} />
       <Route path="/blogs" element={<Blogs/>} />
       <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<LoginForm />} />
       <Route path="/signup" element={<SignUpForm/>} />
        <Route path="/otp" element={<OTPSignup/>} />


        {/* Admin */}
        <Route path="/admin" element={
          <ProtectedRoutes allowedRoles={["admin"]}>            
            <Admin/>
          </ProtectedRoutes>
        } />


        {/* Profile */}
        <Route path="/profile" element={<Profile/>} />
      {/* Dashboard Section */}
      <Route path="/dashboard" element={<DashboardLayout />}>
      {/* Empolyee */}
        <Route index element={<Jobs />} />
        <Route path="jobs" element={<Jobs />} />
         <Route path="details/:id" element={<JobDetails/>} />
         <Route path="saved" element={<Savedjobs/>} />
          <Route path="applied" element={<AppliedJobs/>} />
          {/* Empolyer */}
          <Route path="companies" element={<Companies/>} />
          <Route path="newcompany" element={<CompanyForm/>} />
          <Route path="jobscreated" element={<JobsCreated/>} />
          <Route path="jobsedit/:id" element={<EditJobForm/>} />
           <Route path="jobsform" element={<NewJobForm/>} />
           <Route path="settings" element={<Settings/>} />
      </Route>

    </Route>

  </Routes>
  <Footer/>
</BrowserRouter>
  );
}

export default App;
