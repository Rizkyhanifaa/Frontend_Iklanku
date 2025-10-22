import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import IklanForm from "../../components/IklanForm";
import home from "../../assets/home.png";
import buatiklan from "../../assets/buatiklan.png";
import statistik from "../../assets/statistik.png";
import daftariklan from "../../assets/daftariklan.png";
import logout from "../../assets/logout.png";
import iklanku from "../../assets/iklanku.png";

export default function EditIklan() {
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

    const handleSubmit = () => {
        console.log("Data diubah!");
        navigate("/advertiser/daftariklan");
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

            <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
                <Header
                    page="Pages / Daftar Iklan"
                    section="Edit Iklan"
                    onMenuClick={() => setIsSidebarOpen(true)}
                    showSearch={false}
                />

                <IklanForm
                    isModal={true}
                    onSubmit={handleSubmit}
                    onCancel={() => navigate("/advertiser/detailiklan")}
                />
            </main>
        </div>
    );
}
