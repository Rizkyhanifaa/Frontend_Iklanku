import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import DetailIklanContainer from "../../components/DetailIklanContainer";
import home from "../../assets/home.png";
import buatiklan from "../../assets/buatiklan.png";
import statistik from "../../assets/statistik.png";
import daftariklan from "../../assets/daftariklan.png";
import logout from "../../assets/logout.png";
import iklanku from "../../assets/iklanku.png";

export default function DetailIklan() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const menuItems = [
        { icon: home, label: "Dashboard", path: "/advertiser/dashboard" },
        { icon: buatiklan, label: "Buat Iklan", path: "/advertiser/buatiklan" },
        { icon: statistik, label: "Statistik Iklan", path: "/advertiser/statistik" },
        { icon: daftariklan, label: "Daftar Iklan", active: true, path: "/advertiser/daftariklan" },
        { icon: logout, label: "Logout", path: "/logout" },
    ];

    const user = {
        name: "Anita Cruz",
        email: "anita@commerce.com",
        avatar: "https://ui-avatars.com/api/?name=Anita+Cruz",
    };

    const iklan = {
        nama: "7 Tips Berhenti Merokok",
        status: "Pending",
        deskripsi:
            "Temukan 7 cara efektif untuk berhenti merokok secara bertahap dan alami. Dapatkan panduan praktis untuk mengendalikan keinginan merokok, menjaga kesehatan paru-paru, dan memulai hidup yang lebih sehat tanpa rokok.",
        url: "https://7tipsberhentimerokok2025.id/tips",
        kategori: "Non-Komersial",
        penempatan: "Sidebar",
        ukuran: "300px x 250px",
        tanggal: "16 Okt 2025 - 20 Okt 2025",
        gambar: null,
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
                    page="Pages / Daftar Iklan"
                    section="Detail Iklan"
                    onMenuClick={() => setIsSidebarOpen(true)}
                    showSearch={false}
                />

                <DetailIklanContainer
                    iklan={iklan}
                    onEdit={() => navigate("/advertiser/editiklan")}
                    onBack={() => navigate("/advertiser/daftariklan")}
                />
            </main>
        </div>
    );
}
