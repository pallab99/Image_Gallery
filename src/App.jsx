import { useEffect, useState } from 'react';
import ImageCard from './components/ImageCard';
import axios from 'axios';
function App() {
  const [images, setImage] = useState([]);
  const url =
    'https://pixabay.com/api/?key=21437647-4652ee9a0fdba064aa4b23c20&q=random&image_type=photo&pretty=true';
  useEffect(() => {
    setTimeout(() => {
      axios({
        url: url,
      })
        .then((res) => {
          console.log(res.data.hits);
          setImage(res.data.hits);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div className="App mx-auto">
      <div className="flex flex-row flex-wrap justify-center">
        {images.map((image) => (
          <ImageCard key={image.id} image={image}></ImageCard>
        ))}
      </div>
    </div>
  );
}

export default App;
