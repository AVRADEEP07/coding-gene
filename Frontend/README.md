Coding Gene is a full-stack application designed to provide intelligent feedback on code snippets. By leveraging the Gemini API, it acts as a virtual senior developer, helping users debug, optimize, and understand their code better.

🏗️ Project Structure
The project is organized into two main directories:

/Frontend: A fast, responsive UI built with React and Vite.

/Backend: A Node.js server that handles the logic and secure API communication with Gemini.

🚀 Key Features
AI Code Analysis: Get instant reviews on code quality and logic.

Error Identification: Automatically spots bugs and suggests fixes.

Refactoring Suggestions: Advice on making code cleaner and more efficient.

Modern UI/UX: High-performance frontend powered by Vite.

🛠️ Tech Stack
Frontend: React, Vite, ESLint

Backend: Node.js, Express.js

AI Integration: Google Gemini API

Deployment: Render

📦 Local Setup
Clone the repository:

Bash
git clone https://github.com/AVRADEEP07/coding-gene.git
cd coding-gene
Backend Configuration:

Bash
cd Backend
npm install
# Create a .env file and add your GEMINI_API_KEY
npm start
Frontend Configuration:

Bash
cd ../Frontend
npm install
npm run dev
📝 Environment Variables
To run the project, ensure your Backend/.env file contains:

GEMINI_API_KEY: Your Google AI API key.

PORT: The server port (e.g., 5000).

🌐 Live Demo
[View Live on Render](https://coding-gene-frontend.onrender.com)
