import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Table from "../../components/Table";
import Button from "../../components/Button";

import iklanku from "../../assets/iklanku.png";
import home from "../../assets/home.png";
import manageiklan from "../../assets/manajemen.png";
import kelolaadv from "../../assets/daftariklan.png";
import statistik from "../../assets/statistik.png";
import logout from "../../assets/logout.png";

export default function KelolaAdvertiser() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [advertisers, setAdvertisers] = useState([
    {
      nama: "Tokoku.id",
      id: "AD-001",
      email: "admin@tokoku.id",
      jumlahIklan: 12,
      status: "Aktif",
    },
    {
      nama: "GadgetStore",
      id: "AD-002",
      email: "contact@gadgetstore.com",
      jumlahIklan: 5,
      status: "Non-Aktif",
    },
    {
      nama: "RumahPromo",
      id: "AD-003",
      email: "info@rumahpromo.co.id",
      jumlahIklan: 8,
      status: "Aktif",
    },
  ]);

  // ===== Sidebar Menu untuk Admin =====
  const menuItems = [
    { icon: home, label: "Dashboard", path: "/admin/dashboard" },
    { icon: manageiklan, label: "Manajemen Iklan", path: "/admin/manajemeniklan" },
    { icon: kelolaadv, label: "Kelola Advertiser", active: true, path: "/admin/kelolaadvertiser" },
    { icon: statistik, label: "Statistik", path: "/admin/statistik" },
    { icon: logout, label: "Logout", path: "/logout" },
  ];

  // ===== User Info =====
  const user = {
    name: "Anita Cruz",
    email: "anita@grivyabali.com",
    avatar: "https://ui-avatars.com/api/?name=Anita+Cruz",
  };

  // ===== Handle Toggle Status =====
  const handleToggleStatus = (id) => {
    setAdvertisers((prev) =>
      prev.map((adv) =>
        adv.id === id
          ? {
              ...adv,
              status: adv.status === "Aktif" ? "Non-Aktif" : "Aktif",
            }
          : adv
      )
    );
  };

  // ===== Filter pencarian =====
  const filteredAdvertisers = advertisers.filter((adv) =>
    adv.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // ===== Tabel =====
  const columns = ["Nama Advertiser", "ID", "Email", "Jumlah Iklan", "Status", "Aksi"];

  const rows = filteredAdvertisers.map((adv) => [
    adv.nama,
    adv.id,
    adv.email,
    adv.jumlahIklan,
    adv.status,
    adv.status === "Aktif" ? (
      <Button label="Hentikan" color="red" onClick={() => handleToggleStatus(adv.id)} />
    ) : (
      <Button label="Aktifkan" color="green" onClick={() => handleToggleStatus(adv.id)} />
    ),
  ]);

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
          page="Pages"
          section="Kelola Advertiser"
          onMenuClick={() => setIsSidebarOpen(true)}
          showSearch={false}
          showNotification={true}
        />

        <div className="bg-white p-6 rounded-xl shadow-sm">
          {/* Input Cari */}
          <div className="mb-6">
            <h2 className="text-md font-semibold text-teal-600 mb-3">Cari</h2>
            <input
              type="text"
              placeholder="Cari advertiser..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:max-w-sm border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>

          {/* Tabel */}
          <div>
            <h2 className="text-md font-semibold text-teal-600 mb-3">Tabel Advertiser</h2>
            <p className="text-sm text-gray-500 mb-4">
              Kelola akun advertiser yang terdaftar. Gunakan tombol aksi untuk
              mengaktifkan atau menonaktifkan akun.
            </p>
            <Table columns={columns} rows={rows} />
          </div>
        </div>
      </main>
    </div>
  );
}
