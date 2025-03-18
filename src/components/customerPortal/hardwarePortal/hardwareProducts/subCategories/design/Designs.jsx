import { DesignSideNav } from './DesignSideNav'
import { CustomizeDesign } from './CustomizeDesign'


const Designs = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <DesignSideNav className="md:sticky md:top-0 md:h-screen" />

      <main className="flex-1 p-6 lg:p-10 md:ml-[20rem]">
        <section className=" mx-auto my-3.5">
          <div className="flex md:flex-raw bg-white rounded-2xl shadow-xl p-6">

            {/* Image Gallery Section */}
            <div className="lg:col-span-3 w-1/2 space-y-4">
              <div className='flex gap-3'>
                {/* Main Image */}
                <div className="relative w-[400px] h-[400px] rounded-2xl overflow-hidden group">
                  <img
                    src="https://www.realestate.com.au/news-image/w_2000,h_1500/v1732489517/news-lifestyle-content-assets/wp-content/production/DFH10566_REA-blog-Oct-2024_2000x1000px_v1g.jpg?_i=AA"
                    alt="Main property view"
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Thumbnail Grid */}
                <div className="w-1/3 grid grid-rows-2 gap-3">
                  {["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWysPgNtlCQ0hHtYLWQCG70HsRwxxyybWdnlj7VGG7jgM-qwzvFuubrhC5W3bk8-w1-jI&usqp=CAU",
                    "https://boldliving.com.au/app/uploads/2022/09/Flemington-352-Scandi-Facade-01-1140x806.jpg"]
                    .map((src, index) => (
                      <div key={index} className="h-[190px] relative rounded-xl overflow-hidden group cursor-pointer">
                        <img
                          src={src}
                          alt={`Property view ${index + 1}`}
                          className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Property Details Section */}
            <div className="flex flex-col h-full w-1/2">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Flat Roof Apartment</h1>
                <h3 className="text-3xl lg:text-4xl font-semibold text-green-600">Ksh 1,500,000</h3>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum pariatur magnam quaerat quisquam corrupti id.
              </p>

              {/* Property Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[{ icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: "Floor Plan Area: 2000 sq ft" },
                { icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z", label: "Bedrooms: 3" },
                { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", label: "Number of Floors: 2" },
                { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Roof Type: Flat Roof" },
                { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Construction Material: Concrete & Steel" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                    </svg>
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-4">
                <CustomizeDesign />
                <button type='button' className="flex-1 px-6 py-3 rounded-xl bg-blue-900 text-white font-semibold hover:bg-blue-800 transition-colors">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}

        <section className=" mx-auto my-3.5">
          <div className="flex md:flex-raw bg-white rounded-2xl shadow-xl p-6">

            {/* Image Gallery Section */}
            <div className="lg:col-span-3 w-1/2 space-y-4">
              <div className='flex gap-3'>
                {/* Main Image */}
                <div className="relative w-[400px] h-[400px] rounded-2xl overflow-hidden group">
                  <img
                    src="https://www.realestate.com.au/news-image/w_2000,h_1500/v1732489517/news-lifestyle-content-assets/wp-content/production/DFH10566_REA-blog-Oct-2024_2000x1000px_v1g.jpg?_i=AA"
                    alt="Main property view"
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Thumbnail Grid */}
                <div className="w-1/3 grid grid-rows-2 gap-3">
                  {["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWysPgNtlCQ0hHtYLWQCG70HsRwxxyybWdnlj7VGG7jgM-qwzvFuubrhC5W3bk8-w1-jI&usqp=CAU",
                    "https://boldliving.com.au/app/uploads/2022/09/Flemington-352-Scandi-Facade-01-1140x806.jpg"]
                    .map((src, index) => (
                      <div key={index} className="h-[190px] relative rounded-xl overflow-hidden group cursor-pointer">
                        <img
                          src={src}
                          alt={`Property view ${index + 1}`}
                          className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Property Details Section */}
            <div className="flex flex-col h-full w-1/2">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Flat Roof Apartment</h1>
                <h3 className="text-3xl lg:text-4xl font-semibold text-green-600">Ksh 1,500,000</h3>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum pariatur magnam quaerat quisquam corrupti id.
              </p>

              {/* Property Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[{ icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: "Floor Plan Area: 2000 sq ft" },
                { icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z", label: "Bedrooms: 3" },
                { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", label: "Number of Floors: 2" },
                { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Roof Type: Flat Roof" },
                { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Construction Material: Concrete & Steel" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                    </svg>
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-4">
                <CustomizeDesign />
                <button type='button' className="flex-1 px-6 py-3 rounded-xl bg-blue-900 text-white font-semibold hover:bg-blue-800 transition-colors">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}

        <section className=" mx-auto my-3.5">
          <div className="flex md:flex-raw bg-white rounded-2xl shadow-xl p-6">

            {/* Image Gallery Section */}
            <div className="lg:col-span-3 w-1/2 space-y-4">
              <div className='flex gap-3'>
                {/* Main Image */}
                <div className="relative w-[400px] h-[400px] rounded-2xl overflow-hidden group">
                  <img
                    src="https://www.realestate.com.au/news-image/w_2000,h_1500/v1732489517/news-lifestyle-content-assets/wp-content/production/DFH10566_REA-blog-Oct-2024_2000x1000px_v1g.jpg?_i=AA"
                    alt="Main property view"
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Thumbnail Grid */}
                <div className="w-1/3 grid grid-rows-2 gap-3">
                  {["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWysPgNtlCQ0hHtYLWQCG70HsRwxxyybWdnlj7VGG7jgM-qwzvFuubrhC5W3bk8-w1-jI&usqp=CAU",
                    "https://boldliving.com.au/app/uploads/2022/09/Flemington-352-Scandi-Facade-01-1140x806.jpg"]
                    .map((src, index) => (
                      <div key={index} className="h-[190px] relative rounded-xl overflow-hidden group cursor-pointer">
                        <img
                          src={src}
                          alt={`Property view ${index + 1}`}
                          className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Property Details Section */}
            <div className="flex flex-col h-full w-1/2">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Flat Roof Apartment</h1>
                <h3 className="text-3xl lg:text-4xl font-semibold text-green-600">Ksh 1,500,000</h3>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum pariatur magnam quaerat quisquam corrupti id.
              </p>

              {/* Property Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[{ icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: "Floor Plan Area: 2000 sq ft" },
                { icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z", label: "Bedrooms: 3" },
                { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", label: "Number of Floors: 2" },
                { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Roof Type: Flat Roof" },
                { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Construction Material: Concrete & Steel" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                    </svg>
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-4">
                <CustomizeDesign />
                <button type='button' className="flex-1 px-6 py-3 rounded-xl bg-blue-900 text-white font-semibold hover:bg-blue-800 transition-colors">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

export default Designs
