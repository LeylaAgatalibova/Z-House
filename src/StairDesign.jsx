import React, { useState, useEffect, useRef } from 'react';
import './WallArts.css'; // Aynı CSS dosyasını kullanabiliriz

const images = [
  "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/11/11/0/dh2016_foyer-stairs-rail-front-door_v.jpg.rend.hgtvcom.791.1187.85.suffix/1447249140669.webp",
  "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2022/7/11/2/DOTY2022_Color-Pattern_Regan-Baker_Duboce-14.jpg.rend.hgtvcom.791.791.85.suffix/1657576787122.webp",
  "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2017/4/11/0/HUHH2017-Great-Estates_Atlanta-GA_3.jpg.rend.hgtvcom.791.527.85.suffix/1491918343762.webp",
  "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2013/4/24/4/CI-Farrow-And-Ball-The-Art-of-Color-pg194_sweeping-staircase-foyer_4x3.jpg.rend.hgtvcom.791.594.85.suffix/1400979524247.webp",
  "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2016/4/13/0/HUHH2016-Kids_Newport-Beach-CA_7.jpg.rend.hgtvcom.791.1187.85.suffix/1460570387162.webp",
  "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2014/2/28/2/hgtv-19-sh14-foyer_v.jpg.rend.hgtvcom.791.1055.85.suffix/1400989384140.webp",
  'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/7/17/0/DOTY2019_Kristina-Crestin_Northshore-Lakehouse_Stair.jpg.rend.hgtvcom.791.1187.85.suffix/1563374576353.webp',
  'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/4/5/1/HUHH2018-History_Dallas-TX_4.jpg.rend.hgtvcom.791.527.85.suffix/1522935720650.webp',
  'https://diy.sndimg.com/content/dam/images/diy/fullset/2014/2/28/1/DP_Karlusic-staircase-lights_s3x4.jpg.rend.hgtvcom.791.1055.85.suffix/1420853204535.webp',
  'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2022/7/13/0/DOTY2022_Drama_Haus-interior-Design_transformation-house-01.jpg.rend.hgtvcom.791.527.85.suffix/1657734408740.webp'
  // daha fazlası eklenebilir
];

function StairDesign() {
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
      <div className="wallarts-hero stair-hero">
        <div className="wallarts-hero-overlay">
          <p className="hero-subtitle">elegant. vertical. design.</p>
          <h1 className="hero-title">Stair Designs</h1>
        </div>
      </div>

      <div className="column-selector">
        <div className="view-options">
          <button
            onClick={() => setGridType('large')}
            className={`view-btn two-box ${gridType === 'large' ? 'active' : ''}`}
          ></button>
          <button
            onClick={() => setGridType('small')}
            className={`view-btn six-box ${gridType === 'small' ? 'active' : ''}`}
          ></button>
        </div>
      </div>

      <div className={`gallery-grid ${gridType}`}>
        {images.map((src, index) => (
          <img
            key={index}
            ref={el => (imgRefs.current[index] = el)}
            src={src}
            alt={`Stair ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
}

export default StairDesign;
