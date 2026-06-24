import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaMapMarkedAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <>
      <Header />

      <section className="bg-black text-white py-20 min-h-screen">

        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl text-center text-yellow-500 font-bold">
            Contact Us
          </h1>

          <div className="grid md:grid-cols-2 gap-10 mt-16">

            <div className="bg-[#111] p-8 rounded-xl border border-yellow-500">

              <h2 className="text-3xl text-yellow-500 mb-6">
                Aavkar Unisex Salon
              </h2>

              <p className="mb-4">
                📍 FF-08,10,12, Aavkar Hair Creative, Arjun Tower,
                Opp CP Nagar, Ghatlodia,
                Ahmedabad
              </p>

              <p className="mb-4">
                📞 9898119597
              </p>

              <p className="mb-4">
                ✉️ kaushikpanara98@gmail.com
              </p>

              <p>
                🕒 9 AM - 9 PM
              </p>

            </div>

            {/* <iframe
              title="map"
              src="https://maps.google.com/maps?q=Ahmedabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[400px] rounded-xl"
            /> */}
            <iframe
              title="Aavkar Unisex Salon Location"
              src="https://maps.google.com/maps?q=Aavkar%20Hair%20Creative%20Arjun%20Tower%20Opp%20CP%20Nagar%20Ghatlodia%20Ahmedabad&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[400px] rounded-xl border border-yellow-500"
            ></iframe>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Aavkar+Hair+Creative+Arjun+Tower+Opp+CP+Nagar+Ghatlodia+Ahmedabad"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 mt-4 bg-gradient-to-r from-yellow-500 to-yellow-300 text-black px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 duration-300"
            >
              <FaMapMarkedAlt className="text-2xl" />
              Open in Google Maps
            </a>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default ContactPage;