import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './index.scss';
import S01 from '../../components/home-new/S01';
import S02 from '../../components/home-new/S02';
import S03 from '../../components/home-new/S03';
import S05 from '../../components/home/S05';
import S06 from '../../components/home/S06';
import waterDrop from '../../assets/images/home/water.png';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  return (
    <>
      <div className="dew">
        <img src={waterDrop} alt="물방울" />
      </div>
      <S01 />
      <S02 />
      <S03 />
      <S05 />
      <S06 />
    </>
  );
};

export default Home;
