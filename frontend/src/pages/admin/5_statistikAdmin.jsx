import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

export default function StatistikAdmin() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // ===== Sidebar Menu untuk Admin =====
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

  // ===== Data Statistik Iklan =====
  const columns = [
    "Nama Advertiser",
    "Judul Iklan",
    "Tayangan",
    "Klik",
    "CTR (%)",
    "Status",
    "Aksi",
  ];

  const rows = [
    [
      "Tokokulid",
      "Promo Diskon 10.10",
      "12.540",
      "624",
      "4.98",
      "Aktif",
      <Button
        label="Lihat"
        onClick={() =>
          navigate("/admin/detailstatistik", {
            state: {
              advertiser: "Tokokulid",
              judul: "Promo Diskon 10.10",
              tayangan: "12.540",
              klik: "624",
              ctr: "4.98%",
              status: "Aktif",
              deskripsi: "Promo diskon besar-besaran untuk semua kategori produk.",
              periode: "07/10/2025 - 12/10/2025",
            },
          })
        }
      />,
    ],
    [
      "BelanjaPlus",
      "Cashback Weekend",
      "8.210",
      "210",
      "2.60",
      "Aktif",
      <Button
        label="Lihat"
        onClick={() =>
          navigate("/admin/detailstatistik", {
            state: {
              advertiser: "BelanjaPlus",
              judul: "Cashback Weekend",
              tayangan: "8.210",
              klik: "210",
              ctr: "2.60%",
              status: "Aktif",
              deskripsi:
                "Dapatkan cashback hingga 30% di akhir pekan hanya di BelanjaPlus.",
              periode: "01/10/2025 - 10/10/2025",
            },
          })
        }
      />,
    ],
    [
      "Gratis Ongkir 11.11",
      "ShopNow.id",
      "15.432",
      "1.243",
      "8.12",
      "Aktif",
      <Button
        label="Lihat"
        onClick={() =>
          navigate("/admin/detailstatistik", {
            state: {
              advertiser: "ShopNow.id",
              judul: "Gratis Ongkir 11.11",
              tayangan: "15.432",
              klik: "1.243",
              ctr: "8.12%",
              status: "Aktif",
              deskripsi:
                "Promo besar 11.11 dengan gratis ongkir untuk semua produk!",
              periode: "09/11/2025 - 15/11/2025",
            },
          })
        }
      />,
    ],
  ];

  // ===== Filter data berdasarkan pencarian =====
  const filteredRows = rows.filter((row) =>
    row[0].toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          section="Statistik"
          onMenuClick={() => setIsSidebarOpen(true)}
          showSearch={true}
          showNotification={true}
        />

        {/* Search + Tabel Statistik */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          {/* Search Section */}
          <div className="mb-6">
            <h2 className="text-md font-semibold text-teal-600 mb-3">Cari</h2>
            <input
              type="text"
              placeholder="Cari nama advertiser..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-1/3 border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>

          {/* Tabel Statistik */}
          <div>
            <h2 className="text-md font-semibold text-teal-600 mb-3">
              Tabel Statistik
            </h2>
            <Table columns={columns} rows={filteredRows} />
          </div>
        </div>
      </main>
    </div>
  );
}
