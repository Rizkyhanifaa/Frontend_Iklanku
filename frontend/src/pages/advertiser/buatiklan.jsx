import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import IklanForm from "../../components/IklanForm";
import home from "../../assets/home.png";
import buatiklan from "../../assets/buatiklan.png";
import statistik from "../../assets/statistik.png";
import daftariklan from "../../assets/daftariklan.png";
import logout from "../../assets/logout.png";
import iklanku from "../../assets/iklanku.png";

export default function BuatIklan() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const menuItems = [
        { icon: home, label: "Dashboard", path: "/advertiser/dashboard" },
        { icon: buatiklan, label: "Buat Iklan", active: true, path: "/advertiser/buatiklan" },
        { icon: statistik, label: "Statistik Iklan", path: "/advertiser/statistik" },
        { icon: daftariklan, label: "Daftar Iklan", path: "/advertiser/daftariklan" },
        { icon: logout, label: "Logout", path: "/logout" },
    ];

    const user = {
        name: "Anita Cruz",
        email: "anita@commerce.com",
        avatar: "https://ui-avatars.com/api/?name=Anita+Cruz",
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form dikirim!");
    };

    const handleCancel = () => {
        alert("Batal membuat iklan");
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
                    section="Buat Iklan"
                    onMenuClick={() => setIsSidebarOpen(true)}
                    showSearch={false}
                />

                <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 max-w-3xl mx-auto">
                    <IklanForm onSubmit={handleSubmit} onCancel={handleCancel} />
                </div>
            </main>
        </div>
    );
}
