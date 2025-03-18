import { Link } from "react-router-dom";
import { FcNext } from "react-icons/fc";

const Cart = () => {
  return (
    <section className="container mx-auto mt-10">
      <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-2">
        {/* Fundi hardware products */}
        <Link to="/hardware_shop/hardware-products">
          <div className="flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md p-4 bg-[rgb(0,0,122)]">
            <img src="/hardwareShop.png" className="h-10 md:h-12 mr-2 md:mr-0" alt="Fundi" />
            <p className="mt-2 text-lg font-semibold text-white">Hardware</p>
          </div>
        </Link>

        {/* Professional custom products */}

        <Link to="/hardware_shop/custom-products">
          {/* <div className="flex flex-col items-center rounded-lg shadow-md p-4 bg-[rgba(0,0,122,0.4)] hover:bg-[rgba(0,0,122,0.7)] transition"> */}
          <div className="flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md bg-blue-200 hover:bg-opacity-70 p-4 transition">
            <img
              src="/customproducts.png"
              className="h-10 md:h-12 mr-2 md:mr-0"
              alt="Professional"
            />
            <p className="mt-2 text-lg font-semibold text-black">Custom Products</p>
          </div>
        </Link>

        {/* hire equipment and machine */}
        <Link to="/hardware_shop/hire-equipments-and-machinery">
          <div className="flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md p-4 transition bg-blue-200 hover:bg-opacity-70">
            <img src="/machinery.png" className="h-10 md:h-12 mr-2 md:mr-0" alt="Contractor" />
            <p className="mt-2 text-lg font-semibold text-black">Equipments and Machinery</p>
          </div>
        </Link>

        {/* Hardware design */}
        <Link to="/hardware_shop/designs">
          <div className="flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md p-4 transition bg-blue-200 hover:bg-opacity-70">
            <img src="/designs.png" className="h-10 md:h-12 mr-2 md:mr-0" alt="Hardware" />
            <p className="mt-2 text-lg font-semibold text-black">Designs</p>
          </div>
        </Link>
      </nav>

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

      <section className="flex justify-between items-start gap-6">
        {/* Left Side: Product List */}
        <div className="w-2/3 bg-gray-100 p-6 rounded-lg shadow-md">
          {/* Product 1 */}
          <div className="flex justify-between items-center mb-5 bg-white p-4 rounded-md shadow">
            <div className="flex items-center space-x-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRYwqv_y1hTCn-wm_9goii-G0aZdDJ5r6ELXHJ70liTmUJtp9zi6kZkQRDHk4g-hFn_s&usqp=CAU"
                alt="Bamburi Cement"
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <h1 className="text-lg font-semibold">Bamburi Cement</h1>
                <p className="text-sm text-gray-600">50 Kg Simba Cement</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-lg font-bold text-gray-800">KSH 900</h1>
              <div className="flex items-center space-x-3 mt-2">
                <button type="button" className="bg-[rgb(0,0,122)] text-white px-3 py-1 rounded-md">+</button>
                <p className="text-lg font-semibold">2</p>
                <button type="button" className="bg-[rgb(0,0,122)] text-white px-3 py-1 rounded-md">-</button>
              </div>
              <button type="button" className="mt-2 text-sm text-red-500 font-medium">Remove</button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex justify-between items-center mb-5 bg-white p-4 rounded-md shadow">
            <div className="flex items-center space-x-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRYwqv_y1hTCn-wm_9goii-G0aZdDJ5r6ELXHJ70liTmUJtp9zi6kZkQRDHk4g-hFn_s&usqp=CAU"
                alt="Bamburi Cement"
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <h1 className="text-lg font-semibold">Bamburi Cement</h1>
                <p className="text-sm text-gray-600">50 Kg Simba Cement</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-lg font-bold text-gray-800">KSH 900</h1>
              <div className="flex items-center space-x-3 mt-2">
                <button type="button" className="bg-[rgb(0,0,122)] text-white px-3 py-1 rounded-md">+</button>
                <p className="text-lg font-semibold">2</p>
                <button type="button" className="bg-[rgb(0,0,122)] text-white px-3 py-1 rounded-md">-</button>
              </div>
              <button type="button" className="mt-2 text-sm text-red-500 font-medium">Remove</button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-5 bg-white p-4 rounded-md shadow">
            <div className="flex items-center space-x-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRYwqv_y1hTCn-wm_9goii-G0aZdDJ5r6ELXHJ70liTmUJtp9zi6kZkQRDHk4g-hFn_s&usqp=CAU"
                alt="Bamburi Cement"
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <h1 className="text-lg font-semibold">Bamburi Cement</h1>
                <p className="text-sm text-gray-600">50 Kg Simba Cement</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-lg font-bold text-gray-800">KSH 900</h1>
              <div className="flex items-center space-x-3 mt-2">
                <button type="button" className="bg-[rgb(0,0,122)] text-white px-3 py-1 rounded-md">+</button>
                <p className="text-lg font-semibold">2</p>
                <button type="button" className="bg-[rgb(0,0,122)] text-white px-3 py-1 rounded-md">-</button>
              </div>
              <button type="button" className="mt-2 text-sm text-red-500 font-medium">Remove</button>
            </div>
          </div>
        </div>

        {/* Right Side: Cart Summary */}
        <div className="w-1/3 bg-white p-4 rounded-md shadow-md self-start">
          <h1 className="text-lg font-semibold mb-3">CART SUMMARY</h1>
          <div className="flex justify-between text-gray-700 text-sm border-b pb-2">
            <h3>Subtotal</h3>
            <p className="font-semibold">KSH 1800</p>
          </div>

          <div className="flex justify-between text-gray-800 text-base font-semibold mt-2">
            <h2>Total</h2>
            <p>KSH 1800</p>
          </div>

          <p className="text-xs text-gray-500 mt-1">(Inclusive of VAT)</p>

          <Link to="/hardware_shop/hardware-products/cement/cement-detail/cart/checkout">
            <button type="button" className="mt-4 w-full bg-[rgb(0,0,122)] text-white py-2 rounded-md text-sm font-medium hover:opacity-90">
              Checkout
            </button>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Cart;
