import {
  FaBriefcase,
  FaBookmark,
  FaFileAlt,
  FaCog,
  FaBuilding,
  
} from "react-icons/fa";

import { MdPostAdd } from "react-icons/md";


export const Navitems = [
  {
    name: "Jobs",
    path: "/dashboard/jobs",
    icon: <FaBriefcase />,
    allowedRoles: ["admin", "employee", "employer"],
  },
  {
    name: "Saved Jobs",
    path: "/dashboard/saved",
    icon: <FaBookmark />,
    allowedRoles: ["admin", "employee"],
  },
  {
    name: "Applied Jobs",
    path: "/dashboard/applied",
    icon: <FaFileAlt />,
    allowedRoles: ["admin", "employee"],
  },
  {
    name: "Companies",
    path: "/dashboard/companies",
    icon: <FaBuilding />,
    allowedRoles: ["admin", "employer"],
  },
  {
    name: "Post Jobs",
    path: "/dashboard/jobscreated",
    icon: <MdPostAdd size={20} />,
    allowedRoles: ["admin", "employer"],
  },
  {
    name: "Applicants",
    path: "/dashboard/applicants",
    icon: <FaFileAlt />,
    allowedRoles: ["admin","employer"],
  },
  {
    name: "Settings",
    path: "/profile",
    icon: <FaCog />,
    allowedRoles: ["admin", "employee", "employer"],
  },
];