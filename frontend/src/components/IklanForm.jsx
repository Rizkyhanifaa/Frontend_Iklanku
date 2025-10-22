import React from "react";

export default function IklanForm({ onSubmit, onCancel, isModal = false }) {
    const formContent = (
        <form
            className="space-y-5"
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit && onSubmit();
            }}
        >
            <div>
                <label className="block text-gray-700 text-sm mb-2">Nama Iklan</label>
                <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="Masukkan nama iklan"
                />
            </div>

            <div>
                <label className="block text-gray-700 text-sm mb-2">Deskripsi Iklan</label>
                <textarea
                    rows="3"
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="Tuliskan deskripsi iklan"
                ></textarea>
            </div>

            <div>
                <label className="block text-gray-700 text-sm mb-2">URL Tujuan Iklan</label>
                <input
                    type="url"
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="Masukkan URL tujuan"
                />
            </div>

            <div>
                <label className="block text-gray-700 text-sm mb-2">Kategori Iklan</label>
                <select className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400">
                    <option>Komersial</option>
                    <option>Non Komersial</option>
                </select>
            </div>

            <div>
                <label className="block text-gray-700 text-sm mb-2">Ukuran Banner</label>
                <select className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400">
                    <option>Header 728px x 90px</option>
                    <option>Sidebar 300px x 250px</option>
                    <option>Antara Konten 300px x 250px</option>
                </select>
            </div>

            <div>
                <label className="block text-gray-700 text-sm mb-2">Pilih Penempatan Iklan</label>
                <select className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400">
                    <option>Header</option>
                    <option>Sidebar</option>
                    <option>Antara Konten</option>
                </select>
            </div>

            <div>
                <label className="block text-gray-700 text-sm mb-2">Gambar</label>
                <input
                    type="file"
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                    file:rounded-lg file:border-0
                    file:text-sm file:font-semibold
                    file:bg-teal-50 file:text-teal-600
                    hover:file:bg-teal-100"
                />
            </div>

            <div>
                <label className="block text-gray-700 text-sm mb-2">Tanggal Tayang</label>
                <div className="flex items-center gap-3 flex-wrap">
                    <input
                        type="date"
                        className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 flex-1 min-w-[130px]"
                    />
                    <span className="text-gray-500">-</span>
                    <input
                        type="date"
                        className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 flex-1 min-w-[130px]"
                    />
                </div>
            </div>

            <div className="flex gap-3 pt-4 justify-end flex-wrap">
                <button
                    type="submit"
                    className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg text-sm font-medium w-full sm:w-auto"
                >
                    Kirim Perubahan
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium w-full sm:w-auto"
                >
                    Batal
                </button>
            </div>
        </form>
    );

    if (isModal) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
                    <h2 className="text-center text-lg font-semibold text-teal-700 border-b pb-3 mb-6">
                        Edit Iklan
                    </h2>
                    {formContent}
                </div>
            </div>
        );
    }

    return formContent;
}
