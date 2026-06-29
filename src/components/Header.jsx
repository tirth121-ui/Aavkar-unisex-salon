import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b border-yellow-500 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/">
            <h1 className="text-2xl md:text-3xl font-bold text-yellow-500">
              Aavkar Unisex Salon
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-white font-medium">
            <Link to="/" className="hover:text-yellow-500 duration-300">
              Home
            </Link>

            <Link to="/about" className="hover:text-yellow-500 duration-300">
              About
            </Link>

            <Link
              to="/services"
              className="hover:text-yellow-500 duration-300"
            >
              Services
            </Link>

            <Link
              to="/pricing"
              className="hover:text-yellow-500 duration-300"
            >
              Pricing
            </Link>

            <Link
              to="/staff"
              className="hover:text-yellow-500 duration-300"
            >
              Staff
            </Link>

            <Link
              to="/gallery"
              className="hover:text-yellow-500 duration-300"
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className="hover:text-yellow-500 duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">

            <div className="flex items-center gap-2 text-yellow-500">
              <FaPhoneAlt />
              <span>9898119597</span>
            </div>

            {/* <Link
              to="/appointment"
              className="bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 duration-300"
            >
              Book Now
            </Link> */}

          </div>
          <a
            href="tel:9898119597"
            className="bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 duration-300"
          >
            <FaPhoneAlt className="inline mr-2" />
            Call Now
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-yellow-500 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4 bg-[#111] rounded-xl p-4">

            <div className="flex flex-col gap-4 text-white">

              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>

              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>

              <Link to="/services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>

              <Link to="/pricing" onClick={() => setMenuOpen(false)}>
                Pricing
              </Link>

              <Link to="/staff" onClick={() => setMenuOpen(false)}>
                Staff
              </Link>

              <Link to="/gallery" onClick={() => setMenuOpen(false)}>
                Gallery
              </Link>

              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>

              <Link
                to="/appointment"
                onClick={() => setMenuOpen(false)}
                className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-center font-semibold"
              >
                Book Appointment
              </Link>

              <div className="flex items-center gap-2 text-yellow-500">
                <FaPhoneAlt />
                <span>9898119597</span>
              </div>

            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;