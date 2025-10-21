import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
{/* Advertiser */ }
import Dashboard from "./pages/advertider/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Advertiser */}
        <Route path="/" element={<Navigate to="/advertiser/dashboard" />} />
        <Route path="/advertiser/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
