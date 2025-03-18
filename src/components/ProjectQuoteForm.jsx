const ProjectQuoteForm = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <nav className="flex justify-between border-b pb-3 mb-6 text-lg font-semibold bg-white shadow-md rounded-lg px-6 py-3">
        <span className="text-gray-600 hover:text-blue-500 cursor-pointer">Builder</span>
        <span className="text-gray-600 hover:text-blue-500 cursor-pointer">Customer</span>
        <span className="text-gray-600 hover:text-blue-500 cursor-pointer">Progress</span>
        <span className="text-gray-600 hover:text-blue-500 cursor-pointer">Project Details</span>
        <span className="bg-[rgb(0,0,122)] text-white px-4 py-2 rounded-md shadow-md">Quote</span>
      </nav>

    {/* Project Information Section */}
<div className="bg-white shadow-lg p-6 border border-gray-300">
  <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Project Information</h2>

  <div className="text-gray-900 text-lg space-y-2">
    <div><span className="font-semibold">Organization:</span> Camitech Consultancy Limited</div>
    <div><span className="font-semibold">Contractor:</span> Engineer Kwach Kwach</div>
    <div><span className="font-semibold">First Name:</span> Omondi</div>
    <div><span className="font-semibold">Last Name:</span> Oyugi</div>
    <div><span className="font-semibold">Phone:</span> 0114212111</div>
    <div><span className="font-semibold">Email:</span> amazingwork@gmail.com</div>
  </div>
</div>



      {/* Quote Section */}
      <div className="mt-6 bg-white shadow-lg rounded-xl p-6 border border-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Quote</h2>
        <h3 className="font-semibold text-lg mb-3 text-gray-700">Bill Summary</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-100 text-gray-800">
              <th className="border border-gray-300 p-3">No</th>
              <th className="border border-gray-300 p-3">Bill</th>
              <th className="border border-gray-300 p-3">Amount</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-3 text-center">1</td>
              <td className="border border-gray-300 p-3">Material Cost</td>
              <td className="border border-gray-300 p-3 text-right">$500</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3 text-center">2</td>
              <td className="border border-gray-300 p-3">Labor</td>
              <td className="border border-gray-300 p-3 text-right">$300</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4 font-semibold text-right text-lg">Grand Total: <span className="text-green-600">$800</span></div>
      </div>
    </div>
  );
};

export default ProjectQuoteForm;
