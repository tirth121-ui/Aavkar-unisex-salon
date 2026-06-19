// src/pages/PricingPage.jsx

import Header from "../components/Header";
import Footer from "../components/Footer";

const PricingPage = () => {
  return (
    <>
      <Header />

      <section className="bg-black text-white min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl text-center text-yellow-500 font-bold mb-12">
            Price List
          </h1>

          <div className="bg-[#111] p-10 rounded-xl border border-yellow-500">

            <div className="flex justify-between py-4 border-b border-gray-700">
              <span>Hair Cut (Men)</span>
              <span>₹300</span>
            </div>

            <div className="flex justify-between py-4 border-b border-gray-700">
              <span>Hair Cut (Women)</span>
              <span>₹800</span>
            </div>

            <div className="flex justify-between py-4 border-b border-gray-700">
              <span>Keratin</span>
              <span>₹4500+</span>
            </div>

            <div className="flex justify-between py-4 border-b border-gray-700">
              <span>Bridal Make-Up</span>
              <span>₹8000</span>
            </div>

            <div className="flex justify-between py-4">
              <span>Hydra Facial</span>
              <span>₹3500+</span>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default PricingPage;