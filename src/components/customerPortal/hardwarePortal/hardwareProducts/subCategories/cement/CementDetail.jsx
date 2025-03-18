import { FaStar, FaShoppingCart, FaBolt } from "react-icons/fa";
import { FcNext } from "react-icons/fc";
import { Link } from "react-router-dom";

const CementDetail = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex my-5">
        <Link
          to="/hardware_shop"
          className="font-semibold hover:text-[rgb(0,0,122)] flex items-center justify-center text-xl">
          hardware_shop{" "}
          <span>
            <FcNext />
          </span>
        </Link>
        {/* <Link to="">hardware-products/</Link> */}
        <Link
          to="/hardware_shop/hardware-products"
          className="font-semibold hover:text-[rgb(0,0,122)] flex items-center justify-center text-xl">
          hardware-products{" "}
          <span>
            <FcNext />
          </span>
        </Link>
        <Link
          to="/hardware_shop/hardware-products/cement"
          className="font-semibold hover:text-[rgb(0,0,122)] flex items-center justify-center text-xl">
          cement{" "}
          <span>
            <FcNext />
          </span>
        </Link>
        <Link
          to="/hardware_shop/hardware-products/cement/cement-detail"
          className="font-semibold hover:text-[rgb(0,0,122)] flex items-center justify-center text-xl">
          cement-detail
        </Link>
      </div>

      <hr className="text-gray-300" />
      <div className="flex flex-col lg:flex-row gap-8 mt-3">
        {/* Images Section */}
        <section className="w-full lg:w-1/2">
          <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col lg:flex-row gap-4">
            {/* Main Image */}
            <div className="w-full lg:w-3/4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRYwqv_y1hTCn-wm_9goii-G0aZdDJ5r6ELXHJ70liTmUJtp9zi6kZkQRDHk4g-hFn_s&usqp=CAU"
                alt="Nguvu Cement main view"
                className="w-full h-[500px] object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="w-full lg:w-1/4 flex flex-col gap-4 justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRYwqv_y1hTCn-wm_9goii-G0aZdDJ5r6ELXHJ70liTmUJtp9zi6kZkQRDHk4g-hFn_s&usqp=CAU"
                alt="Nguvu Cement back view"
                className="w-full h-[200px] object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRYwqv_y1hTCn-wm_9goii-G0aZdDJ5r6ELXHJ70liTmUJtp9zi6kZkQRDHk4g-hFn_s&usqp=CAU"
                alt="Nguvu Cement side view"
                className="w-full h-[200px] object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
          </div>
        </section>

        {/* Product Details Section */}
        <section className="w-full lg:w-1/2">
          <div className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col justify-between">
            <div>
              {/* Product Title & Rating */}
              <div className="border-b pb-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Nguvu Cement</h1>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-5 h-5" />
                    ))}
                  </div>
                  <span className="text-gray-500">(60 Reviews)</span>
                </div>
              </div>

              {/* Price */}
              <div className="py-6 border-b">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-[rgb(0,0,122)]">Ksh 800</span>
                  <span className="text-lg text-gray-500 line-through">Ksh 950</span>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    Save 16%
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="py-6">
                <h2 className="text-xl font-semibold mb-4">Product Description</h2>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt voluptate dolor
                  architecto nulla sint quam rem, voluptatum obcaecati. Ea nesciunt eos eius ipsam
                  fugiat atque minus natus quae provident vero?
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Link to="/hardware_shop/hardware-products/cement/cement-detail/cart">
                <button type="button" className="flex-1 flex items-center justify-center gap-2 bg-blue-800 text-white py-4 px-6 font-semibold rounded-xl hover:bg-blue-700 transition duration-300 shadow-md">
                  <FaShoppingCart />
                  Add to Cart
                </button>
              </Link>

              <Link to="/hardware_shop/hardware-products/cement/cement-detail/cart/checkout">
                <button type="button" className="flex-1 flex items-center justify-center gap-2 bg-[rgb(0,0,122)] text-white py-4 px-6 font-semibold rounded-xl hover:bg-blue-900 transition duration-300 shadow-md">
                  <FaBolt />
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CementDetail;
