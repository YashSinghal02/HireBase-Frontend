// import "./JobsCards.css";
import defaultlogo from "../../assets/defaultlogo.png";
import NoPageFound from "../../assets/NoPageFound.png";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigate } from "react-router-dom";

dayjs.extend(relativeTime);

function ApplicantCard({ applicants }) {
    const navigate = useNavigate();
  if (!applicants || applicants.length === 0) {
    return (
      <div className="jobCards-home-wrapper no-jobs">
        <img
          src={NoPageFound}
          alt="No Applicants Found"
          style={{ width: "350px" }}
        />
      </div>
    );
  }

  return (
    <div className="jobCards-home-wrapper">
      {applicants.map((item) => (
        <div className="jobCards-home" key={item._id}>
          {/* Top */}
          <div className="jobCards-home-top">
            <span className="jobCards-home-date">
              Applied: {dayjs(item.appliedAt).fromNow()}
            </span>
          </div>

          {/* Employee Info */}
          <div className="jobCards-home-company">
            <img
              src={item?.job?.logo ? item?.job?.logo : defaultlogo}
              alt={item?.job?.companyName}
              className="jobCards-home-logo"
              onError={(e) => (e.target.src = defaultlogo)}
            />
            <div>
              <h4>{item?.applicant?.name || "N/A"}</h4>
              <span>{item?.applicant?.email}</span>
            </div>
          </div>

          {/* Job Info */}
          <h3 className="jobCards-home-title">
            {item?.job?.jobTitle || "Job Title"}
          </h3>

          <p className="jobCards-home-desc">
            Applied for <b>{item?.job?.companyName || "Company"}</b>
          </p>

          {/* Tags */}
          <div className="jobCards-home-tags">
            <span className="tag-blue">{item?.job?.positions} Positions</span>
            <span className="tag-orange">{item?.job?.jobType}</span>
            <span className="tag-purple">
              {dayjs(item.appliedAt).format("DD-MM-YY")}
            </span>
          </div>

          {/* Buttons */}
          <div className="jobCards-home-buttons">
            <button className="details-btn" onClick={() => navigate(`/userprofile/${item?.applicant?._id}`)}>View Profile</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ApplicantCard;
