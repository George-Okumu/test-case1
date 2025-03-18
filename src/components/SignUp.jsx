import { useState } from "react";
// import { FaGlobeAmericas } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Select from "react-select";
import { Flag } from "react-world-flags";



const countries = [
  { code: "US", label: "United States" },
  { code: "KE", label: "Kenya" },
  { code: "UG", label: "Uganda" },
  { code: "TZ", label: "Tanzania" },
  { code: "NG", label: "Nigeria" },
  { code: "ZA", label: "South Africa" },
];

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState("");
  const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  const [otpMethod, setOtpMethod] = useState("");
  const [otp, setOtp] = useState("");
  const [location, setLocation] = useState(countries.find(country => country.code === 'KE'));
  // const [isOpen, setIsOpen] = useState(false);

 


  const handleCountryChange = (selectedOption) => {
    setLocation(selectedOption); 
  };




  const nextStep = () => {
    if (step === 2 && !email) {
      alert("Please enter your email before proceeding.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

 

  return (
<div className="flex flex-col items-center justify-center h-screen p-6 bg-gray-100 font-roboto">
  <div className="bg-white p-10 rounded-xl shadow-2xl w-[90%] max-w-md min-h-[500px] flex flex-col items-center relative">

    {/* Flag Dropdown at the top left (Only for step 1) */}
    {step === 1 && (
      <div className="absolute top-4 left-4 z-10">
        <Select
          value={location}
          onChange={handleCountryChange}
          options={countries}
          defaultValue={countries.find(country => country.code === "KE")}  
          getOptionLabel={(e) => (
            <div className="flex items-center space-x-2">
              <Flag code={e.code} style={{ width: 24, height: 16 }} />
            </div>
          )}
          className="w-24"
          placeholder={null}  
          styles={{
            control: (provided) => ({
              ...provided,
              backgroundColor: 'white',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              padding: '2px', 
              minHeight: '40px', 
            }),
            menu: (provided) => ({
              ...provided,
              backgroundColor: 'rgb(229, 231, 235)',
              borderRadius: '8px',
            }),
            option: (provided, state) => {
              let backgroundColor = 'transparent';
            
              if (state.isSelected || state.isFocused) {
                backgroundColor = 'rgb(169, 169, 169)';
              }
            
              return {
                ...provided,
                color: state.isSelected || state.isFocused ? 'white' : 'black',
                backgroundColor,
              };
            },
            
            singleValue: (provided) => ({
              ...provided,
              display: 'flex',
              alignItems: 'center',
            }),
          }}
        />
      </div>
    )}

    {/* Logo on the right side in step 1 */}
    {step === 1 && (
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10 mt-10">
            <img
              src="https://uat.jagedo.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJapageologo.d832cf02.png&w=3840&q=75"
              alt="Logo"
              className="w-[350px] h-auto pr-7 pl-7" 
            />
          </div>
        )}

    {/* Logo centered at the top in subsequent steps */}
    {step !== 1 && (
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
        <img 
          src="https://uat.jagedo.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJapageologo.d832cf02.png&w=3840&q=75" 
          alt="Logo" 
          className="w-[450px] h-auto"  
        />
      </div>
    )}

    <div className="mt-30 w-full"> 
      {step === 1 && (
        <div className="text-center w-full">
          <h2 className="text-3xl font-semibold mb-6">Select Account Type</h2>

          <div className="w-full mb-6">
  <div className="flex justify-between gap-4">
    <button
    type="button"
      className={`py-2 px-6 w-1/2 text-white rounded-lg transition ${
        accountType === "Individual" ? "bg-[rgb(0,0,122)]" : "bg-[rgb(0,0,122)] opacity-75"
      }`}
      onClick={() => setAccountType("Individual")}
    >
      Individual
    </button>
    <button
    type="button"
      className={`py-2 px-6 w-1/2 text-white rounded-lg transition ${
        accountType === "Organization" ? "bg-blue-900" : "bg-[rgb(0,0,122)] opacity-75"
      }`}
      onClick={() => setAccountType("Organization")}
    >
      Organization
    </button>
  </div>

  {/* Explanatory Text */}
  <div className="mt-4 text-gray-700 text-sm">
    {accountType === "Individual" && (
      <p className="p-3 bg-gray-100 rounded-lg">
        These are <span className="font-medium">Individuals</span> seeking construction services for personal projects e.g home renovations, repairs or new construction
      </p>
    )}
    {accountType === "Organization" && (
      <p className="p-3 bg-gray-100 rounded-lg">
        Register as a <span className="font-medium"> group,business, corporation or institution</span> 
      </p>
    )}
  </div>
</div>

<div className="flex justify-between w-full max-w-sm mt-6">
            <button  type="button"  onClick={prevStep} className="flex items-center bg-[rgb(0,0,122)] text-white py-2 px-4 rounded-lg cursor-not-allowed">
              <span className="mr-2">←</span> Back
            </button>
            <button type="button" onClick={nextStep} className="flex items-center bg-[rgb(0,0,122)] text-white py-2 px-4 rounded-lg hover:opacity-90">
              Next <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      )}
      </div>
      {step === 2 && (
        <div className="flex flex-col items-center w-full text-center">
          <h2 className="text-2xl font-bold mb-6 text-[rgb(0,0,122)] mt-02">Enter Your Email</h2>
          <input
            type="email"
            placeholder="Email address"
            className="border border-gray-300 rounded px-4 py-2 mb-4 w-80 font-roboto"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="button" className="w-80 flex items-center justify-center bg-[rgb(0,0,122)] text-white py-2 rounded-lg hover:opacity-90 transition">
            Continue
          </button>
          <p className="my-2">or</p>
          <button type="button" className="w-80 flex items-center justify-center bg-white border border-gray-300 text-black py-2 rounded-lg">
            <FcGoogle className="mr-2" size={20} /> Continue with Google
          </button>

          <p className="text-sm text-center mt-4 text-gray-600">
            By proceeding, you consent to receive calls, WhatsApp, or SMS messages, including automated means, from JaGedo and its affiliates to the provided number.
          </p>

          <div className="flex justify-between w-full max-w-sm mt-6">
  <button
  type="button"
    onClick={prevStep}
    disabled={step === 1} // Disable if on the first step
    className={`flex items-center py-2 px-4 rounded-lg hover:opacity-90 ${
      step === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-[rgb(0,0,122)] text-white"
    }`}
  >
    <span className="mr-2">←</span> Back
  </button>
  <button
  type="button"
    onClick={nextStep}
    className="flex items-center bg-[rgb(0,0,122)] text-white py-2 px-4 rounded-lg hover:opacity-90"
  >
    Next <span className="ml-2">→</span>
  </button>
</div>

        </div>
      )}
   
      
{step === 3 && (
  <div className="text-center w-full max-w-md p-6 bg-white rounded-lg shadow-md">
  {/* Title */}
  <h2 className="text-2xl font-semibold mb-6 text-[rgb(0,0,122)]">
    Choose OTP Delivery Method
  </h2>

  {/* OTP Method Selection */}
  <div className="flex flex-col gap-4 mb-6">
    <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition duration-300">
      <input
        type="radio"
        name="otpMethod"
        value="Email"
        checked={otpMethod === "Email"}
        onChange={() => setOtpMethod("Email")}
        className="accent-[rgb(0,0,122)]"
      />
      <span className="text-gray-700 font-medium">Email</span>
    </label>

    <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition duration-300">
      <input
        type="radio"
        name="otpMethod"
        value="Phone"
        checked={otpMethod === "Phone"}
        onChange={() => setOtpMethod("Phone")}
        className="accent-[rgb(0,0,122)]"
      />
      <span className="text-gray-700 font-medium">Phone</span>
    </label>
  </div>

  {/* Send OTP Button */}
  <button
  type="button"
    onClick={nextStep}
    className="py-3 px-6 bg-[rgb(0,0,122)] text-white rounded-lg w-full hover:bg-[rgb(0,0,180)] transition duration-300"
  >
    Send OTP
  </button>

</div>
        
              )}
{/* Step 4: Enter OTP */}
{step === 4 && (
  <div className="text-center w-full mb-0">
  <h2 className="text-2xl font-semibold mb-4">Enter OTP</h2>
  <input
    type="text"
    placeholder="Enter OTP"
    className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-[#D3D3D3]"
    value={otp}
    onChange={(e) => setOtp(e.target.value)}
  />
  <button
  type="button"
    onClick={() => setStep(5)} 
    className="mt-2 p-3 bg-[rgb(0,0,122)] text-white rounded-lg hover:bg-[#B0B0B0] transition w-full"
  >
    Verify
  </button>
  {/* Resend OTP Button */}
  <button
  type="button"
    onClick={nextStep}
    className="py-3 px-6 bg-[rgb(0,0,122)] text-white rounded-lg w-full hover:bg-[rgb(0,0,180)] transition duration-300 mt-4"
  >
    Resend OTP
  </button>
</div>

)}
{/* Step 5: Enter Details as Individual */}
{step === 5 && (
  <div className="p-6 border rounded-lg shadow-md bg-white">
    <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
    <div className="grid grid-cols-2 gap-4">
      <input type="text" placeholder="First Name" className="border p-2 rounded" />
      <input type="text" placeholder="Last Name" className="border p-2 rounded" />
      <input type="text" placeholder="Nationality" className="border p-2 rounded" />
      <input type="text" placeholder="Date of Birth" className="border p-2 rounded" />
      <div className="relative w-full">
  <select className="border border-gray-300 p-3 pr-10 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[rgb(0,0,122)] appearance-none">
    <option>ID Type</option>
    <option>National ID</option>
    <option>Passport</option>
  </select>
  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
    ▼
  </span>
</div>

       
      <input type="text" placeholder="" className="border p-2 rounded" />
    </div>
    <div className="flex justify-between w-full max-w-sm mt-6">
            <button type="button" onClick={prevStep} className="flex items-center bg-[rgb(0,0,122)] text-white py-2 px-4 rounded-lg hover:opacity-90">
              <span className="mr-2">←</span> Back
            </button>
            <button type="button" onClick={nextStep} className="flex items-center bg-[rgb(0,0,122)] text-white py-2 px-4 rounded-lg hover:opacity-90">
              Next <span className="ml-2">→</span>
            </button>
          </div>
  </div>
)}
{/* Step 6: Organization Details */}
{step === 6 && (
  <div className="p-6 border rounded-lg shadow-lg bg-white w-full max-w-lg mx-auto">
    <h3 className="text-2xl font-semibold text-[rgb(0,0,122)] mb-4 text-center">
      Organizational Information
    </h3>

    <div className="grid grid-cols-1 gap-4 mb-6 ">
      <input 
        type="text" 
        placeholder="Organization" 
        className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <h3 className="text-xl font-semibold text-[rgb(0,0,122)] mb-4">
      Contact Person Details
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <input 
        type="text" 
        placeholder="First Name" 
        className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input 
        type="text" 
        placeholder="Last Name" 
        className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div className="flex justify-between w-full max-w-sm mt-6">
      <button type="button" onClick={() => setStep(5)} className="flex items-center bg-[rgb(0,0,122)] text-white py-2 px-4 rounded-lg hover:opacity-90">
        <span className="mr-2">←</span> Back
      </button>
      <button type="button" onClick={() => setStep(7)} className="flex items-center bg-[rgb(0,0,122)] text-white py-2 px-4 rounded-lg hover:opacity-90">
        Next <span className="ml-2">→</span>
      </button>
    </div>
  </div>
)}

{/* Step 7: Location Details */}
{step === 7 && (
  <div className="font-roboto bg-white  rounded-2xl shadow-lg w-full max-w-lg mx-auto">
    {/* Section Title */}
    <h3 className="text-2xl font-semibold text-[rgb(0,0,122)] mb-6 text-center">
      Location
    </h3>

    {/* Country Selection */}
    <div className="flex items-center gap-3 mb-6">
  <div className="relative">
    <select
      className="border border-gray-300 p-3 pr-10 rounded-lg w-20 focus:outline-none focus:ring-2 focus:ring-[rgb(0,0,122)] appearance-none"
      onChange={(e) => {
        const flagToCountry = {
          "🇰🇪": "Kenya",
          "🇺🇸": "United States",
          "🇬🇧": "United Kingdom",
          "🇮🇳": "India",
        };
        document.getElementById("countryInput").placeholder =
          flagToCountry[e.target.value];
      }}
    >
      <option value="🇰🇪">🇰🇪</option>
      <option value="🇺🇸">🇺🇸</option>
      <option value="🇬🇧">🇬🇧</option>
      <option value="🇮🇳">🇮🇳</option>
    </select>
    <span className="absolute right-3 top-3 text-gray-500">▼</span>
  </div>
  <input
    id="countryInput"
    type="text"
    placeholder="Kenya"
    className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[rgb(0,0,122)]"
  />
</div>

    <input 
      type="text" 
      placeholder="State/County/Province" 
      className="border p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input 
      type="text" 
      placeholder="County/Subcounty/Wards" 
      className="border p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input 
      type="text" 
      placeholder="Town/Estate/Village" 
      className="border p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <div className="flex justify-between w-full max-w-sm mt-6">
      <button type="button" onClick={() => setStep(6)} className="flex items-center bg-[rgb(0,0,122)] text-white py-2 px-4 rounded-lg hover:opacity-90">
        <span className="mr-2">←</span> Back
      </button>
      <button type="button" onClick={() => setStep(8)} className="flex items-center bg-[rgb(0,0,122)] text-white py-2 px-4 rounded-lg hover:opacity-90">
        Next <span className="ml-2">→</span>
      </button>
    </div>
  </div>
)}

{/* Step 8: Password Confirmation */}
{step === 8 && (
  <div className="text-center w-full">
    <h2 className="text-2xl font-semibold mb-4">Security</h2>

    <p className="text-lg font-medium mb-2">Password and Verification</p>
    <input
      type="password"
      placeholder="Enter Password"
      className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-[#D3D3D3]"
    />

    <p className="text-lg font-medium mt-4 mb-2">Confirm Password</p>
    <input
      type="password"
      placeholder="Confirm Password"
      className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-[#D3D3D3]"
    />

    {/* Terms and Conditions Checkbox */}
    <div className="flex items-start gap-3 mt-4 text-left">
  <input type="checkbox" className="w-5 h-5 accent-[rgb(0,0,122)] cursor-pointer mt-1" />
  <p className="text-lg leading-relaxed text-gray-700">
  I agree to the  
  <a href="#" className="text-[rgb(0,0,122)] font-medium underline mx-1">
    Terms and Conditions
  </a> 
  and the  
  <a href="#" className="text-[rgb(0,0,122)] font-medium underline mx-1">
    Data Privacy and Confidentiality Policy
  </a>.
</p>

</div>

    <button
    type="button"
      className="mt-4 p-3 w-full bg-[rgb(0,0,122)] text-white rounded-lg hover:bg-[#B0B0B0] transition"
    >
      Sign Up
    </button>
  </div>
)}


      </div>
    </div>
  );
};

export default SignUp;





      
      