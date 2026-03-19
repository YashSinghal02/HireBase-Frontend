import "./NavBar.css";
import logo from "../../assets/logo.png";
import { useState, useEffect, useRef, useContext } from "react";
import { FiUser, FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "@/AuthContext/AuthContext";
import { Navitems } from "../Sidebar/Navitems";

function NavBar() {
  // 🔐 Auth Context
  const { isAuthorized, userDetails, logout } = useContext(AuthContext);

  // 👤 User Info
  const name = userDetails?.name;
  const email = userDetails?.email;
  const role = userDetails?.role;

  const navigate = useNavigate();

  // 📱 UI States
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);

  // 📌 Refs
  const indicatorRef = useRef(null);
  const navRef = useRef(null);
  const profileRef = useRef(null);

  // 🍔 Toggle mobile menu
  const toggleHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  // 👤 Toggle profile dropdown
  const toggleProfileCard = () => {
    setShowProfileCard(!showProfileCard);
  };

  // ❌ Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfileCard(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🎯 Navbar hover indicator animation
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

  // 🔥 Filter dashboard items based on role
  const dashboardItems = Navitems.filter((item) =>
    item.allowedRoles.includes(role)
  );

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Navigation Links */}
        <ul className="nav-ul" ref={navRef}>
          <div className="nav-indicator" ref={indicatorRef}></div>

          {/* Dashboard (only for employee & employer) */}
          {isAuthorized && ["employee", "employer"].includes(role) && (
            <li className="nav-li">
              <Link to="/dashboard/jobs">Dashboard</Link>
            </li>
          )}

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

        {/* Right Section */}
        <div className="nav-right">
          {/* ================= PROFILE / AUTH ================= */}
          {isAuthorized ? (
            <div className="profile-wrapper" ref={profileRef}>
              
              {/* Avatar */}
              <div className="avatar" onClick={toggleProfileCard}>
                {name ? name[0].toUpperCase() : "U"}
              </div>

              {/* Profile Dropdown */}
              <div
                className={`profile-card ${
                  showProfileCard ? "show-profile" : ""
                }`}
              >
                {/* Header */}
                <div className="profile-header">
                  <div className="profile-avatar">
                    {name ? name[0].toUpperCase() : "U"}
                  </div>
                  <div>
                    <h4>{name || "User"}</h4>
                    <span>{email || "user@example.com"}</span>
                  </div>
                </div>

                {/* Options */}
                <div className="profile-options">
                  <div className="profile-item">
                    <FiUser />
                    <Link to="/profile">View Profile</Link>
                  </div>

                  <div
                    className="profile-item logout"
                    onClick={() => {
                      logout();
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
            /* Auth Buttons */
            <div className="auth-buttons">
              <button className="btn-glass-navbar login-btn-navbar">
                <Link to="/login">Login</Link>
              </button>
              <button className="btn-glass-navbar signup-btn-navbar">
                <Link to="/signup">SignUp</Link>
              </button>
            </div>
          )}

          {/* Hamburger Icon */}
          <div className="bar" onClick={toggleHamburgerMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div className={`hamburger-menu ${showHamburgerMenu ? "show" : ""}`}>
        
        {/* Close Button */}
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

          {/* 🔥 Role-Based Dashboard Dropdown */}
          {isAuthorized && ["employee", "employer"].includes(role) && (
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

              {/* Dynamic items from Navitems */}
              {dashboardItems.map((item) => (
                <option key={item.path} value={item.path}>
                  {item.name}
                </option>
              ))}
            </select>
          )}
        </ul>
      </div>

      {/* Backdrop */}
      <div
        className={`backdrop ${
          showHamburgerMenu ? "backdrop-show" : ""
        }`}
        onClick={toggleHamburgerMenu}
      ></div>
    </>
  );
}

export default NavBar;