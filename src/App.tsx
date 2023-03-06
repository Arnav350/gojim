import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Logs from "./pages/Logs";
import Nutrition from "./pages/Nutrition";
import Connect from "./pages/Connect";
import Footer from "./pages/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Unprotected Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}

        <Route path="/logs" element={<Logs />} />
        {/* Workout Log Page
        Includes workout logs, create a new workout, and progress graph */}

        <Route path="/nutrition" element={<Nutrition />} />
        {/* Nutrition Page
        Calculates your calorires, macros, water, and weight goal */}

        <Route path="/connect" element={<Connect />} />
        {/* Messaging and Stories Page
        Has stories, messaging feature (need to figure out how to add friends), pr competitions */}

        {/* Profile Page
        Has your split, diet info, ... */}
      </Routes>
      {window.location.pathname !== "/" && <Footer />}
    </Router>
  );
}

export default App;
