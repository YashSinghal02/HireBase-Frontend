import "./NavBar.css";
import logo from "../../assets/logo.png";
import { useState, useEffect, useRef, useContext } from "react";
import { FiUser, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/AuthContext/AuthContext";

function NavBar() {
  // const { role, isAuthorized, logout, name, email } = useContext(AuthContext);
  const { isAuthorized,userDetails,logout } = useContext(AuthContext);

const name = userDetails?.name;
const email = userDetails?.email;
  const navigate = useNavigate();
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);

  const indicatorRef = useRef(null);
  const navRef = useRef(null);
  const profileRef = useRef(null);

  const toggleHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  const toggleProfileCard = () => {
    setShowProfileCard(!showProfileCard);
  };

  /* Close dropdown when clicking outside */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfileCard(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* Capsule Hover Effect */
  useEffect(() => {
    const nav = navRef.current;
    const indicator = indicatorRef.current;
    const navItems = nav.querySelectorAll(".nav-li");

    indicator.style.opacity = "0";

    const handleMouseEnter = (item) => {
      const { offsetLeft, offsetWidth } = item;
      indicator.style.left = offsetLeft + "px";
      indicator.style.width = offsetWidth + "px";
      indicator.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      indicator.style.opacity = "0";
    };

    navItems.forEach((item) => {
      item.addEventListener("mouseenter", () => handleMouseEnter(item));
    });

    nav.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      nav.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <ul className="nav-ul" ref={navRef}>
          <div className="nav-indicator" ref={indicatorRef}></div>
          <li className="nav-li">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-li">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-li">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="nav-li">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="nav-right">
          
          {/* Avatar Section */}
          {/* Avatar Section (only if logged in) */}
{isAuthorized ? (
  <div className="profile-wrapper" ref={profileRef}>
    <div className="avatar" onClick={toggleProfileCard}>
      {/* YS */}
       {name ? name[0].toUpperCase() : "U"} {/* Show first letter of name or U */}
    </div>

    <div
      className={`profile-card ${showProfileCard ? "show-profile" : ""}`}
    >
      <div className="profile-header">
        <div className="profile-avatar">{name ? name[0].toUpperCase() : "U"} {/* Show first letter of name or U */}</div>
        <div>
          <h4>{name || "User"}</h4>
          <span>{email || "user@example.com"}</span>
        </div>
      </div>

      <div className="profile-options">
        <div className="profile-item">
          <FiUser />
          <Link to="/profile">View Profile</Link>
        </div>

        <div
          className="profile-item logout"
          onClick={() => {
    logout();       // updates context & localStorage
    navigate("/login");
  }}
        >
          <FiLogOut />
          <span>Logout</span>
        </div>
      </div>
    </div>
  </div>
) : (
  /* Authorization Buttons (only if NOT logged in) */
  <div className="auth-buttons">
    <button className="btn-glass-navbar login-btn-navbar">
      <Link to="/login">Login</Link>
    </button>
    <button className="btn-glass-navbar signup-btn-navbar">
      <Link to="/signup">Sign Up</Link>
    </button>
  </div>
)}

          <div className="bar" onClick={toggleHamburgerMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`hamburger-menu ${showHamburgerMenu ? "show" : ""}`}>
        <div className="close-menu" onClick={toggleHamburgerMenu}>
          <i className="fa-solid fa-xmark"></i>
        </div>

        <ul className="mobile-nav">
          <li>
            <Link onClick={toggleHamburgerMenu} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={toggleHamburgerMenu} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={toggleHamburgerMenu} to="/blogs">
              Blogs
            </Link>
          </li>
          <li>
            <Link onClick={toggleHamburgerMenu} to="/contact">
              Contact
            </Link>
          </li>
          {/* SideBar */}
          <select
            className="mobile-dashboard-select"
            onChange={(e) => {
              if (e.target.value) {
                navigate(e.target.value);
                toggleHamburgerMenu();
              }
            }}
          >
            <option value="">Dashboard</option>
            <option value="/dashboard/jobs">Jobs</option>
            <option value="/dashboard/companies">Companies</option>
            <option value="/dashboard/jobscreated">Jobs Create</option>
          </select>
          {/* Sidebar */}
        </ul>
      </div>

      <div
        className={`backdrop ${showHamburgerMenu ? "backdrop-show" : ""}`}
        onClick={toggleHamburgerMenu}
      ></div>
    </>
  );
}

export default NavBar;
