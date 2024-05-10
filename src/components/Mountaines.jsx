import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Mountains = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`https://api.pexels.com/v1/search?query=mountains&per_page=50`, {
          headers: {
            Authorization: 'swlsl6rvkDuEgQrm6RpduRpBHxrjN7JqsB94tGNy0D8N6DNly7QfatLL'
          }
        });
        setImages(response.data.photos);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="Container">
    <div className='Container_mountains'>
        <div>
          <h3 className='heading'>The higher you climb, the better the view</h3>
        </div>
        
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="gallery">
           <div>
          <h3 className='title'>Mountain Pictures</h3>
        </div>
          {images.map((image) => (
            <img className='home_image zoom-effect'
              key={image.id}
              src={image.src.medium}
              alt={image.photographer}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Mountains;
