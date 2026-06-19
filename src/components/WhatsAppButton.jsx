import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919898119597"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg z-50"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;