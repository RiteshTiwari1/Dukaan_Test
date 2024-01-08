import React from 'react';

const Bottom = () => {
  return (
    <div className='mx-4'>
      {/* First div with a <p> tag */}
      <div className="mb-8">
        <p className="text-2xl font-bold text-gray-800">Transactions | This Month</p>
        {/* Add content for the first section */}
      </div>

      {/* Second div with an <input> tag, download, and sort buttons */}
      <div className="flex items-center mb-4">
  <input
    type="text"
    placeholder="Search transactions..."
    className="w-1/10 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
  />

  <div className="flex-grow"></div> {/* This div takes up the remaining space */}

  {/* Download Button */}
  <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
    Download
  </button>

  {/* Sort Button */}
  <button className="ml-2 bg-gray-800 text-white px-4 py-2 rounded">
    Sort
  </button>
</div>


      {/* Table */}
      <table className="w-full border-collapse border bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Order ID</th>
            <th className="border p-2">Order Date</th>
            <th className="border p-2">Order Amount</th>
            <th className="border p-2">Transactions</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample table rows */}
          <tr>
            <td className="border p-2">#281209</td>
            <td className="border p-2">7 july 2023</td>
            <td className="border p-2">$1,234</td>
            <td className="border p-2 text-green-500">$45</td>
          </tr>
          <tr>
          <td className="border p-2">#281209</td>
            <td className="border p-2">7 july 2023</td>
            <td className="border p-2">$1,234</td>
            <td className="border p-2 text-green-500">$45</td>
          </tr>
          <tr>
          <td className="border p-2">#281209</td>
            <td className="border p-2">7 july 2023</td>
            <td className="border p-2">$1,234</td>
            <td className="border p-2 text-green-500">$45</td>
          </tr>
          <tr>
          <td className="border p-2">#281209</td>
            <td className="border p-2">7 july 2023</td>
            <td className="border p-2">$1,234</td>
            <td className="border p-2 text-green-500">$45</td>
          </tr>
          <tr>
          <td className="border p-2">#281209</td>
            <td className="border p-2">7 july 2023</td>
            <td className="border p-2">$1,234</td>
            <td className="border p-2 text-green-500">$45</td>
          </tr>
          <tr>
          <td className="border p-2">#281209</td>
            <td className="border p-2">7 july 2023</td>
            <td className="border p-2">$1,234</td>
            <td className="border p-2 text-green-500">$45</td>
          </tr>
          <tr>
          <td className="border p-2">#281209</td>
            <td className="border p-2">7 july 2023</td>
            <td className="border p-2">$1,234</td>
            <td className="border p-2 text-green-500">$45</td>
          </tr>
          <tr>
          <td className="border p-2">#281209</td>
            <td className="border p-2">7 july 2023</td>
            <td className="border p-2">$1,234</td>
            <td className="border p-2 text-green-500">$45</td>
          </tr>
          <tr>
          <td className="border p-2">#281209</td>
            <td className="border p-2">7 july 2023</td>
            <td className="border p-2">$1,234</td>
            <td className="border p-2 text-green-500">$45</td>
          </tr>
          <tr>
          <td className="border p-2">#281209</td>
            <td className="border p-2">7 july 2023</td>
            <td className="border p-2">$1,234</td>
            <td className="border p-2 text-green-500">$45</td>
          </tr>
          <tr>
          <td className="border p-2">#281209</td>
            <td className="border p-2">7 july 2023</td>
            <td className="border p-2">$1,234</td>
            <td className="border p-2 text-green-500">$45</td>
          </tr>
          <tr>
          <td className="border p-2">#281209</td>
            <td className="border p-2">7 july 2023</td>
            <td className="border p-2">$1,234</td>
            <td className="border p-2 text-green-500">$45</td>
          </tr>
          {/* Add more rows if needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Bottom;
