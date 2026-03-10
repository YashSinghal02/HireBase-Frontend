import './NavBar.css';
import logo from '../../assets/logo.png';
import { useState, useEffect, useRef } from "react";
import { FiUser, FiLogOut } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


function NavBar() {
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
          <li className="nav-li"><Link to="/">Home</Link></li>
          <li className="nav-li"><Link to="/about">About</Link></li>
          <li className="nav-li"><Link to="/blogs">Blogs</Link></li>
          <li className="nav-li"><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav-right">

          {/* Avatar Section */}
          <div className="profile-wrapper" ref={profileRef}>
            <div className="avatar" onClick={toggleProfileCard}>
              YS
            </div>

            <div className={`profile-card ${showProfileCard ? "show-profile" : ""}`}>
              <div className="profile-header">
                <div className="profile-avatar">YS</div>
                <div>
                  <h4>Yash Singhal</h4>
                  <span>yash@email.com</span>
                </div>
              </div>

              <div className="profile-options">
                <div className="profile-item">
                  <FiUser />
                  <Link to="/profile">View Profile</Link>
                </div>

                <div className="profile-item setting">
                  <IoSettingsOutline  />
                  <span>Setting</span>
                </div>

                <div className="profile-item logout">
                  <FiLogOut />
                  <span>Logout</span>
                </div>

              </div>
              
            </div>
          </div>

{/* Autherizaions Buttons */}
          {/* <div className="auth-buttons">
  <button className="btn-glass-navbar login-btn-navbar"><Link  to="/login">Login</Link></button>
  <button className="btn-glass-navbar signup-btn-navbar"><Link to="/signup">Sign Up</Link></button>
</div> */}

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
          <li><Link onClick={toggleHamburgerMenu} to="/">Home</Link></li>
          <li><Link onClick={toggleHamburgerMenu} to='/about'>About</Link></li>
          <li><Link onClick={toggleHamburgerMenu} to="/blogs">Blogs</Link></li>
          <li><Link onClick={toggleHamburgerMenu} to="/contact">Contact</Link></li>
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