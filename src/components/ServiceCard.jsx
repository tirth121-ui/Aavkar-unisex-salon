// src/components/ServiceCard.jsx

const ServiceCard = ({ name, price }) => {
  return (
    <div className="bg-[#111] border border-yellow-500 rounded-xl p-6 hover:scale-105 duration-300">
      <h3 className="text-xl font-bold text-yellow-500">
        {name}
      </h3>

      <p className="text-gray-300 mt-3">
        Starting From
      </p>

      <h4 className="text-2xl mt-2 font-bold">
        {price}
      </h4>
    </div>
  );
};

export default ServiceCard;