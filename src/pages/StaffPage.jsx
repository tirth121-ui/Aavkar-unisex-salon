import Header from "../components/Header";
import Footer from "../components/Footer";
import StaffCard from "../components/StaffCard";

const staff = [
  {
    name: "Kaushik Panara",
    role: "International Hair Dresser, Hair & Skin Expert",
  },
  {
    name: "Yash Panara",
    role: "Hair & Beard Stylist, Treatment Expert",
  },
  {
    name: "Nishant Panara",
    role: "Hair & Beard Stylist, Skin Expert",
  },
  {
    name: "Tirth Valand",
    role: "Hair & Color Expert",
  },
  {
    name: "Varsha Panara",
    role: "Skin & Make-Up Expert",
  },
  {
    name: "Himali Panara",
    role: "Professional Make-Up Artist",
  },
];

const StaffPage = () => {
  return (
    <>
      <Header />

      <section className="bg-black text-white py-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-center text-yellow-500">
            Meet Our Experts
          </h1>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {staff.map((member, index) => (
              <StaffCard
                key={index}
                name={member.name}
                role={member.role}
              />
            ))}

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default StaffPage;