# Trustflow Online KYC Website

<div>

https://github.com/Standard-Chartered-Hackathon/TrustFlow-Frontend/assets/104360645/fd3b5133-1c80-4de9-9a39-45470d338e08


# Online Video KYC

## Description
The current Know Your Customer (KYC) process predominantly relies on offline and manual procedures or non-interactive online methods. This project aims to revolutionize KYC by introducing an intuitive and self-sufficient online interactive process for video KYC. The envisioned system will capture the user's live photograph along with essential details such as name, date of birth, address, PAN card/Aadhaar, signature, income range, and type of employment in a conversational manner. Moreover, it emphasizes inclusivity, ensuring accessibility across languages and generations, irrespective of financial or educational disparities.

## Solution Overview
The proposed solution leverages advanced technologies to streamline the KYC process. Using a combination of frontend and backend technologies, the platform ensures seamless user interaction and robust data management.

## Technologies Used

### Frontend
- **Next.js:** A React framework for building efficient and scalable web applications.
- **Tailwind CSS:** A utility-first CSS framework for designing custom user interfaces with ease.

### Backend
- **Node.js:** A runtime environment for executing JavaScript code on the server side.
- **Express.js:** A web application framework for Node.js, providing a robust set of features for building APIs and web servers.
- **Flask:** A lightweight Python web framework for building web applications and APIs.

### Infrastructure
- **Amazon EC2:** Provides scalable computing capacity in the cloud, facilitating the deployment of backend services.
- **Amazon S3 Bucket:** Offers secure, durable, and scalable object storage for storing user data and documents securely.

### Database
- **MongoDB:** A NoSQL database that provides flexibility and scalability for storing and managing user data efficiently.

### Image Recognition
- **AWS Image Recognition:** Utilized to match the image of official documents with the live photograph captured during the video KYC process.

## Verification Process
- Aadhaar and PAN card numbers are used to access users' official document images stored securely.
- The live photograph captured during the video KYC process is compared with the stored images using AWS Image Recognition to verify the authenticity of the KYC.

## Conclusion
By incorporating cutting-edge technologies and a user-centric approach, the proposed online video KYC solution aims to enhance the efficiency, security, and inclusivity of the KYC process, thereby addressing the evolving needs of the digital landscape while ensuring compliance with regulatory requirements.

<br>

## Getting Started

First, run the development server:

```bash
yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Deployed at [Trustflow](https://trustflow-j6nt.vercel.app/)


