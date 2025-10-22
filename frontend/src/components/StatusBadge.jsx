import React from "react";

export default function StatusBadge({ status }) {
    const lowerStatus = typeof status === "string" ? status.toLowerCase() : "";

    const colors = {
        aktif: "bg-green-500 text-gray-700",
        pending: "bg-yellow-400 text-gray-700",
        ditolak: "bg-red-500 text-gray-700",
    };

    const colorClass = colors[lowerStatus] || "bg-gray-400 text-gray-600";

    return (
        <div className="flex items-center justify-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${colorClass.split(" ")[0]}`}></span>
            <span className={`text-sm ${colorClass.split(" ")[1]} capitalize`}>
                {status || "Tidak Diketahui"}
            </span>
        </div>
    );
}
