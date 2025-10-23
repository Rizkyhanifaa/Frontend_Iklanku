import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

import iklanku from "../../assets/iklanku.png";
import home from "../../assets/home.png";
import manageiklan from "../../assets/manajemen.png";
import kelolaadv from "../../assets/daftariklan.png";
import statistik from "../../assets/statistik.png";
import logout from "../../assets/logout.png";

export default function DetailStatistikAdmin() {
  const location = useLocation();
  const data = location.state; // ✅ Data dari navigate
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // ===== Sidebar Menu =====
  const menuItems = [
    { icon: home, label: "Dashboard", path: "/admin/dashboard" },
    { icon: manageiklan, label: "Manajemen Iklan", path: "/admin/manajemeniklan" },
    { icon: kelolaadv, label: "Kelola Advertiser", path: "/admin/kelolaadvertiser" },
    { icon: statistik, label: "Statistik", active: true, path: "/admin/statistik" },
    { icon: logout, label: "Logout", action: "logout" },
  ];

  // ===== User Info =====
  const user = {
    name: "Anita Cruz",
    email: "anita@grivyabali.com",
    avatar: "https://ui-avatars.com/api/?name=Anita+Cruz",
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        logo={iklanku}
        title="Iklanku"
        menuItems={menuItems}
        user={user}
      />

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        <Header
          page="Pages / Statistik"
          section="Detail Statistik"
          onMenuClick={() => setIsSidebarOpen(true)}
          showSearch={false}
        />

        {/* Konten Detail Statistik */}
        {data ? (
          <div className="bg-white rounded-xl shadow-sm p-6 max-w-3xl mx-auto">
            <h2 className="text-center text-lg font-semibold text-teal-600 mb-6">
              Detail Statistik
            </h2>

            {/* Informasi Umum */}
            <div className="mb-4 pb-4">
              <p>
                <span className="font-semibold">Judul Iklan   :</span>{" "}
                {data.judul}
              </p>
              <p>
                <span className="font-semibold">Advertiser      :</span>{" "}
                {data.advertiser}
              </p>
              <p>
                <span className="font-semibold">Tanggal Tayang :</span>{" "}
                {data.periode}
              </p>
            </div>

            <hr className="my-4" />

            {/* Statistik Performa */}
            <div className="mb-4">
              <h3 className="font-semibold text-teal-600 mb-2">
                Statistik Performa
              </h3>
              <p>
                <span className="font-semibold">Jumlah Tayangan :</span>{" "}
                {data.tayangan}
              </p>
              <p>
                <span className="font-semibold">Jumlah Klik :</span>{" "}
                {data.klik}
              </p>
              <p>
                <span className="font-semibold">CTR (Click-Through Rate) :</span>{" "}
                {data.ctr}
              </p>
            </div>

            <hr className="my-4" />

            {/* Distribusi Klik */}
            <div className="mb-4">
              <h3 className="font-semibold text-teal-600 mb-2">
                Distribusi Klik
              </h3>
              <p>7 Okt 2025 : 45</p>
              <p>8 Okt 2025 : 121</p>
              <p>9 Okt 2025 : 78</p>
              <p>10 Okt 2025 : 250</p>
            </div>

            {/* Tombol Kembali */}
            <div className="text-right mt-6">
              <button
                onClick={() => navigate("/admin/statistik")}
                className="text-sm text-teal-600 hover:underline"
              >
                Kembali ke Statistik
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">
            Data statistik tidak ditemukan.
          </p>
        )}
      </main>
    </div>
  );
}
