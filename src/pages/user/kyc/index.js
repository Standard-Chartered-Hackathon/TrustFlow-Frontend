import React, { useState } from "react";
import axios from "axios";

export default function KycPage() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    address: "",
    annualIncome: "",
    aadharNumber: "",
    panNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignatureChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, signature: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    try {
      const response = await axios.post(
        `https://trustflow-backend.onrender.com/v1/userAuth/checkUserData/${userId}`,
        {
          username: formData.name,
          dateOfBirth: formData.dob,
          aadhaarCardNo: formData.aadharNumber,
          panCardNo: formData.panNumber,
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
      });
    } catch (error) {
      console.error("Error submitting KYC data:", error);
    }
  };

  return (
    <div className="flex justify-center w-full px-[2rem] xl:px-[4rem]  min-h-[90vh] py-[2rem]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col h-full w-full gap-y-10"
      >
        <h2 className="text-5xl md:text-6xl font-semibold text-Text-Black font-inter">
          Details
        </h2>
        <section className="h-full flex flex-col lg:flex-row justify-evenly items-center gap-4 w-full">
          <div className="grid grid-cols-1 gap-x-10 gap-y-4 md:gap-y-12  max-md:justify-items-center md:grid-cols-2 w-full lg:w-[75vw]">
            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="name"
                className="text-lg font-semibold text-Text-Black"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field bg-inputBg text-lg p-3 rounded-xl w-72 md:w-[350px] lg:w-80 xl:w-96  shadow-sm"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="dob"
                className="text-lg font-semibold text-Text-Black"
              >
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="input-field bg-inputBg text-lg p-3 rounded-xl w-72 md:w-[350px] lg:w-80 xl:w-96  shadow-md"
                placeholder="Select your date of birth"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="aadharNumber"
                className="text-lg font-semibold text-Text-Black"
              >
                Aadhar Number
              </label>
              <input
                type="text"
                name="aadharNumber"
                id="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleChange}
                required
                className="input-field bg-inputBg text-lg p-3 rounded-xl w-72 md:w-[350px] lg:w-80 xl:w-96  shadow-md"
                placeholder="Enter your Aadhar number"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="panNumber"
                className="text-lg font-semibold text-Text-Black"
              >
                PAN Number
              </label>
              <input
                type="text"
                name="panNumber"
                id="panNumber"
                value={formData.panNumber}
                onChange={handleChange}
                required
                className="input-field bg-inputBg text-lg p-3 rounded-xl w-72 md:w-[350px] lg:w-80 xl:w-96  shadow-md"
                placeholder="Enter your PAN number"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="annualIncome"
                className="text-lg font-semibold text-Text-Black"
              >
                Annual Income
              </label>
              <select
                name="annualIncome"
                id="annualIncome"
                value={formData.annualIncome}
                onChange={handleChange}
                required
                className="input-field bg-inputBg text-lg p-3 rounded-xl w-72 md:w-[350px] lg:w-80 xl:w-96  shadow-md"
              >
                <option value="">Select annual income range</option>
                <option value="0-500000">0 - 5,00,000</option>
                <option value="500001-1000000">5,00,001 - 10,00,000</option>
                {/* Add other options as needed */}
              </select>
            </div>
            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="employmentType"
                className="text-lg font-semibold text-Text-Black"
              >
                Type of Employment
              </label>
              <select
                name="employmentType"
                id="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
                required
                className="input-field bg-inputBg text-lg p-3 rounded-xl w-72 md:w-[350px] lg:w-80 xl:w-96  shadow-md"
              >
                <option value="">Select employment type</option>
                <option value="business">Business</option>
                <option value="job">Job</option>
                {/* Add other options as needed */}
              </select>
            </div>
          </div>
          <div className="h-full w-full lg:w-[25vw] flex lg:flex-col gap-10 flex-col md:flex-row items-center max-lg:mt-10">
            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="signature"
                className="text-lg font-semibold text-Text-Black"
              >
                Signature
              </label>
              <input
                type="file"
                accept=".png, .jpg, .jpeg, .gif"
                name="signature"
                id="signature"
                onChange={handleSignatureChange}
                className="input-field bg-inputBg text-lg p-3 rounded-xl w-72 md:w-[350px] lg:w-80 xl:w-96  shadow-md"
              />
              {formData.signature && (
                <img
                  src={URL.createObjectURL(formData.signature)}
                  alt="Signature"
                  className="mt-2 max-w-[200px] max-h-[200px]"
                />
              )}
            </div>
            <div className="w-full flex lg:justify-end justify-center ">
              <button
                type="submit"
                className="px-4 w-64 md:px-6 py-3 font-inter bg-blue shadow-md text-white hover:text-black rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              >
                Continue
              </button>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}
