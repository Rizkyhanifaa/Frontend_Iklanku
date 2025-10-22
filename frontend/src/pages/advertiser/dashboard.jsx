import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import StatsGroup from "../../components/StatsGroup";
import Table from "../../components/Table";
import home from "../../assets/home.png";
import buatiklan from "../../assets/buatiklan.png";
import statistik from "../../assets/statistik.png";
import daftariklan from "../../assets/daftariklan.png";
import logout from "../../assets/logout.png";
import iklanku from "../../assets/iklanku.png";

export default function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const menuItems = [
        { icon: home, label: "Dashboard", active: true, path: "/advertiser/dashboard" },
        { icon: buatiklan, label: "Buat Iklan", path: "/advertiser/buatiklan" },
        { icon: statistik, label: "Statistik Iklan", path: "/advertiser/statistik" },
        { icon: daftariklan, label: "Daftar Iklan", path: "/advertiser/daftariklan" },
        { icon: logout, label: "Logout", path: "/logout" },
    ];

    const user = {
        name: "Anita Cruz",
        email: "anita@commerce.com",
        avatar: "https://ui-avatars.com/api/?name=Anita+Cruz",
    };

    const stats = [
        { title: "Total Iklan", value: "12", desc: "Perubahan 24 jam terakhir" },
        { title: "Iklan Pending", value: "5", desc: "Menunggu verifikasi" },
        { title: "Iklan Aktif", value: "3", desc: "Sedang tayang" },
        { title: "Total Tayangan", value: "41.587", desc: "Total tampilan hari ini" },
    ];

    const columns = ["Nama Iklan", "Tayangan", "Jumlah Klik", "CTR (%)", "Status"];
    const rows = [
        ["Promo Spesial Akhir Pekan", "20.000", "18.990", "15.23", "Aktif"],
        ["Sale Gila-Gilaan!", "13.587", "13.250", "8.66", "Aktif"],
        ["Flash Sale Mulai Rp10Rb!", "8.000", "8.150", "4.75", "Aktif"],
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

            <main className="flex-1 p-4 md:p-8 space-y-6">
                <Header page="Pages" section="Dashboard" onMenuClick={() => setIsSidebarOpen(true)} />
                <StatsGroup stats={stats} />
                <div className="bg-white shadow-md rounded-2xl p-5">
                    <h2 className="text-lg font-semibold text-teal-600 mb-4">
                        Tabel Statistik
                    </h2>
                    <Table columns={columns} rows={rows} />
                </div>
            </main>
        </div>
    );
}
