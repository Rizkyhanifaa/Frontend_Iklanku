import React from "react";
import { Bell, Menu } from "lucide-react";
import searchIcon from "../assets/search.png";

export default function Header({ page, section, onMenuClick, showSearch = true, showNotification = true }) {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                    className="md:hidden p-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
                    onClick={onMenuClick}
                >
                    <Menu size={20} />
                </button>
                <h2 className="text-sm font-medium">
                    <span className="text-gray-400">{page}</span>
                    <span className="text-gray-300 mx-1">/</span>
                    <span className="text-teal-700">{section}</span>
                </h2>
            </div>

            <div className="flex items-center gap-3">
                {showSearch && (
                    <div className="relative w-40">
                        <img
                            src={searchIcon}
                            alt="Search"
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="Cari di sini..."
                            className="w-full border rounded-lg px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>
                )}
                {showNotification && (
                    <button className="p-2 bg-teal-500 text-white rounded-full hover:bg-teal-600">
                        <Bell size={18} />
                    </button>
                )}
            </div>
        </div>
    );
}
