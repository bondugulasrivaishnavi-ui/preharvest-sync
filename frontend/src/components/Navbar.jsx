function Navbar() {
  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-700">
        Dashboard Overview
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-gray-600">Farmer</span>
        <div className="w-8 h-8 rounded-full bg-green-500"></div>
      </div>
    </div>
  );
}

export default Navbar;
