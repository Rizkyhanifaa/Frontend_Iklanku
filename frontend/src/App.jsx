import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
{/* Advertiser */ }
import Dashboard from "./pages/advertiser/dashboard";
import BuatIklan from "./pages/advertiser/BuatIklan";
import StatistikIklan from "./pages/advertiser/statistikiklan";
import DetailStatistik from "./pages/advertiser/detailstatistik";
import DaftarIklan from "./pages/advertiser/daftariklan";
import DetailIklan from "./pages/advertiser/detailiklan";
import EditIklan from "./pages/advertiser/editiklan";

function App() {
  return (
    <Router>
      <Routes>
        {/* Advertiser */}
        <Route path="/" element={<Navigate to="/advertiser/dashboard" />} />
        <Route path="/advertiser/dashboard" element={<Dashboard />} />
        <Route path="/advertiser/buatiklan" element={<BuatIklan />} />
        <Route path="/advertiser/statistik" element={<StatistikIklan />} />
        <Route path="/advertiser/detailstatistik" element={<DetailStatistik />} />
        <Route path="/advertiser/daftariklan" element={<DaftarIklan />} />
        <Route path="/advertiser/detailiklan" element={<DetailIklan />} />
        <Route path="/advertiser/editiklan" element={<EditIklan />} />
      </Routes>
    </Router>
  );
}

export default App;
