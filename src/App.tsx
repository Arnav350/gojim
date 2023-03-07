import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Workout from "./pages/Workout";
import Nutrition from "./pages/Nutrition";
import Food from "./pages/Food";
import Connect from "./pages/Connect";
import Profile from "./pages/Profile";
import Nav from "./pages/Nav";
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

        <Route path="/logs" element={<Workout />} />
        {/* Workout Log Page
        Includes workout logs, create a new workout, and progress graph */}

        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/food" element={<Food />} />
        {/* Nutrition Page
        Calculates your calorires, macros, water, and weight goal */}

        <Route path="/connect" element={<Connect />} />
        {/* Messaging and Stories Page
        Has stories, messaging feature (need to figure out how to add friends), pr competitions */}

        <Route path="/profile" element={<Profile />} />
        {/* Profile Page
        Has your split, diet info, has videos of your maxes saved for each milestone */}
      </Routes>
      {window.location.pathname !== "/" && <Nav />}
    </Router>
  );
}

export default App;
