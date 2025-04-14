// import React, { useEffect, useRef, useState } from 'react';
// import './Projects.css';

// const images = [
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrPiBPDKmEfkyCn5lEk4yGeboey-hhEgeOg&s',
//   'https://i0.wp.com/koloapp.in/magazine/wp-content/uploads/2022/07/7-Luxury-Home-With-Three-Levels-For-Life-Work-and-Leisure.png?fit=1600%2C1200&ssl=1',
//   'https://i0.wp.com/koloapp.in/magazine/wp-content/uploads/2022/07/image19-16.png?fit=535%2C564&ssl=1',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaDhPp9Dmkz65_B61hEeWfHLqzTg_jwXAOw&s',
//   'https://images.squarespace-cdn.com/content/v1/5ae984b0b40b9d82b9dfc4e6/1606753886831-J6WBPRY8MOLVR0VY3MLD/Carol-Place_HR-1%2C+Luxury+Show+Homes+Gallery%2C+Knight+Frank+Interiors.jpg?format=1000w',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0zWS5Wd_gWutwFJOILZsMLAY3SSEqiPuZcTrYpImnlkS744NTcFii4v418hY-QPITh9Q&usqp=CAU',
//   'https://realcraft.com/cdn/shop/articles/point3d-commercial-imaging-ltd-5M5NGUZEpjs-unsplash-min_1600x.jpg?v=1653076425',
//   'https://decormatters-blog-uploads.s3.amazonaws.com/ellenfleckinteriors1_4bbf217306.jpg',
//   'https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-593632.webp?v=1730566912&width=1000',
//   'https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-589057.webp?v=1730566912&width=1000',
//   'https://decormatters-blog-uploads.s3.amazonaws.com/archania_design_af57292139.jpg',
//   'https://www.anezkaarts.com/cdn/shop/files/serenity-set-of-2-canvas-prints-chic-luxury-fine-art-set-596964.webp?v=1730566749&width=1000',
//   'https://realcraft.com/cdn/shop/articles/point3d-commercial-imaging-ltd-5M5NGUZEpjs-unsplash-min_1600x.jpg?v=1653076425',
//   'https://www.kulgrilles.com/cdn/shop/articles/luxury-home-interior-design-modern-entrance-hall-with-panoramic-windows-and-stone-wall-1.jpg?v=1710873338&width=300',
//   'https://images.squarespace-cdn.com/content/v1/551b0ebce4b0d35570ce6f0b/1622572988675-8G7VFSIPA5XQZNXDPKRJ/16-043-23+Rear+Ext+Over+Fire+Pit.jpg?format=2500w',
// ];

// function Projects() {
//   const containerRef = useRef([]);
//   const [visibleItems, setVisibleItems] = useState([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = parseInt(entry.target.getAttribute('data-index'));
//             setVisibleItems((prev) => [...new Set([...prev, index])]);
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     containerRef.current.forEach((el) => el && observer.observe(el));

//     return () => {
//       containerRef.current.forEach((el) => el && observer.unobserve(el));
//     };
//   }, []);

//   return (
//     <>
//       <h2 className="projects-title">Our Projects</h2>
//       <div className="gallery-container">
//         {images.map((src, index) => (
//           <div
//             className={`gallery-item ${visibleItems.includes(index) ? 'visible' : ''}`}
//             key={index}
//             ref={(el) => (containerRef.current[index] = el)}
//             data-index={index}
//           >
//             <img src={src} alt={`Project ${index}`} />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Projects;



import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrPiBPDKmEfkyCn5lEk4yGeboey-hhEgeOg&s',
     'https://i0.wp.com/koloapp.in/magazine/wp-content/uploads/2022/07/7-Luxury-Home-With-Three-Levels-For-Life-Work-and-Leisure.png?fit=1600%2C1200&ssl=1',
     'https://i0.wp.com/koloapp.in/magazine/wp-content/uploads/2022/07/image19-16.png?fit=535%2C564&ssl=1',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaDhPp9Dmkz65_B61hEeWfHLqzTg_jwXAOw&s',
     'https://images.squarespace-cdn.com/content/v1/5ae984b0b40b9d82b9dfc4e6/1606753886831-J6WBPRY8MOLVR0VY3MLD/Carol-Place_HR-1%2C+Luxury+Show+Homes+Gallery%2C+Knight+Frank+Interiors.jpg?format=1000w',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0zWS5Wd_gWutwFJOILZsMLAY3SSEqiPuZcTrYpImnlkS744NTcFii4v418hY-QPITh9Q&usqp=CAU',
     'https://realcraft.com/cdn/shop/articles/point3d-commercial-imaging-ltd-5M5NGUZEpjs-unsplash-min_1600x.jpg?v=1653076425',
     'https://decormatters-blog-uploads.s3.amazonaws.com/ellenfleckinteriors1_4bbf217306.jpg',
     'https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-593632.webp?v=1730566912&width=1000',
     'https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-589057.webp?v=1730566912&width=1000',
    'https://decormatters-blog-uploads.s3.amazonaws.com/archania_design_af57292139.jpg',
    'https://www.anezkaarts.com/cdn/shop/files/serenity-set-of-2-canvas-prints-chic-luxury-fine-art-set-596964.webp?v=1730566749&width=1000',
    'https://realcraft.com/cdn/shop/articles/point3d-commercial-imaging-ltd-5M5NGUZEpjs-unsplash-min_1600x.jpg?v=1653076425',
    'https://www.kulgrilles.com/cdn/shop/articles/luxury-home-interior-design-modern-entrance-hall-with-panoramic-windows-and-stone-wall-1.jpg?v=1710873338&width=300',
   'https://images.squarespace-cdn.com/content/v1/551b0ebce4b0d35570ce6f0b/1622572988675-8G7VFSIPA5XQZNXDPKRJ/16-043-23+Rear+Ext+Over+Fire+Pit.jpg?format=2500w',
];

function Projects() {
  const containerRef = useRef([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    containerRef.current.forEach((el) => el && observer.observe(el));
    return () => {
      containerRef.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <>
      <h2 className="projects-title">Our Projects</h2>
      <div className="gallery-container">
        {images.map((src, index) => (
          <div
            className={`gallery-item ${visibleItems.includes(index) ? 'visible' : ''}`}
            key={index}
            ref={(el) => (containerRef.current[index] = el)}
            data-index={index}
            onClick={() => openModal(index)}
          >
            <img src={src} alt={`Project ${index}`} />
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img src={images[currentIndex]} alt="Enlarged view" className="modal-image" />
            <button className="modal-arrow left" onClick={prevSlide}>‹</button>
            <button className="modal-arrow right" onClick={nextSlide}>›</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;

