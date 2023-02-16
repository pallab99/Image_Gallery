import { useEffect, useState } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import axios from 'axios';
import DropdownComponent from './components/DropdownComponent';
function App() {
  const [images, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [term, setTerm] = useState('');
  const [perPage, setPerPage] = useState();
  useEffect(() => {
    setTimeout(() => {
      axios({
        url: `https://pixabay.com/api/?key=21437647-4652ee9a0fdba064aa4b23c20&q=${term}&image_type=photo&pretty=true&per_page=${perPage}`,
      })
        .then((res) => {
          //console.log(res);
          setImage(res.data.hits);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
        });
    }, 1000);
  }, [term, perPage]);

  return (
    <div className="App mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />
      <div className="flex justify-end mr-5 mb-3">
        <DropdownComponent
          perPageImage={(val) => {
            console.log('App ', val);
            setPerPage(val);
          }}
        ></DropdownComponent>
      </div>
      {!isLoading && images.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
      )}

      <div className="flex justify-center">
        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-4 justify-center gap-1">
            {images.map((image) => (
              <ImageCard key={image.id} image={image}></ImageCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
