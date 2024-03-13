import React, { useRef } from "react";

const SignatureComponent = ({ onSign }) => {
  const inputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageData = reader.result;
        onSign(imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <label className="mb-2 text-lg font-bold text-gray-800">Signature</label>
      <div className="w-64 h-20 border border-gray-300 rounded-lg flex justify-center items-center">
        <input
          type="file"
          accept="image/*,.pdf"
          ref={inputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          onClick={() => inputRef.current.click()}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Upload Signature
        </button>
      </div>
    </div>
  );
};

export default SignatureComponent;
