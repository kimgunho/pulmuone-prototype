import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import gsap from 'gsap';

import styles from './S02.module.scss';

import leafLeft from '../../assets/images/home/s02/leaf_left.png';
import leafRight from '../../assets/images/home/s02/leaf_right.png';
import stone1 from '../../assets/images/home/s02/stone01.png';
import stone2 from '../../assets/images/home/s02/stone02.png';
import stone3 from '../../assets/images/home/s02/stone03.png';

const cx = classNames.bind(styles);

const S02 = () => {
  const containerRef = useRef();
  const titleRef = useRef();
  const stoneBgRef = useRef();
  const limiterRef = useRef();
  const desc1Ref = useRef();
  const desc2Ref = useRef();
  const leafLeftRef = useRef();
  const leafRightRef = useRef();
  const stone1Ref = useRef();
  const stone2Ref = useRef();
  const stone3Ref = useRef();

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          pin: true,
          start: 'top top',
          end: '400% top',
        },
      })
      .fromTo(stoneBgRef.current, { opacity: 0 }, { opacity: 1 }, 0.1)
      .to(titleRef.current, { className: `+=${cx('title')} active` }, 0.2)
      .to(limiterRef.current, { className: `+=${cx('limiter')} active` }, 0.2)
      .to(leafLeftRef.current, { className: `+=${cx('leafLeft')} active` }, 0.3)
      .to(leafRightRef.current, { className: `+=${cx('leafRight')} active` }, 0.3)
      .to(stoneBgRef.current, { className: `+=${cx('stoneBg')} active` }, 0.3)
      .to(leafLeftRef.current, { bottom: '200%' }, 0.4)
      .to(leafRightRef.current, { top: '-80%' }, 0.4)
      .to(desc1Ref.current, { opacity: 0 }, 0.4)
      .from(desc2Ref.current, { opacity: 0 }, 0.5)
      .to(stone1Ref.current, { top: '64%' }, 0.5)
      .to(stone2Ref.current, { top: '-40%' }, 0.6)
      .to(stone3Ref.current, { top: '-40%' }, 0.4);
  }, []);

  return (
    <div ref={containerRef} className={cx('container')}>
      <h2 ref={titleRef} className={cx('title')}>
        2?????? ????????????<span className={cx('accent')}>??? ?????? ?????????</span>
      </h2>
      <div ref={stoneBgRef} className={cx('stoneBg')} />
      <div ref={limiterRef} className={cx('limiter')}>
        <div className={cx('left')}>
          <p>
            ????????? ?????????{' '}
            <Link to="/?????????-?????????/??????-?????????" className={cx('accent')}>
              ?????? ?????????
            </Link>
          </p>
        </div>
        <div className={cx('right')}>
          <p ref={desc1Ref}>
            ???????????? ????????? ?????? ????????????
            <br /> 2?????? ?????? ?????? ?????? ????????? ?????????
          </p>
          <p ref={desc2Ref}>
            ????????? ??? ???????????? ???????????? ??? ??????
            <br /> ??? ?????? ?????????????????? ???????????????
          </p>
        </div>
      </div>
      <div className={cx('objects')}>
        <img ref={leafLeftRef} className={cx('leafLeft')} src={leafLeft} alt="" />
        <img ref={leafRightRef} className={cx('leafRight')} src={leafRight} alt="" />
        <img ref={stone1Ref} className={cx(['stone', 'first'])} src={stone1} alt="" />
        <img ref={stone2Ref} className={cx(['stone', 'second'])} src={stone2} alt="" />
        <img ref={stone3Ref} className={cx(['stone', 'third'])} src={stone3} alt="" />
      </div>
    </div>
  );
};

export default S02;
