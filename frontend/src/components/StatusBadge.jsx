import React from "react";

export default function StatusBadge({ status }) {
    // Normalisasi teks ke huruf kecil
    const lowerStatus = status.toLowerCase();

    // Tentukan warna bulatan dan teks
    const colors = {
        aktif: "bg-green-500 text-gray-500",
        pending: "bg-yellow-400 text-gray-500",
        ditolak: "bg-red-500 text-gray-500",
    };

    const colorClass = colors[lowerStatus] || "bg-gray-400 text-gray-600";

    return (
        <div className={`flex justify-center items-center gap-2 ${colorClass.split(" ")[1]}`}>
            <span className={`w-2 h-2 rounded-full ${colorClass.split(" ")[0]}`}></span>
            <span className="capitalize">{status}</span>
        </div>
    );
}
