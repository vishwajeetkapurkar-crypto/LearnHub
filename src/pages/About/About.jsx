import "./About.css";

import { Link } from "react-router-dom";

import {
  ArrowRight,
  BookOpen,
  Code2,
  Database,
  Brain,
  Search,
  MonitorSmartphone
} from "lucide-react";

function About() {
  const features = [
    {
      icon: BookOpen,
      title: "Practical Courses",
      description:
        "Explore technology courses designed around useful concepts and real skills."
    },
    {
      icon: Search,
      title: "Easy Discovery",
      description:
        "Find the right course quickly using search, categories and filters."
    },
    {
      icon: MonitorSmartphone,
      title: "Learn Anywhere",
      description:
        "Access the platform across desktop, tablet and mobile devices."
    }
  ];

  const technologies = [
    {
      icon: Code2,
      title: "Programming",
      description: "Java, Python and modern development fundamentals."
    },
    {
      icon: Database,
      title: "Databases",
      description: "SQL, queries, joins and essential database concepts."
    },
    {
      icon: Brain,
      title: "AI Skills",
      description: "Artificial intelligence and modern prompt engineering."
    }
  ];

  return (
    <main className="about-page">

      {/* HERO */}

      <section className="about-hero">

        <div className="about-hero-content">

          <span className="about-tag">
            ABOUT LEARNHUB
          </span>

          <h1>
            Learning technology should feel
            <span> simple and focused.</span>
          </h1>

          <p>
            LearnHub is a modern learning platform built to help
            learners discover technology courses and develop new
            skills at their own pace.
          </p>

        </div>

      </section>


      {/* ABOUT LEARNHUB */}

      <section className="about-intro">

        <div className="about-intro-container">

          <div className="about-intro-left">

            <span className="about-section-tag">
              WHAT IS LEARNHUB?
            </span>

            <h2>
              One place to discover your next skill.
            </h2>

          </div>


          <div className="about-intro-right">

            <p>
              Learning technology can feel confusing when courses
              and resources are spread across different places.
              LearnHub brings course discovery into one clean and
              simple platform.
            </p>

            <p>
              Learners can explore categories, search for topics,
              compare course information and choose what they want
              to learn next.
            </p>

          </div>

        </div>

      </section>


      {/* PURPOSE */}

      <section className="about-purpose">

        <div className="about-section-heading">

          <span className="about-section-tag">
            OUR PURPOSE
          </span>

          <h2>
            A better way to explore learning.
          </h2>

          <p>
            The platform focuses on making course discovery clear,
            useful and easy to navigate.
          </p>

        </div>


        <div className="about-feature-grid">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (
              <article
                className="about-feature-card"
                key={feature.title}
              >

                <div className="about-feature-icon">
                  <Icon size={26} />
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

              </article>
            );

          })}

        </div>

      </section>


      {/* TECHNOLOGIES */}

      <section className="about-technologies">

        <div className="about-section-heading">

          <span className="about-section-tag">
            KEEP EXPLORING
          </span>

          <h2>
            Skills for modern development.
          </h2>

          <p>
            Explore different areas of technology and choose the
            learning path that matches your goals.
          </p>

        </div>


        <div className="technology-grid">

          {technologies.map((technology) => {

            const Icon = technology.icon;

            return (
              <div
                className="technology-card"
                key={technology.title}
              >

                <Icon size={24} />

                <div>
                  <h3>{technology.title}</h3>
                  <p>{technology.description}</p>
                </div>

              </div>
            );

          })}

        </div>

      </section>


      {/* CTA */}

      <section className="about-cta">

        <div className="about-cta-content">

          <span>READY TO LEARN?</span>

          <h2>
            Find a course and start exploring.
          </h2>

          <p>
            Browse all available courses and choose the skill
            you want to learn next.
          </p>

          <Link to="/courses">
            Explore Courses
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}

export default About;