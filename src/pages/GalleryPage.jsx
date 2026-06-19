import Header from "../components/Header";
import Footer from "../components/Footer";

const images = [
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1000",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1000",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1000",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1000",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000",
];

const GalleryPage = () => {
  return (
    <>
      <Header />

      <section className="bg-black py-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl text-center text-yellow-500 font-bold">
            Salon Gallery
          </h1>

          <div className="grid md:grid-cols-3 gap-6 mt-16">

            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Gallery"
                className="rounded-xl h-80 w-full object-cover hover:scale-105 duration-300"
              />
            ))}

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GalleryPage;