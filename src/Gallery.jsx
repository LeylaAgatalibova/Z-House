// // import React, { useRef, useState } from 'react';
// // import './Gallery.css';

// // const Gallery = () => {
// //   const containerRef = useRef(null);
// //   const isDraggingRef = useRef(false);
// //   const [sliderPosition, setSliderPosition] = useState(50);

// //   const handleMouseDown = () => {
// //     isDraggingRef.current = true;
// //   };

// //   const handleMouseUp = () => {
// //     isDraggingRef.current = false;
// //   };

// //   const handleMouseMove = (e) => {
// //     if (!isDraggingRef.current) return;
// //     const bounds = containerRef.current.getBoundingClientRect();
// //     const position = ((e.clientX - bounds.left) / bounds.width) * 100;
// //     setSliderPosition(Math.max(0, Math.min(100, position)));
// //   };

// //   return (
// //     <div
// //       className="before-after-container"
// //       ref={containerRef}
// //       onMouseMove={handleMouseMove}
// //       onMouseLeave={handleMouseUp}
// //       onMouseUp={handleMouseUp}
// //       onTouchMove={(e) => handleMouseMove(e.touches[0])}
// //       onTouchEnd={handleMouseUp}
// //     >
// //       <img
// //         src="https://images.squarespace-cdn.com/content/v1/551b0ebce4b0d35570ce6f0b/1622572988675-8G7VFSIPA5XQZNXDPKRJ/16-043-23+Rear+Ext+Over+Fire+Pit.jpg?format=2500w"
// //         alt="Before"
// //         className="before-image"
// //       />
// //       <div
// //         className="after-image-wrapper"
// //         style={{ width: `${sliderPosition}%` }}
// //       >
// //         <img
// //           src="https://www.contemporist.com/wp-content/uploads/2024/07/before-photo-apartment-renovation-020724-1218-03.jpg"
// //           alt="After"
// //           className="after-image"
// //         />
        
// //       </div>

// //       <div
// //         className="slider-handle"
// //         style={{ left: `${sliderPosition}%` }}
// //         onMouseDown={handleMouseDown}
// //         onTouchStart={() => (isDraggingRef.current = true)}
// //       >
// //         <div className="slider-icon">⇆</div>
// //       </div>

// //       <div className="label before-label">Before</div>
// //       <div className="label after-label">After</div>
// //     </div>
// //   );
// // };

// // export default Gallery;
// import React, { useRef, useState } from 'react';
// import './Gallery.css';

// const Gallery = () => {
//   const containerRef1 = useRef(null);
//   const containerRef2 = useRef(null);
//   const isDraggingRef1 = useRef(false);
//   const isDraggingRef2 = useRef(false);

//   const [sliderPosition1, setSliderPosition1] = useState(50);
//   const [sliderPosition2, setSliderPosition2] = useState(50);

//   const handleMouseMove = (e, ref, setSliderPosition, isDraggingRef) => {
//     if (!isDraggingRef.current) return;
//     const bounds = ref.current.getBoundingClientRect();
//     const position = ((e.clientX - bounds.left) / bounds.width) * 100;
//     setSliderPosition(Math.max(0, Math.min(100, position)));
//   };

//   const handleMouseDown = (isDraggingRef) => {
//     isDraggingRef.current = true;
//   };

//   const handleMouseUp = (isDraggingRef) => {
//     isDraggingRef.current = false;
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', padding: '40px 0' }}>
//       {/* SLIDER 1 */}
//       <div
//         className="before-after-container"
//         ref={containerRef1}
//         onMouseMove={(e) => handleMouseMove(e, containerRef1, setSliderPosition1, isDraggingRef1)}
//         onMouseLeave={() => handleMouseUp(isDraggingRef1)}
//         onMouseUp={() => handleMouseUp(isDraggingRef1)}
//         onTouchMove={(e) => handleMouseMove(e.touches[0], containerRef1, setSliderPosition1, isDraggingRef1)}
//         onTouchEnd={() => handleMouseUp(isDraggingRef1)}
//       >
//         <img
//           src="https://images.squarespace-cdn.com/content/v1/551b0ebce4b0d35570ce6f0b/1622572988675-8G7VFSIPA5XQZNXDPKRJ/16-043-23+Rear+Ext+Over+Fire+Pit.jpg?format=2500w"
//           alt="Before"
//           className="before-image"
//         />
//         <div
//           className="after-image-wrapper"
//           style={{ width: `${sliderPosition1}%` }}
//         >
//           <img
//             src="https://www.contemporist.com/wp-content/uploads/2024/07/before-photo-apartment-renovation-020724-1218-03.jpg"
//             alt="After"
//             className="after-image"
//           />
//         </div>
//         <div
//           className="slider-handle"
//           style={{ left: `${sliderPosition1}%` }}
//           onMouseDown={() => handleMouseDown(isDraggingRef1)}
//           onTouchStart={() => handleMouseDown(isDraggingRef1)}
//         >
//           <div className="slider-icon">⇆</div>
//         </div>
//         <div className="label before-label">Before</div>
//         <div className="label after-label">After</div>
//       </div>

//       {/* SLIDER 2 */}
//       <div
//         className="before-after-container"
//         ref={containerRef2}
//         onMouseMove={(e) => handleMouseMove(e, containerRef2, setSliderPosition2, isDraggingRef2)}
//         onMouseLeave={() => handleMouseUp(isDraggingRef2)}
//         onMouseUp={() => handleMouseUp(isDraggingRef2)}
//         onTouchMove={(e) => handleMouseMove(e.touches[0], containerRef2, setSliderPosition2, isDraggingRef2)}
//         onTouchEnd={() => handleMouseUp(isDraggingRef2)}
//       >
//         <img
//           src="https://i0.wp.com/koloapp.in/magazine/wp-content/uploads/2022/07/image19-16.png?fit=535%2C564&ssl=1"
//           alt="Before"
//           className="before-image"
//         />
//         <div
//           className="after-image-wrapper"
//           style={{ width: `${sliderPosition2}%` }}
//         >
//           <img
//             src="https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-593632.webp?v=1730566912&width=1000"
//             alt="After"
//             className="after-image"
//           />
//         </div>
//         <div
//           className="slider-handle"
//           style={{ left: `${sliderPosition2}%` }}
//           onMouseDown={() => handleMouseDown(isDraggingRef2)}
//           onTouchStart={() => handleMouseDown(isDraggingRef2)}
//         >
//           <div className="slider-icon">⇆</div>
//         </div>
//         <div className="label before-label">Before</div>
//         <div className="label after-label">After</div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;
import React, { useRef, useState } from 'react';
import './Gallery.css';

const BeforeAfter = ({ beforeSrc, afterSrc }) => {
  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseDown = () => {
    isDraggingRef.current = true;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const bounds = containerRef.current.getBoundingClientRect();
    const position = ((e.clientX - bounds.left) / bounds.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <div
      className="before-after-container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
      onTouchMove={(e) => handleMouseMove(e.touches[0])}
      onTouchEnd={handleMouseUp}
    >
      <img src={beforeSrc} alt="Before" className="before-image" />
      <div className="after-image-wrapper" style={{ width: `${sliderPosition}%` }}>
        <img src={afterSrc} alt="After" className="after-image" />
      </div>
      <div
        className="slider-handle"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={() => (isDraggingRef.current = true)}
      >
        <div className="slider-icon">⇆</div>
      </div>
      <div className="label before-label">Before</div>
      <div className="label after-label">After</div>
    </div>
  );
};

const Gallery = () => {
  return (
    
    <div style={{ display: 'grid', gap: '60px', padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px', fontWeight: 'bold' }}>
        Gallery
      </h2>
      <BeforeAfter
        beforeSrc="https://images.squarespace-cdn.com/content/v1/551b0ebce4b0d35570ce6f0b/1622572988675-8G7VFSIPA5XQZNXDPKRJ/16-043-23+Rear+Ext+Over+Fire+Pit.jpg?format=2500w"
        afterSrc="https://www.contemporist.com/wp-content/uploads/2024/07/before-photo-apartment-renovation-020724-1218-03.jpg"
      />
      <BeforeAfter
        beforeSrc="https://images.squarespace-cdn.com/content/v1/551b0ebce4b0d35570ce6f0b/1622572988675-8G7VFSIPA5XQZNXDPKRJ/16-043-23+Rear+Ext+Over+Fire+Pit.jpg?format=2500w"
        afterSrc="https://www.kulgrilles.com/cdn/shop/articles/luxury-home-interior-design-modern-entrance-hall-with-panoramic-windows-and-stone-wall-1.jpg?v=1710873338&width=300"
      />
      <BeforeAfter
        beforeSrc="https://realcraft.com/cdn/shop/articles/point3d-commercial-imaging-ltd-5M5NGUZEpjs-unsplash-min_1600x.jpg?v=1653076425"
        afterSrc="https://cdn.homedit.com/wp-content/uploads/2021/08/after-exterior-facelift.jpg"
      />
      <BeforeAfter
        beforeSrc="https://www.anezkaarts.com/cdn/shop/files/serenity-set-of-2-canvas-prints-chic-luxury-fine-art-set-596964.webp?v=1730566749&width=1000"
        afterSrc="https://decormatters-blog-uploads.s3.amazonaws.com/archania_design_af57292139.jpg"
      />
      <BeforeAfter
        beforeSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrPiBPDKmEfkyCn5lEk4yGeboey-hhEgeOg&s"
        afterSrc="https://i0.wp.com/koloapp.in/magazine/wp-content/uploads/2022/07/7-Luxury-Home-With-Three-Levels-For-Life-Work-and-Leisure.png?fit=1600%2C1200&ssl=1"
      />
      <BeforeAfter
        beforeSrc="https://realcraft.com/cdn/shop/articles/point3d-commercial-imaging-ltd-5M5NGUZEpjs-unsplash-min_1600x.jpg?v=1653076425"
        afterSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0zWS5Wd_gWutwFJOILZsMLAY3SSEqiPuZcTrYpImnlkS744NTcFii4v418hY-QPITh9Q&usqp=CAU"
      />
    </div>
  );
};

export default Gallery;

