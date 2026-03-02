import { NavLink } from "react-router-dom";
import { FaBriefcase, FaBookmark, FaFileAlt, FaCog, FaBars,FaBuilding  } from "react-icons/fa";
import { useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="sidebar-toggle" onClick={() => setOpen(!open)}>
        <button className="sidebar-btn">SideBar</button>
      </div>

      <div className={`sidebar ${open ? "active" : ""}`}>
        {/* <h2 className="sidebar-logo">Dashboard</h2> */}

        <NavLink to="/dashboard/jobs" className="sidebar-link" onClick={() => setOpen(!open)}>
          <FaBriefcase />
          <span>Jobs</span>
        </NavLink>

        <NavLink to="/dashboard/saved" className="sidebar-link" onClick={() => setOpen(!open)}>
          <FaBookmark />
          <span>Saved Jobs</span>
        </NavLink>

        <NavLink to="/dashboard/applied" className="sidebar-link" onClick={() => setOpen(!open)}>
          <FaFileAlt />
          <span>Applied Jobs</span>
        </NavLink>

        {/* Employer */}
         <NavLink to="/dashboard/companies" className="sidebar-link" onClick={() => setOpen(!open)}>
          <FaBuilding  />
          <span>Companies</span>
        </NavLink>

         <NavLink to="/dashboard/jobscreated" className="sidebar-link" onClick={() => setOpen(!open)}>
          <FaFileAlt />
          <span>Jobs Create</span>
        </NavLink>

        <NavLink to="/profile" className="sidebar-link">
          <FaCog />
          <span>Settings</span>
        </NavLink>
      </div>

      {/* Overlay */}
      {open && <div className="sidebar-overlay" onClick={() => setOpen(false)} />}
    </>
  );
}

export default Sidebar;