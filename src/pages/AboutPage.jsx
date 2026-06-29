import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Header />

      <section className="bg-black text-white min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-yellow-500 text-center mb-10">
            About Us
          </h1>

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200"
              alt="Salon"
              className="rounded-xl"
            />

            <div>
              <h2 className="text-3xl text-yellow-500 font-bold mb-4">
                Luxury Beauty Experience
              </h2>

              <p className="text-gray-300 leading-8">
                Aavkar Unisex Salon is a premium destination for hair styling,
                beauty treatments, skin care, makeup artistry, grooming and spa
                services in Ahmedabad.
              </p>

              <div className="mt-6 space-y-3">
                <p>📍 FF-08,10,12 Arjun Tower, Opp CP Nagar, Ghatlodia, Ahmedabad</p>
                <p>📞 9898119597</p>
                <p>✉️ kaushikpanara98@gmail.com</p>
                <p>🕒 9 AM - 9 PM</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;