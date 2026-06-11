import { Menu, X } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ------------------------------ desktop view ------------------------------ */}
      <nav className="fixed top-0 w-full bg-white shadow z-50 * hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <NavLink to="/" className="flex items-center">
            <img
              src="/images/logo.svg"
              alt="Omeswari Financial"
              className="h-8 w-auto"
            />
          </NavLink>

          <div className="flex gap-8 py-5">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>

      {/* ------------------------------ mobile view ------------------------------ */}
      <nav className="fixed top-0 w-full px-4 py-2.5 bg-white shadow z-50 md:hidden">
        <div className="flex justify-between items-center">
          <NavLink to="/">
            <div className="text-primary flex flex-col ">
              <span className="text-lg font-bold leading-3.5">OMESWARI</span>
              <span className="text-[10px] font-medium leading-3.5">
                Financial Services
              </span>
            </div>
          </NavLink>

          <button onClick={() => setMenuOpen(true)}>
            <Menu size={24} className="text-primary" />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-end items-center p-2.75 border-b border-gray-200">
          <button onClick={closeMenu}>
            <X size={26} className="text-primary" />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col p-6 gap-3">
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) =>
              `font-medium text-base ${isActive ? "text-accent" : "text-primary"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            onClick={closeMenu}
            className={({ isActive }) =>
              `font-medium text-base ${isActive ? "text-accent" : "text-primary"}`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              `font-medium text-base ${isActive ? "text-accent" : "text-primary"}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              `font-medium text-base ${isActive ? "text-accent" : "text-primary"}`
            }
          >
            Contact
          </NavLink>

          {/* social media links */}
          <div className="flex gap-5 mt-2 py-5 border-t border-gray-200">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              <FaTwitter size={20} />
            </a>

            <a
              href="https://wa.me/919151097514"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
