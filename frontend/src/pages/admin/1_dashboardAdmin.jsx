import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import StatsGroup from "../../components/StatsGroup";
import Table from "../../components/Table";
import iklanku from "../../assets/iklanku.png";
import home from "../../assets/home.png";
import manageiklan from "../../assets/manajemen.png";
import kelolaadv from "../../assets/daftariklan.png";
import statistik from "../../assets/statistik.png";
import logout from "../../assets/logout.png";

export default function DashboardAdmin() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // ===== Sidebar Menu =====
  const menuItems = [
    { icon: home, label: "Dashboard", active: true, path: "/admin/dashboard" },
    { icon: manageiklan, label: "Manajemen Iklan", path: "/admin/manajemeniklan" },
    { icon: kelolaadv, label: "Kelola Advertiser", path: "/admin/kelolaadvertiser" },
    { icon: statistik, label: "Statistik", path: "/admin/statistik" },
    { icon: logout, label: "Logout", path: "/logout" },
  ];

  // ===== User Info (Admin) =====
  const user = {
    name: "Anita Cruz",
    email: "anita@grivyabali.com",
    avatar: "https://ui-avatars.com/api/?name=Anita+Cruz",
  };

  // ===== Statistik atas =====
  const stats = [
    { title: "Iklan Aktif", value: "12", desc: "Perubahan 24 jam", change: "+10.0%" },
    { title: "Iklan Pending", value: "5", desc: "Perlu moderasi", change: "-3.0%" },
    { title: "Impressions (Hari ini)", value: "14.2k", desc: "Total tampilan hari ini", change: "+3.2%" },
    { title: "Clicks", value: "65", desc: "Total klik hari ini", change: "+8.3%" },
  ];

  // ===== Data tabel =====
  const columns = ["Nama Advertiser", "Judul Iklan", "Tayangan", "Klik", "CTR (%)", "Status"];
  const rows = [
    ["Tokoku.id", "Promo Diskon 10.10", "12.540", "624", "4.98", "Aktif"],
    ["BelanjaPlus", "Cashback Weekend", "8.210", "820", "2.60", "Aktif"],
    ["Gratis Ongkir 11.11", "ShopNow.id", "12.540", "1.543", "8.12", "Aktif"],
  ];

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
      <main className="flex-1 p-4 md:p-8 space-y-6">
        <Header
          page="Pages"
          section="Dashboard"
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        {/* Statistik Cards */}
        <StatsGroup stats={stats} />

        {/* Tabel Statistik */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-teal-600 mb-4">
            Statistik Iklan
          </h2>
          <Table columns={columns} rows={rows} />
        </div>
      </main>
    </div>
  );
}
