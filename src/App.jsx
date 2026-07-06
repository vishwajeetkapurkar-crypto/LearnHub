import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import CourseDetails from "./pages/Courses/CourseDetails";
import Category from "./pages/Category/Category";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound";
function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/courses" element={<Courses />} />

        <Route
          path="/course/:id"
          element={<CourseDetails />}
        />

        <Route
          path="/category/:name"
          element={<Category />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;