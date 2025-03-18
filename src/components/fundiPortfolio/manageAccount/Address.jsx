const Address = () => (
    <div className="max-w-3xl ml-80 p-6">
      <div className=" p-8">
        <h1 className="text-2xl font-bold  mb-6 border-b pb-3">My Address</h1>
        
        <form className="space-y-6">
          <div className=" gap-6">
            {/* Country Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium ">
                Country
              </label>
              <select 
                defaultValue="Kenya"
                disabled
                className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[rgb(0,0,122)] focus:border-[rgb(0,0,122)] outline-none transition-all bg-white"
              >
                <option value="Kenya">Kenya</option>
                <option value="Uganda">Uganda</option>
                <option value="Tanzania">Tanzania</option>
              </select>
            </div>

            {/* County Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium ">
                County
              </label>
              <select 
                defaultValue="Nairobi"
                className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[rgb(0,0,122)] focus:border-[rgb(0,0,122)] outline-none transition-all bg-white"
              >
                <option value="Nairobi">Nairobi</option>
                <option value="Mombasa">Mombasa</option>
                <option value="Kisumu">Kisumu</option>
              </select>
            </div>

            {/* Sub County Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium ">
                Sub County
              </label>
              <select 
                defaultValue="Muthaiga"
                className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[rgb(0,0,122)] focus:border-[rgb(0,0,122)] outline-none transition-all bg-white"
              >
                <option value="Muthaiga">Muthaiga</option>
                <option value="Kasarani">Kasarani</option>
                <option value="Ngogo">Ngogo</option>
              </select>
            </div>

            {/* Estate Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium ">
                Estate
              </label>
              <input 
                type="text" 
                defaultValue="Ushindi drive"
                className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[rgb(0,0,122)] focus:border-[rgb(0,0,122)] outline-none transition-all"
              />
            </div>
          </div>

          <div className='flex justify-end'>
            <button 
            type="submit"
            className="w-full md:w-1/2 bg-[rgb(0,0,122)] text-white py-3 px-4 rounded-lg hover:bg-[rgb(0,0,150)] transition-colors duration-300 font-medium mt-8"
          >
            Update Address
          </button>
          </div>
          
        </form>
      </div>
    </div>
  );
  
export default Address
