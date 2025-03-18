import { Link, useLocation } from "react-router-dom";

const tabs = [
  { name: "Progress", key: "progress", path: "/fundi-portal/active/progress" },
  { name: "Job Specification", key: "jobs", path: "/fundi-portal/active/job-specification" },
  { name: "Quote", key: "quote", path: "/fundi-portal/active/Quote" },
  { name: "Payment Breakdown", key: "payment", path: "/fundi-portal/active/payment-fundi" },
  { name: "Customer", key: "customer", path: "/fundi-portal/active/customer" },
];

function ActiveFundiNav() {
  const location = useLocation(); 

  return (
    <section className="container mx-auto mt-12">
      <div className="flex">
        <h1 className="text-2xl font-semibold text-gray-600">Welcome Jame,</h1>
      </div>
      <div className="border-b border-gray-400 mt-1">
        <div className="flex justify-end space-x-6 px-4">
          {tabs.map((tab) => (
            <Link
              key={tab.key}
              to={tab.path}
              className={`pb-1 font-medium ${
                location.pathname === tab.path
                  ? "text-[rgb(0,0,122)] border-b-2 border-[rgb(0,0,122)]"
                  : "text-gray-600 hover:text-[rgb(0,0,122)]"
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ActiveFundiNav