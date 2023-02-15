import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [image, setImage] = useState([]);
  const url =
    'https://pixabay.com/api/?key=21437647-4652ee9a0fdba064aa4b23c20&q=yellow+flowers&image_type=photo&pretty=true';

  useEffect(() => {
    setTimeout(() => {
      axios({
        url: url,
      })
        .then((res) => {
          console.log(res.data.hits);
        })
        .catch((err) => {});
    }, 1000);
  }, [url]);
  return (
    <div className="container">
      <h1 className="text-red-300">Pallab</h1>
    </div>
  );
}

export default App;
