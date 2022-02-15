import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import gsap from 'gsap';

import styles from './S04.module.scss';
import { links } from '../../assets/data/links';

import background from '../../assets/images/home/s04/background.jpg';
import title from '../../assets/images/shared/pulmuone_title.png';
import bottleLabel from '../../assets/images/home/s04/pulmuoneWater_label.png';
import bottleNoLabel from '../../assets/images/home/s04/pulmuoneWater.png';
import shape1 from '../../assets/images/home/s04/labelMark01.png';
import shape2 from '../../assets/images/home/s04/labelMark02.png';
import shape3 from '../../assets/images/home/s04/labelMark03.png';
import mark1 from '../../assets/images/home/s04/CarbonEmission1.png';
import mark2 from '../../assets/images/home/s04/CarbonEmission2.png';
import mark3 from '../../assets/images/home/s04/CarbonEmission3.png';

const cx = classNames.bind(styles);

const S04 = () => {
  const containerRef = useRef();
  const backgroundRef = useRef();
  const wrapperRef = useRef();
  const bottleRef = useRef();
  const leftRef = useRef();

  useEffect(() => {
    gsap.from(wrapperRef.current, {
      yPercent: -32,
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
        start: 'top center',
        end: 'bottom bottom',
      },
    });

    gsap.to('.dew', {
      opacity: 0,
      scale: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
        start: 'top 56%',
        end: 'bottom bottom',
      },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          pin: true,
          start: 'top top',
          end: '400% bottom',
        },
      })
      .to(backgroundRef.current, { top: '-100%' })
      .to(bottleRef.current, { className: `+=${cx('bottle')} hide` }, 0.4)
      .to(leftRef.current, { className: `+=${cx('left')} show` }, 0.4)
      .to(wrapperRef.current, { className: `+=${cx('wrapper')} featureA` }, 0.6)
      .to(wrapperRef.current, { className: `+=${cx('wrapper')} featureB` }, 0.8)
      .to(wrapperRef.current, { className: `+=${cx('wrapper')} featureC` }, 1.0);
  }, []);

  return (
    <div ref={containerRef} className={cx('container')}>
      <div ref={wrapperRef} className={cx('wrapper')}>
        <div className={cx('left')} ref={leftRef}>
          <h2>
            환경까지 생각한
            <img draggable="false" src={title} alt="풀무원 샘물" />
          </h2>
          <p>
            풀무원샘물은
            <br />
            탄소 배출량을 줄이기 위해
            <br />
            지속적으로 노력합니다.
          </p>
          <Link to={links.home}>자세히 보기</Link>
        </div>
        <div className={cx('bottleWrapper')}>
          <img draggable="false" className={cx('bottle')} src={bottleNoLabel} alt="" />
          <img ref={bottleRef} draggable="false" className={cx('bottle')} src={bottleLabel} alt="" />
          <img draggable="false" className={cx(['shape', 'shape1'])} src={shape1} alt="" />
          <img draggable="false" className={cx(['shape', 'shape2'])} src={shape2} alt="" />
          <img draggable="false" className={cx(['shape', 'shape3'])} src={shape3} alt="" />
        </div>
        <div className={cx('right')}>
          <div className={cx(['feature', 'feat1'])}>
            <img draggable="false" src={mark1} alt="" />
            <h3>
              <span>1</span> 초경량 뚜껑
            </h3>
            <p>
              기존 자사 제품대비
              <br />
              플라스틱 사용량 40% 저감
            </p>
          </div>
          <div className={cx(['feature', 'feat2'])}>
            <img draggable="false" src={mark2} alt="" />
            <h3>
              <span>2</span> 메론맛 바베큐
            </h3>
            <p>
              기존 자사 제품대비
              <br />
              플라스틱 사용량 40% 저감
            </p>
          </div>
          <div className={cx(['feature', 'feat3'])}>
            <img draggable="false" src={mark3} alt="" />
            <h3>
              <span>3</span> 상어맛 라면
            </h3>
            <p>
              기존 자사 제품대비
              <br />
              플라스틱 사용량 40% 저감
            </p>
          </div>
        </div>
      </div>
      <img ref={backgroundRef} className={cx('background')} draggable="false" src={background} alt="" />
    </div>
  );
};

export default S04;
