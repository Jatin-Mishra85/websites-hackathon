// src/pages/HomePage.jsx
import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection"; // HeroSection is now a carousel
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import FeaturedProducts from "../../components/FeatureProduct/FeaturedProducts";
import CallToAction from "../../components/CallToAction/CallToAction";
import "./HomePage.css"; // For HomePage specific styles

function HomePage() {
  // Mock data for FeaturedProducts demonstration
  const products = [
    {
      id: 1,
      name: "Classic Tee",
      image: "https://assets.ajio.com/medias/sys_master/root/20240813/dc2G/66baf04e1d763220fa74a31e/-473Wx593H-410409045-201-MODEL.jpg",
      price: "$29.99",
    },
    {
      id: 2,
      name: "Denim Jacket",
      image: "https://img.kwcdn.com/product/fancy/02b249c3-7394-4d9f-8902-d49d4790c77a.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
      price: "$59.99",
    },
    {
      id: 3,
      name: "Stylish Hoodie",
      image: "https://img.joomcdn.net/2373cc83f10e3dea77c8d42746db074969e2ec4a_original.jpeg",
      price: "$49.99",
    },
    {
      id: 4,
      name: "Cargo Joggers",
      image: "https://tigc.in/cdn/shop/files/1022-RPCRGJG01-08_1.jpg?v=1727782137",
      price: "$39.99",
    },
    {
      id: 5,
      name: "Urban Crop Hoodie",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRarziLF5gmr3t7wt9dUlqOaMOMkyaFCmn9vQ&s",
      price: "$44.99",
    },
    {
      id: 6,
      name: "T-shirt",
      image: "https://www.thelabelbar.com/_next/image?url=https%3A%2F%2Fthelabelbar.s3.ap-south-1.amazonaws.com%2Fupload-dir%2FTLBTLB01103.jpg&w=1080&q=100",
      price: "$19.99",
    },
    {
      id: 7,
      name: "Leather Biker Jacket",
      image: "https://i.pinimg.com/564x/aa/60/64/aa60645206a79daa222b6cc0d5eea3a1.jpg",
      price: "$89.99",
    },
    {
      id: 8,
      name: "Tie-Dye Oversized Tee",
      image: "https://media.boohoo.com/i/boohoo/bmm11643_black_xl/male-black-oversized-tie-dye-t-shirt/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
      price: "$27.99",
    },
    {
      id: 9,
      name: "High Waist Jeans",
      image: "https://d1it09c4puycyh.cloudfront.net/920x1300/catalog/product/2/0/20097-BLUE_1.jpeg",
      price: "$49.99",
    },
    {
      id: 10,
      name: "Summer Linen Shirt",
      image: "https://m.media-amazon.com/images/I/81wVugz8tkL._UY350_.jpg",
      price: "$34.99",
    },
    {
      id: 11,
      name: "Oversized Check Shirt",
      image: "https://assets.ajio.com/medias/sys_master/root/20231108/Bo4V/654a9978ddf7791519771c05/-473Wx593H-466783659-white-MODEL.jpg",
      price: "$39.99",
    },
    {
      id: 12,
      name: "Puffer Jacket",
      image: "https://assets.ajio.com/medias/sys_master/root/20240617/fNMl/667022b91d763220fac57600/-473Wx593H-442587884-black-MODEL5.jpg",
      price: "$99.99",
    },
    {
      id: 13,
      name: "Back Print Hoodie",
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRO_O9_PWn_7_pwIxl7qe2KXy0HIElJAd0bWW-s17AbZa_M-dfw5onkEXeGyPGxteVfU3pIY65Ly1Hf_QfS8pjSSP2YGvDMiTmBBAatdQTfv0HhN51tjF5N",
      price: "$54.99",
    },
    {
      id: 14,
      name: "Knitted Crop Sweater",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnhKgzhz3a-22Uz0K3l6fGRFJYGxffxBYhqLEdb9z4XnsA-7KpHIP5r-e6hA-6mt_SHRg&usqp=CAU",
      price: "$45.99",
    },
    {
      id: 15,
      name: "Black Polo T-shirt",
      image: "https://www.technosport.in/cdn/shop/files/OR81Black_1.jpg?v=1738840572",
      price: "$24.99",
    }
  ];

  const socialMediaLinks = [
    { name: "Instagram", url: "https://instagram.com/jatin__1708" },
    { name: "Facebook", url: "https://facebook.com/yourbrand" },
    { name: "Twitter", url: "https://twitter.com/yourbrand" }, // Added TikTok
    { name: "YouTube", url: "https://youtube.com/yourbrand" }, // Added YouTube
  ];

  return (
    <div className="home-page">
      {/* HeroSection is now a self-contained carousel, no props needed here */}
      <HeroSection />

      <section className="home-section">
        <h2 className="section-heading">Latest Drops</h2>
        <FeaturedProducts products={products} />
      </section>

      <section className="home-section">
        <h2 className="section-heading">Connect With Us</h2>
        <SocialLinks links={socialMediaLinks} />
      </section>

      <CallToAction
        heading="Never Miss an Update!"
        description="Subscribe to our newsletter for exclusive offers and new arrivals."
        buttonText="Subscribe Now"
      />
    </div>
  );
}

export default HomePage;
