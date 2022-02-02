import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './S03.module.scss';

import sandTopBg from '../../assets/images/home/s03/sandTop.png';
import sandMiddleBg from '../../assets/images/home/s03/sandMiddle.png';
import sandBottomBg from '../../assets/images/home/s03/sandBottom.png';
import waterArticle from '../../assets/images/home/s03/waterActicle.png';

const cx = classNames.bind(styles);

function S03() {
  gsap.registerPlugin(ScrollTrigger);
  const rangeRef = useRef();
  const limiterRef = useRef();
  const topBgRef = useRef();
  const middleBgRef = useRef();
  const bottomBgRef = useRef();
  const waterBubble = useRef([]);

  useEffect(() => {
    gsap.to(waterBubble.current, {
      webkitFilter: `blur(random(0,5)px)`,
      width: `random(10,50)px`,
      ease: 'none',
      duration: 10,
      repeat: -1,
      repeatRefresh: true,
      repeatDelay: 0,
      skewX: `random(-30,30)px`,
      x: `random(0, ${window.innerWidth})`,
      y: `random(0, ${window.innerHeight})`,
    });

    S03ScrollAnimation();
  }, []);

  const S03ScrollAnimation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: rangeRef.current,
        start: 'top bottom',
        end: 'top 70%',
        scrub: true,
        pin: true,
      },
    });

    tl.to(
      topBgRef.current,
      {
        ease: 'slow',
        duration: 1,
        yPercent: -100,
      },
      1,
    ).to(
      middleBgRef.current,
      {
        ease: 'slow',
        duration: 1,
        yPercent: -75,
      },
      1,
    );

    gsap.to(limiterRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: limiterRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });
  };

  return (
    <div style={{ backgroundImage: `url(${bottomBgRef})` }} className={cx('container')}>
      <div ref={rangeRef} className={cx('range')} />
      <div ref={limiterRef} className={cx('limiter')}>
        <div className={cx('left')}>
          <p>
            40m의 <span className={cx('point')}>천연 모래필터</span>
          </p>
        </div>
        <div className={cx('right')}>
          <p>
            바다에 쌓인 모래의 2배에 달하는 40m 모래층이 <br />
            천연 정화 필터로 작용하여 중금속과 미생물을 <br />
            흡착함으로써 더욱 귀한 물로 정화시킵니다.
          </p>
        </div>
      </div>

      <div className={cx('waterArticles')}>
        {Array.from({ length: 10 }).map((_, index) => {
          const randomX = Math.floor(Math.random() * window.innerWidth);
          const randomY = Math.floor(Math.random() * window.innerHeight);

          return (
            <img
              style={{ transform: `translate(${randomX}px, ${randomY}px)` }}
              key={index}
              ref={(el) => waterBubble.current.push(el)}
              src={waterArticle}
              alt=""
            />
          );
        })}
      </div>

      <div ref={topBgRef} className={cx(['background', 'top'])} style={{ backgroundImage: `url(${sandTopBg})` }} />
      <div ref={middleBgRef} className={cx(['background', 'middle'])} style={{ backgroundImage: `url(${sandMiddleBg})` }} />
      <div ref={bottomBgRef} className={cx(['background', 'bottom'])} style={{ backgroundImage: `url(${sandBottomBg})` }} />
    </div>
  );
}

export default S03;
