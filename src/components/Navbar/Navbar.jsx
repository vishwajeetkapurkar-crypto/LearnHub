import "./Navbar.css";
import { NavLink } from "react-router-dom";
import {
  GraduationCap,
  Search,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

function Navbar() {
  return (
    <header className="header">

      <nav className="navbar ">

        {/* Logo */}

        <div className="logo">

          <div className="logo-icon">
            <GraduationCap size={22} />
          </div>

          <h2>
            Learn<span>Hub</span>
          </h2>

        </div>

        {/* Navigation */}

        <ul className="nav-links">

          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/courses">
              Courses
              
            </NavLink>
          </li>

          <li>
            <NavLink to="/category/web-development">
              Categories
              <ChevronDown size={16} />
            </NavLink>
          </li>

          <li>
            <NavLink to="/about">
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact">
              Contact
            </NavLink>
          </li>

        </ul>

        {/* Right Side */}

        <div className="nav-right">

          <div className="search-box">

            <Search size={18} className="search-icon" />

            <input
              type="text"
              placeholder="Search courses..."
            />

          </div>

          <NavLink
            className="login-btn"
            to="/login"
          >
            Log in
          </NavLink>

          <button className="signup-btn">

            Get Started

            <ArrowRight size={18} />

          </button>

        </div>

      </nav>

    </header>
  );
}

export default Navbar;