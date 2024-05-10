import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BeachImage from "../Assets/Beach.jpg";
import BirdsImage from "../Assets/birds.jpg";
import FoodImage from "../Assets/food.jpg";
import MountainsImage from "../Assets/mountains.jpg";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        let response;
        if (searchTerm.trim() === '') {
          response = await axios.get(`https://api.pexels.com/v1/curated?per_page=500`, {
            headers: {
              Authorization: 'swlsl6rvkDuEgQrm6RpduRpBHxrjN7JqsB94tGNy0D8N6DNly7QfatLL'
            }
          });
        } else {
          response = await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}&per_page=100`, {
            headers: {
              Authorization: 'swlsl6rvkDuEgQrm6RpduRpBHxrjN7JqsB94tGNy0D8N6DNly7QfatLL'
            }
          });
        }
        setImages(response.data.photos);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      setImages([]);
      setIsLoading(true);
    }
  };

  return (
    <div className='Container'>
      <div className='Container_1'>
        <div className='Container_2'>
          <div>
            <h3 className='heading'>Photographs open doors into the past, but they also allow a look into the future</h3>
          </div>
          <form onSubmit={handleSearch}>
            <input
              className='input_home'
              type="text"
              placeholder="Search images..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>
      </div>

      <div className='router_container'>
        <div className='container_row'>
          <div>
            <Link to="/beaches">
              <img className='card-image zoom-effect' src={BeachImage} alt='Beach-img' />
              <p className='text'>BEACH</p>
            </Link>
          </div>
          <div>
            <Link to="/birds">
              <img className='card-image zoom-effect' src={BirdsImage} alt='Birds-img' />
              <p className='text'>BIRDS</p>
            </Link>
          </div>
          <div>
            <Link to="/food">
              <img className='card-image zoom-effect' src={FoodImage} alt='Food-img' />
              <p className='text'>FOOD</p>
            </Link>
          </div>
          <div>
            <Link to="/mountains">
              <img className='card-image zoom-effect' src={MountainsImage} alt='Mountains-img' />
              <p className='text'>MOUNTAINS</p>
            </Link>
          </div>
        </div>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="gallery">
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

export default Gallery;
