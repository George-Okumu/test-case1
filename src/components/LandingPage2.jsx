import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import logo from '../assets/Japageo logo-1.png';
import contractor from '../assets/contractor.jpeg';
import customer from '../assets/customer.jpeg';
import professional from '../assets/professional.jpeg';
import hardware from '../assets/hardware.jpeg';
import fundi from '../assets/fundi.jpeg';

const rolesData = {
  CUSTOMER: {
    image: customer,
    steps: "Step 1: Sign up\nStep 2: Browse professionals\nStep 3: Hire & manage projects",
  },
  FUNDI: {
    image: fundi,
    steps: "Step 1: Create a profile\nStep 2: Showcase skills\nStep 3: Get hired & earn",
  },
  PROFESSIONAL: {
    image: professional,
    steps: "Step 1: Register\nStep 2: Display expertise\nStep 3: Connect with clients",
  },
  CONTRACTOR: {
    image: contractor,
    steps: "Step 1: Sign up\nStep 2: Manage projects\nStep 3: Grow your business",
  },
  HARDWARE: {
    image: hardware,
    steps: "Step 1: List your products\nStep 2: Reach customers\nStep 3: Boost sales",
  },
};

const LandingPage2 = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md relative">
        <img src="https://uat.jagedo.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJapageologo.d832cf02.png&w=3840&q=75" alt="Logo" className="w-[750px] h-auto" />
        <div className="hidden md:flex space-x-4 ml-auto">
          {['LOGIN', 'SIGN UP', 'SHOPAPP'].map((text, index) => (
            <button
            type="button"
              key={index}
              className="bg-[rgb(30,58,138)] text-white py-2 px-4 rounded-lg shadow-md transition hover:bg-[#FFD700] hover:text-black"
            >
              {text}
            </button>
          ))}
        </div>
        <div 
  role="button"
  tabIndex={0}
  className="md:hidden" 
  onClick={() => setMenuOpen(!menuOpen)}
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      setMenuOpen(!menuOpen);
    }
  }}
>
  {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
</div>

        {menuOpen && (
          <div className="absolute top-16 right-0 w-48 bg-white shadow-md flex flex-col items-center space-y-2 p-4 md:hidden">
            {['LOGIN', 'SIGN UP', 'SHOPAPP'].map((text, index) => (
              <button
              type="button"
                key={index}
                className="bg-[rgb(30,58,138)] text-white py-2 px-4 rounded-lg shadow-md transition hover:bg-[#FFD700] hover:text-black w-full"
              >
                {text}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="text-center py-12 px-6">
        <h1 className="text-3xl font-bold">
          Join us today! Get special benefits and stay up-to-date.
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 max-w-4xl mx-auto">
          {Object.keys(rolesData).map((role, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={rolesData[role].image}
                alt={role}
                className="h-16 w-16 rounded-full object-cover"
              />
              <p className="font-semibold mt-2">{role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Signup Call-to-Action */}
      <div className="text-center bg-gray-200 py-8 px-6">
        <h2 className="text-xl font-bold">A One Stop Construction Platform</h2>
        <button type="button" className="mt-4 bg-[rgb(30,58,138)] text-white py-3 px-6 rounded-lg shadow-md transition hover:bg-[#FFD700] hover:text-black">
          Sign Up For Free
        </button>
      </div>

      {/* How It Works Section */}
      <div className="text-center bg-gray-200 py-10 px-6">
        <h2 className="text-xl font-bold">How It Works</h2>
        <p className="mt-2 max-w-3xl mx-auto">
          Seamlessly connect with fundis, professionals, contractors, and hardware in just a few steps.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {Object.keys(rolesData).map((role, index) => (
            <button
            type="button"
              key={index}
              onClick={() => setSelectedRole(role)}
              className={`py-2 px-4 rounded-lg shadow-md transition ${
                selectedRole === role
                  ? "bg-[#FFD700] text-black"
                  : "bg-[rgb(30,58,138)] text-white hover:bg-[#FFD700] hover:text-black"
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      
      {selectedRole && (
        <div className="flex flex-col items-center justify-center text-center mt-8 p-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-4xl">
            <img
              src={rolesData[selectedRole].image}
              alt={selectedRole}
              className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
            />
            <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md w-full max-w-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">{selectedRole} Steps</h3>
              <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
                {rolesData[selectedRole].steps}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* footer */}
      <footer className="mt-16 bg-[rgb(30,58,138)] text-white py-10 px-6 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-left text-sm">
          <div>
            <h3 className="font-bold">Susrecomm Platforms</h3>
            <p>Helpdesk</p>
          </div>
          <div>
            <h3 className="font-bold">Terms Of Service</h3>
            <p>Privacy and Data</p>
          </div>
          <div>
            <h3 className="font-bold">Contact</h3>
            <p>+254 113 273 333</p>
            <p>
              <a href="mailto:INFO@JAGEDO.CO.KE" className="text-blue-400 hover:underline">
                info@jagedo.co.ke
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-bold">SOCIAL MEDIA</h3>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage2;
