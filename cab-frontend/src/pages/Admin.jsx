import React, { useEffect, useState } from "react";

const Admin = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  // ✅ Fetch data from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/enquiries") // change your API
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  // ✅ Filter search
  const filteredData = data.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase()) ||
    item.phone?.includes(search) ||
    item.purpose?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      
      <h1 className="text-2xl font-bold mb-4">Admin - Enquiries</h1>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search by name, phone, purpose..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 w-full md:w-1/3 border border-gray-300 px-3 py-2 rounded"
      />

      {/* 📊 Table */}
      <div className="overflow-auto bg-white shadow rounded-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Purpose</th>
              <th className="px-4 py-2">Message</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.phone}</td>
                  <td className="px-4 py-2">{item.email}</td>
                  <td className="px-4 py-2">{item.purpose}</td>
                  <td className="px-4 py-2">{item.message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;