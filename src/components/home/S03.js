import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './S03.module.scss';

import background_first from '../../assets/images/home/s03/sandTop.png';
import background_second from '../../assets/images/home/s03/sandMiddle.png';
import background_last from '../../assets/images/home/s03/sandBottom.png';
import articles_left from '../../assets/images/home/s03/articles_left.png';
import articles_right from '../../assets/images/home/s03/articles_right.png';

const cx = classNames.bind(styles);

function S03() {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef();
  const limiterRef = useRef();
  const firstBgRef = useRef();
  const secondBgRef = useRef();
  const lastBgRef = useRef();
  const articlesRef = useRef();

  useEffect(() => {
    scrollAnimation();
    window.addEventListener('resize', ScrollTrigger.refresh);
  }, []);

  const scrollAnimation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
      },
    });

    tl.to(firstBgRef.current, {
      duration: 8,
      top: '-30vh',
    })
      .to(secondBgRef.current, {
        duration: 8,
        top: '-20vh',
      })
      .to(limiterRef.current, {
        duration: 10,
        opacity: 1,
      });

    gsap.to(articlesRef.current, {
      yPercent: -100,
      duration: 10,
      scrollTrigger: {
        trigger: articlesRef.current,
        start: 'center bottom',
        end: 'center top',
        scrub: true,
      },
    });
  };

  return (
    <div ref={containerRef} style={{ backgroundImage: `url(${lastBgRef})` }} className={cx('container')}>
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
        <img src={articles_left} alt="" />
        <img src={articles_right} alt="" />
      </div>
      <div ref={firstBgRef} className={cx(['background', 'first'])} style={{ backgroundImage: `url(${background_first})` }} />
      <div ref={secondBgRef} className={cx(['background', 'second'])} style={{ backgroundImage: `url(${background_second})` }} />
      <div ref={lastBgRef} className={cx(['background', 'last'])} style={{ backgroundImage: `url(${background_last})` }} />
    </div>
  );
}

export default S03;
