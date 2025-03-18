import { Avatar } from "@material-tailwind/react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

const CustomerProfile = () => (
  <div className="ml-80">
    <section className="w-full max-w-3xl p-6">
      <div className="bg-white rounded-xl  p-8">
        <h1 className="text-3xl font-bold  mb-6">Account Info</h1>

        <div className="flex flex-col items-start mb-8">
          {" "}
          {/* Changed to items-start */}
          <Avatar
            size="xl"
            alt="avatar"
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            className="shadow-xl shadow-[rgb(0,0,122)]/20 hover:scale-105 transition-transform duration-300 h-20 rounded-full"
          />
          <button type="button" className="mt-4 text-[rgb(0,0,122)] hover:text-[rgb(0,0,150)] text-sm font-medium">
            Change Photo
          </button>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">Basic Info</h2>

          <form className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium ">Name</label>

              <input
                type="text"
                defaultValue="Vivian Wanjiru"
                className="w-full px-4 py-2 border-b focus:border-b-[rgb(0,0,122)] outline-none transition-all"
              />
            </div>

            <div className="space-y-4">
              {/* Phone Number Input */}
              <div className="space-y-2 relative">
                <label className="block text-sm font-medium">Phone Number</label>
                <div className="flex items-center border-b focus-within:border-b-[rgb(0,0,122)] transition-all">
                  <input
                    type="tel"
                    defaultValue="07456789456"
                    className="w-full px-4 py-2 outline-none"
                  />
                  <Link to="/findi-portal/account-info/edit-phone">
                    <FiEdit
                      className="text-[rgb(0,0,122)] cursor-pointer hover:opacity-75"
                      size={15}
                    />
                  </Link>
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-2 relative">
                <label className="block text-sm font-medium ">Email</label>
                <div className="flex items-center border-b focus-within:border-b-[rgb(0,0,122)] transition-all">
                  <input
                    type="email"
                    defaultValue="fundi@jagedo.com"
                    className="w-full px-4 py-2 outline-none"
                  />
                  <Link to="/findi-portal/account-info/edit-email">
                    <FiEdit
                      className="text-[rgb(0,0,122)] cursor-pointer hover:opacity-75"
                      size={15}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
);

export default CustomerProfile;
