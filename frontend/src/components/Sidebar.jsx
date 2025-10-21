import React from "react";
import { X } from "lucide-react";
import SidebarItem from "./SidebarItem";

export default function Sidebar({ isOpen, onClose, logo, title, menuItems, user }) {
    return (
        <>
            <aside
                className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r shadow-sm flex flex-col justify-between transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static`}
            >
                <div>
                    {/* Logo */}
                    <div className="flex items-center justify-between px-6 py-6 border-b">
                        <div className="flex items-center gap-3">
                            <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
                            <h1 className="text-lg font-semibold text-teal-600">{title}</h1>
                        </div>
                        <button className="md:hidden p-2 rounded-md hover:bg-gray-100" onClick={onClose}>
                            <X size={20} />
                        </button>
                    </div>

                    {/* Menu */}
                    <nav className="flex flex-col gap-1 mt-4">
                        {menuItems.map((item, i) => (
                            <SidebarItem key={i} {...item} />
                        ))}
                    </nav>
                </div>

                {/* User Card */}
                {user && (
                    <div className="bg-teal-600 text-white p-4 m-4 rounded-xl flex items-center gap-3">
                        <img src={user.avatar} alt="User" className="w-10 h-10 rounded-full" />
                        <div>
                            <p className="text-sm font-semibold">{user.name}</p>
                            <p className="text-xs opacity-90">{user.email}</p>
                        </div>
                    </div>
                )}
            </aside>

            {/* Overlay mobile */}
            {isOpen && <div className="fixed inset-0 bg-black/30 z-30 md:hidden" onClick={onClose}></div>}
        </>
    );
}
