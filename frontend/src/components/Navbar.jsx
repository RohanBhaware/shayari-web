import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Hero from "../pages/HeroSection";
// import logo from "../../assets/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <>
    {/* <nav className="fixed top-0 z-50 w-full bg-white shadow-md"> */}
    <nav className="fixed h-15 z-50 w-full bg-[#e8c364] shadow-md">

      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* LOGO + TITLE */}
        <Link to="/" className="flex items-center gap-3">
          {/* <img src="#" alt="logo" className="w-12" /> */}
          <div>
            <h1 className="text-xl font-bold tracking-wide text-[#071952]">
              POEMVERSE
            </h1>
            {/* <span className="text-sm text-[#37B7C3] font-medium">
              WRITE • SHARE • FEEL
            </span> */}
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className="relative group text-gray-700 font-medium hover:text-[#089524]"
          >
            Home
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#088395] transition-all duration-300"></span>
          </Link>

          {!token && (
            <>
              <Link
                to="/login"
                className="relative group text-gray-700 font-medium hover:text-[#089524]"
              >
                Login
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#088395] transition-all duration-300"></span>
              </Link>

              <Link
                to="/register"
                className="relative group text-gray-700 font-medium hover:text-[#088395]"
              >
                Register
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#088395] transition-all duration-300"></span>
              </Link>
            </>
          )}

          {token && (
            <>
              <Link
                to="/profile"
                className="relative group text-gray-700 font-medium hover:text-[#088395]"
              >
                Profile
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#088395] transition-all duration-300"></span>
              </Link>

              <Link
                to="/create"
                className="relative group text-gray-700 font-medium hover:text-[#088395]"
              >
                Write
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#088395] transition-all duration-300 "></span>
              </Link>

              <button
                onClick={logout}
                className="text-red-500 font-medium hover:text-red-600 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-white px-4 pb-4 space-y-2 shadow-md">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2">
            Home
          </Link>

          {!token && (
            <>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block py-2"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="block py-2"
              >
                Register
              </Link>
            </>
          )}

          {token && (
            <>
              <Link
                to="/profile"
                onClick={() => setIsOpen(false)}
                className="block py-2"
              >
                Profile
              </Link>
              <Link
                to="/create"
                onClick={() => setIsOpen(false)}
                className="block py-2"
              >
                Write
              </Link>
              <button
                onClick={logout}
                className="block py-2 text-red-500"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
      
    </>
  );
};

export default Navbar;
