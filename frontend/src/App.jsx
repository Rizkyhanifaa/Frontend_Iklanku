import React from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
{/* Advertiser */ }
import Dashboard from "./pages/advertiser/dashboard";
import BuatIklan from "./pages/advertiser/BuatIklan";
import StatistikIklan from "./pages/advertiser/statistikiklan";
import DetailStatistik from "./pages/advertiser/detailstatistik";
import DaftarIklan from "./pages/advertiser/daftariklan";
import DetailIklan from "./pages/advertiser/detailiklan";
import EditIklan from "./pages/advertiser/editiklan";

/* Pages Login */
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route: langsung ke Login*/}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Halaman Login */}
        <Route path="/login" element={<Login />} />

        {/* Advertiser */}
        <Route path="/advertiser/dashboard" element={<Dashboard />} />
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
