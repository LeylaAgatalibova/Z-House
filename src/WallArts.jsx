import React, { useState, useEffect, useRef } from 'react';
import './WallArts.css';

const images = [
    'https://www.anezkaarts.com/cdn/shop/files/SakuraZen_4.webp?v=1743624829&width=600',
    'https://www.anezkaarts.com/cdn/shop/files/SakuraBloom_4.webp?v=1743623516&width=600',
    'https://www.anezkaarts.com/cdn/shop/files/Sakura_Blossom_6.webp?v=1743620471&width=600',
    'https://www.anezkaarts.com/cdn/shop/files/Launge_Canvas_2.webp?v=1742841059&width=600',
    'https://www.anezkaarts.com/cdn/shop/files/Zen_Canvas_1.webp?v=1742413845&width=600',
    'https://www.anezkaarts.com/cdn/shop/files/Bloom_27_2.webp?v=1742307721&width=600',
    'https://www.anezkaarts.com/cdn/shop/files/Morning_Light_Blk.webp?v=1741364739&width=600',
    'https://www.anezkaarts.com/cdn/shop/files/60_1f74bf36-19a3-4583-ba6b-6e19bf80c5b3.webp?v=1738780614&width=600',
    'https://www.anezkaarts.com/cdn/shop/files/Organic_Charm_1.webp?v=1738155798&width=600',
    'https://www.anezkaarts.com/cdn/shop/files/Retreat_6.webp?v=1741370361&width=600',
    'https://www.anezkaarts.com/cdn/shop/files/Sanctuary_Botanical_Print_in_Tan.webp?v=1741640494&width=600',
    'https://www.anezkaarts.com/cdn/shop/files/Majestic_minimalist_painting_Anez_Ka_2.webp?v=1739703508&width=600'
  
    // daha fazla ekleyebilirsin
  ];
function WallArts() {
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
      {
        threshold: 0.1,
      }
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
      <div className="wallarts-hero">
        <div className="wallarts-hero-overlay">
          <p className="hero-subtitle">timeless. sophisticated. effortlessly chic.</p>
          <h1 className="hero-title">All Wall Art</h1>
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
            alt={`Wall Art ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
}

export default WallArts;
