import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Select from "react-select";

// const countries = [
//   { code: "US", label: "United States" },
//   { code: "KE", label: "Kenya" },
//   { code: "UG", label: "Uganda" },
//   { code: "TZ", label: "Tanzania" },
//   { code: "NG", label: "Nigeria" },
//   { code: "ZA", label: "South Africa" },
// ];

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: "8px",
    minHeight: "40px",
    marginLeft: "-35px",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "rgb(229, 231, 235)",
    borderRadius: "8px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "rgb(169, 169, 169)" : "transparent",
    color: state.isSelected ? "white" : "black",
  }),
};

const Professional = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpMethod, setOtpMethod] = useState("");
  // const [location, setLocation] = useState(countries.find((country) => country.code === "KE"));
  const [dob, setDob] = useState("");
  const [countryCode, setCountryCode] = useState("+254");

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

  const handleDobChange = (e) => {
    let value = e.target.value.replace(/[^0-9/]/g, ""); // Allow only numbers and "/"
    
    if (value.length === 2 && !value.includes("/")) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    } else if (value.length === 5 && value[4] !== "/") {
      value = `${value.slice(0, 5)}/${value.slice(5)}`;
    }

    if (value.length > 10) {
      return;
    }

    setDob(value);
  };
    return(
<div className="flex flex-col items-center justify-center h-screen p-6 bg-gray-100 font-roboto">
<div className="bg-white p-10 rounded-xl shadow-2xl w-[90%] max-w-md min-h-[500px] flex flex-col items-center relative">
      
      {/* Flag Dropdown at the top left (Only for step 1) */}
      {step === 1 && (
  <Select
    options={[
      { code: "US", label: "United States" },
      { code: "KE", label: "Kenya" },
      { code: "UG", label: "Uganda" },
      { code: "TZ", label: "Tanzania" },
      { code: "NG", label: "Nigeria" },
      { code: "ZA", label: "South Africa" },
    ]}
    getOptionLabel={(e) => (
      <div className="flex items-center">
        <span>{e.label}</span>
      </div>
    )}
    styles={customStyles}
  />
)}

    {step !== 1 && (
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
        <img 
          src="https://uat.jagedo.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJapageologo.d832cf02.png&w=3840&q=75" 
          alt="Logo" 
          className="w-[450px] h-auto"  
        />
      </div>
    )}
{step === 1 && (
  <>
    <h2 className="text-2xl m-4 font-bold mb-6 text-gray-800 mt-6">
      Select Profession
    </h2>



    <Select
            options={[
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
            ]}
            styles={customStyles}
            aria-label="Select a profession"
          />


    <div className="pl-11 flex gap-x-6 w-full max-w-sm mt-6">
      <button 
        type="button" 
        onClick={prevStep} 
        className={`flex items-center bg-[rgb(0,0,122)] text-white py-2 px-4 rounded-lg ${
          step === 1 ? "cursor-not-allowed opacity-50" : "hover:opacity-90"
        }`}
        disabled={step === 1}
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
  </>
)}

        {step === 2 && (
         <div className="flex flex-col items-center m-20 w-full text-center p-6 bg-white rounded-lg shadow-md max-w-md">
         {/* Title */}
         <h2 className="text-2xl font-bold mb-4 text-[rgb(0,0,122)]">Enter Your Email</h2>
        
         {/* Email Input */}
         <input
           type="email"
           placeholder="Email address"
           className="border border-gray-300 rounded-lg px-4 py-3 mb-4 w-80 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[rgb(0,0,122)] font-roboto"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
         />
        
         {/* Continue Button */}
         <button type="button" className="w-80 flex items-center justify-center bg-[rgb(0,0,122)] text-white py-3 rounded-lg font-medium hover:bg-[rgb(0,0,180)] transition">
           Continue
         </button>
        
         {/* OR Separator */}
         <div className="flex items-center w-full my-4">
           <div className="border-t border-gray-300 flex-grow"/>
           <span className="mx-3 text-gray-500">or</span>
           <div className="border-t border-gray-300 flex-grow"/>
         </div>
        
         {/* Google Sign-in Button */}
         <button type="button" className="w-80 flex items-center justify-center bg-white border border-gray-300 text-black py-3 rounded-lg font-medium hover:bg-gray-100 transition">
           <FcGoogle className="mr-2" size={22} /> Continue with Google
         </button>
        
         {/* Terms & Conditions */}
         <p className="text-sm text-gray-600 mt-4 px-4">
           By proceeding, you consent to receive calls, WhatsApp, or SMS messages, including automated means, from JaGeDo and its affiliates to the provided number.
         </p>
        
         {/* Navigation Buttons */}
         <div className="flex justify-between w-full max-w-sm mt-6">
           <button
           type="button"
             onClick={prevStep}
             className="flex items-center bg-[rgb(0,0,122)] text-white py-2 px-5 rounded-lg hover:bg-[rgb(0,0,180)] transition"
           >
             <span className="mr-2">←</span> Back
           </button>
           <button
           type="button"
             onClick={nextStep}
             className="flex items-center bg-[rgb(0,0,122)] text-white py-2 px-5 rounded-lg hover:bg-[rgb(0,0,180)] transition"
           >
             Next <span className="ml-2">→</span>
           </button>
         </div>
        </div>
        
              )}
        
        {step === 3 && (
  <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg mx-auto mt-12">
    {/* Title */}
    <h2 className="text-2xl font-semibold text-[rgb(0,0,122)] text-center mb-6">
      Enter Your Phone Number
    </h2>

    {/* Phone Input Section */}
    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-[rgb(0,0,122)]">
      {/* Country Code Dropdown */}
      <select
        className="p-3 bg-gray-100 text-gray-700 border-r outline-none focus:bg-gray-200 pr-1 pl-1"
        value={countryCode} // Controlled value for default selection
        onChange={(e) => setCountryCode(e.target.value)}
      >
        <option value="+254">🇰🇪 +254</option> {/* Default */}
        <option value="+1">🇺🇸 +1</option>
        <option value="+44">🇬🇧 +44</option>
      </select>

      {/* Phone Number Input */}
      <input
        type="tel"
        placeholder="Phone number"
        className="p-3 w-full outline-none focus:ring-0"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </div>

    {/* Navigation Buttons */}
    <div className="flex justify-between w-full max-w-sm mt-6">
           <button
           type="button"
             onClick={prevStep}
             className="flex items-center bg-[rgb(0,0,122)] text-white py-2 px-5 rounded-lg hover:bg-[rgb(0,0,180)] transition"
           >
             <span className="mr-2">←</span> Back
           </button>
           <button
           type="button"
             onClick={nextStep}
             className="flex items-center bg-[rgb(0,0,122)] text-white py-2 px-5 rounded-lg hover:bg-[rgb(0,0,180)] transition"
           >
             Next <span className="ml-2">→</span>
           </button>
         </div>
  </div>
)}

        
              {step === 4 && (
                <div className="text-center m-20 w-full max-w-md p-6 bg-white rounded-lg shadow-md">
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
        
              {step === 5 && (
                <div className="text-center m-20 w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                {/* Title */}
                <h2 className="text-2xl font-semibold mb-6 text-[rgb(0,0,122)]">
                  Enter OTP
                </h2>
              
                {/* OTP Input */}
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="border border-gray-300 p-3 w-full rounded-lg text-center text-lg tracking-widest focus:ring-2 focus:ring-[rgb(0,0,122)] focus:outline-none"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                />
              
                {/* Verify Button */}
                <button
                type="button"
                  onClick={nextStep}
                  className="mt-6 py-3 px-6 bg-[rgb(0,0,122)] text-white rounded-lg w-full hover:bg-[rgb(0,0,180)] transition"
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
        
        {step === 6 && (
  <div className="font-roboto mt-12 p-8 bg-white rounded-2xl shadow-lg w-full max-w-lg mx-auto">
    {/* Section Title */}
    <h3 className="text-2xl font-semibold text-[rgb(0,0,122)] mb-6 text-center">
      Personal Information
    </h3>

    {/* First & Last Name Inputs */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <input
        type="text"
        placeholder="First Name"
        className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[rgb(0,0,122)]"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[rgb(0,0,122)]"
      />
    </div>

    {/* ID Type & ID Number */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="relative">
        <select className="border border-gray-300 p-3 pr-10 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[rgb(0,0,122)] appearance-none">
          <option>ID Type</option>
          <option>National ID</option>
          <option>Passport</option>
          <option value="drivers_license">Driver&apos;s License</option>
        </select>
        <span className="absolute right-3 top-3 text-gray-500">
          ▼
        </span>
      </div>
      <input
        type="text"
        placeholder="ID Number"
        className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[rgb(0,0,122)]"
      />
    </div>

    {/* Date of Birth Input */}
    <input
      type="text"
      placeholder="Enter Date of Birth (DD/MM/YYYY)"
      className="border border-gray-300 p-3 rounded-lg w-full mb-6 focus:outline-none focus:ring-2 focus:ring-[rgb(0,0,122)]"
      value={dob}
      onChange={handleDobChange}
    />

    {/* Next Button */}
    <button
    type="button"
      onClick={() => setStep(7)}
      className="w-full p-3 bg-[rgb(0,0,122)] text-white rounded-lg hover:bg-[rgb(0,0,180)] transition"
    >
      Next
    </button>
  </div>
)}


{step === 7 && (
  <div className="font-roboto p-8 bg-white mt-10 rounded-2xl shadow-lg w-full max-w-lg mx-auto">
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


    {/* State / Province / County */}
    <input
      type="text"
      placeholder="State/Province/County"
      className="border border-gray-300 p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[rgb(0,0,122)]"
    />

    {/* Wards / Sub-County */}
    <input
      type="text"
      placeholder="County/Subcounty/wards"
      className="border border-gray-300 p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[rgb(0,0,122)]"
    />

    {/* Estate / Village */}
    <input
      type="text"
      placeholder="Towns/Estate/Village"
      className="border border-gray-300 p-3 rounded-lg w-full mb-6 focus:outline-none focus:ring-2 focus:ring-[rgb(0,0,122)]"
    />

    {/* Continue Button */}
    <button
    type="button"
      onClick={nextStep}
      className="w-full p-3 bg-[rgb(0,0,122)] text-white rounded-lg hover:bg-[rgb(0,0,180)] transition"
    >
      Continue
    </button>
  </div>
)}
              {step === 8 && (
          <div className="text-center m-25 w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-6 text-[rgb(0,0,122)]">
            Security
          </h2>
        
                  <div className="text-left">
            <label className="text-lg font-medium mb-2 block">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-[rgb(0,0,122)] focus:outline-none"
            />
          </div>
        
          <div className="text-left mt-4">
            <label className="text-lg font-medium mb-2 block">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-[rgb(0,0,122)] focus:outline-none"
            />
          </div>
        
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
        
          {/* Sign Up Button */}
          <button
          type="button"
            className="mt-6 py-3 px-6 w-full bg-[rgb(0,0,122)] text-white rounded-lg hover:bg-[rgb(0,0,180)] transition"
          >
            Sign Up
          </button>
        </div>
        
        )}

        </div>
        </div>
    )
}


export default Professional;