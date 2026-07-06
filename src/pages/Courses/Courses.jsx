import "./Courses.css";

import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import courses from "../../data/courses";
import CourseCard from "../../components/CourseCard/CourseCard";

function Courses() {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");


  const categories = [
    "All",
    ...new Set(courses.map((course) => course.category))
  ];


  const filteredCourses = courses.filter((course) => {

    const matchesSearch =
      course.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());


    const matchesCategory =
      selectedCategory === "All" ||
      course.category === selectedCategory;


    const matchesLevel =
      selectedLevel === "All" ||
      course.level === selectedLevel;


    return (
      matchesSearch &&
      matchesCategory &&
      matchesLevel
    );

  });


  return (

    <main className="courses-page">


      {/* =========================
          PAGE HERO
      ========================= */}

      <section className="courses-hero">

        <span className="courses-page-tag">
          EXPLORE COURSES
        </span>

        <h1>
          Find the right course for
          <span> your next skill.</span>
        </h1>

        <p>
          Explore practical technology courses and
          start learning at your own pace.
        </p>

      </section>


      {/* =========================
          SEARCH AND FILTERS
      ========================= */}

      <section className="courses-content">

        <div className="courses-toolbar">


          {/* SEARCH */}

          <div className="courses-search">

            <Search size={19} />

            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
            />

          </div>


          {/* FILTERS */}

          <div className="courses-filters">

            <div className="filter-label">

              <SlidersHorizontal size={18} />

              <span>Filter</span>

            </div>


            <select
              value={selectedCategory}
              onChange={(event) =>
                setSelectedCategory(event.target.value)
              }
            >

              {categories.map((category) => (

                <option
                  key={category}
                  value={category}
                >
                  {category}
                </option>

              ))}

            </select>


            <select
              value={selectedLevel}
              onChange={(event) =>
                setSelectedLevel(event.target.value)
              }
            >

              <option value="All">
                All Levels
              </option>

              <option value="Beginner">
                Beginner
              </option>

              <option value="Intermediate">
                Intermediate
              </option>

              <option value="Advanced">
                Advanced
              </option>

            </select>

          </div>

        </div>


        {/* =========================
            RESULT INFORMATION
        ========================= */}

        <div className="courses-results-info">

          <h2>
            All Courses
          </h2>

          <p>
            {filteredCourses.length}
            {" "}
            {filteredCourses.length === 1
              ? "course found"
              : "courses found"}
          </p>

        </div>


        {/* =========================
            COURSE GRID
        ========================= */}

        {filteredCourses.length > 0 ? (

          <div className="courses-grid">

            {filteredCourses.map((course) => (

              <CourseCard
                key={course.id}
                course={course}
              />

            ))}

          </div>

        ) : (

          <div className="no-courses">

            <Search size={36} />

            <h3>
              No courses found
            </h3>

            <p>
              Try changing your search or filters.
            </p>

            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSelectedLevel("All");
              }}
            >
              Clear Filters
            </button>

          </div>

        )}

      </section>

    </main>

  );

}

export default Courses;