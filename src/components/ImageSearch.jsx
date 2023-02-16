import { useState } from 'react';
const ImageSearch = ({searchText}) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    searchText(text);
    
  };
  const handleClick=(e) => {
    e.preventDefault();
    if (text.trim().length !== 0) {
      console.log('input value is NOT empty');
    } else {
      console.log('input value is empty');
    }
  }


  return (
    <div className="max-w-fit md:max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm py-2">
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image"
          />
          <button 
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
