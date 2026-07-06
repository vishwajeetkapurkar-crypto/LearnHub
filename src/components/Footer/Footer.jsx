import "./Footer.css";

import { Link } from "react-router-dom";

import {
  GraduationCap,
  // Github,
  // Linkedin,
  Mail
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}

        <div className="footer-brand">

          <div className="footer-logo">

            <div className="footer-logo-icon">
              <GraduationCap size={22} />
            </div>

            <h2>
              Learn<span>Hub</span>
            </h2>

          </div>

          <p>
            Learn modern technologies through
            practical courses designed for beginners
            and aspiring developers.
          </p>

          <div className="footer-socials">

            {/* <a href="#">
              <Github size={20} />
            </a>

            <a href="#">
              <Linkedin size={20} />
            </a> */}

            <a href="#">
              <Mail size={20} />
            </a>

          </div>

        </div>

        {/* Explore */}

        <div className="footer-links">

          <h3>Explore</h3>

          <Link to="/courses">Courses</Link>

          <Link to="/category/web-development">
            Categories
          </Link>

          <Link to="/courses">
            Java
          </Link>

          <Link to="/courses">
            React
          </Link>

        </div>

        {/* Resources */}

        <div className="footer-links">

          <h3>Resources</h3>

          <Link to="#">FAQ</Link>

          <Link to="/contact">Contact</Link>

          <Link to="#">Privacy Policy</Link>

          <Link to="#">Support</Link>

        </div>

        {/* Company */}

        <div className="footer-links">

          <h3>Company</h3>

          <Link to="/about">About</Link>

          <Link to="/login">Login</Link>

          <Link to="#">Terms</Link>

        </div>

      </div>

      <div className="footer-bottom">

        <p>

          © 2026 LearnHub. Built with React.

        </p>

      </div>

    </footer>
  );
}

export default Footer;