import { Pencil } from 'lucide-react';

const Checkout = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-center text-2xl font-bold mb-6">Place Your Order</h1>

            <section className="flex justify-between gap-8">
                {/* Left Section */}
                <div className="w-2/3 bg-white p-6 rounded-lg shadow-md">

                    {/* Customer Address */}
                    <div className="mb-6 border-b pb-4">
                        <h2 className="text-lg font-semibold mb-2">1. Customer Address</h2>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-semibold">John Doe</p>
                                <p className="text-gray-600">Lower Kabete, Nairobi, +2547002390**</p>
                            </div>
                            <button type='button' className="text-[rgb(0,0,122)] font-medium flex items-center gap-1 hover:underline">
                                <Pencil size={16} /> Change
                            </button>
                        </div>
                    </div>

                    {/* Delivery Details */}
                    <div className="mb-6 border-b pb-4">
                        <h2 className="text-lg font-semibold mb-2">2. Delivery Details</h2>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-gray-700"><span className="font-semibold">Delivery Address:</span> Kodele, Kisumu</p>
                                <p className="text-gray-700">Delivery scheduled on <span className="font-semibold">3 Feb 2025</span></p>
                            </div>
                            <button type='button' className="text-[rgb(0,0,122)] font-medium flex items-center gap-1 hover:underline">
                                <Pencil size={16} /> Change
                            </button>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex items-center gap-4 mb-6 border-b pb-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRYwqv_y1hTCn-wm_9goii-G0aZdDJ5r6ELXHJ70liTmUJtp9zi6kZkQRDHk4g-hFn_s&usqp=CAU"
                            alt="Bamburi Cement" className="w-20 h-20 object-cover rounded-md" />
                        <div>
                            <h2 className="font-semibold">Bamburi Cement</h2>
                            <p className="text-sm text-gray-600">50 Kg Simba Cement</p>
                            <span className="font-bold text-gray-800">Qty: 2</span>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">3. Payment Method</h2>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-gray-700 font-semibold">Mpesa | Bank</p>
                                <p className="text-xs text-gray-500">
                                    By proceeding, you automatically accept the
                                    <span className="font-semibold text-[rgb(0,0,122)]"> Terms </span>
                                    and
                                    <span className="font-semibold text-[rgb(0,0,122)]"> Conditions</span>.
                                </p>
                            </div>
                            <button type='button' className="bg-[rgb(0,0,122)] text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90">
                                Continue Shopping
                            </button>

                        </div>
                    </div>
                </div>

                {/* Right Section - Order Summary */}
                <div className="w-1/3 bg-white p-6 rounded-lg shadow-md self-start">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                    <div className="flex justify-between text-gray-700 border-b pb-2">
                        <p>Item Total (1)</p>
                        <p className="font-semibold">Ksh 900</p>
                    </div>

                    <div className="flex justify-between text-gray-700 border-b pb-2 mt-2">
                        <p>Delivery Fee</p>
                        <p className="font-semibold">Ksh 200</p>
                    </div>

                    <div className="flex justify-between text-lg font-bold mt-4">
                        <p>Total</p>
                        <p>Ksh 1100</p>
                    </div>

                    <button type='button' className="mt-5 w-full bg-[rgb(0,0,122)] text-white py-2 rounded-md text-sm font-medium hover:opacity-90">
                        Confirm Order
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Checkout;
