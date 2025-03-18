const AdminConfirmation = () => {
  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gray-50">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Admin Payment Confirmation</h2>
      
      {/* Job Details Section */}
      <div className="w-full max-w-2xl mb-6">
        <button type="button" className="border border-gray-300 px-6 py-3 w-full flex justify-between items-center bg-white shadow-sm rounded-md hover:bg-gray-100">
          Job Details
          <span className="text-lg text-gray-600">▼</span>
        </button>
        <div className="flex justify-end mt-2">
          <button type="button" className="border border-gray-300 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
            Download Report
          </button>
        </div>
      </div>
      
      {/* Payment Confirmation Box */}
      <div className="border border-gray-300 p-16 w-full max-w-3xl mb-6 flex flex-col justify-between text-xl font-semibold h-80 bg-white shadow-sm rounded-md">
        <span className="self-center text-gray-800">Funds Request</span>
        <div className="flex gap-6 self-center pb-4 mt-auto">
          <button type="button" className="border border-gray-300 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
            Confirm Payment
          </button>
          <button  type="button" className="border border-gray-300 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
            Cancel Confirmation
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminConfirmation;
