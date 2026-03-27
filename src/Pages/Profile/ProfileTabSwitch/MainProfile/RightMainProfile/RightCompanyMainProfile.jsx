import "./RightCompanyMainProfile.css";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import { api } from "@/Utils/axiosConfig";
import { apiTryCatch } from "@/Utils/trycatch";
import { AuthContext } from "@/AuthContext/AuthContext";

function RightCompanyMainProfile({ refreshProfile }) {

  const { email, phone,userId } = useContext(AuthContext);

  const [data, setData] = useState(null);

  async function getProfile() {
    await apiTryCatch(async () => {

      const response = await api.get("/company-profile");

      const profile = response?.data?.data;

      setData(profile);

    });
  }

  useEffect(() => {
    getProfile();
  }, [refreshProfile]);

  const displayEmail = data?.userId?.email || email;
const displayPhone = data?.userId?.phone || phone;

  return (
    <div className="right-company-main-wrapper">

      {/* COMPANY OVERVIEW */}
      <motion.div
        className="right-company-main-profile"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >

        <h2 className="right-company-main-heading">
          Company Overview
        </h2>

        <p className="right-company-main-text">
          {data?.companyOverview || "No overview added yet."}
        </p>

        <div className="right-company-main-detail-row">
          <span className="right-main-label">Website</span>

          <span className="right-main-value">
            {data?.website ? (
              <a href={data.website} target="_blank" rel="noreferrer">
                {data.website}
              </a>
            ) : (
              "N/A"
            )}
          </span>
        </div>

        <div className="right-company-main-detail-row">
          <span className="right-main-label">Email</span>
          <span className="right-main-value">
              {data?.companyEmail || "No overview added yet."}
          </span>
        </div>

         <div className="right-company-main-detail-row">
          <span className="right-main-label">Recuriter Email</span>
          <span className="right-main-value">
              {displayEmail || "N/A"}
          </span>
        </div>

        <div className="right-company-main-detail-row">
          <span className="right-main-label">Phone</span>
          <span className="right-main-value">
             {displayPhone || "N/A"}
          </span>
        </div>

        {/* SOCIAL LINKS */}

        <div className="right-company-main-detail-row">
          <span className="right-main-label">Social</span>

          <div className="right-main-social-icons">

        <a
  href={data?.linkedin || "#"}
  target={data?.linkedin ? "_blank" : "_self"}
  rel="noreferrer"
  onClick={(e) => !data?.linkedin && e.preventDefault()}
>
  <FaLinkedin />
</a>

<a
  href={data?.twitter || "#"}
  target={data?.twitter ? "_blank" : "_self"}
  rel="noreferrer"
  onClick={(e) => !data?.twitter && e.preventDefault()}
>
  <FaTwitter />
</a>

<a
  href={data?.facebook || "#"}
  target={data?.facebook ? "_blank" : "_self"}
  rel="noreferrer"
  onClick={(e) => !data?.facebook && e.preventDefault()}
>
  <FaFacebook />
</a>

<a
  href={data?.instagram || "#"}
  target={data?.instagram ? "_blank" : "_self"}
  rel="noreferrer"
  onClick={(e) => !data?.instagram && e.preventDefault()}
>
  <FaInstagram />
</a>
          </div>
        </div>

      </motion.div>


      {/* GLOBAL OFFICES */}

      <motion.div
        className="right-company-main-profile"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >

        <h2 className="right-company-main-heading">
          Global Offices
        </h2>

        <div className="right-company-main-detail-row-location">

          <h3>{data?.companyName || "Company"}</h3>

          <h5>{data?.offices || "Location not added"}</h5>

          <p>Main Office</p>

        </div>

      </motion.div>

    </div>
  );
}

export default RightCompanyMainProfile;