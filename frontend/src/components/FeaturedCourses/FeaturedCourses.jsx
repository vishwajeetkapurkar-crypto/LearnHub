import "./FeaturedCourses.css";

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import CourseCard from "../CourseCard/CourseCard";
import courses from "../../data/courses";

function FeaturedCourses() {
  const featuredCourses = courses.filter(
    (course) => course.featured === true
  );

  return (
    <section className="featured-courses">

      <div className="featured-courses-heading">
        <span className="featured-courses-tag">
          EXPLORE FREE COURSES
        </span>

        <h2>Start Learning Today</h2>

        <p>
          Explore our selected technology courses and start
          building practical skills at your own pace.
        </p>
      </div>

      <div className="featured-course-grid">
        {featuredCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}
      </div>

      <div className="view-all-wrapper">
        <Link
          to="/courses"
          className="view-all-courses"
        >
          View All Courses

          <ArrowRight size={18} />
        </Link>
      </div>

    </section>
  );
}

export default FeaturedCourses;