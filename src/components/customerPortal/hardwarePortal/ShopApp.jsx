import { Link } from "react-router-dom";
import HomeSlide from "./HomeSlide";
import ProductsSlides from "./ProductsSlides";

const Hardware = () => {
  return (
    <section className="bg-gray-300 h-full pb-2 md:pb-11">
      {/* header */}

      <section className="bg-gradient-to-r from-blue-200 via-blue-500 to-blue-700 min-h-72  md:min-h-60 w-full flex justify-center items-center">
        <div className="flex justify-center container mx-auto items-center gap-6 px-6 flex-wrap md:my-9">
          {/* Logo Image */}
          <img
            src="/logo.png"
            alt="logo"
            className="w-1/3 min-w-[150px] mr-0 md:mr-10 hidden md:inline"
          />

          {/* Text Content */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-semibold text-white">Welcome to the Jagedo Shop</h1>
            <p className="text-xl my-6 text-white">
              Quality products from trusted and verified suppliers.
            </p>

            {/* CTA Button */}
            <button type="button" className="p-2 text-blue-500 bg-white font-semibold rounded shadow-lg hover:bg-blue-100 transition duration-300 md:w-36 w-full">
              SHOP NOW
            </button>
          </div>
        </div>
      </section>

      {/* categories */}

      <section className="container mx-auto">
        <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-2 mt-5">
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
              <p className="mt-2 text-lg font-semibold text-black">Hire Equipments and Machinery</p>
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

        <section className="mt-2 md:mt-7 w-full flex flex-col md:flex-row p-1 ">
          {/* Left Side: HomeSlide - Takes 70% Width */}
          <div className="w-full md:w-[60%] h-[350px]">
            <HomeSlide />
          </div>

          {/* Right Side: Two HardwareProducts Stacked Vertically */}
          <div className="w-full md:w-[35%] md:flex h-[350px] flex-col justify-between items-center gap-4 hidden">
            <div className="w-[90%] h-[165px] flex justify-center items-end rounded-lg">
              <ProductsSlides />
            </div>

            <div className="w-[90%] h-[165px] flex justify-center items-end rounded-lg">
              <ProductsSlides />
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Hardware;
