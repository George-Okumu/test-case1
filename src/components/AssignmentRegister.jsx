const builders = [
  { id: "B-ID", date: "Creation date", skill: "Skill level", firstName: "First name", lastName: "Last name", nationalID: "National ID", phone: "Phone No", email: "Email", county: "County", subcounty: "Subcounty" },
  { id: "F-001", date: "Feb 1", skill: "Mason", firstName: "Edwin", lastName: "Sifuna", nationalID: "30604460", phone: "072122000", email: "edwin@gmail.com", county: "Nairobi", subcounty: "Westlands" },
  { id: "F-002", date: "Feb 14", skill: "Mason", firstName: "Marvin", lastName: "Kimeu", nationalID: "50804900", phone: "071819120", email: "marvin@gmail.com", county: "Nairobi", subcounty: "Westlands" },
  { id: "F-003", date: "Jan 23", skill: "Plumber", firstName: "John", lastName: "Kamau", nationalID: "40908712", phone: "0733123456", email: "john@gmail.com", county: "Kiambu", subcounty: "Ruiru" },
  { id: "F-004", date: "Feb 10", skill: "Electrician", firstName: "Dennis", lastName: "Omondi", nationalID: "27845900", phone: "0748123499", email: "dennis@gmail.com", county: "Kisumu", subcounty: "Nyando" },
  { id: "F-005", date: "Jan 5", skill: "Carpenter", firstName: "Samson", lastName: "Mutua", nationalID: "30987654", phone: "0700112233", email: "samson@gmail.com", county: "Machakos", subcounty: "Mwala" },
  { id: "F-006", date: "Mar 2", skill: "Painter", firstName: "Brian", lastName: "Otieno", nationalID: "50123876", phone: "0722334455", email: "brian@gmail.com", county: "Mombasa", subcounty: "Likoni" },
  { id: "F-007", date: "Mar 5", skill: "Welder", firstName: "Kelvin", lastName: "Mwangi", nationalID: "40902233", phone: "0711002233", email: "kelvin@gmail.com", county: "Nakuru", subcounty: "Naivasha" },
];

const AssignmentScreen = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg roboto">
      
      {/* Assignment Details */}
      <div className="p-5 rounded-lg mb-4 bg-gray-50 shadow-md border border-gray-300">
        <h2 className="text-lg font-bold text-gray-800 mb-2">Job Details</h2>
        <div className="text-gray-700 font-medium grid grid-cols-2 gap-2">
          <span><strong>Location:</strong> Githurai</span>
          <span><strong>No of Builders:</strong> 5</span>
          <span><strong>Fundi:</strong> Mason</span>
          <span><strong>Level:</strong> Mason</span>
          <span><strong>Closing Date:</strong> 4/3/2024</span>
        </div>
      </div>

      {/* Recall Button */}
      <button type="button" className="mb-4 bg-[rgb(0,0,122)] text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-900">
        Recall
      </button>

      {/* Register Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-700">Register</h2>
        <input type="text" placeholder="Search..." className="border p-2 rounded-lg shadow-sm w-56" />
      </div>

      {/* Table - Full View Without Scroll */}
      <div className="w-full bg-white border rounded-lg shadow-md">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-800">
              {Object.keys(builders[0]).map((header, index) => (
                <th key={index} className="text-left p-3 border-b font-semibold">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {builders.slice(1).map((builder, index) => (
              <tr key={index} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} border-b`}>
                {Object.values(builder).map((value, i) => (
                  <td key={i} className="p-3">{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-2">
          <span>Rows per page:</span>
          <select className="border p-2 rounded-md shadow-sm">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <button type="button" className="border px-3 py-1 rounded-md">&laquo;</button>
          <span>1, 2, 3...10</span>
          <button type="button" className="border px-3 py-1 rounded-md">&raquo;</button>
        </div>
      </div>
    </div>
  );
};

export default AssignmentScreen;
