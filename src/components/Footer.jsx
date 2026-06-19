import { FaInstagram, FaFacebook, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl text-yellow-500 font-bold">
          Aavkar Unisex Salon
        </h2>

        <p className="mt-4">
          FF-08,10,12 Arjun Tower, Opp CP Nagar,
          Ghatlodia, Ahmedabad
        </p>

        <p className="mt-2">
          Phone: 9898119597
        </p>

        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <FaInstagram />
          <FaFacebook />
          <FaPhone />
        </div>

        <p className="mt-6 text-gray-400">
          © 2026 Aavkar Unisex Salon. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;