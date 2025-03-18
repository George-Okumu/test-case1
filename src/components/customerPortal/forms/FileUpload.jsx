import { useState } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import { FaVideo, FaPlus, FaTrash, FaFileAlt } from "react-icons/fa";

const FileUploader = () => {
    const [files, setFiles] = useState([]);

    const handleFileUpload = (event) => {
        const uploadedFiles = Array.from(event.target.files);
        setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
    };

    const removeFile = (index) => {
        setFiles(files.filter((_, i) => i !== index));
    };

    return (
        <div className="space-y-2">
            <label className="block text-gray-800 font-semibold">Attachments:</label>

            {/* File Upload Row */}
            <div className="flex items-center border border-black rounded-lg pl-2 pr-3 py-1 bg-gray-100">
                <input
                    type="text"
                    placeholder="Enter file name"
                    className="flex-1 px-1 py-1 border rounded-md outline-none focus:ring-2 focus:ring-[rgb(0,0,122)]"
                />

                {/* Attachment Icon */}
                <label className="cursor-pointer w-15 flex justify-center items-center">
                    <AiOutlinePaperClip className="text-gray-700 text-2xl w-14" />
                    <input type="file" className="hidden" onChange={handleFileUpload} multiple />
                </label>

                {/* Video Upload */}
                <label className="cursor-pointer w-12 flex justify-center items-center">
                    <FaVideo className="text-red-500 text-xl" />
                    <input type="file" className="hidden" onChange={handleFileUpload} multiple />
                </label>

                {/* Add Button */}
                <button type="button" className="ml-3 p-2 bg-[rgb(0,0,122)] text-white rounded-lg hover:bg-blue-700 transition">
                    <FaPlus />
                </button>
            </div>

            {/* File Display Section */}
            <div className="min-h-72 bg-gray-100 px-4 rounded-md flex flex-col items-center justify-center">
                {files.length === 0 ? (
                    <div className="text-center text-gray-500">
                        <FaFileAlt className="text-4xl mb-2" />
                        <p>No files uploaded</p>
                    </div>
                ) : (
                    <div className="w-full">
                        <h3 className="text-gray-800 font-semibold mb-1">Uploaded Files:</h3>
                        <ul className="bg-gray-100 p-2 rounded-md space-y-2">
                            {files.map((file, index) => (
                                <li key={index} className="flex justify-between items-center bg-white p-2 rounded-md shadow-sm">
                                    <span className="text-gray-700">{file.name}</span>
                                    <button type="button" onClick={() => removeFile(index)} className="text-red-500 hover:text-red-700">
                                        <FaTrash />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FileUploader;
