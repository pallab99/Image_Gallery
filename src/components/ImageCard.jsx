const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mr-2 ml-2 mb-2 flex flex-col">
      <div className="photo">
      <img src={image.webformatURL} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="px-4 py-4 flex flex-col">
        <div className="font-bold text-purple-500 text-xl mb-2 flex flex-row">
          Photo By {image.user}
        </div>
        <ul>
          <li>
            <strong>Views:</strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads:</strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes:</strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="tags flex mb-4 flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className=" bg-gray-200 rounded-2xl mx-1 px-2 py-1 text-center my-2 text-ellipsis text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
