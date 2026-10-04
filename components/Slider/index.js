"use client";

import { useEffect, useState, useRef, useCallback } from 'react';
import "../../styles/slider.scss";
import Link from "next/link";
import { ArrowRight, Sparkles, Award, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    img: "/banner/1.webp",
    badge: "Paramount Academy Jaora",
    title: "Shaping Bright Futures with Quality Education",
    desc: "We nurture young minds with modern learning, discipline and ethical values to prepare them for global excellence.",
    highlight: "CBSE Curriculum • Holistic Growth",
  },
  {
    img: "/banner/3.jpeg",
    badge: "Modern Campus Experience",
    title: "Learning Beyond Books & Classrooms",
    desc: "A vibrant environment combining STEM laboratories, sports arenas, digital smart classes, and arts.",
    highlight: "Activity Based Learning • Sports & Arts",
  },
  {
    img: "/banner/4.jpg",
    badge: "Celebrating Every Child",
    title: "Inspiring Talent, Leadership & Confidence",
    desc: "From state-level sports to grand annual festivals, every child discovers their passion and shines.",
    highlight: "100% Student Participation • Safe Campus",
  },
];

const SLIDE_DURATION = 6000; // 6 seconds per slide

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const timerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (idx) => {
    setCurrentSlide(idx);
  };

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide, isPaused, currentSlide]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
  };

  return (
    <div
      className="custom-hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Floating Badge */}
      <div className="hero-seal-badge">
        <div className="hero-seal-inner">
          <Award size={18} className="hero-seal-icon" />
          <span>Excellence in Education</span>
        </div>
      </div>

      {/* Slides Container */}
      <div className="custom-slider-track">
        {slides.map((s, i) => {
          const isActive = i === currentSlide;
          return (
            <div
              key={i}
              className={`custom-slide-item ${isActive ? "slide-active" : "slide-inactive"}`}
              aria-hidden={!isActive}
            >
              {/* Background with Ken Burns Zoom */}
              <div className="slide-bg-container">
                <img
                  src={s.img}
                  className={`slide-banner-img ${isActive ? "ken-burns-anim" : ""}`}
                  alt={s.title}
                />
                <div className="slide-banner-scrim" />
              </div>

              {/* Text Caption with Staggered Entrance */}
              {isActive && (
                <div className="custom-slide-caption">
                  <div className="cap-pill anim-stagger-1">
                    <Sparkles size={14} />
                    <span>{s.badge}</span>
                  </div>

                  <h1 className="cap-title anim-stagger-2">{s.title}</h1>

                  <p className="cap-desc anim-stagger-3">{s.desc}</p>

                  <div className="hero-feature-tags anim-stagger-4">
                    <span className="hero-tag">
                      <ShieldCheck size={13} /> {s.highlight}
                    </span>
                  </div>

                  <div className="heroButtons anim-stagger-5">
                    <Link href="/admission-enquiry" className="applyBtn">
                      <span>Enroll Now 2026-27</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link href="/facilities" className="exploreBtn">
                      <span>Explore Facilities</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Modern Slide Indicators with Progress Bar */}
      <div className="hero-indicators">
        {slides.map((_, idx) => {
          const isActive = idx === currentSlide;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => goToSlide(idx)}
              className={`hero-ind-btn ${isActive ? "active" : ""}`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <span className="ind-num">0{idx + 1}</span>
              <div className="ind-bar-track">
                <span
                  key={isActive ? `active-${currentSlide}` : `inactive-${idx}`}
                  className={`ind-bar-fill ${isActive && !isPaused ? "filling" : ""}`}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Nav Controls */}
      <button
        className="custom-nav-btn prev-btn"
        type="button"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        className="custom-nav-btn next-btn"
        type="button"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
};

export default Slider;