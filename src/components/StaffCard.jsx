// src/components/StaffCard.jsx

const StaffCard = ({ name, role }) => {
  return (
    <div className="bg-[#111] border border-yellow-500 rounded-xl p-6 text-center hover:scale-105 duration-300">

      <img
        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500"
        alt={name}
        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-yellow-500"
      />

      <h3 className="text-2xl text-yellow-500 mt-5 font-bold">
        {name}
      </h3>

      <p className="text-gray-300 mt-2">
        {role}
      </p>

    </div>
  );
};

export default StaffCard;