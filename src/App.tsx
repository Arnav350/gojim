import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Gym from "./pages/Gym";
import Nutrition from "./pages/Nutrition";
import Connect from "./pages/Connect";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Nav from "./components/Nav";
import Workout from "./components/Workout";
import "./App.css";

function App() {
  const [workout, setWorkout] = useState({ start: false, show: false });

  return (
    <Router>
      {workout.start && <Workout workout={workout} setWorkout={setWorkout} />}
      <Routes>
        {/* Unprotected Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}

        <Route path="/gym" element={<Gym setWorkout={setWorkout} />} />
        {/* Workout Log Page
        Includes workout logs, create a new workout, and progress graph */}

        <Route path="/nutrition" element={<Nutrition />} />
        {/* Nutrition Page
        Calculates your calorires, macros, water, and weight goal */}

        <Route path="/connect" element={<Connect />} />
        <Route path="/chat" element={<Chat />} />
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
