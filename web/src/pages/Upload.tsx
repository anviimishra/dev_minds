import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import the hook
import { Upload, FileText, Check, AlertCircle } from 'lucide-react';
import DevMind from "./devmind.jpeg";

const MedicalTranscriptUpload = () => {
  // Explicitly type the uploadedFile state to be a File or null
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null); // <- Added type here
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = (file: File) => {
    if (file && file.type === "text/plain") {
      setUploadedFile(file);
      setUploadStatus('success');
    } else {
      setUploadStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleNextClick = () => {
    // Handle the action when the "Next" button is clicked
    navigate(`/my-modules`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-sky-100 to-purple-100 flex flex-col">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 relative py-12">
        {/* Decorative Blobs */}
        <div className="absolute -top-28 -left-32 w-96 h-96 bg-pink-300 opacity-30 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-28 -right-72 w-96 h-96 bg-purple-200 opacity-30 rounded-full filter blur-3xl"></div>
{/* Next Button - Appears after a file is uploaded */}
{uploadedFile && (
            <button
              onClick={handleNextClick}
              className="absolute top-6 right-6 bg-gradient-to-r from-pink-400 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transform transition shadow-lg"
            >
              Next
            </button>
          )}

<div className="mb-10 w-[5rem] h-[5rem] bg-gradient-to-b from-pink-200 to-pink-100 shadow-2xl rounded-full border-4 border-white flex items-center justify-center">
          <div className="w-[5rem] h-[5rem] bg-white rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={DevMind}
              alt="DevMind Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Upload Container */}
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 relative z-10">
          <h1 className="text-3xl font-bold text-[#A97DBC] text-center mb-6">
            Upload Medical Transcript
          </h1>

          {/* Upload Area */}
          <div
            className={`border-4 border-dashed rounded-xl p-8 text-center transition-colors ${
              dragActive 
                ? "border-pink-400 bg-pink-50" 
                : "border-[#A97DBC] hover:border-pink-400"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept=".txt"
              onChange={handleChange}
            />
            
            <label 
              htmlFor="file-upload"
              className="flex flex-col items-center cursor-pointer"
            >
              <Upload 
                className="text-[#A97DBC] mb-4" 
                size={48} 
              />
              <span className="text-lg font-semibold text-[#A97DBC] mb-2">
                Drag and drop your transcript here
              </span>
              <span className="text-sm text-[#A97DBC] mb-4">
                or click to browse files
              </span>
              <button className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transform transition shadow-lg">
                Select File
              </button>
            </label>
          </div>

          {/* Status Messages */}
          {uploadStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-50 text-green-700 border border-green-200 rounded-lg">
              <Check className="inline-block text-green-500" />
              <span className="ml-2">Successfully uploaded: {uploadedFile?.name}</span>
            </div>
          )}

          {uploadStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-50 text-red-700 border border-red-200 rounded-lg">
              <AlertCircle className="inline-block text-red-500" />
              <span className="ml-2">Please upload a valid text file (.txt)</span>
            </div>
          )}

          {/* File Info */}
          {uploadedFile && (
            <div className="mt-6 p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center">
                <FileText className="text-[#A97DBC] mr-2" size={24} />
                <div>
                  <h3 className="font-semibold text-[#A97DBC]">
                    {uploadedFile.name}
                  </h3>
                  <p className="text-sm text-[#A97DBC]">
                    {(uploadedFile.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-8 max-w-2xl text-center">
          <h2 className="text-xl font-semibold text-[#A97DBC] mb-2">
            Upload Guidelines
          </h2>
          <p className="text-[#A97DBC] text-sm">
            Please ensure your medical transcript is in text format (.txt).
            The file should be properly formatted and contain no sensitive
            personal information before uploading.
          </p>
        </div>
      </main>
    </div>
  );
};

export default MedicalTranscriptUpload;
