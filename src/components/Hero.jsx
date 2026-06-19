const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1920')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div>
          <p className="text-yellow-500 uppercase tracking-widest mb-4">
            Luxury Unisex Salon
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Transform Your Look
          </h1>

          <p className="text-xl text-gray-300 mt-4">
            Premium Hair • Skin • Makeup • Spa
          </p>

          <button className="mt-8 px-8 py-4 bg-yellow-500 text-black rounded-lg font-bold">
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;