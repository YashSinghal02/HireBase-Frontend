import "./CompanyEditProfileForm.css";
import { motion } from "framer-motion";
import { useState } from "react";

function CompanyEditProfileForm() {

  const [data, setData] = useState({
    companyName: "",
    founded: "",
    industry: "",
    funding: "",
    employees: "",
    offices: "",
    website: "",
    companyEmail: "",
    recruiterName: "",
    recruiterEmail: "",
    aboutCompany: "",
    companyOverview: "",
    linkedin: "",
    twitter: "",
    facebook: "",
    instagram: ""
  });

  function handleChange(e){
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  function submitForm(e){
    e.preventDefault();
    console.log(data);
  }

  return (
    <motion.div
      className="company-edit-profile-form-container"
      initial={{opacity:0,y:40}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.6}}
    >

      <form
        className="company-edit-profile-form-section"
        onSubmit={submitForm}
      >

        {/* COMPANY INFORMATION */}

        <h2 className="company-edit-profile-form-title">
          Company Information
        </h2>

        <div className="company-edit-profile-form-grid">

          <div className="company-edit-profile-form-field">
            <label>Company Name</label>
            <input
              name="companyName"
              placeholder="Example: Google, Microsoft, TechNova"
              value={data.companyName}
              onChange={handleChange}
            />
          </div>

          <div className="company-edit-profile-form-field">
            <label>Founded</label>
            <input
              name="founded"
              placeholder="Example: 2015"
              value={data.founded}
              onChange={handleChange}
            />
          </div>

          <div className="company-edit-profile-form-field">
            <label>Industry</label>
            <input
              name="industry"
              placeholder="Example: Software Development, FinTech, AI"
              value={data.industry}
              onChange={handleChange}
            />
          </div>

          <div className="company-edit-profile-form-field">
            <label>Funding</label>
            <input
              name="funding"
              placeholder="Example: Bootstrapped, Series A, $10M"
              value={data.funding}
              onChange={handleChange}
            />
          </div>

          <div className="company-edit-profile-form-field">
            <label>Employees</label>
            <input
              name="employees"
              placeholder="Example: 50-100 employees"
              value={data.employees}
              onChange={handleChange}
            />
          </div>

          <div className="company-edit-profile-form-field">
            <label>Offices</label>
            <input
              name="offices"
              placeholder="Example: Delhi, Bangalore, London"
              value={data.offices}
              onChange={handleChange}
            />
          </div>

        </div>


        {/* RECRUITER DETAILS */}

        <h2 className="company-edit-profile-form-title">
          Recruiter Details
        </h2>

        <div className="company-edit-profile-form-grid">

          <div className="company-edit-profile-form-field">
            <label>Recruiter Name</label>
            <input
              name="recruiterName"
              placeholder="Example: Rahul Sharma"
              value={data.recruiterName}
              onChange={handleChange}
            />
          </div>

          <div className="company-edit-profile-form-field">
            <label>Recruiter Email</label>
            <input
              name="recruiterEmail"
              placeholder="Example: recruiter@company.com"
              value={data.recruiterEmail}
              onChange={handleChange}
            />
          </div>

        </div>


        {/* CONTACT DETAILS */}

        <h2 className="company-edit-profile-form-title">
          Contact Details
        </h2>

        <div className="company-edit-profile-form-grid">

          <div className="company-edit-profile-form-field">
            <label>Website</label>
            <input
              name="website"
              placeholder="Example: https://www.company.com"
              value={data.website}
              onChange={handleChange}
            />
          </div>

          <div className="company-edit-profile-form-field">
            <label>Company Email</label>
            <input
              name="companyEmail"
              placeholder="Example: contact@company.com"
              value={data.companyEmail}
              onChange={handleChange}
            />
          </div>

        </div>


        {/* ABOUT COMPANY */}

        <div className="company-edit-profile-form-field company-edit-profile-form-full">
          <label>About Company</label>
          <textarea
            rows="5"
            name="aboutCompany"
            placeholder="Write a short introduction about your company, mission, and what you do."
            value={data.aboutCompany}
            onChange={handleChange}
          />
        </div>

        <div className="company-edit-profile-form-field company-edit-profile-form-full">
          <label>Company Overview</label>
          <textarea
            rows="5"
            name="companyOverview"
            placeholder="Describe your company culture, products, services, and achievements."
            value={data.companyOverview}
            onChange={handleChange}
          />
        </div>


        {/* SOCIAL LINKS */}

        <h2 className="company-edit-profile-form-title">
          Social Links
        </h2>

        <div className="company-edit-profile-form-grid">

          <div className="company-edit-profile-form-field">
            <label>LinkedIn</label>
            <input
              name="linkedin"
              placeholder="Example: https://linkedin.com/company/yourcompany"
              value={data.linkedin}
              onChange={handleChange}
            />
          </div>

          <div className="company-edit-profile-form-field">
            <label>Twitter</label>
            <input
              name="twitter"
              placeholder="Example: https://twitter.com/yourcompany"
              value={data.twitter}
              onChange={handleChange}
            />
          </div>

          <div className="company-edit-profile-form-field">
            <label>Facebook</label>
            <input
              name="facebook"
              placeholder="Example: https://facebook.com/yourcompany"
              value={data.facebook}
              onChange={handleChange}
            />
          </div>

          <div className="company-edit-profile-form-field">
            <label>Instagram</label>
            <input
              name="instagram"
              placeholder="Example: https://instagram.com/yourcompany"
              value={data.instagram}
              onChange={handleChange}
            />
          </div>

        </div>

        <button
          type="submit"
          className="company-edit-profile-form-button"
        >
          Save Company Profile
        </button>

      </form>

    </motion.div>
  );
}

export default CompanyEditProfileForm;