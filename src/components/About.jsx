const About = () => {
  return (
    <section className="bg-[#111] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200"
            alt="Salon Interior"
            className="rounded-2xl shadow-2xl"
          />
        </div>

        <div>
          <span className="text-yellow-500 uppercase tracking-widest">
            About Us
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Aavkar Unisex Salon
          </h2>

          <p className="text-gray-300 mt-6 leading-8">
            A premium destination for hair styling, skin care,
            beauty treatments, makeup artistry and spa services.
          </p>

          <p className="text-gray-300 mt-4 leading-8">
            Our team of professional stylists and beauty experts
            delivers luxury salon experiences using world-class
            products and modern techniques.
          </p>

          <div className="mt-8 space-y-3">
            <p>
              <span className="text-yellow-500 font-semibold">
                Working Hours:
              </span>{" "}
              9 AM - 9 PM
            </p>

            <p>
              <span className="text-yellow-500 font-semibold">
                Contact:
              </span>{" "}
              9898119597
            </p>

            <p>
              <span className="text-yellow-500 font-semibold">
                Location:
              </span>{" "}
              Ghatlodia, Ahmedabad
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;