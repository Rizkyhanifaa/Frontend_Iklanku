import React from "react";

export default function StatsGroup({ stats }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-200 mb-10">
            {stats.map((item, i) => (
                <div key={i} className="flex-1 px-2 py-4">
                    <h4 className="text-black text-sm font-semibold">{item.title}</h4>
                    <p className="text-2xl sm:text-3xl font-semibold text-teal-600 mt-2">{item.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                </div>
            ))}
        </div>
    );
}
