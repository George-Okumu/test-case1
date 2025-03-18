import { useState } from "react";
import PropTypes from "prop-types";

const Uploads2 = () => {
  const [idFront, setIdFront] = useState(null);
  const [idBack, setIdBack] = useState(null);
  const [kraPin, setKraPin] = useState(null);

  const handleDrop = (e, setFile) => {
    e.preventDefault();
    const { files } = e.dataTransfer;
    if (files.length > 0) {
      setFile(files[0]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Upload Required Documents</h2>

      <FileUpload label="ID Front" file={idFront} setFile={setIdFront} handleDrop={handleDrop} />
      <FileUpload label="ID Back" file={idBack} setFile={setIdBack} handleDrop={handleDrop} />
      <FileUpload label="KRA PIN" file={kraPin} setFile={setKraPin} handleDrop={handleDrop} />
    </div>
  );
};

const FileUpload = ({ label, file, setFile, handleDrop }) => {
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      setFile(files[0]);
    }
  };

  return (
    <div className="space-y-2 mb-4">
      <label className="block text-sm font-medium">
        {label} <span className="text-red-500">*</span>
      </label>
      <div
        className={`flex items-center justify-center w-full ${dragging ? 'bg-blue-50' : ''}`}
        onDrop={(e) => handleDrop(e, setFile)}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <label className="w-full flex flex-col items-center px-4 py-6 bg-white rounded-lg border-2 border-dashed border-blue-600 cursor-pointer hover:bg-gray-50">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          <span className="mt-2 text-sm text-gray-600">
            {file ? file.name : `Drag and drop or click to upload ${label}`}
          </span>
          <input type="file" className="hidden" onChange={handleFileChange} required accept="image/*,.pdf" />
        </label>
      </div>
    </div>
  );
};

// PropTypes validation
FileUpload.propTypes = {
  label: PropTypes.string.isRequired,
  file: PropTypes.instanceOf(File),
  setFile: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
};

export default Uploads2;
