import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import S01 from '../../components/home/S01';
import S02 from '../../components/home/S02';
import S03 from '../../components/home/S03';
import S04 from '../../components/home/S04';

import './index.scss';

import waterDrop from '../../assets/images/home/water.png';

function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const rangeRef = useRef();
  const waterDropRef = useRef();

  useEffect(() => {
    gsap.to(waterDropRef.current, {
      display: 'none',
      scrollTrigger: {
        trigger: rangeRef.current,
        start: 'bottom center',
        end: 'bottom center',
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <div ref={rangeRef}>
        <div className="waterDrop">
          <img ref={waterDropRef} src={waterDrop} alt="물방울" />
        </div>
        <S01 />
        <S02 />
        <S03 />
      </div>
      <S04 />
    </>
  );
}

export default Home;
