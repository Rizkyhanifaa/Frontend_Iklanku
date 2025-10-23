import React from "react";

export default function StatusBadge({ status }) {
    console.log("Status yang diterima:", status);

    const normalizedStatus = typeof status === "string"
        ? status.toLowerCase().trim().replace(/[\s_-]+/g, "")
        : "";

    const colors = {
        aktif: "bg-green-600 text-gray-700",
        pending: "bg-yellow-400 text-gray-700",
        ditolak: "bg-red-700 text-gray-700",
        nonaktif: "bg-red-700 text-gray-700",
    };

    const colorClass = colors[normalizedStatus] || "bg-gray-400 text-gray-600";

    return (
        <div className="flex items-center justify-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${colorClass.split(" ")[0]}`}></span>
            <span className={`text-sm ${colorClass.split(" ")[1]} capitalize`}>
                {status || "Tidak Diketahui"}
            </span>
        </div>
    );
}
