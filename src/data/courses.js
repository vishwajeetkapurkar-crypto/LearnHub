import reactImg from "../assets/images/react.jpg";
import javaImg from "../assets/images/java.jpg";
import pythonImg from "../assets/images/python.jpg";
import sqlImg from "../assets/images/sql.jpg";
import springImg from "../assets/images/springboot.jpg";
import promptImg from "../assets/images/prompt.jpg";

const courses = [
  {
    id: 1,
    title: "React for Beginners",
    instructor: "Hardik Pandya",
    category: "Web Development",
    duration: "12 Hours",
    level: "Beginner",
    description:
      "Build modern React applications using components, hooks and routing.",
    featured: true,
    free: true,
    image: reactImg,
  },

  {
    id: 2,
    title: "Java Programming",
    instructor: "Virat Kohli",
    category: "Programming",
    duration: "18 Hours",
    level: "Intermediate",
    description:
      "Master Core Java, OOP, Collections and Exception Handling with projects.",
    featured: true,
    free: true,
    image: javaImg,
  },

  {
    id: 3,
    title: "Python Programming",
    instructor: "MS Dhoni",
    category: "Programming",
    duration: "15 Hours",
    level: "Beginner",
    description:
      "Learn Python fundamentals for automation, scripting and development.",
    featured: true,
    free: true,
    image: pythonImg,
  },

  {
    id: 4,
    title: "SQL Bootcamp",
    instructor: "Rohit Sharma",
    category: "Database",
    duration: "10 Hours",
    level: "Beginner",
    description:
      "Learn SQL queries, joins and database concepts from scratch.",
    featured: true,
    free: true,
    image: sqlImg,
  },

  {
    id: 5,
    title: "Spring Boot Masterclass",
    instructor: "Jasprit Bumrah",
    category: "Backend",
    duration: "20 Hours",
    level: "Advanced",
    description:
      "Build REST APIs using Spring Boot, Spring MVC and MySQL.",
    featured: true,
    free: true,
    image: springImg,
  },

  {
    id: 6,
    title: "Prompt Engineering",
    instructor: "Shubman Gill",
    category: "Artificial Intelligence",
    duration: "8 Hours",
    level: "Beginner",
    description:
      "Learn how to write effective prompts for modern AI tools and assistants.",
    featured: true,
    free: true,
    image: promptImg,
  },
];

export default courses;