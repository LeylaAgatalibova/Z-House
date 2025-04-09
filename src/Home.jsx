import React, { useState } from 'react';
import { useEffect, useRef } from 'react';

import './Home.css';

function Home() {
    const [selectedSlider, setSelectedSlider] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const closeModal = () => {
        setSelectedSlider(null);
        setCurrentIndex(0);
    };

    const goNext = () => {
        if (selectedSlider) {
            setCurrentIndex((prev) => (prev + 1) % selectedSlider.length);
        }
    };

    const goPrev = () => {
        if (selectedSlider) {
            setCurrentIndex((prev) =>
                prev === 0 ? selectedSlider.length - 1 : prev - 1
            );
        }
    }


    const rowsRef = useRef([]);

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

        rowsRef.current.forEach(row => {
            if (row) observer.observe(row);
        });

        return () => {
            if (rowsRef.current) {
                rowsRef.current.forEach(row => {
                    if (row) observer.unobserve(row);
                });
            }
        };
    }, []);

    ;

    const projectImages = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrPiBPDKmEfkyCn5lEk4yGeboey-hhEgeOg&s/300x200',
        'https://i0.wp.com/koloapp.in/magazine/wp-content/uploads/2022/07/7-Luxury-Home-With-Three-Levels-For-Life-Work-and-Leisure.png?fit=1600%2C1200&ssl=1/300x200',
        'https://i0.wp.com/koloapp.in/magazine/wp-content/uploads/2022/07/image19-16.png?fit=535%2C564&ssl=1/300x200',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaDhPp9Dmkz65_B61hEeWfHLqzTg_jwXAOw&s/300x200',
        'https://images.squarespace-cdn.com/content/v1/5ae984b0b40b9d82b9dfc4e6/1606753886831-J6WBPRY8MOLVR0VY3MLD/Carol-Place_HR-1%252C%2BLuxury%2BShow%2BHomes%2BGallery%252C%2BKnight%2BFrank%2BInteriors.jpg?format=1000w/300x200',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0zWS5Wd_gWutwFJOILZsMLAY3SSEqiPuZcTrYpImnlkS744NTcFii4v418hY-QPITh9Q&usqp=CAU/300x200',
        'https://realcraft.com/cdn/shop/articles/point3d-commercial-imaging-ltd-5M5NGUZEpjs-unsplash-min_1600x.jpg?v=1653076425/300x200',
        'https://www.kulgrilles.com/cdn/shop/articles/luxury-home-interior-design-modern-entrance-hall-with-panoramic-windows-and-stone-wall-1.jpg?v=1710873338&width=300/300x200',
        'https://images.squarespace-cdn.com/content/v1/551b0ebce4b0d35570ce6f0b/1622572988675-8G7VFSIPA5XQZNXDPKRJ/16-043-23+Rear+Ext+Over+Fire+Pit.jpg?format=2500w/300x200',
    ];
    const FirstProjectSlider = ['https://decormatters-blog-uploads.s3.amazonaws.com/ellenfleckinteriors1_4bbf217306.jpg',
        'https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-593632.webp?v=1730566912&width=1000/300x200',
        'https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-589057.webp?v=1730566912&width=1000',
        'https://www.anezkaarts.com/cdn/shop/files/serenity-set-of-2-canvas-prints-chic-luxury-fine-art-set-596964.webp?v=1730566749&width=1000',];
    const SecondProjectSlider = ['https://decormatters-blog-uploads.s3.amazonaws.com/Snapinsta_app_275777327_1041429770085974_7125702586252520560_n_1080_ea3a526140.jpg',
        'https://decormatters-blog-uploads.s3.amazonaws.com/Snapinsta_app_276315090_165540042475821_2989573417430569203_n_1080_9ca5fc08ee.jpg',
        'https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-589057.webp?v=1730566912&width=1000',
        'https://decormatters-blog-uploads.s3.amazonaws.com/Snapinsta_app_340800247_9646529808697990_4023999270967783257_n_1080_15c1e5fe48.jpg',];
    const UcuncuProjectSlider = ['https://decormatters-blog-uploads.s3.amazonaws.com/Snapinsta_app_309654322_185417247380810_9217624252094705983_n_1080_fe03c8f8bf.jpg',
        'https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-593632.webp?v=1730566912&width=1000/300x200',
        'https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-589057.webp?v=1730566912&width=1000',
        'https://www.anezkaarts.com/cdn/shop/files/serenity-set-of-2-canvas-prints-chic-luxury-fine-art-set-596964.webp?v=1730566749&width=1000',];
    const DorduncuProjectSlider = ['https://decormatters-blog-uploads.s3.amazonaws.com/archania_design_af57292139.jpg',
        'https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-593632.webp?v=1730566912&width=1000/300x200',
        'https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-589057.webp?v=1730566912&width=1000',
        'https://www.anezkaarts.com/cdn/shop/files/serenity-set-of-2-canvas-prints-chic-luxury-fine-art-set-596964.webp?v=1730566749&width=1000',];
    const BesinciProjectSlider = ['https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-589057.webp?v=1730566912&width=1000',
        'https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-593632.webp?v=1730566912&width=1000/300x200',
        'https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-589057.webp?v=1730566912&width=1000',
        'https://www.anezkaarts.com/cdn/shop/files/serenity-set-of-2-canvas-prints-chic-luxury-fine-art-set-596964.webp?v=1730566749&width=1000',];
    const AltinciProjectSlider = ['https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-589057.webp?v=1730566912&width=1000',
        'https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-593632.webp?v=1730566912&width=1000/300x200',
        'https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-589057.webp?v=1730566912&width=1000',
        'https://www.anezkaarts.com/cdn/shop/files/serenity-set-of-2-canvas-prints-chic-luxury-fine-art-set-596964.webp?v=1730566749&width=1000',];
    const YedinciProjectSlider = ['https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-589057.webp?v=1730566912&width=1000',
        'https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-593632.webp?v=1730566912&width=1000/300x200',
        'https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-589057.webp?v=1730566912&width=1000',
        'https://www.anezkaarts.com/cdn/shop/files/serenity-set-of-2-canvas-prints-chic-luxury-fine-art-set-596964.webp?v=1730566749&width=1000',];
    const SekizinciProjectSlider = ['https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-589057.webp?v=1730566912&width=1000',
        'https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-593632.webp?v=1730566912&width=1000/300x200',
        'https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-589057.webp?v=1730566912&width=1000',
        'https://www.anezkaarts.com/cdn/shop/files/serenity-set-of-2-canvas-prints-chic-luxury-fine-art-set-596964.webp?v=1730566749&width=1000',];
    const DokuzuncuProjectSlider = ['https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-589057.webp?v=1730566912&width=1000',
        'https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-593632.webp?v=1730566912&width=1000/300x200',
        'https://www.anezkaarts.com/cdn/shop/files/ultimate-harmony-modern-luxury-home-decor-589057.webp?v=1730566912&width=1000',
        'https://www.anezkaarts.com/cdn/shop/files/serenity-set-of-2-canvas-prints-chic-luxury-fine-art-set-596964.webp?v=1730566749&width=1000',];

    const sliders = [
        FirstProjectSlider,
        SecondProjectSlider,
        UcuncuProjectSlider,
        DorduncuProjectSlider,
        BesinciProjectSlider,
        AltinciProjectSlider,
        YedinciProjectSlider,
        SekizinciProjectSlider,
        DokuzuncuProjectSlider
    ];




    return (
        <>
            <section className="hero">
            <div
  className="hero-overlay fade-up"
  ref={(el) => (rowsRef.current[3] = el)}
>
  <h1>Reliable. Innovative. Built to Last.</h1>
  <p>Expert Construction for Modern Living.</p>
</div>

            </section>

            <section className="projects">
                <h2>Our Recent Projects</h2>

                {/* Satır 1 */}
                <div
                    className="project-row fade-up"
                    ref={(el) => (rowsRef.current[0] = el)}
                >
                    {projectImages.slice(0, 3).map((image, index) => {
                        const globalIndex = index;
                        return (
                            <div
                                key={index}
                                className="project-card"
                                onClick={() => {
                                    setSelectedSlider(sliders[globalIndex]);
                                    setCurrentIndex(0);
                                }}
                            >
                                <img src={image} alt={`Project ${globalIndex + 1}`} />
                                <div className="project-details">
                                    <p>Project {globalIndex + 1}</p>
                                    <p className="project-title">Project Title {globalIndex + 1}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>


                {/* Satır 2 */}
                <div
  className="project-row fade-up"
  ref={(el) => (rowsRef.current[1] = el)}
>
  {projectImages.slice(3, 6).map((image, index) => {
    const globalIndex = index + 3;
    return (
      <div
        key={index}
        className="project-card"
        onClick={() => {
          setSelectedSlider(sliders[globalIndex]);
          setCurrentIndex(0);
        }}
      >
        <img src={image} alt={`Project ${globalIndex + 1}`} />
        <div className="project-details">
          <p>Project {globalIndex + 1}</p>
          <p className="project-title">Project Title {globalIndex + 1}</p>
        </div>
      </div>
    );
  })}
</div>


<div
  className="project-row fade-up"
  ref={(el) => (rowsRef.current[2] = el)}
>
  {projectImages.slice(6, 9).map((image, index) => {
    const globalIndex = index + 6;
    return (
      <div
        key={index}
        className="project-card"
        onClick={() => {
          setSelectedSlider(sliders[globalIndex]);
          setCurrentIndex(0);
        }}
      >
        <img src={image} alt={`Project ${globalIndex + 1}`} />
        <div className="project-details">
          <p>Project {globalIndex + 1}</p>
          <p className="project-title">Project Title {globalIndex + 1}</p>
        </div>
      </div>
    );
  })}
</div>


                {/* ✅ Modal buraya */}
                {selectedSlider && (
                    <div className="modal">
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <img
                            className="modal-image"
                            src={selectedSlider[currentIndex]}
                            alt="Slider"
                        />
                        <button className="prev" onClick={goPrev}>
                            &#10094;
                        </button>
                        <button className="next" onClick={goNext}>
                            &#10095;
                        </button>
                    </div>
                )}
            </section>
        </>
    );
}

export default Home;
