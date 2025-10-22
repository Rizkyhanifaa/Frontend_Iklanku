import React from "react";
import StatusBadge from "./StatusBadge";

export default function Table({ columns, rows }) {
    return (
        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 overflow-x-auto">
            <table className="min-w-full text-sm border-collapse">
                <thead>
                    <tr className="text-teal-700 border-b bg-gray-50">
                        {columns.map((col, i) => (
                            <th key={i} className="py-3 px-4 md:px-5 text-center font-medium">
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} className="border-b hover:bg-gray-50 transition-colors">
                            {row.map((cell, j) => {
                                const isStatusColumn = columns[j].toLowerCase() === "status";
                                return (
                                    <td key={j} className="py-3 px-4 text-center align-middle whitespace-nowrap">
                                        {isStatusColumn ? <StatusBadge status={cell} /> : cell}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
