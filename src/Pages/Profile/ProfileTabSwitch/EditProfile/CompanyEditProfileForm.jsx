import "./CompanyEditProfileForm.css";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { apiTryCatch } from "@/Utils/trycatch";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "@/AuthContext/AuthContext";
import { api } from "@/Utils/axiosConfig";

function CompanyEditProfileForm({ setActiveTab, setRefreshProfile }) {
  const { name, email, phone, setUserDetails } = useContext(AuthContext);

  const [profileId, setProfileId] = useState(null);

  const [data, setData] = useState({
    name: name || "",
    email: email || "",
    phone: phone || "",
    companyName: "",
    founded: "",
    industry: "",
    funding: "",
    employees: "",
    offices: "",
    location: "",
    countries: "",
    openjobs: "",
    website: "",
    companyEmail: "",
    recruiterName: "",
    recruiterEmail: "",
    aboutCompany: "",
    companyOverview: "",
    linkedin: "",
    twitter: "",
    facebook: "",
    instagram: "",
  });

  // ---------------- HANDLE CHANGE ----------------

  function handleChange(e) {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // ---------------- UPDATE PROFILE ----------------

  async function SubmitForm(e) {
    e.preventDefault();

    await apiTryCatch(async () => {
      const payload = {
        ...data,
      };

      const response = await api.put("/company-profile", payload);

      toast.success(response?.data?.message);

      // update AuthContext user info
      setUserDetails((prev) => ({
        ...prev,
        name: data.name,
        email: data.email,
        phone: data.phone,
      }));
      setRefreshProfile((prev) => !prev);
      setActiveTab("MainProfile");
    });
  }

  // ---------------- GET PROFILE ----------------

  async function getCompanyProfile() {
    await apiTryCatch(async () => {
      const response = await api.get("/company-profile");

      const profile = response?.data?.data;

      if (profile) {
        setProfileId(profile._id);

        setData({
          name: profile.userId?.name || "",
          email: profile.userId?.email || "",
          phone: profile.userId?.phone || "",
          companyName: profile.companyName || "",
          founded: profile.founded || "",
          industry: profile.industry || "",
          funding: profile.funding || "",
          employees: profile.employees || "",
          location: profile.location || "",
          countries: profile.countries || "",
          openjobs: profile.openjobs || "",
          offices: profile.offices || "",
          website: profile.website || "",
          companyEmail: profile.companyEmail || "",
          recruiterName: profile.recruiterName || "",
          recruiterEmail: profile.recruiterEmail || "",
          aboutCompany: profile.aboutCompany || "",
          companyOverview: profile.companyOverview || "",
          linkedin: profile.linkedin || "",
          twitter: profile.twitter || "",
          facebook: profile.facebook || "",
          instagram: profile.instagram || "",
        });
      }
    });
  }

  useEffect(() => {
    getCompanyProfile();
  }, []);

  return (
    <motion.div
      className="company-edit-profile-form-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <form className="company-edit-profile-form-section" onSubmit={SubmitForm}>
        {/* COMPANY INFORMATION */}

        <h2 className="company-edit-profile-form-title">Company Information</h2>

        <div className="company-edit-profile-form-grid">
          <div className="company-edit-profile-form-field">
            <label>Company Name</label>
            <input
              name="companyName"
              value={data.companyName}
              placeholder="Example: Google, Microsoft"
              onChange={handleChange}
            />
          </div>

          <div className="company-edit-profile-form-field">
            <label>Founded</label>
            <input
              name="founded"
              value={data.founded}
              placeholder="Example: 2015"
              onChange={handleChange}
            />
          </div>

          <div className="company-edit-profile-form-field">
            <label>Industry</label>
            <input
              name="industry"
              value={data.industry}
              placeholder="Example: Software Development"
              onChange={handleChange}
            />
          </div>

          <div className="company-edit-profile-form-field">
            <label>Funding</label>
            <input
              name="funding"
              value={data.funding}
              placeholder="Example: Series A"
              onChange={handleChange}
            />
          </div>

          <div className="company-edit-profile-form-field">
            <label>Employees</label>
            <input
              name="employees"
              value={data.employees}
              placeholder="Example: 50-100"
              onChange={handleChange}
            />
          </div>

          <div className="company-edit-profile-form-field">
            <label>Location</label>
            <input
              name="offices"
              value={data.offices}
              placeholder="Example: Delhi, London"
              onChange={handleChange}
            />
          </div>

          <div className="company-edit-profile-form-field">
            <label>offices</label>
            <input
              name="location"
              type="number"
              value={data.location}
              placeholder="Example:Number of offices, e.g., 1, 5"
              onChange={handleChange}
            />
          </div>

          <div className="company-edit-profile-form-field">
            <label>Countries</label>
            <input
              name="countries"
              type="number"
              value={data.countries}
              placeholder="Example:Number of countries, e.g., 1, 3"
              onChange={handleChange}
            />
          </div>

          <div className="company-edit-profile-form-field">
            <label>Open Jobs</label>
            <input
              name="openjobs"
              type="number"
              value={data.openjobs}
              placeholder="Number of open jobs, e.g., 10, 40"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* RECRUITER DETAILS */}

        <h2 className="company-edit-profile-form-title">Recruiter Details</h2>

        <div className="company-edit-profile-form-grid">
          <div className="company-edit-profile-form-field">
            <label>Recruiter Name</label>
            <input
              name="name"
              value={data.name}
              placeholder="Example: Rahul Sharma"
              onChange={handleChange}
            />
          </div>

          <div className="company-edit-profile-form-field">
            <label>Recruiter Email</label>
            <input
              name="email"
              value={data.email}
              placeholder="Example: hr@company.com"
              onChange={handleChange}
            />
          </div>

          <div className="company-edit-profile-form-field">
            <label>Recruiter Phone</label>
            <input
              name="phone"
              value={data.phone}
              placeholder="Example: +91 9876543210"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* CONTACT DETAILS */}

        <h2 className="company-edit-profile-form-title">Contact Details</h2>

        <div className="company-edit-profile-form-grid">
          <div className="company-edit-profile-form-field">
            <label>Website</label>
            <input
              name="website"
              value={data.website}
              placeholder="https://company.com"
              onChange={handleChange}
            />
          </div>

          <div className="company-edit-profile-form-field">
            <label>Company Email</label>
            <input
              name="companyEmail"
              value={data.companyEmail}
              placeholder="contact@company.com"
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
            value={data.aboutCompany}
            onChange={handleChange}
          />
        </div>

        <div className="company-edit-profile-form-field company-edit-profile-form-full">
          <label>Company Overview</label>
          <textarea
            rows="5"
            name="companyOverview"
            value={data.companyOverview}
            onChange={handleChange}
          />
        </div>

        {/* SOCIAL LINKS */}

        <h2 className="company-edit-profile-form-title">Social Links</h2>

        <div className="company-edit-profile-form-grid">
          <input
            className="company-links"
            name="linkedin"
            value={data.linkedin}
            placeholder="LinkedIn"
            onChange={handleChange}
          />
          <input
            className="company-links"
            name="twitter"
            value={data.twitter}
            placeholder="Twitter"
            onChange={handleChange}
          />
          <input
            className="company-links"
            name="facebook"
            value={data.facebook}
            placeholder="Facebook"
            onChange={handleChange}
          />
          <input
            className="company-links"
            name="instagram"
            value={data.instagram}
            placeholder="Instagram"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="company-edit-profile-form-button">
          Save Company Profile
        </button>
      </form>
    </motion.div>
  );
}

export default CompanyEditProfileForm;
