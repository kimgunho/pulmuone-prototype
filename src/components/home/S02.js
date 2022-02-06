import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './S02.module.scss';

import background_sand from '../../assets/images/home/s02/background_sand.jpg';
import background_stone from '../../assets/images/home/s02/background_stone.jpg';
import leaf_left from '../../assets/images/home/s02/leaf_left.png';
import leaf_right from '../../assets/images/home/s02/leaf_right.png';
import leaf_bottom from '../../assets/images/home/s02/leaf_bottom.png';
import stone_first from '../../assets/images/home/s02/stone01.png';
import stone_second from '../../assets/images/home/s02/stone02.png';
import stone_third from '../../assets/images/home/s02/stone03.png';
import shape from '../../assets/images/home/s02/shape.svg';

const cx = classNames.bind(styles);

function S02() {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef();
  const stoneBgRef = useRef();
  const titleRef = useRef();
  const limiterRef = useRef();
  const leafLeftRef = useRef();
  const leafRightRef = useRef();
  const leafBottomRef = useRef();
  const shapeRef = useRef();
  const stoneFirstRef = useRef();
  const stoneSecondRef = useRef();
  const stoneThirdRef = useRef();

  useEffect(() => {
    repeatAnimation();
    scrollAnimation();
  }, []);

  const repeatAnimation = () => {
    gsap.fromTo(leafLeftRef.current, { rotate: 5 }, { rotate: 0, duration: 2, repeat: -1, yoyo: true });
    gsap.fromTo(leafRightRef.current, { rotate: 5 }, { rotate: 0, duration: 1, repeat: -1, yoyo: true });
    gsap.fromTo(leafBottomRef.current, { rotate: 5 }, { rotate: 0, duration: 3, repeat: -1, yoyo: true });
    gsap.fromTo(stoneFirstRef.current, { y: -10 }, { y: 10, duration: 1, repeat: -1, yoyo: true });
    gsap.fromTo(stoneSecondRef.current, { y: 30 }, { y: -5, duration: 4, repeat: -1, yoyo: true });
    gsap.fromTo(stoneThirdRef.current, { y: -20 }, { y: 10, duration: 3, repeat: -1, yoyo: true });
  };

  const scrollAnimation = () => {
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top bottom',
        end: '300% top',
        scrub: true,
      },
    });

    titleTl
      .to(titleRef.current, {
        webkitFilter: 'blur(20px)',
        opacity: 0,
        y: 200,
        delay: 2,
      })
      .from(leafRightRef.current, {
        xPercent: 100,
      })
      .from(
        leafLeftRef.current,
        {
          xPercent: -100,
        },
        3,
      )
      .from(
        leafBottomRef.current,
        {
          yPercent: 100,
        },
        3,
      );

    const containerTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '500% top',
        scrub: true,
        pin: true,
      },
    });

    containerTl
      .to(
        stoneBgRef.current,
        {
          opacity: 1,
        },
        0.5,
      )
      .to(
        shapeRef.current,
        {
          opacity: 1,
        },
        0.5,
      )
      .to(limiterRef.current, {
        duration: 2,
        opacity: 1,
      })
      .to(
        leafLeftRef.current,
        {
          duration: 8,
          x: -window.innerWidth / 2,
        },
        3,
      )
      .to(
        leafRightRef.current,
        {
          duration: 8,
          x: window.innerWidth / 2,
        },
        3,
      )
      .to(
        leafBottomRef.current,
        {
          duration: 8,
          opacity: 0,
          y: window.innerWidth / 2,
        },
        3,
      )
      .to(
        stoneBgRef.current,
        {
          maskSize: '300vw',
          webkitMaskSize: '300vw',
          duration: 8,
          ease: 'slow',
        },
        3,
      )
      .from(
        stoneFirstRef.current,
        {
          duration: 8,
          yPercent: window.innerHeight,
        },
        3,
      )
      .from(
        stoneSecondRef.current,
        {
          duration: 6,
          yPercent: window.innerHeight,
        },
        3,
      )
      .from(
        stoneThirdRef.current,
        {
          duration: 4,
          yPercent: window.innerHeight,
        },
        3,
      );

    const scrollEndTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'center 40%',
        end: 'center top',
        scrub: true,
      },
    });

    scrollEndTl
      .to(
        stoneFirstRef.current,
        {
          duration: 10,
          delay: -2,
          yPercent: -100,
        },
        1,
      )
      .to(
        stoneThirdRef.current,
        {
          duration: 10,
          delay: -2,
          yPercent: -50,
        },
        1,
      );
  };

  return (
    <div ref={containerRef} className={cx('container')}>
      <h2 ref={titleRef} className={cx('title')}>
        2억년 화강암이<span className={cx('point')}>꽉 잡은 미네랄</span>
      </h2>

      <div ref={limiterRef} className={cx('limiter')}>
        <div className={cx('left')}>
          <p>
            풍부한 미네랄 <span className={cx('point')}>대보 화강암</span>
          </p>
        </div>
        <div className={cx('right')}>
          <p>
            빈틈없이 촘촘한 대보 화강암이
            <br />
            2억년 동안 골라 모은 미네랄 물방울
          </p>
        </div>
      </div>

      <div className={cx('objects')}>
        <img ref={leafLeftRef} draggable="false" className={cx(['leaf', 'left'])} src={leaf_left} alt="" />
        <img ref={leafRightRef} draggable="false" className={cx(['leaf', 'right'])} src={leaf_right} alt="" />
        <img ref={leafBottomRef} draggable="false" className={cx(['leaf', 'bottom'])} src={leaf_bottom} alt="" />

        <img ref={stoneFirstRef} draggable="false" className={cx(['stone', 'first'])} src={stone_first} alt="" />
        <img ref={stoneSecondRef} draggable="false" className={cx(['stone', 'second'])} src={stone_second} alt="" />
        <img ref={stoneThirdRef} draggable="false" className={cx(['stone', 'third'])} src={stone_third} alt="" />
      </div>

      <img ref={shapeRef} className={cx('shape')} src={shape} alt="" />
      <div ref={stoneBgRef} style={{ backgroundImage: `url(${background_stone})` }} className={cx(['background', 'stone'])} />
      <div style={{ backgroundImage: `url(${background_sand})` }} className={cx(['background', 'sand'])} />
    </div>
  );
}

export default S02;
