import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import FeaturedCourses from "../../components/FeaturedCourses/FeaturedCourses";
import WhyLearnHub from "../../components/WhyLearnHub/WhyLearnHub";

function Home() {
  return (
    <>
      <Hero />

      <WhyLearnHub />

      <div className="section-divider"></div>

      <Categories />

      <div className="section-divider"></div>

      <FeaturedCourses />
      <div className="section-divider"></div>

    </>
  );
}

export default Home;