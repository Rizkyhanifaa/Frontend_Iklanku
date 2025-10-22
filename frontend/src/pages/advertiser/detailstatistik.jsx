import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import home from "../../assets/home.png";
import buatiklan from "../../assets/buatiklan.png";
import statistik from "../../assets/statistik.png";
import daftariklan from "../../assets/daftariklan.png";
import logout from "../../assets/logout.png";
import iklanku from "../../assets/iklanku.png";
import { useNavigate } from "react-router-dom";

export default function DetailStatistik() {
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
                    section="Performa Iklan Saya"
                    onMenuClick={() => setIsSidebarOpen(true)}
                    showSearch={false}
                />

                <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 max-w-3xl mx-auto">
                    <h2 className="text-xl font-semibold text-center text-teal-600 mb-6">
                        Detail Statistik
                    </h2>
                    <div className="border-b pb-4 mb-4">
                        <p className="text-gray-700 mb-1">
                            <span className="font-semibold">Judul Iklan</span> : Promo Spesial Akhir Pekan
                        </p>
                        <p className="text-gray-700">
                            <span className="font-semibold">Tanggal Tayang</span> : 07 Okt 2025 – 15 Okt 2025
                        </p>
                    </div>

                    <div className="border-b pb-4 mb-4">
                        <h3 className="font-semibold text-teal-600 mb-2">Statistik Performa</h3>
                        <p>Jumlah Tayangan : 1.000</p>
                        <p>Jumlah Klik : 890</p>
                        <p>CTR (Click-Through Rate) : 2.54%</p>
                    </div>
                    <div className="pb-4">
                        <h3 className="font-semibold text-teal-600 mb-2">Distribusi Klik</h3>
                        <p>7 Okt 2025 : 45</p>
                        <p>8 Okt 2025 : 121</p>
                        <p>9 Okt 2025 : 78</p>
                        <p>10 Okt 2025 : 250</p>
                    </div>

                    <div className="mt-6 text-right">
                        <button
                            onClick={() => navigate("/advertiser/statistik")}
                            className="text-sm text-teal-600 hover:underline"
                        >
                            Kembali ke Statistik
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
