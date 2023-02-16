import React, { useState } from 'react';

export default function DropdownComponent({perPageImage}) {
    const [value,setValue]=useState();
    const handleChange=(e)=>{
        //setValue(e.target.value);
        console.log("DropdownComponent ",e.target.value);
        perPageImage(value);
    }
  return (
    <div className="w-fit lg:max-w-sm ">
      <select 
        value={value} onChange={(e) => setValue(e.target.value)} onClick={handleChange}
        className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
      >
        <option value="0">20</option>
        <option value="40">40</option>
        <option value="80">80</option>
        <option value="120">120</option>
        <option value="160">160</option>
        <option value="200">200</option>
      </select>
    </div>
  );
}
