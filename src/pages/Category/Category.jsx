import "./Category.css";
import categories from "../../data/categories";

import { Link, useParams } from "react-router-dom";

import {
  ArrowLeft,
  BookOpen
} from "lucide-react";

import courses from "../../data/courses";

import CourseCard from "../../components/CourseCard/CourseCard";


function Category() {

  const { name } = useParams();


 const currentCategory = categories.find(
  (category) => category.slug === name
);

const categoryCourses = courses.filter(
  (course) => course.categorySlug === name
);

const categoryName = currentCategory
  ? currentCategory.name
  : "Category";


  return (

    <main className="category-page">


      {/* =========================
          CATEGORY HERO
      ========================= */}

     <section className="category-page-hero">

  <Link
    to="/courses"
    className="category-back-link"
  >
    <ArrowLeft size={17} />
    All Courses
  </Link>

  <div className="category-hero-content">

    <span className="category-page-tag">
      COURSE CATEGORY
    </span>


          <h1>

            Explore

            <span>
              {" "}
              {categoryName}
            </span>

          </h1>


          <p>

            Discover courses in {categoryName}
            and start building your skills
            at your own pace.

          </p>

        </div>

      </section>


      {/* =========================
          CATEGORY COURSES
      ========================= */}

      <section className="category-courses-section">

        <div className="category-results-header">

          <div>

            <span className="category-results-label">

              AVAILABLE COURSES

            </span>

            <h2>

              {categoryName} Courses

            </h2>

          </div>


          <p>

            {categoryCourses.length}

            {" "}

            {categoryCourses.length === 1
              ? "course found"
              : "courses found"}

          </p>

        </div>


        {/* COURSES FOUND */}

        {categoryCourses.length > 0 ? (

          <div className="category-course-grid">

            {categoryCourses.map((course) => (

              <CourseCard
                key={course.id}
                course={course}
              />

            ))}

          </div>

        ) : (

          /* EMPTY CATEGORY */

          <div className="category-empty-state">

            <div className="category-empty-icon">

              <BookOpen size={34} />

            </div>


            <h2>

              No courses found

            </h2>


            <p>

              We don't have courses in this
              category yet.

            </p>


            <Link to="/courses">

              <ArrowLeft size={17} />

              Browse All Courses

            </Link>

          </div>

        )}

      </section>

    </main>

  );

}


export default Category;