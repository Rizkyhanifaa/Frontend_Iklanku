import React from "react";
import Button from "./Button";
import StatusBadge from "./StatusBadge";

export default function DetailIklanContainerAdmin({ iklan, onAccept, onReject, onBack }) {
    const DetailRow = ({ label, children }) => (
        <div className="flex text-sm text-gray-800 items-start">
            <span className="font-semibold text-gray-800 min-w-[130px]">{label}</span>
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
                {/* Bagian atas: Nama, Advertiser, Status */}
                <div className="space-y-5 pb-5">
                    <DetailRow label="Nama Iklan">{iklan.nama}</DetailRow>
                    <DetailRow label="Advertiser">{iklan.advertiser}</DetailRow>
                    <div className="flex text-sm text-gray-800 items-center">
                        <span className="font-semibold text-gray-800 min-w-[130px]">Status</span>
                        <span className="mr-2">:</span>
                        <div className="flex items-center gap-1">
                            <StatusBadge status={iklan.status} />
                            
                        </div>
                    </div>
                </div>

                {/* Deskripsi */}
                <div className="pt-5 pb-5 space-y-5">
                    <DetailRow label="Deskripsi Iklan">
                        <p className="text-gray-800 leading-relaxed">{iklan.deskripsi}</p>
                    </DetailRow>
                </div>

                {/* Informasi tambahan */}
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

                {/* Gambar */}
                <div className="pt-5 pb-5 space-y-3">
                    <div className="text-sm text-gray-800">
                        <div className="flex items-start">
                            <span className="font-semibold text-gray-800 min-w-[130px]">Gambar</span>
                            <span className="mr-2">:</span>
                        </div>
                        <div className="w-full border rounded-md bg-gray-50 p-4 h-28 flex items-center justify-center text-gray-500 text-sm mt-2">
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

                {/* Tombol Aksi */}
                <div className="pt-5 flex flex-wrap justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-800 text-sm">Aksi</span>
                        <span>:</span>
                        <div className="flex gap-2 ml-2">
                            <Button label="Terima" color="teal" onClick={onAccept} />
                            <Button label="Tolak" color="red" onClick={onReject} />
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
