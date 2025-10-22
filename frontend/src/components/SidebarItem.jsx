import React from "react";
import { useNavigate } from "react-router-dom";

export default function SidebarItem({ icon, label, path, active }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (path) navigate(path);
    };

    return (
        <button
            onClick={handleClick}
            className={`flex items-center gap-3 mx-3 my-1 px-4 py-3 text-sm font-medium w-[calc(100%-1.5rem)] text-left transition-all
                ${active ? "bg-teal-600 text-white rounded-[15px]" : "text-gray-700 hover:bg-gray-100 rounded-[10px]"}
            `}
        >
            <div
                className={`w-[30px] h-[30px] flex items-center justify-center rounded-[10px] shadow-sm
                    ${active ? "bg-white/100" : "bg-gray-100"}`}
            >
                <img src={icon} alt={label} className="w-4 h-4 object-contain" />
            </div>
            <span>{label}</span>
        </button>
    );
}
