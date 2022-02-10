import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './S03.module.scss';

import background_first from '../../assets/images/home/s03/sandTop.png';
import background_second from '../../assets/images/home/s03/sandMiddle.png';
import background_last from '../../assets/images/home/s03/sandBottom.png';
import article from '../../assets/images/home/s03/waterActicle.png';

const cx = classNames.bind(styles);

function S03() {
  gsap.registerPlugin(ScrollTrigger);
  const rangeRef = useRef();
  const limiterRef = useRef();
  const firstBgRef = useRef();
  const secondBgRef = useRef();
  const lastBgRef = useRef();
  const articlesRef = useRef();
  const waterArticles = useRef([]);

  useEffect(() => {
    repeatArticles();
    scrollAnimation();
  }, []);

  // 선택 고려
  const repeatArticles = () => {
    // gsap.to(waterArticles.current, {
    //   webkitFilter: `blur(random(0,5)px)`,
    //   width: `random(10,30)px`,
    //   ease: 'none',
    //   duration: 80,
    //   repeat: -1,
    //   skewX: `random(-10,20)px`,
    //   x: `random(0, ${window.innerWidth})px`,
    //   y: -10,
    // });

    gsap.to(waterArticles.current, {
      webkitFilter: `blur(random(0,5)px)`,
      width: `random(10,30)px`,
      ease: 'none',
      skewX: `random(-10,20)px`,
      x: `random(0, ${window.innerWidth})px`,
      y: 0,

      scrollTrigger: {
        trigger: limiterRef.current,
        start: '20% bottom',
        end: 'bottom+=100% center',
        scrub: true,
      },
    });
  };

  const scrollAnimation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: rangeRef.current,
        start: '-3% bottom',
        end: 'top top',
        scrub: true,
        pin: true,
      },
    });

    tl.to(articlesRef.current, {
      duration: 10,
    })
      .to(
        firstBgRef.current,
        {
          duration: 8,
          yPercent: -100,
        },
        1,
      )
      .to(
        secondBgRef.current,
        {
          duration: 8,
          yPercent: -80,
          delay: 2,
        },
        2,
      )
      .to(limiterRef.current, {
        opacity: 1,
        duration: 5,
        delay: 10,
      });
  };

  return (
    <div style={{ backgroundImage: `url(${lastBgRef})` }} className={cx('container')}>
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

      <div ref={articlesRef} className={cx('articles')}>
        {Array.from({ length: 20 }).map((_, index) => {
          const x = Math.floor(Math.random() * window.innerWidth);
          const y = Math.floor(Math.random() * window.innerHeight + window.innerHeight);

          return (
            <img
              style={{ transform: `translate(${x}px, ${y}px)` }}
              key={index}
              ref={(el) => waterArticles.current.push(el)}
              src={article}
              alt=""
            />
          );
        })}
      </div>

      <div ref={firstBgRef} className={cx(['background', 'first'])} style={{ backgroundImage: `url(${background_first})` }} />
      <div ref={secondBgRef} className={cx(['background', 'second'])} style={{ backgroundImage: `url(${background_second})` }} />
      <div ref={lastBgRef} className={cx(['background', 'last'])} style={{ backgroundImage: `url(${background_last})` }} />
    </div>
  );
}

export default S03;
