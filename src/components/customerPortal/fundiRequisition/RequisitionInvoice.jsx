import { IoIosPrint } from "react-icons/io";
import { FaDownload } from "react-icons/fa";

const RequisitionInvoice = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border bg-white shadow-md rounded-lg p-6">
        {/* Invoice Header */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b pb-4">
          <img
            src="https://uat.jagedo.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJapageologo.d832cf02.png&w=3840&q=75"
            className="h-16 md:h-20"
            alt="logo"
          />
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button type="button" className="flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition">
              <IoIosPrint className="mr-2" /> Print
            </button>
            <button type="button" className="flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition">
              <FaDownload className="mr-2" /> Download
            </button>
          </div>
        </div>

        {/* Invoice Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-gray-700">
          <div>
            <p className="text-xl font-semibold">
              Invoice To: <span className="font-normal">John Doe</span>
            </p>
            <p className="text-xl font-semibold">
              Request Type: <span className="font-normal">Fundi - Managed by Self</span>
            </p>
            <p className="text-xl font-semibold">
              Skills: <span className="font-normal">Electrician</span>
            </p>
          </div>
          <div className="text-right">
            <p className="text-xl font-semibold">
              Invoice No: <span className="font-normal">Req#4468</span>
            </p>
            <p className="text-xl font-semibold">
              Date: <span className="font-normal">30-1-2025</span>
            </p>
          </div>
        </div>

        {/* Invoice Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-md border border-gray-300 my-6">
          <table className="w-full text-sm text-left text-gray-700 border-collapse">
            <thead className="text-xs uppercase bg-gray-100 border-b border-gray-300">
              <tr>
                <th className="px-6 py-3 border-r border-gray-300">Description</th>
                <th className="px-6 py-3 border-r border-gray-300">Sum (KES)</th>
                <th className="px-6 py-3 border-r border-gray-300 text-center">VAT%</th>
                <th className="px-6 py-3">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300 hover:bg-gray-100">
                <td className="px-6 py-4 border-r border-gray-300">Linkage Fee</td>
                <td className="px-6 py-4 border-r border-gray-300">244,567</td>
                <td className="px-6 py-4 border-r border-gray-300 text-center">–</td>
                <td className="px-6 py-4">34,567</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Total Summary Table */}
        {/* Total Summary Table */}
        <div className="overflow-x-auto bg-white rounded-lg  my-6 w-1/2 ml-auto">
          <table className="w-full text-sm text-left text-gray-700 border-collapse">
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="px-6 py-4 text-center font-semibold">Total (KES)</td>
                <td className="px-6 py-4 text-center">10000.00</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="px-6 py-4 text-center font-semibold">VAT 0%</td>
                <td className="px-6 py-4 text-center">0.00</td>
              </tr>
              <tr className="hover:bg-gray-100 font-bold">
                <td className="px-6 py-4 text-center">Total Including VAT (KES)</td>
                <td className="px-6 py-4 text-center">10000.00</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="px-6 py-4 text-center font-semibold">Paid by KE3D8CURS76EQNB-1:</td>
                {/* <td className="px-6 py-4 text-center text-red-600">-60.00</td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default RequisitionInvoice;
