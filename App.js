import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NutritionInfo from "./pages/NutritionInfo";
import NutritionPlans from "./pages/NutritionPlans";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Questionnaire from "./pages/Questionnaire";
import Tracker from "./pages/Tracker";
import FileUpload from "./components/FileUpload";
import ProtectedPage from "./components/ProtectedPage";

//import './app.css';  // Main app styles

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/nutrition">Nutrition Info</Link>
          </li>
          <li className="nav-item">
            <Link to="/plans">Nutrition Plans</Link>
          </li>
          <li className="nav-item">
            <Link to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/register">Register</Link> {/* Added link to register */}
          </li>
          <li className="nav-item">
            <Link to="/questionnaire">Questionnaire</Link>
          </li>
          <li className="nav-item">
            <Link to="/tracker">Tracker</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nutrition" element={<NutritionInfo />} />
          <Route path="/plans" element={<NutritionPlans />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />{" "}
          {/* Ensure this route is correctly configured */}
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/upload" element={<FileUpload />} />
          <Route path="/protected" element={<ProtectedPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
