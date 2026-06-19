// src/components/ServiceSearch.jsx

const ServiceSearch = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search Services..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-4 rounded-lg bg-black border border-yellow-500 text-white"
    />
  );
};

export default ServiceSearch;