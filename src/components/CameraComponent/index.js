import React, { useRef, useState } from "react";
import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";

const CameraComponent = ({ onCapture }) => {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = mediaStream;
      setStream(mediaStream);
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  const captureImage = async () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0);
    const imageData = canvas.toDataURL("image/png");
    onCapture(imageData);

    // Call the function to upload the image to S3
    const imageUrl = await uploadToS3(imageData);
    if (imageUrl) {
      onCapture(imageUrl); // Pass the imageUrl to the onCapture function
      setUploadMessage("Image uploaded successfully");
    } else {
      setUploadMessage("Failed to upload image");
    }
  };

  const uploadToS3 = async (imageData) => {
    const s3 = new AWS.S3({
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    });

    const fileData = Buffer.from(
      imageData.replace(/^data:image\/\w+;base64,/, ""),
      "base64"
    );

    const params = {
      Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
      Key: `${uuidv4()}.png`, // Generate a unique key for the image
      Body: fileData,
      ContentType: "image/png",
    };

    try {
      const data = await s3.upload(params).promise();
      console.log("File uploaded to S3:", data.Location);
      return data.Location; // Return the S3 URL
    } catch (error) {
      console.error("Error uploading file to S3:", error);
      return null;
    }
  };
  return (
    <div className="border border-gray-300 rounded-md p-4">
      <div className="flex justify-center mb-4">
        <button
          onClick={startCamera}
          className="btn-primary mr-2"
          disabled={stream !== null}
        >
          Start Camera
        </button>
        <button onClick={stopCamera} className="btn-primary mr-2">
          Stop Camera
        </button>
        <button onClick={captureImage} className="btn-primary">
          Capture Image
        </button>
      </div>
      <div className="flex justify-center">
        <video ref={videoRef} autoPlay muted className="w-64 h-auto" />
      </div>
      {uploadMessage && <p>{uploadMessage}</p>}
    </div>
  );
};

export default CameraComponent;
