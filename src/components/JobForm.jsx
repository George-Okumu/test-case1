import { useState } from "react";
import { FiUpload } from "react-icons/fi";

const JobForm = () => {
  const [method, setMethod] = useState("Competitive");
  const methods = ["Competitive", "Single sourcing"];

  // Customer attachments (pre-uploaded)
  const [customerAttachments] = useState([
    { name: "customer_file_1.pdf" },
    { name: "customer_file_2.jpg" },
  ]);

  // Uploaded files (by user)
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
  
    if (uploadedFiles.length + files.length > 5) {
      alert("You can only upload up to 5 files.");
      return;
    }
  
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };
  

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg relative border border-gray-200">
      {/* Title & Method Selector */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Customer Job Form</h2>
        <div className="relative">
          <span className="text-gray-700 font-semibold mr-2">Method:</span>
          <select
            className="border p-2 rounded-md shadow-sm"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            {methods.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Customer Details (Collapsible) */}
      <details className="border p-4 rounded-md mb-6 bg-gray-50 shadow-sm">
        <summary className="text-lg font-semibold text-gray-700 cursor-pointer">Customer Details</summary>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <p><span className="font-semibold">First Name:</span> Micah</p>
          <p><span className="font-semibold">Last Name:</span> Barasa</p>
          <p><span className="font-semibold">Phone:</span> 0114212111</p>
          <p><span className="font-semibold">Email:</span> micadevelops@gmail.com</p>
          <p className="col-span-2"><span className="font-semibold">Location:</span> Northern Lands</p>
        </div>
      </details>

      {/* Job Details (Collapsible) */}
      <details className="border p-4 rounded-md mb-6 bg-gray-50 shadow-sm">
        <summary className="text-lg font-semibold text-gray-700 cursor-pointer">Job Details</summary>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <p><span className="font-semibold">Fundi:</span> Mason</p>
          <p><span className="font-semibold">Level:</span> Master</p>
          <p className="col-span-2"><span className="font-semibold">Location:</span> Githurai</p>
          <p><span className="font-semibold">Start Date:</span> 26/2/2024</p>
          <p><span className="font-semibold">End Date:</span> 3/3/2024</p>
          <p className="col-span-2"><span className="font-semibold">Closing Date:</span> 4/3/2024</p>
          <p className="col-span-2"><span className="font-semibold">Managed by:</span> Jagedo</p>
        </div>
      </details>

      {/* Description & Customer Attachments */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <textarea placeholder="Description" className="border p-2 w-full h-24 rounded-md shadow-sm"/>
        <div className="border p-4 rounded-md bg-gray-50 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700">Attachments</h2>
          <p className="text-sm text-gray-600">(Uploaded by customer)</p>
          <div className="mt-2">
            {customerAttachments.length > 0 && (
              <ul className="text-gray-700">
                {customerAttachments.map((file, index) => (
                  <li key={index} className="mt-1">{file.name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Notes & File Upload */}
      <div className="grid grid-cols-2 gap-4 mb-6">
      <textarea 
    className="border p-4 w-full h-32 rounded-md bg-gray-100 shadow-sm text-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400" 
    placeholder="Add Notes..."
  />
        <label className="border p-4 w-full text-center cursor-pointer rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold flex items-center justify-center space-x-2">
          <FiUpload className="text-gray-600" size={20} />
          <span>Add Files</span>
          <input type="file" className="hidden" multiple onChange={handleFileChange} />
        </label>
      </div>

      {/* Display Uploaded Files (Separate from Customer Attachments) */}
      {uploadedFiles.length > 0 && (
        <div className="border p-4 rounded-md bg-gray-50 shadow-sm mt-4">
          <h2 className="text-lg font-semibold text-gray-700">Uploaded Files</h2>
          <ul className="text-gray-700 mt-2">
            {uploadedFiles.map((file, index) => (
              <li key={index} className="mt-1">{file.name}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-between mt-6">
        <button type="button" className="bg-[rgb(0,0,122)] text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-800">
          Save Draft
        </button>
        <button type="button" className="bg-[rgb(0,0,122)] text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-800">
          Assign
        </button>
      </div>
    </div>
  );
};

export default JobForm;
