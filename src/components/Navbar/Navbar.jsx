import "./Navbar.css";

import { useState } from "react";

import {
  NavLink,
  useNavigate
} from "react-router-dom";

import {
  GraduationCap,
  Search,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

import categories from "../../data/categories";


function Navbar() {

  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();


  /* =========================
     NAVBAR SEARCH
  ========================= */

  const handleSearch = (event) => {

    event.preventDefault();

    const trimmedSearch = searchTerm.trim();

    if (!trimmedSearch) {
      return;
    }

    navigate(
      `/courses?search=${encodeURIComponent(trimmedSearch)}`
    );

    setSearchTerm("");

  };


  return (

    <header className="header">

      <nav className="navbar">


        {/* =========================
            LOGO
        ========================= */}

        <NavLink
          to="/"
          className="logo"
        >

          <div className="logo-icon">

            <GraduationCap size={22} />

          </div>

          <h2>

            Learn<span>Hub</span>

          </h2>

        </NavLink>


        {/* =========================
            NAVIGATION LINKS
        ========================= */}

        <ul className="nav-links">


          {/* HOME */}

          <li>

            <NavLink to="/">

              Home

            </NavLink>

          </li>


          {/* COURSES */}

          <li>

            <NavLink to="/courses">

              Courses

            </NavLink>

          </li>


          {/* =========================
              CATEGORY DROPDOWN
          ========================= */}

          <li className="nav-dropdown">

            <button
              type="button"
              className="dropdown-trigger"
            >

              Categories

              <ChevronDown size={16} />

            </button>


            <div className="dropdown-menu">

              {categories.map((category) => {

                const CategoryIcon = category.icon;

                return (

                  <NavLink
                    key={category.id}
                    to={`/category/${category.slug}`}
                  >

                    <CategoryIcon size={18} />

                    <span>

                      {category.name}

                    </span>

                  </NavLink>

                );

              })}

            </div>

          </li>


          {/* ABOUT */}

          <li>

            <NavLink to="/about">

              About

            </NavLink>

          </li>


          {/* CONTACT */}

          <li>

            <NavLink to="/contact">

              Contact

            </NavLink>

          </li>

        </ul>


        {/* =========================
            RIGHT SIDE
        ========================= */}

        <div className="nav-right">


          {/* SEARCH */}

          <form
            className="search-box"
            onSubmit={handleSearch}
          >

            <Search
              size={18}
              className="search-icon"
            />

            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
            />

          </form>


          {/* LOGIN */}

          <NavLink
            className="login-btn"
            to="/login"
          >

            Log in

          </NavLink>


          {/* GET STARTED */}

          <button
            type="button"
            className="signup-btn"
            onClick={() => navigate("/courses")}
          >

            Get Started

            <ArrowRight size={18} />

          </button>

        </div>

      </nav>

    </header>

  );

}


export default Navbar;