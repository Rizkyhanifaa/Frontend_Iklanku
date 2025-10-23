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

export default function ManajemenIklan() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("Semua Status");
  const navigate = useNavigate();

  // ===== Sidebar Menu untuk Admin =====
  const menuItems = [
    { icon: home, label: "Dashboard", path: "/admin/dashboard" },
    { icon: manageiklan, label: "Manajemen Iklan", active: true, path: "/admin/manajemeniklan" },
    { icon: kelolaadv, label: "Kelola Advertiser", path: "/admin/kelolaadvertiser" },
    { icon: statistik, label: "Statistik", path: "/admin/statistik" },
    { icon: logout, label: "Logout", action: "logout" },
  ];

  // ===== User Info =====
  const user = {
    name: "Anita Cruz",
    email: "anita@grivyabali.com",
    avatar: "https://ui-avatars.com/api/?name=Anita+Cruz",
  };

  // ===== Data Iklan =====
  const columns = ["Nama Iklan", "Advertiser", "Jadwal Tayang", "Penempatan", "Status", "Aksi"];
  const rows = [
    [
      "Promo Diskon 10.10",
      "Tokoku.id",
      "07/10/2025 - 12/10/2025",
      "Sidebar Kanan",
      "Aktif",
      <Button
        label="Lihat"
        onClick={() =>
          navigate("/admin/detailiklan", {
            state: {
              nama: "Promo Diskon 10.10",
              advertiser: "Tokoku.id",
              jadwal: "07/10/2025 - 12/10/2025",
              penempatan: "Sidebar Kanan",
              status: "Aktif",
              deskripsi:
                "Nikmati promo diskon besar-besaran hingga 50% untuk semua produk selama periode 10.10.",
              url: "https://tokoku.id/promo1010",
              kategori: "Komersial",
              ukuran: "728px x 90px",
              tanggal: "07 Okt 2025 - 12 Okt 2025",
              gambar: null,
            },
          })
        }
      />,
    ],
    [
      "Gadget Canggih 2025",
      "GadgetStore",
      "01/10/2025 - 15/10/2025",
      "Header Banner",
      "Pending",
      <Button
        label="Lihat"
        onClick={() =>
          navigate("/admin/detailiklan", {
            state: {
              nama: "Gadget Canggih 2025",
              advertiser: "GadgetStore",
              jadwal: "01/10/2025 - 15/10/2025",
              penempatan: "Header Banner",
              status: "Pending",
              deskripsi:
                "Dapatkan diskon hingga 50% untuk semua produk gadget selama periode promo Oktober 2025.",
              url: "https://gadgetcanggih2025.id/promo",
              kategori: "Komersial",
              ukuran: "728px x 90px",
              tanggal: "07 Okt 2025 - 12 Okt 2025",
              gambar: null,
            },
          })
        }
      />,
    ],
    [
      "Kuliner Nusantara",
      "MakananLezat",
      "07/10/2025 - 12/10/2025",
      "Banner Tengah",
      "Ditolak",
      <Button
        label="Lihat"
        onClick={() =>
          navigate("/admin/detailiklan", {
            state: {
              nama: "Kuliner Nusantara",
              advertiser: "MakananLezat",
              jadwal: "07/10/2025 - 12/10/2025",
              penempatan: "Banner Tengah",
              status: "Ditolak",
              deskripsi:
                "Promosi kuliner khas nusantara dengan cita rasa otentik Indonesia, ditolak karena banner tidak sesuai dimensi.",
              url: "https://makananlezat.id/kuliner",
              kategori: "Komersial",
              ukuran: "728px x 90px",
              tanggal: "07 Okt 2025 - 12 Okt 2025",
              gambar: null,
            },
          })
        }
      />,
    ],
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
      <main className="flex-1 p-4 md:p-8">
        <Header
          page="Pages"
          section="Manajemen Iklan"
          onMenuClick={() => setIsSidebarOpen(true)}
          showSearch={true}
          showNotification={true}
        />

        {/* FILTER + TABEL */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          {/* Filter Section */}
          <div className="mb-6">
            <h2 className="text-md font-semibold text-teal-600 mb-3">Filter</h2>
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
              >
                <option>Semua Status</option>
                <option>Aktif</option>
                <option>Pending</option>
                <option>Ditolak</option>
              </select>
            </div>
          </div>

          {/* Tabel Iklan */}
          <div>
            <h2 className="text-md font-semibold text-teal-600 mb-3">Tabel Iklan</h2>
            <Table columns={columns} rows={rows} />
          </div>
        </div>
      </main>
    </div>
  );
}
