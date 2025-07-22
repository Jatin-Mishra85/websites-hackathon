// src/pages/AboutPage.jsx
import React from 'react';
import './AboutPage.css'; // For AboutPage specific styles
import ownerImage from '../../assets/Images/owner.jpg'; // IMP: Correctly import the image

function AboutPage() {
  return (
    <div className="about-page">
      <h1 className="about-title">About Us</h1> {/* Changed title to "About Us" for general brand */}

      <section className="about-section founder-bio">
        <h2 className="section-heading">Our Founder: Jatin Mishra</h2>
        <div className="founder-content">
          {/* Use the imported image variable here */}
          <img src={ownerImage} alt="Jatin Mishra - Founder" className="founder-image" />
          <p className="founder-description">
            Jatin Mishra is a visionary entrepreneur who embarked on this journey with a passion for **unleashing raw, authentic self-expression through fashion**.
            Starting from humble beginnings, their dedication and innovative spirit have shaped this brand into a movement for those who dare to stand out.
            With a core belief in **"Embrace Your Inner Monster"**, Jatin Mishra continues to inspire and lead the brand forward, creating apparel that embodies attitude and fearless individuality.
          </p>
        </div>
      </section>

      {/* New Section: Our Vision & Philosophy */}
      <section className="about-section vision-philosophy">
        <h2 className="section-heading">Our Vision & Philosophy</h2>
        <div className="vision-content">
          <p>
            At JML, we believe fashion is a powerful form of self-expression. Our vision is to empower individuals to embrace their unique identity,
            defy norms, and wear their attitude with pride. We craft apparel that isn't just clothing, but a statement – a roar against the mundane.
            Our philosophy is rooted in **boldness, authenticity, and relentless innovation**. We are for the fearless, the unconventional, and those who walk their own path.
          </p>
          <p>
            Every stitch, every design, and every collection is infused with the spirit of the untamed. We challenge the status quo, pushing boundaries
            to deliver pieces that resonate with the raw energy of the new generation. This isn't just a brand; it's a rebellion in fabric.
          </p>
        </div>
      </section>

      <section className="about-section achievements">
        <h2 className="section-heading">Milestones & Achievements</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2018</div>
            <div className="timeline-content">
              <h3>Brand Launch</h3>
              <p>Officially launched with a small, rebellious collection of **graphic tees and distressed denim**, setting the tone for audacious style.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2020</div>
            <div className="timeline-content">
              <h3>First Major Collaboration</h3>
              <p>Partnered with **Sheryians Coding School**, founded by Harsh Vandana Sharma, for a highly successful limited-edition collection of tech-inspired dark aesthetic hoodies and accessories. This collaboration fused digital rebellion with street style.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2022</div>
            <div className="timeline-content">
              <h3>Reached 1 Million Customers</h3>
              <p>Celebrated a significant milestone, serving over a million satisfied customers worldwide who resonate with our unique vision and fearless designs.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2024</div>
            <div className="timeline-content">
              <h3>Launched "Raised Right" Collection</h3>
              <p>Introduced a new sustainable line, reflecting our commitment to ethical practices while maintaining our edgy, monster-like aesthetic.</p>
            </div>
          </div>
          {/* Additional Milestone */}
          <div className="timeline-item">
            <div className="timeline-date">2025</div>
            <div className="timeline-content">
              <h3>Global Expansion Initiative</h3>
              <p>Expanded our reach into international markets, bringing our unique brand of audacious fashion to a worldwide audience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: Community & Impact */}
      <section className="about-section community-impact">
        <h2 className="section-heading">Community & Impact</h2>
        <div className="community-content">
          <p>
            Beyond fashion, JML is a community. We actively engage with our audience, fostering a space where individuality is celebrated and creativity thrives.
            Through collaborations, events, and online platforms, we connect with like-minded individuals who share our passion for bold expression.
          </p>
          <p>
            We are committed to making a positive impact, not just in style, but in the world. Our "Raised Right" collection is a testament to our dedication
            to sustainable and ethical production, ensuring that our fierce fashion doesn't come at the cost of the planet or its people.
          </p>
        </div>
      </section>

      <section className="about-section testimonials">
        <h2 className="section-heading">What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"JML products are simply amazing! The quality is top-notch, and their designs are always on point – truly unique and bold. They make me feel powerful!"</p>
            <p className="testimonial-author">- Happy Customer A</p>
          </div>
          <div className="testimonial-card">
            <p>"I love the mission behind this brand. It's more than just products; it's a statement, a lifestyle for the fearless. JML truly gets the Gen-Z vibe."</p>
            <p className="testimonial-author">- Loyal Supporter B</p>
          </div>
          <div className="testimonial-card">
            <p>"The customer service is outstanding, and the shipping is always fast. Their pieces make me feel unstoppable. Highly recommend for anyone wanting to unleash their inner beast!"</p>
            <p className="testimonial-author">- Satisfied Buyer C</p>
          </div>
          {/* Additional Testimonial */}
          <div className="testimonial-card">
            <p>"Finally, a brand that understands true attitude. JML's designs are raw, authentic, and perfectly capture the rebellious spirit. My wardrobe is now complete."</p>
            <p className="testimonial-author">- Fashion Rebel D</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
