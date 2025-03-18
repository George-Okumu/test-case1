import { TiTick } from "react-icons/ti";
import ActiveFundiNav from "./ActiveFundiNav";

const PaymentFundi = () => {
  return (
    <>
      <section className="container mx-auto mt-12 px-4 max-w-5xl">
        <ActiveFundiNav />
        
        <h1 className="text-3xl font-bold text-gray-800 mt-8 mb-6">
          Payment Breakdown
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project Details Card */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Project Details
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium enim officiis corporis nulla maxime recusandae commodi quia vel, minima amet quo magnam perferendis ipsam, iure mollitia? Doloribus fugit aspernatur laborum!
            </p>
          </div>

          {/* Payment Summary Card */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Payment Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Amount</span>
                <span className="font-semibold">KSH 3,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">JaGedo Commission</span>
                <span className="font-semibold">KSH 900</span>
              </div>
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-medium">Builder Due</span>
                  <span className="text-lg font-bold text-[rgb(0,0,122)]">KSH 2,100</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Processing Time */}
        <div className="bg-blue-50 rounded-lg p-4 mt-6 border border-blue-100">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-blue-800 font-medium">Processing Time: 7-14 days</span>
          </div>
        </div>

        {/* Service Package Card */}
        <div className="bg-[rgb(0,0,122)] text-white p-8 rounded-2xl shadow-lg mt-8 transform hover:scale-105 transition-transform duration-300">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-4xl font-bold">JaGedo</h2>
            <div className="text-right">
              <h1 className="text-5xl font-extrabold">Ksh 3,000</h1>
              <p className="text-lg text-blue-200">Linkage Fee</p>
            </div>
          </div>

          <ul className="space-y-4">
            <li className="flex items-center">
              <TiTick className="text-green-300 mr-3 text-2xl flex-shrink-0" />
              <span className="text-blue-50">Fee includes 1-day labor charges & transport (within 15KM from county town).</span>
            </li>
            <li className="flex items-center">
              <TiTick className="text-green-300 mr-3 text-2xl flex-shrink-0" />
              <span className="text-blue-50">Response time within 24 hours.</span>
            </li>
            <li className="flex items-center">
              <TiTick className="text-green-300 mr-3 text-2xl flex-shrink-0" />
              <span className="text-blue-50">Fee excludes material charges.</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default PaymentFundi;