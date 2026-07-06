import "./CourseCard.css";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock3,
  UserRound,
} from "lucide-react";

function CourseCard({ course }) {
  return (
    <Link
      to={`/course/${course.id}`}
      className="course-card"
    >
      {/* Course Image */}
      <div className="course-image">
        <img
          src={course.image}
          alt={course.title}
        />

        {/* Category Badge */}
        <span className="course-category">
          {course.category}
        </span>
      </div>

      {/* Course Details */}
      <div className="course-content">
        <h3>{course.title}</h3>

        {/* Instructor */}
        <div className="course-instructor">
          <UserRound size={17} />

          <span>{course.instructor}</span>
        </div>

        {/* Level and Duration */}
        <div className="course-meta">
          <span
            className={`course-level ${course.level.toLowerCase()}`}
          >
            {course.level}
          </span>

          <span className="course-duration">
            <Clock3 size={17} />
            {course.duration}
          </span>
        </div>

        {/* Bottom Link */}
        <div className="course-footer">
          <span>View Course</span>
          <ArrowRight size={18} />
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;