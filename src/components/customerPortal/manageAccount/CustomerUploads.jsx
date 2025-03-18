import { useState } from 'react'

const CustomerUploads = () => {
  const [certificates, setCertificates] = useState([]);
  const [idFront, setIdFront] = useState(null);
  // const [idBack, setIdBack] = useState(null); Not used
  // const [kraPin, setKraPin] = useState(null); Not used

  const handleDrop = (e, setFile) => {
    e.preventDefault();
    const {files} = e.dataTransfer;
    if (files.length) {
      setFile(files[0]);
    }
  };

  const handleCertificatesDrop = (e) => {
    e.preventDefault();
    const [files] = Array.from(e.dataTransfer);
    setCertificates(prev => [...prev, ...files]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('border-[rgb(0,0,150)]');
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('border-[rgb(0,0,150)]');
  };

  return (
    <div className="max-w-3xl ml-80 p-6">
      <div className="bg-white rounded-xl p-8">
        <h1 className="text-2xl font-bold mb-6">Add Attachments</h1>
        
        <form className="space-y-6">
          {/* ID Front */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              ID Front <span className="text-red-500">*</span>
            </label>
            <div 
              className="flex items-center justify-center w-full"
              onDrop={(e) => handleDrop(e, setIdFront)}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <label className="w-full flex flex-col items-center px-4 py-6 bg-white rounded-lg border-2 border-dashed border-[rgb(0,0,122)] cursor-pointer hover:bg-gray-50">
                <svg className="w-8 h-8 text-[rgb(0,0,122)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                </svg>
                <span className="mt-2 text-sm text-gray-600">
                  {idFront ? idFront.name : 'Drag and drop or click to upload ID Front'}
                </span>
                <input 
                  type="file" 
                  className="hidden" 
                  onChange={(e) => setIdFront(e.target.files[0])}
                  required 
                  accept="image/*,.pdf" 
                />
              </label>
            </div>
          </div>

          {/* ID Back */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              ID Back <span className="text-red-500">*</span>
            </label>
            <div 
              className="flex items-center justify-center w-full"
              onDrop={(e) => handleDrop(e, setIdFront)}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <label className="w-full flex flex-col items-center px-4 py-6 bg-white rounded-lg border-2 border-dashed border-[rgb(0,0,122)] cursor-pointer hover:bg-gray-50">
                <svg className="w-8 h-8 text-[rgb(0,0,122)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                </svg>
                <span className="mt-2 text-sm text-gray-600">
                  {idFront ? idFront.name : 'Drag and drop or click to upload ID Front'}
                </span>
                <input 
                  type="file" 
                  className="hidden" 
                  onChange={(e) => setIdFront(e.target.files[0])}
                  required 
                  accept="image/*,.pdf" 
                />
              </label>
            </div>
          </div>

          {/* Similar structure for ID Back and KRA PIN with their respective state handlers */}

          {/* Certificates */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              KRA 
            </label>
            <div 
              className="flex items-center justify-center w-full"
              onDrop={handleCertificatesDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <label className="w-full flex flex-col items-center px-4 py-6 bg-white rounded-lg border-2 border-dashed border-[rgb(0,0,122)] cursor-pointer hover:bg-gray-50">
                <svg className="w-8 h-8 text-[rgb(0,0,122)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                </svg>
                <span className="mt-2 text-sm text-gray-600">Drag and drop or click to upload KRA Certificates</span>
                <input 
                  type="file" 
                  className="hidden" 
                  multiple 
                  onChange={(e) => setCertificates(prev => [...prev, ...Array.from(e.target.files)])}
                  required 
                  accept="image/*,.pdf"
                />
              </label>
            </div>
            {certificates.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-medium">Selected KRA Certificates:</p>
                <ul className="mt-2 space-y-1">
                  {certificates.map((file, index) => (
                    <li key={index} className="text-sm text-gray-600 flex justify-between items-center">
                      <span>{file.name}</span>
                      <button 
                        type="button"
                        onClick={() => setCertificates(prev => prev.filter((_, i) => i !== index))}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          
          <div className='flex justify-end'>
          <button 
            type="submit"
            className="w-full md:w-1/2 bg-[rgb(0,0,122)] text-white py-3 px-4 rounded-lg hover:bg-[rgb(0,0,150)] transition-colors duration-300 font-medium mt-8"
          >
            Next
          </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CustomerUploads
