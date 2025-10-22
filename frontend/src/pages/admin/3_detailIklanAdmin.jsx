import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import DetailIklanContainerAdmin from "../../components/DetailIklanContainerAdmin"; // pastikan sesuai
import iklanku from "../../assets/iklanku.png";
import home from "../../assets/home.png";
import manageiklan from "../../assets/manajemen.png";
import kelolaadv from "../../assets/daftariklan.png";
import statistik from "../../assets/statistik.png";
import logout from "../../assets/logout.png";

export default function DetailIklanAdmin() {
  const location = useLocation();
  const iklan = location.state; // ✅ Data dari navigate
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { icon: home, label: "Dashboard", path: "/admin/dashboard" },
    { icon: manageiklan, label: "Manajemen Iklan", active: true, path: "/admin/manajemeniklan" },
    { icon: kelolaadv, label: "Kelola Advertiser", path: "/admin/kelolaadvertiser" },
    { icon: statistik, label: "Statistik", path: "/admin/statistik" },
    { icon: logout, label: "Logout", path: "/logout" },
  ];

  const user = {
    name: "Anita Cruz",
    email: "anita@grivyabali.com",
    avatar: "https://ui-avatars.com/api/?name=Anita+Cruz",
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        logo={iklanku}
        title="Iklanku"
        menuItems={menuItems}
        user={user}
      />

      <main className="flex-1 p-4 md:p-8">
        <Header
          page="Pages / Manajemen Iklan"
          section="Detail Iklan"
          onMenuClick={() => setIsSidebarOpen(true)}
          showSearch={false}
        />

        {iklan ? (
          <DetailIklanContainerAdmin
            iklan={iklan}
            onBack={() => window.history.back()}
          />
        ) : (
          <p className="text-center text-gray-500">Data iklan tidak ditemukan.</p>
        )}
      </main>
    </div>
  );
}
