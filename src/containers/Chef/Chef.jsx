import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          {/* <p className="p__opensans"></p> */}
        </div>
        <p className="p__opensans"  style={{ textAlign: 'justify' }}> Welcome to Shadows & Savories! It's been an incredible journey bringing my culinary vision to life in the heart of Mumbai. Each dish on our menu is a labor of love, crafted with the finest ingredients and inspired by a passion for flavors and innovation. </p>
        <p className="p__opensans"  style={{ textAlign: 'justify' }}>Bon appétit!</p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;