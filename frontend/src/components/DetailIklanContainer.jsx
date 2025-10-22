// components/DetailIklanContainer.jsx
import React from "react";
import Button from "./Button";
import StatusBadge from "./StatusBadge";

export default function DetailIklanContainer({ iklan, onEdit, onBack }) {
    const DetailRow = ({ label, children }) => (
        <div className="flex text-sm text-gray-700 items-start">
            <span className="font-semibold text-gray-600 min-w-[130px]">{label}</span>
            <span className="mr-2">:</span>
            <div className="flex-1">{children}</div>
        </div>
    );

    return (
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 max-w-3xl mx-auto">
            <h2 className="text-center text-lg font-semibold text-teal-700 border-b pb-3 mb-6">
                Detail Iklan
            </h2>

            <div className="space-y-5 divide-y divide-gray-200">
                <div className="space-y-5 pb-5">
                    <DetailRow label="Nama Iklan">{iklan.nama}</DetailRow>
                    <div className="flex text-sm text-gray-700 items-center">
                        <span className="font-semibold text-gray-600 min-w-[130px]">Status</span>
                        <span className="mr-2">:</span>
                        <div className="flex items-center gap-1">
                            <StatusBadge status={iklan.status} />
                        </div>
                    </div>
                </div>

                <div className="pt-5 pb-5 space-y-5">
                    <DetailRow label="Deskripsi Iklan">
                        <p className="text-gray-700 leading-relaxed">{iklan.deskripsi}</p>
                    </DetailRow>
                </div>

                <div className="pt-5 pb-5 space-y-5">
                    <DetailRow label="URL Tujuan">
                        <a
                            href={iklan.url}
                            className="text-teal-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {iklan.url}
                        </a>
                    </DetailRow>
                    <DetailRow label="Kategori">{iklan.kategori}</DetailRow>
                    <DetailRow label="Penempatan">{iklan.penempatan}</DetailRow>
                    <DetailRow label="Ukuran Banner">{iklan.ukuran}</DetailRow>
                    <DetailRow label="Tanggal Tayang">{iklan.tanggal}</DetailRow>
                </div>

                <div className="pt-5 pb-5 space-y-3">
                    <div className="text-sm text-gray-700">
                        <div className="flex items-start">
                            <span className="font-semibold text-gray-600 min-w-[130px]">Gambar</span>
                            <span className="mr-2">:</span>
                        </div>
                        <div className="w-full border rounded-md bg-gray-50 p-4 h-28 flex items-center justify-center text-gray-400 text-sm mt-2">
                            {iklan.gambar ? (
                                <img
                                    src={iklan.gambar}
                                    alt="Banner Iklan"
                                    className="max-h-24 rounded-md"
                                />
                            ) : (
                                "Tidak ada gambar"
                            )}
                        </div>
                    </div>
                </div>

                <div className="pt-5 flex flex-wrap justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-600 text-sm">Aksi</span>
                        <span>:</span>
                        <div className="flex gap-2 ml-2">
                            <Button label="Edit" color="teal" onClick={onEdit} />
                            <Button label="Batalkan" color="red" />
                        </div>
                    </div>
                    <button
                        onClick={onBack}
                        className="text-teal-600 text-sm hover:underline"
                    >
                        Kembali ke daftar iklan
                    </button>
                </div>
            </div>
        </div>
    );
}
