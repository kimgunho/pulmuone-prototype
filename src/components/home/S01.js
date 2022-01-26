import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import gsap from 'gsap';

import styles from './S01.module.scss';

import containerBg from '../../assets/images/home/section01_bg.jpg';
import pulmuoneWater from '../../assets/images/home/pulmuoneWater.png';

const cx = classNames.bind(styles);

function S01() {
  const titleRef = useRef();
  const pulmuoneWaterRef = useRef();

  useEffect(() => {
    gsap.to(titleRef.current, {
      opacity: 1,
      duration: 1,
    });

    gsap.to(pulmuoneWaterRef.current, {
      y: -50,
      duration: 1,
    });
  }, []);

  return (
    <div className={cx('container')}>
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
