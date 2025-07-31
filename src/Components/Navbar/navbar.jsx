import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/UathLogo.png";
import "./navbar.css";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navbar-wrapper">
      <div className="navbarLogo">
        <Link to="/">
          <img src={logo} alt="UATH_Logo" />
        </Link>
      </div>
      <div className={`navbarOptions ${menuOpen ? "show" : ""}`}>
        <NavLink
          to="/funding-solution"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Funding Solutions
        </NavLink>
        <NavLink
          to="/our-process"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Our Process
        </NavLink>
        <NavLink
          to="/who-we-serve"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Who We Serve
        </NavLink>
        <NavLink
          to="/about-us"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </NavLink>
      </div>
      <div className="applyToday">
        <div className="callButton">
          <h3>Apply Today</h3>
          <p>(888) 559-9825</p>
        </div>
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="28px"
          viewBox="0 -960 960 960"
          width="28px"
          fill="#1f1f1f"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </div>
    </div>
  );
};
export default Navbar;
