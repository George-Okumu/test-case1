import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import SelectLocation from "./SelectLocation";
import FileUploader from "./FileUpload";

const ManageByJagedo = () => (
    <form className="mx-auto bg-white md:px-8 px-4 py-4 md:py-8 rounded-lg shadow-lg space-y-6 border border-gray-200">
        {/* Title */}
        <h2 className="text-2xl font-bold text-[rgb(0,0,122)] text-center font-['Roboto Serif',serif]">Place a request</h2>

        {/* Two-column form layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
                {/* Skill */}
                <div>
                    <label htmlFor="skill" className="block text-gray-800 font-semibold mb-1">Skill:</label>
                    <select
                        id="skill"
                        name="skill"
                        className="w-full px-4 py-2 border border-black rounded-md text-gray-700 focus:ring-2 focus:ring-[rgb(0,0,122)]"
                    >
                        <option className="text-gray-500" value="">Select Skill</option>
                        <option value="mason">Mason</option>
                        <option value="plumber">Plumber</option>
                        <option value="painter">Painter</option>
                        <option value="electrician">Electrician</option>
                    </select>
                </div>
                {/* Location */}
                <SelectLocation />

                {/* Date */}
                <div>
                    <label htmlFor="date" className="block text-gray-800 font-semibold mb-1">Start Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        className="w-full px-4 py-2 border border-black rounded-md focus:ring-2 focus:ring-[rgb(0,0,122)]"
                    />
                </div>

                <div>
                <label htmlFor="description" className="block text-gray-800 font-semibold mb-1">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    rows={3}
                    className="w-full px-4 py-2 border border-black rounded-md focus:ring-2 focus:ring-[rgb(0,0,122)]"
                    placeholder="Describe your request..."
                />
                </div>
            </div>

            {/* Right Column (Description) */}
            <div>
                <FileUploader />
            </div>
        </div>

        {/* Package Section */}
        <section className="p-0 md:p-6">
            <h1 className="text-3xl font-semibold text-[rgb(0,0,122)] text-center">Managed By:</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-[rgb(0,0,122)] text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition">
                    <h2 className="text-4xl font-bold mb-4">JaGedo</h2>
                    <h1 className="text-5xl font-extrabold">Ksh 3,000</h1>
                    <p className="text-lg">Linkage Fee</p>
                    <ul className="space-y-3 mt-4">
                        <li className="flex items-center">
                            <TiTick className="text-green-300 mr-2 text-xl" />
                            Fee includes 1-day labor charges & transport (within 15KM from county town).
                        </li>
                        <li className="flex items-center">
                            <TiTick className="text-green-300 mr-2 text-xl" />
                            Response time within 24 hours.
                        </li>
                        <li className="flex items-center">
                            <TiTick className="text-green-300 mr-2 text-xl" />
                            Fee excludes material charges.
                        </li>
                    </ul>
                </div>

                <div className="bg-blue-100 text-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
                    <h2 className="text-4xl font-bold mb-4">Self</h2>
                    <h1 className="text-5xl font-extrabold text-[rgb(0,0,122)]">Ksh 1,000</h1>
                    <p className="text-lg">Linkage Fee</p>
                    <ul className="space-y-3 mt-4">
                        <li className="flex items-center">
                            <TiTick className="text-green-500 mr-2 text-xl" />
                            Fee excludes labor, transport, and materials.
                        </li>
                        <li className="flex items-center">
                            <TiTick className="text-green-500 mr-2 text-xl" />
                            Response time within 3 days.
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Agreement Checkbox */}
        <div className="flex justify-center my-2.5">
            <div className="flex">
                <input type="checkbox" />
                <span className="ml-2 underline font-semibold hover:text-[rgb(0,0,122)]">I agree to Fundi Agreement</span>
            </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-4">
            <Link to="customer/fundi-requisition-invoice">
            <button type="button" className="px-6 py-2 bg-[rgb(0,0,122)] text-white font-semibold rounded-md hover:bg-blue-900 transition">
                Submit Request
            </button>
            </Link>
            
        </div>
    </form>
);

export default ManageByJagedo;
