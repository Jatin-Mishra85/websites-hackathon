// src/components/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

// Data for carousel slides - Min 4, Max 8 slides as requested
const carouselSlidesData = [
  {
    id: 1,
    image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/25710198/2023/11/1/0f2de0e3-3b65-43e9-982d-f207ad22a9cd1698825413191FansArmyMenBlackPrintedPureCottonT-shirt1.jpg",
    name: "Shadow Reaper Tee",
    price: 1899,
    slogan: "Unleash Your Inner Demon. Style That Bites.",
    hashtags: ["#DarkAesthetic", "#EdgyVibes", "#Streetwear", "#GenZFashion"],
    ctaText: "Claim Yours",
    ctaLink: "/products/20" // Example link to a product detail page
  },
  {
    id: 2,
    image: "https://www.bonkerscorner.com/cdn/shop/files/Bonkerscorner_Looney_TunesRed_Varsity_Jacket_8.jpg?v=1734521285",
    name: "Inferno Hoodie",
    price: 3899,
    slogan: "Ignite Your Presence. Born From Chaos.",
    hashtags: ["#InfernoStyle", "#AttitudeWear", "#HoodieLife", "#RebelFashion"],
    ctaText: "Burn Bright",
    ctaLink: "/products/22"
  },
  {
    id: 3,
    image: "https://shopzters.com/cdn/shop/files/8V4A5858_740x.jpg?v=1682928177",
    name: "Venom Crop Top",
    price: 1599,
    slogan: "Poisonous Charm. Dare To Be Different.",
    hashtags: ["#VenomVibes", "#CropTopQueen", "#BoldAndBeautiful", "#FashionKiller"],
    ctaText: "Embrace The Edge",
    ctaLink: "/products/8"
  },
  {
    id: 4,
    image: "https://assets.ajio.com/medias/sys_master/root/20230314/6zGo/640f7398f997dde6f4f5f1e8/-1117Wx1400H-420435008-darkblue-MODEL2.jpg",
    name: "Abyss Jeans",
    price: 3299,
    slogan: "Dive Into Darkness. Unmatched Comfort.",
    hashtags: ["#DistressedDenim", "#DarkAesthetic", "#StreetStyle", "#UnleashYourself"],
    ctaText: "Conquer The Streets",
    ctaLink: "/products/11"
  },
  {
    id: 5,
    image: "https://img.kwcdn.com/product/fancy/02b249c3-7394-4d9f-8902-d49d4790c77a.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
    name: "Nightmare Jacket",
    price: 4999,
    slogan: "Fearless Style. Own The Night.",
    hashtags: ["#BikerJacket", "#LeatherLook", "#RebelHeart", "#FashionStatement"],
    ctaText: "Command Attention",
    ctaLink: "/products/32"
  },
  {
    id: 6,
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25072090/2023/9/30/6be97619-12fc-40c3-a91b-b5d5f13ba8181696013416163StormbornMenBlackPrintedRawEdgeT-shirt1.jpg",
    name: "Stormborn Tee",
    price: 1699,
    slogan: "Weather The Storm. Unleash Your Power.",
    hashtags: ["#GraphicTee", "#StormStyle", "#Unbreakable", "#UrbanWear"],
    ctaText: "Seize The Power",
    ctaLink: "/products/5"
  }
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlidesData.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlidesData.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlidesData.length) % carouselSlidesData.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const slide = carouselSlidesData[currentSlide];

  return (
    <div className="carousel-container">
      {/* Individual Slide */}
      <div className="carousel-slide">
        {/* The product image is now an <img> tag for better control */}
        <img src={slide.image} alt={slide.name} className="slide-background-image" />
        <div className="slide-overlay"></div> {/* For glass morphism effect over the image */}
        <div className="slide-content">
          <h1 className="slide-name anton">{slide.name}</h1>
          <p className="slide-slogan">{slide.slogan}</p>
          <p className="slide-price">₹{slide.price.toLocaleString()}</p>
          <div className="social-hashtags">
            {slide.hashtags.map((tag, index) => (
              <span key={index} className="hashtag">{tag}</span>
            ))}
          </div>
          <Link to={slide.ctaLink} className="slide-cta-button">
            {slide.ctaText} <i className="fas fa-arrow-right"></i> {/* Add an arrow icon */}
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="carousel-arrow prev" onClick={goToPrevSlide} aria-label="Previous Slide">
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="carousel-arrow next" onClick={goToNextSlide} aria-label="Next Slide">
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Navigation Dots */}
      <div className="carousel-dots">
        {carouselSlidesData.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
