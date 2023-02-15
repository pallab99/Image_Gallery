const ImageCard = ({image}) => {
    const tags=image.tags.split(',')
    return (  
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
            <img src={image.webformatURL} alt="" className="w-full" />
            <div className="px-4 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                    Photo By {image.user}
                </div>
                <ul>
                    <li>
                        <strong>Views:</strong>{image.views}
                    </li>
                    <li>
                        <strong>Downloads:</strong>{image.downloads}
                    </li>
                    <li>
                        <strong>Likes:</strong>{image.likes}
                    </li>
                </ul>
            </div>
            <div className="tags flex mb-4">
                {
                    tags.map((tag,index) =>(
                        <span key={index} className="inline-block bg-gray-200 rounded-full mx-2 p-1">#{tag}</span>
                    ))
                }
            </div>
        </div>
    );
}
 
export default ImageCard;