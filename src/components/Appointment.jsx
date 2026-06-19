import Header from "../components/Header";
import Footer from "../components/Footer";

const AppointmentPage = () => {
  return (
    <>
      <Header />

      <section className="bg-black text-white py-20 min-h-screen">

        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-5xl text-center text-yellow-500 font-bold mb-12">
            Book Appointment
          </h1>

          <form className="bg-[#111] border border-yellow-500 p-10 rounded-xl">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 mb-4 rounded bg-black border border-gray-700"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-4 mb-4 rounded bg-black border border-gray-700"
            />

            <input
              type="date"
              className="w-full p-4 mb-4 rounded bg-black border border-gray-700"
            />

            <select className="w-full p-4 mb-4 rounded bg-black border border-gray-700">

              <option>Select Service</option>
              <option>Hair Cut</option>
              <option>Hair Color</option>
              <option>Facial</option>
              <option>Keratin</option>
              <option>Bridal Makeup</option>

            </select>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-black font-bold py-4 rounded-lg"
            >
              Book Appointment
            </button>

          </form>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default AppointmentPage;