import React from "react";
import { FaUser, FaUserPlus } from "react-icons/fa";
import "../Css/Header.css"; 
import logo from "../../Assets/Logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-background text-white flex items-center justify-between px-6 py-3">
        

      {/* Left side - Auth buttons */}
      <div className="flex items-center gap-3">
        <Link to="/Login">
          <button className="flex items-center gap-2 bg-black hover:bg-neutral-800 px-4 py-2 rounded-lg transition">
            <FaUser className="text-lg" />
            <span className="text-sm font-medium">Sign in</span>
          </button>
        </Link>
        
        <Link to="/Register">
          <button className="flex items-center gap-2 bg-black hover:bg-neutral-800 px-4 py-2 rounded-lg transition">
            <FaUserPlus className="text-lg" />
            <span className="text-sm font-medium">Not Register</span>
          </button>
        </Link>
      </div>
      

      {/* Center Navigation */}
      <nav className="flex gap-3">
        {[
          { label: "Home", active: true },
          { label: "Events" },
          { label: "Booking" },
          { label: "Membership" },
        ].map((item) => (
          <Link
            key={item.label}
            href="#"
            className={`parallelogram px-6 py-2 text-sm font-medium transition ${
              item.active
                ? "bg-gradient-to-b from-parrellogrambg to-sec"
                : "bg-parrellogrambg hover:bg-parrellogrambghv"
            }`}
          >
            <span className="inline-block">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Right side - Logo */}
      <Link to="/">
      <img
        src={logo}
        alt="Logo"
        className="h-12 w-auto object-contain"
      />
      </Link>
    </header>
  );
}
