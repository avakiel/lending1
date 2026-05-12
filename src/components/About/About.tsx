import React from 'react';
import './About.scss';
import { Button } from '../Button/Button';

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__gallery">
        <div className="about__gallery-img1"></div>
        <div className="about__gallery-img2"></div>
        <div className="about__gallery-container">
          <div className="about__gallery-img3"></div>
        </div>
      </div>
      <div className="about__main">
        <div className="about__main-title">About the Studio</div>
        <div className="about__main-text">
          We design modern residential and commercial spaces for clients who care about clear thinking,
          refined materials, and measurable results. From concept development to final delivery, our team
          shapes spaces that support daily life, strengthen brand presence, and stay relevant for years.
        </div>
        <Button containerClass="about__main-button" content="Learn More" arrowSide="right" />
      </div>
    </section>
  );
};
