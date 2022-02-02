import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './S01.module.scss';

import containerBg from '../../assets/images/home/s01/section01_bg.jpg';
import pulmuoneWater from '../../assets/images/home/s01/pulmuoneWater.png';

const cx = classNames.bind(styles);

function S01() {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef();
  const titleRef = useRef();
  const pulmuoneWaterRef = useRef();

  useEffect(() => {
    // first load
    gsap.to(titleRef.current, {
      opacity: 1,
      duration: 1,
    });

    gsap.to(pulmuoneWaterRef.current, {
      y: -50,
      duration: 1,
    });

    S01Animation();
  }, []);

  const S01Animation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: '10px top',
        end: '250% top',
        scrub: true,
        markers: false,
        pin: true,
      },
    });

    tl.to(
      titleRef.current,
      {
        duration: 1,
        y: -300,
      },
      1,
    )
      .to(
        pulmuoneWaterRef.current,
        {
          duration: 1,
          yPercent: -150,
        },
        1,
      )
      .to('.waterDrop', {
        duration: 1,
        opacity: 1,
      });
  };

  return (
    <div ref={containerRef} className={cx('container')}>
      <div className={cx('circle')}>
        <h2 ref={titleRef} className={cx('title')}>
          Natural
          <br />
          Mineral Water
        </h2>
        <img ref={pulmuoneWaterRef} draggable="false" className={cx('pulmuoneWater')} src={pulmuoneWater} alt="풀무원 샘물" />
      </div>
      <div style={{ backgroundImage: `url(${containerBg})` }} className={cx('background')}></div>
    </div>
  );
}

export default S01;
