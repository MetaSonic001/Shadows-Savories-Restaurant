import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans" style={{ textAlign: 'justify' }}>Step into a realm where culinary artistry meets mysterious allure at Shadows & Savories. Nestled in the heart of Mumbai, our restaurant invites you to embark on a gastronomic journey like no other. Prepare to be enchanted by the interplay of flavors, textures, and aromas, as we unveil a world of delectable delights crafted to tantalize your senses.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Shadows & Savories has been a culinary gem in Mumbai. From our humble beginnings, we've grown into a renowned dining destination, blending innovative cuisine with impeccable service. We're grateful for our loyal patrons and talented team who've made our journey unforgettable.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;