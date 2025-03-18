import { useState } from "react";
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa6";

import customerImg from "../assets/customer.jpeg";  
import fundiImg from "../assets/fundi.jpeg";
import professionalImg from "../assets/professional.jpeg";
import contractorImg from "../assets/contractor.jpeg";
import hardwareImg from '../assets/hardware.jpeg';
import SteveImg from '../assets/steve.jpeg';
import JamesImg from '../assets/james.jpeg';
import IvoneImg from '../assets/Ivone.jpeg';
import VivianImg from '../assets/vivian.jpeg';
import micaImg from '../assets/mica.jpeg';
// import { FaTools, FaUserTie, FaHardHat } from "react-icons/fa";


const categories = [
  { name: "Customer", img: customerImg, steps: "1. Sign up as a customer.\n2. Browse available services.\n3. Request a service.", benefits: "✔ Access trusted builders\n✔ Convenient service booking\n✔ Secure payments" },
  { name: "Fundi", img: fundiImg, steps: "1. Create a fundi account.\n2. Showcase your skills.\n3. Receive job requests.", benefits: "✔ Get hired easily\n✔ Showcase your skills\n✔ Increase your earnings" },
  { name: "Professional", img: professionalImg, steps: "1. Register as a professional.\n2. Verify your qualifications.\n3. Connect with clients.", benefits: "✔ Verified professionals\n✔ High-paying projects\n✔ Expand your client base" },
  { name: "Contractor", img: contractorImg, steps: "1. Sign up as a contractor.\n2. Manage projects.\n3. Hire fundis and professionals.", benefits: "✔ Manage multiple projects\n✔ Hire skilled labor\n✔ Expand your network" },
  { name: "Hardware", img: hardwareImg, steps: "1. Register your hardware store.\n2. List your products.\n3. Connect with builders.", benefits: "✔ Increase sales\n✔ Reach more customers\n✔ Simplified inventory management" },
];


const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Customer");
  const [image, setImage] = useState(micaImg);
  const [steps, setSteps] = useState("1. Sign up .\n2. BRequest.\n3. Escrow payment. \n4. Job Execution Tracking. \n5. Complete and Review" );
const [benefits, setBenefits] = useState(
  "✔ Access to verified professionals: Customers get access to vetted and licensed fundis, contractors, and professionals ensuring quality services.\n" +
  "✔ One-Stop Construction Solution: The platform integrates all construction services from design to execution, making it convenient for customers.\n" +
  "✔ Secure Payments: JaGedo ensures secure transactions with milestone payments that protect both the customer and the contractor.\n" +
  "✔ Quality Assurance & Reviews: Customers can review contractors based on past work and performance ensuring accountability.\n" +
  "✔ Project Tracking & Collaboration: The platform provides features for monitoring project progress, communicating with contractors, and approving milestones."
);


 
  const handleCategoryClick = (category) => {
    setSelectedCategory(category.name);
    setBenefits(category.benefits); 
  
    switch (category.name) {
      case "Customer":
        setImage(micaImg);
        setSteps("1. Sign up .\n2. BRequest.\n3. Escrow payment. \n4. Job Execution Tracking. \n5. Complete and Review");
        setBenefits("✔Access to verified professionals: Customers get to access to vetted and licensed fundis, contractors and professionals ensuring quality services.\n✔ One-Stop Construction Solution- The platform integrates all consturction services from designs to execution making it convenient for customers.\n✔ Secure Payments- JaGedo ensures secure transactions with milestone payments that protect both the customer and the contractor.\n✔ Quality Assurance & Reviews- Customers can review contractors based on past work and performance ensuring acciuntability.\n✔ Project Tracking & Collaboration- The platform provides features for monitoring project progress, communicating with contractors and approving milestones.");
        break;
      case "Fundi":
        setImage(JamesImg);
        setSteps("1. Sign up & Set Profile.\n2. Receive Requests .\n3. Bid and win. \n4. Job Execution Updates \n5. Get Paid and Reviewed");
        setBenefits("✔Increased Job Opportunities-Fundis gain access to a steady flow of construction jobs from various customers.\n✔ Fair & Transprent Compensation- A structured payment system ensures fair earnings and timely disbursements.\n✔ Skill Development & apprenticeship- Builders can upskill through JaGedo's in-app apprenticeship program, improving their competitiveness.\n✔ Collaborative Work Environment- The Platform enables teamwork and networking with other professionals, leading to better project execution.\n✔ Guaranteed Payments- The structured milestone-based payment system minimizes the risk of non-payment and disputes.");        break;
      case "Professional":
        setImage(IvoneImg);
        setSteps("1. Sign up & Set Profile.\n2. Receive Requests .\n3. Bid and win. \n4. Job Execution Updates \n5. Get Paid and Reviewed");
        setBenefits("✔Increased Job Opportunities-Professionals gain access to a steady flow of construction jobs from various customers.\n✔ Fair & Transprent Compensation- A structured payment system ensures fair earnings and timely disbursements.\n✔ Skill Development & apprenticeship- Builders can upskill through JaGedo's in-app apprenticeship program, improving their competitiveness.\n✔ Collaborative Work Environment- The Platform enables teamwork and networking with other professionals, leading to better project execution.\n✔ Guaranteed Payments- The structured milestone-based payment system minimizes the risk of non-payment and disputes.");        break;
        case "Contractor":
          setImage(SteveImg);
          setSteps("1. Sign up & Set Profile.\n2. Receive Requests .\n3. Bid and win. \n4. Job Execution Updates \n5. Get Paid and Reviewed");
          setBenefits("✔Increased Job Opportunities-Contractor gain access to a steady flow of construction jobs from various customers.\n✔ Fair & Transprent Compensation- A structured payment system ensures fair earnings and timely disbursements.\n✔ Skill Development & apprenticeship- Builders can upskill through JaGedo's in-app apprenticeship program, improving their competitiveness.\n✔ Collaborative Work Environment- The Platform enables teamwork and networking with other professionals, leading to better project execution.\n✔ Guaranteed Payments- The structured milestone-based payment system minimizes the risk of non-payment and disputes.");        break;
      case "Hardware":
        setImage(VivianImg);
        setSteps("1. Sign up & Set Profile.\n2. Receive Requests .\n3. Bid and win. \n4. Job Execution Updates \n5. Get Paid and Reviewed");
        setBenefits("✔Increased Job Opportunities-Hardwares gain access to a steady flow of construction jobs from various customers.\n✔ Fair & Transprent Compensation- A structured payment system ensures fair earnings and timely disbursements.\n✔ Skill Development & apprenticeship- Builders can upskill through JaGedo's in-app apprenticeship program, improving their competitiveness.\n✔ Collaborative Work Environment- The Platform enables teamwork and networking with other professionals, leading to better project execution.\n✔ Guaranteed Payments- The structured milestone-based payment system minimizes the risk of non-payment and disputes.");        break;
      default:
        setImage(null);
        setSteps("");
        setBenefits("");
    }
  };
  
  return (
    <div className="bg-white text-black font-sans min-h-screen flex flex-col roboto">
      {/* Header Section */}
      <div className="flex justify-between items-center py-4 px-6 md:px-12 lg:px-20">
        <img src="https://uat.jagedo.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJapageologo.d832cf02.png&w=3840&q=75" alt="Logo" className="w-40 md:w-64 lg:w-80 h-auto" />
        <div className="md:hidden">
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <div className="md:flex gap-4 hidden">
        <button type="button" className="bg-[rgb(0,0,122)] text-white min-h-[48px] py-2 px-6 rounded-full shadow-md transition hover:bg-[#FFD700] hover:text-black flex items-center justify-center">
            Login
          </button>
          <button type="button" className="bg-[rgb(0,0,122)] text-white py-3 px-6 rounded-full shadow-md transition hover:bg-[#FFD700] hover:text-black">
            Sign Up
          </button>
          {/* <button className="bg-[rgb(0,0,122)] text-white py-3 px-6 rounded-full shadow-md transition hover:bg-[#FFD700] hover:text-black">
            SHOPAPP
          </button> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center gap-3 py-4 bg-white shadow-md md:hidden">
          <button type="button" className="bg-[rgb(0,0,122)] text-white py-3 px-6 rounded-full shadow-md transition hover:bg-[#FFD700] hover:text-black">
            Login
          </button>
          <button type="button" className="bg-[rgb(0,0,122)] text-white py-3 px-6 rounded-full shadow-md transition hover:bg-[#FFD700] hover:text-black">
            Sign Up
          </button>
          <button type="button" className="bg-[rgb(0,0,122)] text-white py-3 px-6 rounded-full shadow-md transition hover:bg-[#FFD700] hover:text-black">
            ShopApp
          </button>
        </div>
      )}

      {/* Hero Section */}
      <div className="flex-grow py-16 px-6 flex flex-col items-center justify-center text-center bg-gray-100">
  <div className="max-w-4xl">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
      A One-Stop Construction Platform
    </h1>
    <p className="text-lg sm:text-xl text-gray-700 mb-6">
      JaGedo  seamlessly  connects customers and builders to other builders: fundis, professionals, contractors, and hardware suppliers in your locality.
    </p>
    <button type="button" className="bg-blue-900 text-white py-3 px-8 rounded-full shadow-lg text-lg font-medium transition-all">
      Sign Up For Free
    </button>
  </div>
</div>

<div className="flex justify-center mt-12 bg-[rgb(0,0,122)] py-12">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 px-6 md:px-12">
    {[
      { name: "Customer", img: customerImg },
      { name: "Fundi", img: fundiImg },
      { name: "Professional", img: professionalImg },
      { name: "Contractor", img: contractorImg },
      { name: "Hardware", img: hardwareImg },
    ].map((item) => (
      <div
        key={item.name}
        className="bg-[rgb(0,0,122)] rounded-xl p-8 flex flex-col items-center w-40 sm:w-48 md:w-56 shadow-lg hover:shadow-xl transition-all"
      >
        <img
          src={item.img}
          alt={item.name}
          className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-white"
        />
        <p className="text-xl font-semibold text-white">{item.name}</p>
      </div>
    ))}
  </div>
</div>



{/* <p className="text-center text-xl font-semibold text-gray-800 mt-8 px-6">
  Jagedo connects customers to builders within the same locality.
</p> */}

       {/* How It Works Section */}
{/* How It Works Section */}
<div className="text-center py-12 px-6">
  <h2 className="text-2xl sm:text-3xl font-bold mb-4">How It Works</h2>
  <p className="text-gray-700 mt-2 text-base sm:text-lg px-2 sm:px-12 mb-6">
    Seamlessly connect with fundis, professionals, contractors, and hardware in just a few steps.
  </p>
  <div className="flex justify-center mt-4 gap-4">
    {categories.map((category) => (
      <button
      type="button"
        key={category.name}
        className="bg-blue-900 text-white py-2 px-6 rounded-full shadow-md transition "
        onClick={() => handleCategoryClick(category)}
      >
        {category.name}
      </button>
    ))}
  </div>
</div>

{/* Steps Section with Image, Steps, and Benefits */}
{selectedCategory && (
  <div className="flex flex-col md:flex-row items-center justify-center text-center mt-8 p-6 gap-6">
    
    {/* Category Image */}
    {image && (
      <div className="flex-shrink-0">
        <img src={image} alt={selectedCategory} className="w-48 h-48 object-cover rounded-lg shadow-lg" />
      </div>
    )}

    <div className="flex flex-col md:flex-row gap-6 w-full">
      {/* Steps to Sign Up Card */}
      <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md flex-1">
        <h3 className="text-xl font-bold mb-3 text-gray-800">How It Works</h3>
        <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">{steps}</p>
      </div>

      {/* Benefits Card */}
      <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md flex-1">
        <h3 className="text-xl font-bold mb-3 text-gray-800">Benefits</h3>
        <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">{benefits}</p>
      </div>
    </div>

  </div>
)}

  
       <footer className="mt-16 bg-[rgb(0,0,122)] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
        {/* About Us Section */}
        <div className="space-y-3">
          <h3 className="font-bold text-xl mb-3">About Us</h3>
          <p className="hover:text-[#FFD700] cursor-pointer transition duration-300">Susrecomm Enterprises</p>
          <p className="hover:text-[#FFD700] cursor-pointer transition duration-300">Helpdesk</p>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-3">
          <h3 className="font-bold text-xl mb-3">Quick Links</h3>
          <p className="hover:text-[#FFD700] cursor-pointer transition duration-300">Terms Of Service</p>
          <p className="hover:text-[#FFD700] cursor-pointer transition duration-300">
            Privacy and Data Protection Policy
          </p>
        </div>

        {/* Contacts Section */}
        <div className="space-y-3">
          <h3 className="font-bold text-xl mb-3">Contacts</h3>
          <p className="text-gray-300">+254 113 273 333</p>
          <p>
            <a href="mailto:info@jagedo.co.ke" className="text-[#FFD700] hover:underline transition duration-300">
              info@jagedo.co.ke
            </a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="space-y-3">
          <h3 className="font-bold text-xl mb-3">Follow Us</h3>
          <div className="flex justify-center sm:justify-start space-x-5 mt-4">
            {[
              { icon: FaFacebookF, color: "blue-900" },
              { icon: FaXTwitter, color: "blue-900" },
              { icon: FaLinkedinIn, color: "blue-900" },
              { icon: FaInstagram, color: "pink-900" },
              { icon: FaTiktok, color: "gray-900" },
            ].map(({ icon: Icon, color }, index) => (
              <a
                key={index}
                href="#"
                className={`text-xl p-3 bg-[rgb(0,0,122)] text-white rounded-full hover:bg-[#FFD700] hover:text-${color} transition duration-300 transform hover:scale-110 shadow-md`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-500 mt-12 pt-6 text-center text-sm text-gray-300">
        <p>&copy; 2025 JaGedo. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default LandingPage;
