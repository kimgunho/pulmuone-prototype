import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './index.scss';
import S01 from './S01';
import S02 from './S02';
import S03 from './S03';
import S04 from './S04';
import S05 from './S05';
import S06 from './S06';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  return (
    <>
      <div className="dew" />
      <S01 />
      <S02 />
      <S03 />
      <S04 />
      <S05 />
      <S06 />
    </>
  );
};

export default Home;
