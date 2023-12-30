import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ProfileDashboard from "./Pages/ProfileDashboard";
import PricingPage from "./Pages/PricingPage";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<PricingPage />} />
          <Route exact path="/home" element={<ProfileDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
