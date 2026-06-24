// import { FaWhatsapp } from "react-icons/fa";

// const WhatsAppButton = () => {
//   return (
//     <a
//       href="https://wa.me/919898119597"
//       target="_blank"
//       rel="noreferrer"
//       className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg z-50"
//     >
//       <FaWhatsapp size={30} />
//     </a>
//   );
// };

// export default WhatsAppButton;
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const SocialButtons = () => {
  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/919898119597"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 right-6 bg-green-500 p-4 rounded-full shadow-lg z-50 hover:scale-110 transition"
      >
        <FaWhatsapp size={30} color="white" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/kaushik_panara_?igsh=MWpzd3dkMjNwZjZudA=="
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-pink-600 p-4 rounded-full shadow-lg z-50 hover:scale-110 transition"
      >
        <FaInstagram size={30} color="white" />
      </a>
    </>
  );
};

export default SocialButtons;