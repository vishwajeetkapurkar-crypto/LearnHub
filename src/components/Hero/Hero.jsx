import "./Hero.css";
import heroImage from "../../assets/images/hero.png";

import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-badge">
          🚀 Trusted by 5000+ learners
        </span>

        <h1>
          The smarter way
          <br />
          to learn
          <span> future skills.</span>
        </h1>

        <p>
          Learn React, Java, Spring Boot,
          Python and AI by building real-world
          projects guided by industry experts.
        </p>

        <div className="hero-buttons">

          <Link
            to="/courses"
            className="primary-btn"
          >
            Explore Courses
            <ArrowRight size={20} />
          </Link>

          <Link
            to="/about"
            className="secondary-btn"
          >
            Learn More
            <ArrowRight size={20} />
          </Link>

        </div>

        <div className="hero-rating">

          <div className="stars">
            <Star fill="#ffb400" />
            <Star fill="#ffb400" />
            <Star fill="#ffb400" />
            <Star fill="#ffb400" />
            <Star fill="#ffb400" />
          </div>

          <div className="rating-text">
            <h3>
              4.7
              <span>(2K Reviews)</span>
            </h3>

            <p>
              Loved by thousands of students worldwide
            </p>
          </div>

        </div>

      </div>

      <div className="hero-right">

        <div className="hero-image">
          <img
            src={heroImage}
            alt="Student learning online"
          />
        </div>

      </div>

    </section>
  );
}

export default Hero;