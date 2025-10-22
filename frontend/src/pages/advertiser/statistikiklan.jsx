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
import searchIcon from "../../assets/search.png";

export default function StatistikIklan() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const menuItems = [
        { icon: home, label: "Dashboard", path: "/advertiser/dashboard" },
        { icon: buatiklan, label: "Buat Iklan", path: "/advertiser/buatiklan" },
        { icon: statistik, label: "Statistik Iklan", active: true, path: "/advertiser/statistik" },
        { icon: daftariklan, label: "Daftar Iklan", path: "/advertiser/daftariklan" },
        { icon: logout, label: "Logout", path: "/logout" },
    ];

    const user = {
        name: "Anita Cruz",
        email: "anita@commerce.com",
        avatar: "https://ui-avatars.com/api/?name=Anita+Cruz",
    };

    const columns = ["Nama Iklan", "Tayangan", "Jumlah Klik", "CTR (%)", "Status", "Aksi"];

    const rows = [
        [
            "Promo Spesial Akhir Pekan",
            "1.000",
            "890",
            "2.54",
            "Aktif",
            <Button key="1" label="Lihat" onClick={() => navigate("/advertiser/detailstatistik")} />,
        ],
        [
            "Sale Gila-Gilaan!",
            "12.500",
            "12.400",
            "7.42",
            "Aktif",
            <Button key="2" label="Lihat" onClick={() => navigate("/advertiser/detailstatistik")} />,
        ],
        [
            "Flash Sale Mulai Rp10Rb!",
            "2.193",
            "2.000",
            "3.54",
            "Aktif",
            <Button key="3" label="Lihat" onClick={() => navigate("/advertiser/detailstatistik")} />,
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
                    section="Statistik Iklan"
                    onMenuClick={() => setIsSidebarOpen(true)}
                    showSearch={false}
                />

                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="mb-4">
                        <h2 className="text-md font-semibold text-teal-600 mb-3">Cari Iklan</h2>
                        <div className="relative w-full max-w-xs">
                            <img
                                src={searchIcon}
                                alt="Search"
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
                            />
                            <input
                                type="text"
                                placeholder="Cari berdasarkan nama iklan..."
                                className="w-full border rounded-md px-10 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                            />
                        </div>
                    </div>

                    <h2 className="text-md font-semibold text-teal-600 mb-3">Tabel Statistik</h2>
                    <Table columns={columns} rows={rows} />
                </div>
            </main>
        </div>
    );
}
