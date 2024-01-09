import React from 'react';

const Bottom = () => {
  return (
    <div className='mx-4'>
      
      <div className="mb-8">
        <p className="text-2xl font-bold text-gray-800">Transactions | This Month</p>
        
      </div>

      
      <div className="flex items-center mb-4">
  <input
    type="text"
    placeholder="Search transactions..."
    className="w-1/10 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
  />

  <div className="flex-grow"></div> {/* This div takes up the remaining space */}

  
  <div className="ml-2 bg-white text-black px-4 py-2 rounded flex items-center">
    <p>Sort</p>
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="rotate-90 ml-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m15 12 5-4-5-4v2.999H2v2h13zm7 3H9v-3l-5 4 5 4v-3h13z"></path></svg>
  </div>

  <button className="ml-2 bg-white text-black px-4 py-2 rounded">
  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
    
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
