import React from 'react';

const Header = () => {
  return (
    <div className="flex w-full h-24 ">
      
      <div className=" text-teal-100 flex items-center w-[15%] " style={{ backgroundColor: 'rgba(30, 38, 64, 1)' }}>
    <img className="ml-3 w-12" src="https://dukaan-dashboard-wadad-parker.netlify.app/assets/logo-PjJw5uIF.png" alt="err" />
    <div className="ml-2">
        <p className="text-lg font-bold">Nishyan</p>
        <p className="underline">Wait Store</p>
    </div>
    <svg className="text-white stroke-current fill-current stroke-0 h-5 w-5 ml-2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
    </svg>
</div>



      
    <div className="p-4 flex justify-between items-center w-[85%]">

    <div class="flex items-center">
      <span class="text-lg font-bold m-2">Payments</span>
      <svg class="text-current fill-current stroke-current stroke-0 h-6 w-6" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"></path></svg>
      <span class="text-lg">How it works!</span>
    </div>

      <div>
        <input
          type="text"
          placeholder="Search features, tutorial, etc"
          className="px-4 py-2 border rounded mr-2 focus:outline-none focus:border-blue-500 w-96"
        />
      </div>
      
      <div>
      <div className="flex items-center">
  <span className="text-xl mr-2 inline-block rounded-full bg-gray-500 p-1">
    <img
      src="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_5995_2532)'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='%23E6E6E6'/%3e%3cpath%20d='M28.4211%2010.0237L11.1158%2013.3823C10.4632%2013.499%2010%2014.1287%2010%2014.8517V22.5019C10%2023.225%2010.4632%2023.8547%2011.1158%2023.9713L12.8842%2024.3212C13.6%2025.6273%2014.9474%2027.8897%2016.7579%2029.7323C17.3684%2030.362%2018.3789%2029.8022%2018.2526%2028.8693C18.0842%2027.6331%2018.1263%2026.3037%2018.1895%2025.3707L28.4211%2027.3766C29.2421%2027.5398%2030%2026.8401%2030%2025.9072V11.4931C30%2010.5602%2029.2421%209.86046%2028.4211%2010.0237ZM16.4632%2019.6331C16.4632%2019.8897%2016.2737%2020.0996%2016.0421%2020.0996H14.3158C14.0842%2020.0996%2013.8947%2019.8897%2013.8947%2019.6331V17.7206C13.8947%2017.464%2014.0842%2017.2541%2014.3158%2017.2541H16.0421C16.2737%2017.2541%2016.4632%2017.464%2016.4632%2017.7206V19.6331ZM21.2842%2019.6331C21.2842%2019.8897%2021.0947%2020.0996%2020.8632%2020.0996H19.1368C18.9053%2020.0996%2018.7158%2019.8897%2018.7158%2019.6331V17.7206C18.7158%2017.464%2018.9053%2017.2541%2019.1368%2017.2541H20.8632C21.0947%2017.2541%2021.2842%2017.464%2021.2842%2017.7206V19.6331ZM26.1263%2019.6331C26.1263%2019.8897%2025.9368%2020.0996%2025.7053%2020.0996H23.9789C23.7474%2020.0996%2023.5579%2019.8897%2023.5579%2019.6331V17.7206C23.5579%2017.464%2023.7474%2017.2541%2023.9789%2017.2541H25.6842C25.9158%2017.2541%2026.1053%2017.464%2026.1053%2017.7206V19.6331H26.1263Z'%20fill='%234D4D4D'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_5995_2532'%3e%3crect%20width='40'%20height='40'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
      alt=""
      className="w-8 h-8 object-cover rounded-full"
    />
  </span>
  <span className="text-xl inline-block rounded-full bg-gray-500 p-1">
    <img
      src="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_5995_2537)'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='%23E6E6E6'/%3e%3cpath%20d='M21.1109%2025.5026C20.5156%2026.1587%2019.4844%2026.1587%2018.8891%2025.5026L13.6151%2019.6895C12.7406%2018.7256%2013.4245%2017.1816%2014.726%2017.1816L25.274%2017.1816C26.5755%2017.1816%2027.2594%2018.7256%2026.3849%2019.6895L21.1109%2025.5026Z'%20fill='%234D4D4D'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_5995_2537'%3e%3crect%20width='40'%20height='40'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
      alt=""
      className="w-8 h-8 object-cover rounded-full"
    />
  </span>
</div>

      </div>
    </div>

    </div>
  );
};

export default Header;


