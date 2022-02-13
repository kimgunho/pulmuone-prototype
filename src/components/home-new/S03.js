import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import gsap from 'gsap';

import styles from './S03.module.scss';
import dew1 from '../../assets/images/home/s03/articles_left.png';
import dew2 from '../../assets/images/home/s03/articles_right.png';

const cx = classNames.bind(styles);

const S03 = () => {
  const containerRef = useRef();
  const limiterRef = useRef();
  const sand1Ref = useRef();
  const sand2Ref = useRef();
  const sand3Ref = useRef();
  const dewsRef = useRef();

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: 'top bottom',
          end: '75% bottom',
          markers: true,
        },
      })
      .to(sand1Ref.current, { top: '-360px' }, 0.1)
      .to(sand2Ref.current, { top: '-200px' }, 0.1)
      .fromTo(limiterRef.current, { opacity: 0 }, { opacity: 1 }, 0.4);

    gsap.to(dewsRef.current, {
      yPercent: -100,
      scrollTrigger: {
        trigger: dewsRef.current,
        scrub: true,
        start: 'center bottom',
        end: 'center top',
      },
    });
  }, []);

  return (
    <div ref={containerRef} className={cx('container')}>
      <div ref={sand1Ref} className={cx(['background', 'sand1'])} />
      <div ref={sand2Ref} className={cx(['background', 'sand2'])} />
      <div ref={sand3Ref} className={cx(['background', 'sand3'])} />
      <div ref={limiterRef} className={cx('limiter')}>
        <div className={cx('left')}>
          <p>
            40m의 <span className={cx('accent')}>천연 모래필터</span>
          </p>
        </div>
        <div className={cx('right')}>
          <p>
            바다에 쌓인 모래의 2배에 달하는 40m 모래층이
            <br />
            천연 정화 필터로 작용하여 중금속과 미생물을
            <br />
            흡착함으로써 더욱 귀한 물로 정화시킵니다.
          </p>
        </div>
      </div>
      <div ref={dewsRef} className={cx('dews')}>
        <img src={dew1} alt="" />
        <img src={dew2} alt="" />
      </div>
    </div>
  );
};

export default S03;
