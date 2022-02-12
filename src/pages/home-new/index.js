import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './index.scss';
import S01 from '../../components/home-new/S01';
import waterDrop from '../../assets/images/home/water.png';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  return (
    <>
      <div className="dew">
        <img src={waterDrop} alt="물방울" />
      </div>
      <S01 />
    </>
  );
};

export default Home;
