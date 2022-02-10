import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './S01.module.scss';

import background from '../../assets/images/home/s01/background.jpg';
import pulmuoneWater from '../../assets/images/home/s01/pulmuoneWater.png';

const cx = classNames.bind(styles);

function S01() {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef();
  const titleRef = useRef();
  const pulmuoneWaterRef = useRef();

  useEffect(() => {
    autoAnimation();
    scrollAnimation();
  }, []);

  const autoAnimation = () => {
    gsap.from(titleRef.current, {
      opacity: 0,
      ease: 'power4.in',
      duration: 1,
    });

    gsap.from(pulmuoneWaterRef.current, {
      y: -100,
      duration: 1,
    });
  };

  const scrollAnimation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '200% top',
        scrub: true,
        pin: true,
        pinSpacing: 'margin',
      },
    });

    tl.to(
      titleRef.current,
      {
        duration: 2,
        yPercent: -500,
      },
      1,
    )
      .to(
        pulmuoneWaterRef.current,
        {
          duration: 2,
          yPercent: -150,
        },
        1,
      )
      .to(
        '.waterDrop',
        {
          display: 'block',
        },
        1.7,
      );
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
      <div style={{ backgroundImage: `url(${background})` }} className={cx('background')} />
    </div>
  );
}

export default S01;
