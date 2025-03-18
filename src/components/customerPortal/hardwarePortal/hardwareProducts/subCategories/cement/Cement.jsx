import { Link } from "react-router-dom";
import { SideNavigation } from "../../../../../Navigation/SideNavigation";
import cementProducts from "../../../../../../data/CementData";

const Cement = () => {
  return (
    <section className="flex">
      {/* Sidebar */}
      <SideNavigation />

      {/* Main Content */}
      <div className="flex flex-col w-full ml-[18rem] mt-10 px-4 md:px-8">
        {/* Navigation Grid */}
        <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-2 mt-5">
          <Link to="/hardware_shop/hardware-products">
            <div className="flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md p-4 bg-[rgb(0,0,122)]">
              <img src="/hardwareShop.png" className="h-10 md:h-12 mr-2 md:mr-0" alt="Fundi" />
              <p className="mt-2 text-lg font-semibold text-white">Hardware</p>
            </div>
          </Link>

          <Link to="/hardware_shop/custom-products">
            <div className="flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md bg-blue-200 hover:bg-opacity-70 p-4 transition">
              <img
                src="/customproducts.png"
                className="h-10 md:h-12 mr-2 md:mr-0"
                alt="Professional"
              />
              <p className="mt-2 text-lg font-semibold text-black">Custom Products</p>
            </div>
          </Link>

          <Link to="/hardware_shop/hire-equipments-and-machinery">
            <div className="flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md p-4 transition bg-blue-200 hover:bg-opacity-70">
              <img src="/machinery.png" className="h-10 md:h-12 mr-2 md:mr-0" alt="Contractor" />
              <p className="mt-2 text-lg font-semibold text-black">Equipments and Machinery</p>
            </div>
          </Link>

          <Link to="/hardware_shop/designs">
            <div className="flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md p-4 transition bg-blue-200 hover:bg-opacity-70">
              <img src="/designs.png" className="h-10 md:h-12 mr-2 md:mr-0" alt="Hardware" />
              <p className="mt-2 text-lg font-semibold text-black">Designs</p>
            </div>
          </Link>
        </nav>

        {/* Cement Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
          {cementProducts.map((product) => (
            <Link key={product.id} to="/hardware_shop/hardware-products/cement/cement-detail">
              <div
                className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col items-center text-center 
                  transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
                {/* Image */}
                <img
                  src={product.imgSrc}
                  alt={product.title}
                  className="w-28 h-32 object-cover rounded-lg"
                />

                {/* Product Info */}
                <h1 className="font-semibold text-lg mt-4 truncate w-full break-words">
                  {product.title}
                </h1>

                {/* Price & Rating */}
                <div className="flex justify-between items-center w-full mt-2 px-2">
                  <p className="text-xl font-bold">KSH{product.price}</p>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">⭐</span>
                    <span>{product.rating}</span>
                    <span>Reviews</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cement;
