import { Link } from 'react-router-dom';
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
import shape from '../../assets/images/home/s02/shape.png';

const cx = classNames.bind(styles);

function S02() {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef();
  const stoneBgRef = useRef();
  const titleRef = useRef();
  const limiterRef = useRef();
  const limiterRight_firstRef = useRef();
  const limiterRight_secondRef = useRef();
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
    gsap.fromTo(leafLeftRef.current, { rotateY: 5 }, { rotateY: 20, duration: 5, repeat: -1, yoyo: true });
    gsap.fromTo(leafRightRef.current, { rotateY: 2 }, { rotateY: 10, duration: 4, repeat: -1, yoyo: true });
    gsap.fromTo(leafBottomRef.current, { rotateX: 2 }, { rotateX: 20, duration: 6, repeat: -1, yoyo: true });
    gsap.fromTo(stoneFirstRef.current, { y: -2 }, { y: 4, duration: 3, repeat: -1, yoyo: true });
    gsap.fromTo(stoneSecondRef.current, { y: 1 }, { y: -3, duration: 4, repeat: -1, yoyo: true });
    gsap.fromTo(stoneThirdRef.current, { y: -2 }, { y: 5, duration: 3, repeat: -1, yoyo: true });
  };

  const scrollAnimation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '500% top',
        scrub: true,
        pin: true,
      },
    });

    tl.to(shapeRef.current, {
      opacity: 1,
    })
      .to(
        titleRef.current,
        {
          webkitFilter: 'blur(20px)',
          opacity: 0,
        },
        1,
      )
      .to(
        shapeRef.current,
        {
          opacity: 0,
        },
        1,
      )
      .from(
        limiterRef.current,
        {
          duration: 2,
          opacity: 0,
        },
        1,
      )
      .to(
        stoneBgRef.current,
        {
          opacity: 1,
        },
        1,
      )
      .from(
        leafRightRef.current,
        {
          duration: 2,
          right: '-50%',
          rotate: -225,
        },
        1.5,
      )
      .from(
        leafLeftRef.current,
        {
          duration: 2,
          left: '-50%',
          rotate: 175,
          delay: 0.5,
        },
        1.5,
      )
      .to(
        stoneBgRef.current,
        {
          maskSize: 'auto 300vh',
          webkitMaskSize: 'auto 300vh',
          scale: 1.5,
          rotationZ: 0.01,
          duration: 10,
        },
        6,
      )
      .to(
        limiterRight_firstRef.current,
        {
          duration: 4,
          opacity: 0,
        },
        3,
      )
      .from(
        limiterRight_secondRef.current,
        {
          opacity: 0,
          duration: 4,
        },
        6,
      )
      .to(
        leafRightRef.current,
        {
          duration: 3,
          top: '-50%',
        },
        6,
      )
      .to(
        leafLeftRef.current,
        {
          duration: 3,
          bottom: '100%',
          delay: 0.5,
        },
        6,
      )
      .from(
        leafBottomRef.current,
        {
          duration: 3,
          top: '100%',
          delay: 1,
        },
        5.8,
      )
      .from(
        stoneThirdRef.current,
        {
          top: '100%',
          duration: 3,
          delay: 1,
        },
        6,
      )
      .from(
        stoneSecondRef.current,
        {
          top: '100%',
          duration: 3,
          delay: 1.5,
        },
        6,
      )
      .from(
        stoneFirstRef.current,
        {
          bottom: '-50%',
          duration: 4,
          delay: 1.5,
        },
        6,
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
            풍부한 미네랄{' '}
            <Link to="" className={cx('point')}>
              대보 화강암
            </Link>
          </p>
        </div>
        <div className={cx('right')}>
          <p ref={limiterRight_firstRef}>
            빈틈없이 촘촘한 대보 화강암이
            <br />
            2억년 동안 골라 모은 미네랄 물방울
          </p>
          <p ref={limiterRight_secondRef}>
            마지막 한 방울까지 빠져나갈 틈 없이 <br />꽉 잡아 풀무원샘물로 채웠습니다
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
