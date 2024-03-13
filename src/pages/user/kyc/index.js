import React, { useState } from "react";
import axios from "axios";
import CameraComponent from "@/components/CameraComponent";
import SignatureComponent from "@/components/SignatureComponent";

export default function KycPage() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    address: "",
    annualIncome: "",
    aadharNumber: "",
    panNumber: "",
    signature: null,
    userImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageCapture = (imageData) => {
    setFormData({ ...formData, userImage: imageData });
  };

  const [signatureData, setSignatureData] = useState(null);

  const handleSign = (data) => {
    setSignatureData(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    try {
      const response = await axios.post(
        // `http://localhost:3000/v1/userAuth/checkUserData/${userId}`,
        `https://trustflow-backend.onrender.com/v1/userAuth/checkUserData/0001`,
        {
          username: formData.name,
          dateOfBirth: formData.dob,
          aadhaarCardNo: formData.aadharNumber,
          panCardNo: formData.panNumber,
          //   imgUrl: formData.userImage,
        }
      );
      console.log(response);
      if (response.data.success === true) {
        alert("KYC verified");
      } else {
        alert("KYC failed. Incorrect details. Please try again.");
      }
      setFormData({
        name: "",
        dob: "",
        address: "",
        annualIncome: "",
        aadharNumber: "",
        panNumber: "",
        signature: null,
        userImage: userImage,
      });
    } catch (error) {
      console.error("Error submitting KYC data:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="flex space-x-4">
        {/* Left side: Form fields */}
        <div className="flex flex-col space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="dob" className="block text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              id="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-gray-700">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="annualIncome" className="block text-gray-700">
              Annual Income
            </label>
            <input
              type="number"
              name="annualIncome"
              id="annualIncome"
              value={formData.annualIncome}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="aadharNumber" className="block text-gray-700">
              Aadhar Number
            </label>
            <input
              type="text"
              name="aadharNumber"
              id="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="panNumber" className="block text-gray-700">
              PAN Number
            </label>
            <input
              type="text"
              name="panNumber"
              id="panNumber"
              value={formData.panNumber}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <button type="submit" className="btn-primary">
            Submit
          </button>
        </div>

        {/* Right side: Camera and signature */}
        <div className="flex flex-col space-y-4">
          <CameraComponent onCapture={handleImageCapture} />
          <SignatureComponent onSign={handleSign} />
        </div>
      </form>
    </div>
  );
}
