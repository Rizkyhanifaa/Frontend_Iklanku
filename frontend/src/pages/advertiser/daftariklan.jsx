import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Table from "../../components/Table";
import Button from "../../components/Button";
import home from "../../assets/home.png";
import buatiklan from "../../assets/buatiklan.png";
import statistik from "../../assets/statistik.png";
import daftariklan from "../../assets/daftariklan.png";
import logout from "../../assets/logout.png";
import iklanku from "../../assets/iklanku.png";

export default function DaftarIklan() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const menuItems = [
        { icon: home, label: "Dashboard", path: "/advertiser/dashboard" },
        { icon: buatiklan, label: "Buat Iklan", path: "/advertiser/buatiklan" },
        { icon: statistik, label: "Statistik Iklan", path: "/advertiser/statistik" },
        { icon: daftariklan, label: "Daftar Iklan", active: true, path: "/advertiser/daftariklan" },
        { icon: logout, label: "Logout", action: "logout" },
    ];

    const user = {
        name: "Anita Cruz",
        email: "anita@commerce.com",
        avatar: "https://ui-avatars.com/api/?name=Anita+Cruz",
    };

    const columns = ["Nama Iklan", "Kategori", "Penempatan", "Tanggal Tayang", "Status", "Aksi"];

    const rows = [
        [
            "Promo Buy 2 Get 1",
            "Komersial",
            "Header",
            "09/10/2025 - 15/10/2025",
            "Aktif",
            <Button label="Lihat" onClick={() => navigate("/advertiser/detailiklan")} />,
        ],
        [
            "7 Tips Berhenti Merokok",
            "Non Komersial",
            "Sidebar",
            "16/10/2025 - 20/10/2025",
            "Pending",
            <Button label="Lihat" onClick={() => navigate("/advertiser/detailiklan")} />,
        ],
        [
            "Promo All Item 15%",
            "Komersial",
            "Antara Konten",
            "21/10/2025 - 25/10/2025",
            "Ditolak",
            <Button label="Lihat" onClick={() => navigate("/advertiser/detailiklan")} />,
        ],
    ];

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
                    page="Pages"
                    section="Daftar Iklan"
                    onMenuClick={() => setIsSidebarOpen(true)}
                    showSearch={false}
                    showNotification={true}
                />

                <div className="bg-white p-6 rounded-xl shadow-sm">
                    {/* FILTER SECTION */}
                    <div className="mb-6">
                        <h2 className="text-md font-semibold text-teal-600 mb-3">Filter</h2>
                        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                            <select className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none">
                                <option>Semua Status</option>
                                <option>Aktif</option>
                                <option>Pending</option>
                                <option>Ditolak</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-md font-semibold text-teal-600 mb-3">Tabel Daftar Iklan</h2>
                        <Table columns={columns} rows={rows} />
                    </div>
                </div>
            </main>
        </div>
    );
}
