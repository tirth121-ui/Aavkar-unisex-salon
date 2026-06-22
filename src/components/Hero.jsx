// const Hero = () => {
//   return (
//     <section
//       className="h-screen bg-cover bg-center relative"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1920')",
//       }}
//     >
//       <div className="absolute inset-0 bg-black/70"></div>

//       <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
//         <div>
//           <p className="text-yellow-500 uppercase tracking-widest mb-4">
//             Luxury Unisex Salon
//           </p>

//           <h1 className="text-5xl md:text-7xl font-bold text-white">
//             Transform Your Look
//           </h1>

//           <p className="text-xl text-gray-300 mt-4">
//             Premium Hair • Skin • Makeup • Spa
//           </p>

//           <button className="mt-8 px-8 py-4 bg-yellow-500 text-black rounded-lg font-bold">
//             Book Appointment
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1920')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div>
          <p className="text-yellow-500 uppercase tracking-[4px] text-lg mb-4">
            Luxury Unisex Salon
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Transform Your Look
          </h1>

          <h2 className="text-2xl md:text-4xl text-yellow-500 mt-4">
            With Expert Stylists
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg">
            Premium Hair Styling, Hair Coloring, Skin Care, Bridal Makeup,
            Grooming, Spa Treatments and Luxury Beauty Services for Men &
            Women.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

            <Link
              to="/appointment"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition duration-300"
            >
              Book Appointment
            </Link>

            <a
              href="https://wa.me/919898119597"
              target="_blank"
              rel="noreferrer"
              className="border border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg font-bold hover:bg-yellow-500 hover:text-black transition duration-300"
            >
              WhatsApp Booking
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;