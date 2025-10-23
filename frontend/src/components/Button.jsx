import React from "react";

export default function Button({ label, onClick, color = "teal" }) {
    const baseColor =
        color === "teal"
            ? "bg-teal-500 hover:bg-teal-600"
            : color === "gray"
                ? "bg-gray-500 hover:bg-gray-600"
                : color === "red"
                    ? "bg-red-700 hover:bg-red-600"
                    : color === "green"
                        ? "bg-green-600 hover:bg-green-600"
                        : "bg-blue-500 hover:bg-blue-600";
                    

    return (
        <button
            onClick={onClick}
            className={`${baseColor} text-white text-sm px-4 py-1 rounded-md transition duration-150`}
        >
            {label}
        </button>
    );
}
