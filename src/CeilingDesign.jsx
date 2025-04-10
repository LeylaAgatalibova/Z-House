import React, { useState, useEffect, useRef } from 'react';
import './WallArts.css'; // Aynı CSS dosyasını kullanabilirsin

const images = [
  'https://5.imimg.com/data5/SELLER/Default/2024/3/399423050/VJ/KV/HX/32017596/false-ceiling-1000x1000.jpeg',
  'https://assets-news.housing.com/news/wp-content/uploads/2022/02/18172550/Latest-ceiling-designs6.jpg',
  'https://cdn.shopify.com/s/files/1/1974/3465/collections/TRA100-Sharp.jpg?v=1504639618',
  'https://i.pinimg.com/564x/0e/23/44/0e234461dbb4ae7a666293c9dfd432d1.jpg',
  'https://i.pinimg.com/564x/7b/1b/d1/7b1bd1b792d16083de7ffb0b119b9c25.jpg',
  'https://i.pinimg.com/564x/73/39/ad/7339ad733697f9fd283ff5c0d9deb356.jpg',
  'https://i.pinimg.com/564x/89/7e/7f/897e7f02c8e7b750f68718a346bb4975.jpg',
  'https://i.pinimg.com/564x/7e/45/ac/7e45ac27ca1a01c15ea1c3a8f2a60243.jpg',
  'https://i.pinimg.com/564x/01/e6/50/01e6503f5dd3197c25b5fdbe2d9c7a43.jpg',
  'https://assets-news.housing.com/news/wp-content/uploads/2022/02/08132215/2-1.jpg',
  'https://assets-news.housing.com/news/wp-content/uploads/2022/02/18171848/Latest-ceiling-designs2.jpg',
  'https://assets-news.housing.com/news/wp-content/uploads/2022/02/08132531/5-1.jpg'

  // Devamını ekleyebilirsin
];

const CeilingDesign = () => {
  const [gridType, setGridType] = useState('medium');
  const imgRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    imgRefs.current.forEach(img => {
      if (img) observer.observe(img);
    });

    return () => {
      imgRefs.current.forEach(img => {
        if (img) observer.unobserve(img);
      });
    };
  }, []);

  return (
    <div className="wallarts-page">
      <div className="wallarts-hero ceiling-hero">
        <div className="wallarts-hero-overlay">
          <p className="hero-subtitle">elegant. modern. inspiring.</p>
          <h1 className="hero-title">Ceiling Design</h1>
        </div>
      </div>

      <div className="column-selector">
        <div className="view-options">
          <button
            onClick={() => setGridType('large')}
            className={`view-btn two-box ${gridType === 'large' ? 'active' : ''}`}
            title="2 kolon görünüm"
          ></button>
          <button
            onClick={() => setGridType('small')}
            className={`view-btn six-box ${gridType === 'small' ? 'active' : ''}`}
            title="6 kolon görünüm"
          ></button>
        </div>
      </div>

      <div className={`gallery-grid ${gridType}`}>
        {images.map((src, index) => (
          <img
            key={index}
            ref={el => (imgRefs.current[index] = el)}
            src={src}
            alt={`Ceiling ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
};

export default CeilingDesign;
