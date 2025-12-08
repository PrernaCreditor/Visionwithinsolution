import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-light pt-20 pb-10 bg-[#0b0b0f]">

      {/* Soft background glows */}
      <div className="absolute -top-28 -left-24 w-72 h-72 bg-purple-700/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400/10 blur-3xl rounded-full pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-3 text-center md:text-left">

        {/* Company Info */}
        <div>
          <div className="flex justify-center md:justify-start mb-5">
           <img src={logo} alt="Logo" className="h-28 opacity-90"/>

          </div>

          <h3 className="text-xl font-semibold mb-3 text-purple-200">
            Visions Within Solutions
          </h3>

          <p className="text-sm text-light/70 leading-relaxed max-w-xs mx-auto md:mx-0">
            Support for Real Estate, Group Homes, and Small Business operations — 
            organized, reliable, and professional.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-purple-200">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
  <li><a href="#hero" className="hover:text-purple-200 transition">Home</a></li>
  <li><a href="#about" className="hover:text-purple-200 transition">About</a></li>
  <li><a href="#services" className="hover:text-purple-200 transition">Services</a></li>
  <li><a href="#contact" className="hover:text-purple-200 transition">Contact</a></li>
</ul>

        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-purple-200">
            Contact
          </h3>

          {/* Updated Numbers */}
          <p className="text-sm text-light/70">Phone: 216.245.8550</p>
          <p className="text-sm mt-1 text-light/70">Fax: 216.674.6234</p>

          <p className="text-sm mt-1 text-light/70">Email: info@visionswithinsolutions.com</p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">

            {/* Facebook */}
            <a 
              href="https://www.facebook.com/visionswithinsolutions/" 
              target="_blank"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center 
                         hover:bg-purple-300/20 hover:scale-110 transition cursor-pointer"
            >
              <FaFacebookF size={15} />
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/visionswithinsolutions/" 
              target="_blank"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center 
                         hover:bg-purple-300/20 hover:scale-110 transition cursor-pointer"
            >
              <FaInstagram size={17} />
            </a>

            {/* LinkedIn */}
            <a 
              href="" 
              target="_blank"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center 
                         hover:bg-purple-300/20 hover:scale-110 transition cursor-pointer"
            >
              <FaLinkedinIn size={17} />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 mt-12 pt-4 text-center text-sm text-light/60">
        © {new Date().getFullYear()} Visions Within Solutions — All rights reserved.
      </div>

    </footer>
  );
}
