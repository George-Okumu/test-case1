import { useParams } from "react-router-dom";

const BillDetails = () => {
  const { id } = useParams();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center pb-2 mb-4 text-lg font-semibold border-b border-gray-300">
        <span>Bill No. {id}</span>
      </div>

      {/* Table */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left bg-gray-50 text-gray-700">
              <th className="border-b border-gray-200 px-3 py-2">No</th>
              <th className="border-b border-gray-200 px-3 py-2">Description</th>
              <th className="border-b border-gray-200 px-3 py-2">Rate</th>
              <th className="border-b border-gray-200 px-3 py-2">UOM</th>
              <th colSpan="2" className="border-b border-gray-200 px-3 py-2 text-center">Budget</th>
              <th colSpan="2" className="border-b border-gray-200 px-3 py-2 text-center">Actual</th>
            </tr>
            <tr className="bg-gray-50 text-gray-600">
  <th className="border-b border-gray-200 px-3 py-2" />
  <th className="border-b border-gray-200 px-3 py-2" />
  <th className="border-b border-gray-200 px-3 py-2" />
  <th className="border-b border-gray-200 px-3 py-2" />
  <th className="border-b border-gray-200 px-3 py-2 text-center">QTY</th>
  <th className="border-b border-gray-200 px-3 py-2 text-center">Amount</th>
</tr>
          </thead>
          <tbody>
            <tr className="text-center text-gray-700">
              <td className="border-b border-gray-200 px-3 py-2">1</td>
              <td className="border-b border-gray-200 px-3 py-2">Deal Done</td>
              <td className="border-b border-gray-200 px-3 py-2">100</td>
              <td className="border-b border-gray-200 px-3 py-2">Unit</td>
              <td className="border-b border-gray-200 px-3 py-2">5</td>
              <td className="border-b border-gray-200 px-3 py-2">500</td>
              <td className="border-b border-gray-200 px-3 py-2">6</td>
              <td className="border-b border-gray-200 px-3 py-2">600</td>
            </tr>

            {/* Sub Total Row */}
            <tr className="text-right font-semibold text-gray-800">
              <td colSpan="6" className="p-3"/>
              <td colSpan="2" className="p-3 text-right">
                <span className="mr-3">Sub Total:</span>
                <input
                  type="text"
                  className="border border-gray-300 p-2 text-center w-24 rounded-lg shadow-sm"
                  placeholder=""
                />
                <input
                  type="text"
                  className="border border-gray-300 p-2 text-center w-24 rounded-lg shadow-sm ml-3"
                  placeholder=""
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Attachments */}
      <h2 className="text-xl font-semibold mt-6">Attachments</h2>
      <div className="bg-white p-4 rounded-lg shadow mt-3 text-gray-600">No attachments uploaded</div>
    </div>
  );
};

export default BillDetails;
