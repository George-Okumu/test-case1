import { FcGoogle } from "react-icons/fc";

// const countries = [
//   { code: "US", label: "United States" },
//   { code: "KE", label: "Kenya" },
//   { code: "UG", label: "Uganda" },
//   { code: "TZ", label: "Tanzania" },
//   { code: "NG", label: "Nigeria" },
//   { code: "ZA", label: "South Africa" },
// ];

export default function LoginScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <img
          src="https://uat.jagedo.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJapageologo.d832cf02.png&w=3840&q=75"
          alt="Logo"
          className="w-[200px] h-auto mx-auto mb-6"
        />
        <h1 className="text-2xl font-bold text-center text-gray-800">User Login</h1>
        <p className="text-center text-gray-600 mt-4">
          What is your phone number or email?
        </p>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Enter phone number or email"
          className="mt-4 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="text-center my-4 text-gray-600">Or</div>
        
        <div className="flex justify-center mt-4">
          <button
            type="button"
            className="w-80 flex items-center justify-center bg-white border border-gray-300 text-black py-2 rounded-lg shadow-md hover:bg-gray-100"
          >
            <FcGoogle className="mr-2" size={20} /> Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

