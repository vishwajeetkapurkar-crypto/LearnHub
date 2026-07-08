import reactImg from "../assets/images/react.jpg";
import javaImg from "../assets/images/java.jpg";
import pythonImg from "../assets/images/python.jpg";
import sqlImg from "../assets/images/sql.jpg";
import springImg from "../assets/images/springboot.jpg";
import promptImg from "../assets/images/prompt.jpg";
import generativeAiImg from "../assets/images/generativeAi.jpg";
import mysqlImg  from "../assets/images/MySql.jpg";
import pythonDataImg  from "../assets/images/data_analysis.jpg";
import javaDsaImg  from "../assets/images/dsa.jpg";
import htmlCssImg  from "../assets/images/html_css.jpg";
import javascriptImg  from "../assets/images/javascript.jpg";

const courses = [
  {
    id: 1,
    title: "React for Beginners",
    instructor: "Hardik Pandya",
    category: "Web Development",
    categorySlug: "web-development",
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
    category: "Java",
    categorySlug: "java",
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
    category: "Python",
    categorySlug: "python",
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
    category: "SQL",
    categorySlug: "sql",
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
    category: "Java",
    categorySlug: "java",
    duration: "20 Hours",
    level: "Advanced",
    description:
      "Build REST APIs using Spring Boot, Spring MVC and MySQL.",
    featured: false,
    free: true,
    image: springImg,
  },

  {
    id: 6,
    title: "Prompt Engineering",
    instructor: "Shubman Gill",
    category: "Prompt Engineering",
    categorySlug: "prompt-engineering",
    duration: "8 Hours",
    level: "Beginner",
    description:
      "Learn how to write effective prompts for modern AI tools and assistants.",
    featured: true,
    free: true,
    image: promptImg,
  },

{
  id: 7,
  title: "Modern JavaScript Mastery",
  instructor: "Suryakumar Yadav",
  category: "Web Development",
  categorySlug: "web-development",
  duration: "16 Hours",
  level: "Intermediate",
  description:
    "Master modern JavaScript including ES6 features, asynchronous programming, DOM manipulation and APIs.",
  featured: false,
  free: true,
  image: javascriptImg,
},

{
  id: 8,
  title: "HTML & CSS Complete Guide",
  instructor: "Ravindra Jadeja",
  category: "Web Development",
  categorySlug: "web-development",
  duration: "14 Hours",
  level: "Beginner",
  description:
    "Build responsive and modern websites using semantic HTML, Flexbox, Grid and advanced CSS techniques.",
  featured: false,
  free: true,
  image: htmlCssImg,
},

{
  id: 9,
  title: "Java Data Structures",
  instructor: "Rishabh Pant",
  category: "Java",
  categorySlug: "java",
  duration: "22 Hours",
  level: "Beginner",
  description:
    "Learn essential data structures and problem-solving techniques using practical Java implementations.",
  featured: true,
  free: true,
  image: javaDsaImg,
},

{
  id: 10,
  title: "Python Data Analysis",
  instructor: "Shreyas Iyer",
  category: "Python",
  categorySlug: "python",
  duration: "18 Hours",
  level: "Intermediate",
  description:
    "Analyze and transform real-world datasets using Python and popular data analysis techniques.",
  featured: false,
  free: true,
  image: pythonDataImg,
},

{
  id: 11,
  title: "MySQL Database Mastery",
  instructor: "Hardik Pandya",
  category: "SQL",
  categorySlug: "sql",
  duration: "16 Hours",
  level: "Advanced",
  description:
    "Master database design, complex queries, joins, subqueries, normalization and MySQL fundamentals.",
  featured: false,
  free: true,
  image: mysqlImg,
},

{
  id: 12,
  title: "Generative AI with Prompting",
  instructor: "Abhishek Sharma",
  category: "Prompt Engineering",
  categorySlug: "prompt-engineering",
  duration: "12 Hours",
  level: "Intermediate",
  description:
    "Learn advanced prompting strategies and use generative AI effectively for research, coding and creative work.",
  featured: true,
  free: true,
  image: generativeAiImg,
},


  
];

export default courses;