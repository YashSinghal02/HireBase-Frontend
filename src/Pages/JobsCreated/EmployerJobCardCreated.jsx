import "./EmployerJobCardCreated.css";
import { FaMapMarkerAlt, FaBriefcase, FaCalendarAlt, FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

function EmployerJobCardCreated() {

  const jobs = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "TechNova Solutions",
      level: "Mid Level",
      location: "Dehradun",
      experience: "2 - 4 Years",
      date: "24-02-26"
    },
    {
      id: 2,
      role: "Backend Developer",
      company: "CloudStack Pvt Ltd",
      level: "Senior",
      location: "Delhi",
      experience: "4 - 6 Years",
      date: "20-02-26"
    },
    {
      id: 3,
      role: "UI/UX Designer",
      company: "DesignPro",
      level: "Junior",
      location: "Remote",
      experience: "1 - 2 Years",
      date: "18-02-26"
    }
  ];

  return (
    <div className="job-item-card-wrapper">
      {jobs.map((job) => (
        <div className="job-item-card" key={job.id}>

          <div className="job-item-header">
            <div>
              <h3 className="job-item-role">{job.role}</h3>
              <p className="job-item-company">{job.company}</p>
            </div>
            <span className="job-item-level">{job.level}</span>
          </div>

          <div className="job-item-meta">
            <div className="job-item-pill job-pill-location">
              <FaMapMarkerAlt />
              <span>{job.location}</span>
            </div>

            <div className="job-item-pill job-pill-experience">
              <FaBriefcase />
              <span>{job.experience}</span>
            </div>

            <div className="job-item-pill job-pill-date">
              <FaCalendarAlt />
              <span>Posted {job.date}</span>
            </div>
          </div>

          <p className="job-item-description">
            We are looking for a passionate developer to build scalable and
            high-performance web applications using modern technologies.
          </p>

          <div className="job-item-actions">
            <button className="job-item-btn job-item-edit">
              <MdEdit />
            </button>

            <button className="job-item-btn job-item-delete">
              <FaTrash />
            </button>
          </div>

        </div>
      ))}
    </div>
  );
}

export default EmployerJobCardCreated;