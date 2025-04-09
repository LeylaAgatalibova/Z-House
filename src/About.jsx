import React, { useEffect, useRef, useState } from 'react';
import './About.css';

function About() {
  const heroRef = useRef();
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [visibleParagraphs, setVisibleParagraphs] = useState([false, false, false]);

  const paragraphRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeroVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (heroRef.current) heroObserver.observe(heroRef.current);

    const observers = [];

    paragraphRefs.forEach((ref, idx) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleParagraphs((prev) => {
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
            observer.unobserve(ref.current); // Bir kere gözükünce observer'ı durdur
          }
        },
        { threshold: 0.3 }
      );
      if (ref.current) observer.observe(ref.current);
      observers.push(observer);
    });

    return () => {
      if (heroRef.current) heroObserver.unobserve(heroRef.current);
      paragraphRefs.forEach((ref, idx) => {
        if (ref.current && observers[idx]) observers[idx].unobserve(ref.current);
      });
    };
  }, []);

  const paragraphs = [
    [
      "At FastMaster, we believe that true innovation lies in precision and craftsmanship.",
      "Every structure we build is a testament to our passion for quality and detail.",
    ],
    [
      "With years of industry experience, our team transforms ideas into architectural reality.",
      "We blend modern design with durable materials to ensure lasting value.",
    ],
    [
      "Our mission is to create spaces that inspire, empower, and endure.",
      "From concept to completion, your vision is at the heart of everything we do.",
    ],
  ];

  return (
    <div>
      <section className="abouthero">
        <div
          className={`abouthero-overlay fade-in-text ${isHeroVisible ? 'visible' : ''}`}
          ref={heroRef}
        >
          <h1>About Us</h1>
          <p>Expert Construction for Modern Living.</p>
        </div>
      </section>

      <section className="about-content">
        {paragraphs.map((para, idx) => (
          <div
            key={idx}
            ref={paragraphRefs[idx]}
            className={`about-paragraph fade-in-text ${visibleParagraphs[idx] ? 'visible' : ''}`}
            style={{ transitionDelay: `${idx * 0.3}s` }}
          >
            <p>{para[0]}</p>
            <p>{para[1]}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default About;
