// src/pages/ServicesPage.jsx

import { useState } from "react";
import salonData from "../data/salonData";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import ServiceSearch from "../components/ServiceSearch";

const ServicesPage = () => {
  const [search, setSearch] = useState("");

  const filterServices = (services) =>
    services.filter((service) =>
      service.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <>
      <Header />

      <section className="bg-black text-white min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-center text-yellow-500">
            Our Services
          </h1>

          <div className="mt-10">
            <ServiceSearch
              search={search}
              setSearch={setSearch}
            />
          </div>

          {/* Men */}
          <h2 className="text-4xl mt-16 mb-8 text-yellow-500">
            Men's Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {filterServices(
              salonData.services.men
            ).map((service, index) => (
              <ServiceCard
                key={index}
                name={service.name}
                price={service.price}
              />
            ))}
          </div>

          {/* Women */}
          <h2 className="text-4xl mt-16 mb-8 text-yellow-500">
            Women's Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {filterServices(
              salonData.services.women
            ).map((service, index) => (
              <ServiceCard
                key={index}
                name={service.name}
                price={service.price}
              />
            ))}
          </div>

          {/* Unisex */}
          <h2 className="text-4xl mt-16 mb-8 text-yellow-500">
            Unisex Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {filterServices(
              salonData.services.unisex
            ).map((service, index) => (
              <ServiceCard
                key={index}
                name={service.name}
                price={service.price}
              />
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;