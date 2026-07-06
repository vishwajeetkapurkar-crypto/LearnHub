import "./CourseDetails.css";

import { Link, useParams } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  Layers,
  User
} from "lucide-react";

import courses from "../../data/courses";

function CourseDetails() {
  const { id } = useParams();

  const course = courses.find(
    (course) => course.id === Number(id)
  );

  /* Invalid course ID */

  if (!course) {
    return (
      <main className="course-not-found">

        <BookOpen size={42} />

        <h1>Course not found</h1>

        <p>
          The course you are looking for does not exist.
        </p>

        <Link to="/courses">
          <ArrowLeft size={18} />
          Back to Courses
        </Link>

      </main>
    );
  }

  return (
    <main className="course-details-page">

      {/* HERO */}

      <section className="course-details-hero">
        <Link
              to="/courses"
              className="back-to-courses"
            >
              <ArrowLeft size={17} />
              Back to Courses
            </Link>

        <div className="course-details-container">

          {/* LEFT CONTENT */}

          <div className="course-details-content">

            <span className="details-category">
              {course.category}
            </span>

            <h1>
              {course.title}
            </h1>

            <p className="details-description">
              {course.description}
            </p>

            <div className="details-meta">

              <div className="details-meta-item">
                <User size={18} />

                <div>
                  <span>Instructor</span>
                  <strong>{course.instructor}</strong>
                </div>
              </div>

              <div className="details-meta-item">
                <Clock size={18} />

                <div>
                  <span>Duration</span>
                  <strong>{course.duration}</strong>
                </div>
              </div>

              <div className="details-meta-item">
                <Layers size={18} />

                <div>
                  <span>Level</span>
                  <strong>{course.level}</strong>
                </div>
              </div>

            </div>

          </div>


          {/* RIGHT COURSE CARD */}

          <div className="course-details-preview">

            <div className="details-image">

              <img
                src={course.image}
                alt={course.title}
              />

            </div>

            <div className="details-preview-content">

              <div className="preview-info">

                <span>
                  <Clock size={17} />
                  {course.duration}
                </span>

                <span>
                  <Layers size={17} />
                  {course.level}
                </span>

              </div>

              <button className="start-learning-btn">
                Start Learning
                <ArrowRight size={18} />
              </button>

              <p>
                Free access to this course.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* COURSE INFORMATION */}

      <section className="course-overview">

        <div className="course-overview-container">

          <div className="overview-main">

            <span className="overview-tag">
              COURSE OVERVIEW
            </span>

            <h2>
              About this course
            </h2>

            <p>
              {course.description}
            </p>

            <p>
              This course is designed to help you understand
              the important concepts of {course.title} through
              a clear and structured learning experience.
            </p>

          </div>


          {/* QUICK INFO */}

          <aside className="course-quick-info">

            <h3>
              Course Information
            </h3>

            <div className="quick-info-row">
              <span>Category</span>
              <strong>{course.category}</strong>
            </div>

            <div className="quick-info-row">
              <span>Level</span>
              <strong>{course.level}</strong>
            </div>

            <div className="quick-info-row">
              <span>Duration</span>
              <strong>{course.duration}</strong>
            </div>

            <div className="quick-info-row">
              <span>Access</span>
              <strong className="free-access">
                Free
              </strong>
            </div>

          </aside>

        </div>

      </section>

    </main>
  );
}

export default CourseDetails;