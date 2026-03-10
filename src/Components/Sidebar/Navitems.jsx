import {
  FaBriefcase,
  FaBookmark,
  FaFileAlt,
  FaCog,
  FaBuilding,
} from "react-icons/fa";

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
    name: "Jobs Created",
    path: "/dashboard/jobscreated",
    icon: <FaFileAlt />,
    allowedRoles: ["admin", "employer"],
  },
  {
    name: "Settings",
    path: "/profile",
    icon: <FaCog />,
    allowedRoles: ["admin", "employee", "employer"],
  },
];