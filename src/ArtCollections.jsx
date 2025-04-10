import React from 'react';
import { Link } from 'react-router-dom';
import './ArtCollections.css';

const collections = [
  {
    title: 'Wall Arts',
    image: 'https://www.anezkaarts.com/cdn/shop/collections/all-wall-art-295124.jpg?v=1734191763&width=600',
    path: '/wall-arts',
  },
  {
    title: 'Ceiling Design',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/7/433151182/JB/DM/QU/63508961/pop-false-ceiling-designer-1000x1000.jpeg',
    path: '/ceiling-design',
  },
  {
    title: 'Stair Design',
    image: 'https://www.bhg.com/thmb/ue8wJLBrOKxTM09oQGTVZbHix9o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Decorative-staircase-102665702_5fsRa1jOayFBHUSTf3_sOn-797ef6a3f15543c28b375d7c44f4b83c.jpg',
    path: '/stair-design',
  },
  {
    title: 'Column Design',
    image: 'https://landmarksarchitects.com/wp-content/uploads/2024/02/Defining-space-with-internal-columns-26.02.2024.jpg',
    path: '/stair-design',
  },
  {
    title: 'Foyer Design',
    image: 'https://images.homify.com/v1448016634/p/photo/image/1132202/Foyer_1.jpg',
    path: '/stair-design',
  },
  {
    title: 'Floor Design',
    image: 'https://antonovich-design.com/uploads/page/2017/8/2017sxBDWDFqDzN0.jpg',
    path: '/stair-design',
  },
];

const ArtCollections = () => {
  return (
    <div className="collections-container">
      <h2 className="collections-title">Contemporary Wall Art Collections</h2>
      <div className="collections-grid">
  {collections.map((item, index) => (
    <Link to={item.path} key={index} className="collection-card">
      <img src={item.image} alt={item.title} className="collection-image" />
      <div className="collection-label">{item.title}</div>
    </Link>
  ))}
</div>

    </div>
  );
};

export default ArtCollections;
