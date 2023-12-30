import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ProfileDashboard from "./Pages/ProfileDashboard";
import PricingPage from "./Pages/PricingPage";
import Navbar from "./Pages/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        {<Navbar />}
        <Routes>
        <Route exact path="/" element={<ProfileDashboard />} />
          <Route path="/pricing" element={<PricingPage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
