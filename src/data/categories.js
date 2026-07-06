import {
  Code2,
  Coffee,
  Database,
  Brain,
  Bot,
  Globe
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Web Development",
    description: "HTML, CSS, JavaScript & React",
    courses: 12,
    icon: Globe,
    slug: "web-development",
    featured:true
  },
  {
    id: 2,
    name: "Java",
    description: "Core Java & Spring Boot",
    courses: 8,
    icon: Coffee,
    slug: "java",
    featured:false
  },
  {
    id: 3,
    name: "Python",
    description: "Python Programming & Automation",
    courses: 10,
    icon: Code2,
    slug: "python",
    featured:false
  },
  {
    id: 4,
    name: "SQL",
    description: "Queries, Joins & Databases",
    courses: 6,
    icon: Database,
    slug: "sql",
    featured:false
  },
  {
    id: 5,
    name: "Artificial Intelligence",
    description: "Machine Learning & AI",
    courses: 5,
    icon: Brain,
    slug: "ai",
    featured:false
  },
  {
    id: 6,
    name: "Prompt Engineering",
    description: "Work smarter with AI tools",
    courses: 4,
    icon: Bot,
    slug: "prompt-engineering",
    featured:false
  },
];

export default categories;