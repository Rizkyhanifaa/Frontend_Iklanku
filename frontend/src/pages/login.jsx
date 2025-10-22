import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Login() {
    const navigate = useNavigate();
    const [selectedRole, setSelectedRole] = useState("Admin");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login as:", selectedRole, { email, password });
        alert(`Login berhasil sebagai ${selectedRole}`);

        if (selectedRole === "Advertiser") {
            navigate("/advertiser/dashboard");
        } else if (selectedRole === "Admin") {
            navigate("/admin/dashboard"); 
        }
    };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Bagian Tengah (Form) */}
      <main className="flex justify-center items-center min-h-screen bg-gray-50 -mt-10 -mb-20">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 w-full max-w-md">
          <h2 className="text-center text-2xl font-bold text-teal-600 mb-4">
            Welcome Back
          </h2>

          {/* Pilih Role */}
          <div className="flex justify-center gap-3 mb-6">
            {["Admin", "Advertiser"].map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                type="button"
                className={`px-3 py-1 text-sm rounded-md border transition-all duration-200 ${
                  selectedRole === role
                    ? "bg-teal-600 text-white border-teal-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          {/* Form Login */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded-md font-medium hover:bg-teal-700 transition duration-200"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Belum punya akun?{" "}
            <a href="#" className="text-teal-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-teal-600 text-white mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 px-6 md:px-20 text-center md:text-left">
          {/* Kolom 1 - Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
                <img src={Logo} alt="Logo OrderLink" className="h-10" />
                <span className="font-bold text-xl ">Iklanku</span>
            </div>
            <p className="text-gray-100 text-sm">
              Iklanku membantu Anda menayangkan iklan dengan cara yang lebih
              cerdas dan dinamis. Bersama kami, wujudkan koneksi antara merek
              dan pengunjung secara lebih efektif di setiap halaman web.
            </p>
          </div>

          {/* Kolom 2 - About */}
          <div>
            <h4 className="font-semibold mb-2">About</h4>
            <ul className="space-y-1 text-gray-100 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Join as a partner
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3 - Kontak */}
          <div>
            <h4 className="font-semibold mb-2">Kontak</h4>
            <p className="text-gray-100 text-sm">support@grivyabali.com</p>
            <p className="text-gray-100 text-sm">0361 - 8956 612</p>
            <p className="text-gray-100 text-sm mt-2">
              Jl. Kubu Anyar No.19, Kuta<br />Kabupaten Badung, Bali 80361
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 py-3 text-center text-sm text-gray-100">
          © 2025 IklanKu. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
