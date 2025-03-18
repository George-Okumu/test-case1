import { useState } from "react";
import {
  FaHome,
  FaBox,
  FaUsers,
  FaPlus,
  FaTags,
  FaCogs,
  FaChartBar,
  FaBriefcase,
  FaClipboardList,
  FaShoppingCart,
  FaTools,
  FaProjectDiagram,
  FaUserShield,
  FaChartPie,
} from "react-icons/fa";

const AdminProducts = () => {
  const [showSecondarySidebar, setShowSecondarySidebar] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex">
      {/* Primary Sidebar */}
      <aside
        className={`${
          expanded ? "w-64" : "w-20"
        } bg-[#1a1a2e] text-white p-4 shadow-lg min-h-screen transition-all duration-300 flex flex-col items-center relative`}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <nav className="space-y-6 w-full">
          {[
            { icon: <FaHome size={30} />, label: "Home" },
            { icon: <FaBriefcase size={30} />, label: "Jobs" },
            { icon: <FaClipboardList size={30} />, label: "Orders" },
            {
              icon: <FaShoppingCart size={30} />,
              label: "Shopapp",
              action: () => setShowSecondarySidebar(!showSecondarySidebar),
            },
            { icon: <FaTools size={30} />, label: "Workspace" },
            { icon: <FaProjectDiagram size={30} />, label: "Projects" },
            { icon: <FaUserShield size={30} />, label: "User Management" },
            { icon: <FaChartPie size={30} />, label: "Analytics" },
          ].map((item, index) => (
            <button
            type="button"
              key={index}
              onClick={item.action || null}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-blue-700 transition duration-300 w-full text-xl"
            >
              <span className="text-white">{item.icon}</span>
              {expanded && <span className="ml-3">{item.label}</span>}
            </button>
          ))}
        </nav>
      </aside>

      {/* Secondary Sidebar */}
      {showSecondarySidebar && (
        <aside className="w-64 bg-[#25253a] text-white p-6 shadow-lg min-h-screen transition-all duration-300">
          <nav className="space-y-4">
            {[
              { icon: <FaHome size={30} />, label: "Home" },
              { icon: <FaBox size={30} />, label: "Products" },
              { icon: <FaUsers size={30} />, label: "Customer View" },
              { icon: <FaPlus size={30} />, label: "New Product" },
              { icon: <FaTags size={30} />, label: "Categories" },
              { icon: <FaCogs size={30} />, label: "Attributes" },
              { icon: <FaChartBar size={30} />, label: "Sales" },
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center space-x-4 px-5 py-4 rounded-lg hover:bg-blue-700 transition duration-300 text-xl"
              >
                {item.icon} <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </aside>
      )}

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header Navbar */}
        <div className="bg-white p-4 shadow-md mb-4 flex items-center rounded-lg">
          <nav className="w-full flex justify-around px-4">
            {["Hardware", "Custom Products", "Designs", "Hire Machinery & Equipments"].map(
              (text, index) => (
                <button
                type="button"
                  key={index}
                  className="px-5 py-3 rounded-lg bg-blue-900 text-white font-medium transition duration-300 hover:bg-green-500 shadow-md"
                >
                  {text}
                </button>
              )
            )}
          </nav>
        </div>

        {/* Add Product Button */}
        <div className="mb-4 flex justify-end">
          <button type="button" className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 text-lg">
            + Add Product
          </button>
        </div>

        {/* Product List */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Products</h2>
          <table className="w-full border-collapse table-auto">
  <thead>
    <tr className="bg-gray-200 text-gray-700">
      <th className="border border-gray-300/50 p-4 text-lg">No</th>
      <th className="border border-gray-300/50 p-4 text-lg">Thumbnail</th>
      <th className="border border-gray-300/50 p-4 text-lg">Name</th>
      <th className="border border-gray-300/50 p-4 text-lg">Price</th>
      <th className="border border-gray-300/50 p-4 text-lg">SKU</th>
      <th className="border border-gray-300/50 p-4 text-lg">BID</th>
      <th className="border border-gray-300/50 p-4 text-lg">Status</th>
    </tr>
  </thead>
  <tbody>
    {[...Array(10)].map((_, index) => (
      <tr key={index} className="border-b border-gray-300/30 bg-gray-50 hover:bg-gray-100 transition duration-300">
        <td className="border border-gray-300/30 p-4 text-center text-lg">{index + 1}</td>
        <td className="border border-gray-300/30 p-4 text-center">
          <div className="w-14 h-14 bg-gray-300 rounded-full" />
        </td>
        <td className="border border-gray-300/30 p-4 text-lg">Product {index + 1}</td>
        <td className="border border-gray-300/30 p-4 text-lg">${(index + 1) * 50}</td>
        <td className="border border-gray-300/30 p-4 text-lg">SKU-{index + 1}</td>
        <td className="border border-gray-300/30 p-4 text-lg">BID-{index + 1}</td>
        <td className="border border-gray-300/30 p-4 text-green-500 font-semibold text-lg">Available</td>
      </tr>
    ))}
  </tbody>
</table>

        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
