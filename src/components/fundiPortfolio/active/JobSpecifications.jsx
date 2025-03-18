import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import ActiveFundiNav from './ActiveFundiNav'

function JobSpecifications() {
  const files = [
    { name: "Document 1.pdf", url: "#" },
    { name: "Image 2.jpg", url: "#" },
    { name: "Report 3.docx", url: "#" },
    { name: "Presentation 4.pptx", url: "#" },
    { name: "Spreadsheet 5.xlsx", url: "#" },
  ];

  return (

    <>
      <section className="container mx-auto mt-12 px-4">
        <ActiveFundiNav />
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-500 mt-6 mb-4">Job Specifications</h1>

      </section>
      <section className="container mx-auto p-5 max-w-7xl">
        {/* Header Section */}
        <div className="flex justify-between items-center bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
          <h1 className="text-2xl font-bold text-gray-800">REQ 254</h1>
          <h2 className="text-sm font-medium text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">Created: 12/12/2024</h2>
        </div>

        {/* Job Detail Section */}
        <div className="p-8 border my-6 rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-6">Job Details</h2>

          <div className="flex justify-between gap-8">
            {/* Left Column */}
            <div className="w-1/2 space-y-4">
              {[
                { label: "Skill", value: "Mason" },
                { label: "Level", value: "Master" },
                { label: "Location", value: "Kenya, Nairobi, Kasarani" },
                { label: "Start Date", value: "20/11/2023" },
                { label: "End Date", value: "12/12/2024" }
              ].map((item, index) => (
                <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                  <span className="font-semibold text-gray-800 w-24">{item.label}:</span>
                  <span className="text-gray-700">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="w-1/2 pl-8 border-l space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900">Managed by Jagedo</h3>
                <h3 className="font-semibold text-blue-900 mt-2">Payment by Jagedo</h3>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Package details</h3>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloribus esse provident
                  necessitatibus quos sint facilis sed in sit magni.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* job description */}

        <div className="grid grid-cols-4 gap-6 bg-white p-8 shadow-lg rounded-xl border border-gray-200 my-6">
          {/* Job Description */}
          <div className="col-span-1 pr-6 border-r">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Job Description</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit minus molestiae
              libero et aut accusamus consequuntur.
            </p>
          </div>

          {/* Files Table */}
          <div className="col-span-3">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">File Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Attachment</th>
                </tr>
              </thead>
              <tbody>
                {files.map((file, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-all duration-200">
                    <td className="px-6 py-4 border-t">{file.name}</td>
                    <td className="px-6 py-4 border-t">
                      <a
                        href={file.url}
                        download
                        className="text-blue-900 hover:text-blue-700 flex items-center gap-2 transition-colors"
                      >
                        <ArrowDownTrayIcon className="w-5 h-5" />
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 bg-white p-8 shadow-lg rounded-xl border border-gray-200">
          {/* admin notes */}
          <div className="col-span-1 pr-6 border-r">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Admin Notes</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit minus molestiae
              libero et aut accusamus consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iusto alias dolor doloribus eligendi libero culpa cumque laudantium recusandae doloremque tempore!
              Deleniti non enim nam ut totam facilis tempore pariatur qui!
            </p>
          </div>

          {/* Files Table */}
          <div className="col-span-3">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">File Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Attachment</th>
                </tr>
              </thead>
              <tbody>
                {files.map((file, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-all duration-200">
                    <td className="px-6 py-4 border-t">{file.name}</td>
                    <td className="px-6 py-4 border-t">
                      <a
                        href={file.url}
                        download
                        className="text-blue-900 hover:text-blue-700 flex items-center gap-2 transition-colors"
                      >
                        <ArrowDownTrayIcon className="w-5 h-5" />
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>

  );
}

export default JobSpecifications;

