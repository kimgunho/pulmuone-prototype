import React, { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { gsap } from 'gsap';

import styles from './S01.module.scss';

import pulmuoneWater from '../../assets/images/home/s01/pulmuoneWater.png';

const cx = classNames.bind(styles);

const S01 = () => {
  const containerRef = useRef();
  const circleInnerRef = useRef();
  const titleRef = useRef();
  const bottleRef = useRef();

  useEffect(() => {
    introAnimation();
    scrollAnimation();
  }, []);

  const introAnimation = () => {
    gsap.from(titleRef.current, {
      opacity: 0,
      ease: 'power4.in',
      duration: 1,
    });

    gsap.from(bottleRef.current, {
      y: -80,
      duration: 0.5,
    });
  };

  const scrollAnimation = () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          pin: true,
          start: 'top top',
          end: 'bottom center',
        },
      })
      .to(circleInnerRef.current, { y: -window.innerHeight })
      .to('.dew', { display: 'block' }, '-=0.3');
  };

  return (
    <div ref={containerRef} className={cx('container')}>
      <div className={cx('circle')}>
        <div ref={circleInnerRef} className={cx('circleInner')}>
          <h2 ref={titleRef} className={cx('title')}>
            Natural
            <br />
            Mineral Water
          </h2>
          <img ref={bottleRef} className={cx('bottle')} src={pulmuoneWater} alt="풀무원샘물" />
        </div>
      </div>
    </div>
  );
};

export default S01;
