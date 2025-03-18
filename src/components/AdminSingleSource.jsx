import { useState } from "react";
import { FiUpload } from "react-icons/fi";

const JobForm = () => {
  const [isJobDetailsVisible, setIsJobDetailsVisible] = useState(false);
  const [isCustomerDetailsVisible, setIsCustomerDetailsVisible] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  
    // Customer attachments (pre-uploaded)
    const [customerAttachments] = useState([
      { name: "customer_file_1.pdf" },
      { name: "customer_file_2.jpg" },
    ]);

  const builders = [
    { id: "F-001", date: "Feb 1", skill: "Mason", firstName: "Edwin", lastName: "Sifuna", nationalID: "30604460", phone: "072122000", email: "edwin@gmail.com", county: "Nairobi", subcounty: "Westlands", jobTime: "2:00PM" },
    { id: "F-002", date: "Feb 14", skill: "Mason", firstName: "Marvin", lastName: "Kimeu", nationalID: "50804900", phone: "071819120", email: "marvin@gmail.com", county: "Nairobi", subcounty: "Westlands", jobTime: "3:00PM" }
  ];


    const handleFileChange = (event) => {
      const files = Array.from(event.target.files);
    
      if (uploadedFiles.length + files.length > 5) {
        alert("You can only upload up to 5 files.");
        return;
      }
    
      setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
    };
    

  const handleCheckboxChange = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Admin Single Source</h2>
      
      {/* Customer Details */}
      <div className="border p-4 rounded-md mb-6 bg-gray-50 shadow-sm">
        <button type="button" onClick={() => setIsCustomerDetailsVisible(!isCustomerDetailsVisible)} className="text-lg font-semibold text-gray-700 w-full text-left">
          {isCustomerDetailsVisible ? "Customer Details" : "Show Customer Details"}
        </button>
        {isCustomerDetailsVisible && (
          <div className="grid grid-cols-2 gap-4 mt-2">
            <p>First Name:Micah</p>
            <p>Last Name: Barasa</p>
            <p>Phone: 0722334455</p>
            <p>Email: icodebetter@gmail.com</p>
            <p>Location: Nairobi</p>
          </div>
        )}
      </div>
      
      {/* Job Details */}
      <div className="border p-4 rounded-md mb-6 bg-gray-50 shadow-sm">
        <button type="button" onClick={() => setIsJobDetailsVisible(!isJobDetailsVisible)} className="text-lg font-semibold text-gray-700 w-full text-left">
          {isJobDetailsVisible ? "Job Details" : "Show Job Details"}
        </button>
        {isJobDetailsVisible && (
          <div className="grid grid-cols-2 gap-4 mt-2">
            <p>Fundi: Mason</p>
            <p>Level: Master</p>
            <p>Location: Nairobi</p>
            <p>Start Date: 2024-03-10</p>
            <p>End Date: 2024-04-15</p>
            <p>Closing Date: 2024-03-20</p>
            <p>Managed by: JaGedo</p>
          </div>
        )}
      </div>
      
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
      
      {/* Table */}
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="border p-2">Select</th>
            <th className="border p-2">ID</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Skill</th>
            <th className="border p-2">First Name</th>
            <th className="border p-2">Last Name</th>
            <th className="border p-2">National ID</th>
            <th className="border p-2">Phone Number</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">County</th>
            <th className="border p-2">Sub County</th>
            <th className="border p-2">JobTime</th>
          </tr>
        </thead>
        <tbody>
          {builders.map((builder, index) => (
            <tr key={index} className="border-b border-gray-300 text-gray-700">
              <td className="border p-2 text-center">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(index)}
                  onChange={() => handleCheckboxChange(index)}
                />
              </td>
              <td className="border p-2">{builder.id}</td>
              <td className="border p-2">{builder.date}</td>
              <td className="border p-2">{builder.skill}</td>
              <td className="border p-2">{builder.firstName}</td>
              <td className="border p-2">{builder.lastName}</td>
              <td className="border p-2">38018271</td>
              <td className="border p-2">0740189463</td>
              <td className="border p-2">micadevelops@gmail.com</td>
              <td className="border p-2">Nairobi</td>
              <td className="border p-2">Westlands</td>
              <td className="border p-2">14:09PM </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobForm;
