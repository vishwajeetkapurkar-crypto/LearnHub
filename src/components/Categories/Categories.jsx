import "./Categories.css";
import categories from "../../data/categories";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Flame } from "lucide-react";

function Categories() {

  return (

    <section className="categories">

      <div className="section-heading">

        <span className="section-tag">

          POPULAR CATEGORIES

        </span>

        <h2>

          Explore Learning Paths

        </h2>

        <p>

          Choose your technology stack and
          begin learning with curated
          courses designed for beginners
          and professionals.

        </p>

      </div>

      <div className="category-grid">

        {categories.map((category) => {

          const Icon = category.icon;

          return (

            <Link
              to={`/category/${category.slug}`}
              className="category-card"
              key={category.id}
            >


              <div className="category-top">

                <div className="category-icon">
                  <Icon size={36} />
                </div>

                {category.featured && (


                  <span className="featured-badge">
                    <Flame size={14} />
                    Most Popular

                  </span>

                )}

              </div>

              <h3>{category.name}</h3>

              <p>{category.description}</p>

              <div className="category-footer">

                <span>{category.courses} Courses</span>

                <ArrowRight size={18} />

              </div>

            </Link>

          );

        })}

      </div>

    </section>

  );

}

export default Categories;