import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

import styles from './S04.module.scss';
import { links } from '../../assets/data/links';

import background from '../../assets/images/home/s04/background.jpg';
import title from '../../assets/images/shared/pulmuone_title.png';
import pulmuoneWater_label from '../../assets/images/home/s04/pulmuoneWater_label_true.png';
import pulmuoneWater from '../../assets/images/home/s04/pulmuoneWater_label_false.png';
// import pulmuoneWater_second from '../../assets/images/home/s04/pulmuoneWater_label_false_2.png';
// import pulmuoneWater_last from '../../assets/images/home/s04/pulmuoneWater_label_false_3.png';
import CarbonEmissionLogo from '../shared/CarbonEmissionLogo';

const cx = classNames.bind(styles);

function S04() {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
  // gsap.registerEffect({
  //   name: 'fade',
  //   effect: (target) => {
  //     return gsap.from(target, { opacity: 0, y: -20 });
  //   },
  //   extendTimeline: true,
  // });

  const containerRef = useRef();
  const leftRef = useRef();
  const rightRef = useRef();
  const labelTrueRef = useRef();
  const labelFalseRef = useRef();
  const backgroundRef = useRef();
  const descRef = useRef();

  useEffect(() => {
    scrollAnimation();
  }, []);

  const scrollAnimation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '300% top',
        scrub: true,
        pin: true,
      },
    });

    tl.to(backgroundRef.current, {
      duration: 4,
      top: '-100%',
    })
      .to(
        labelTrueRef.current,
        {
          duration: 4,
          opacity: 0,
        },
        2,
      )
      .to(
        labelFalseRef.current,
        {
          duration: 4,
          opacity: 1,
        },
        2,
      )
      .from(
        leftRef.current,
        {
          duration: 4,
          opacity: 0,
        },
        2,
      )
      .from(
        rightRef.current,
        {
          duration: 4,
          opacity: 0,
        },
        2,
      );
    // .set(labelFalseRef.current, { attr: { src: pulmuoneWater_second }, width: '160%' })
    // .to(descRef.current, {
    //   duration: 5,
    //   text: {
    //     speed: 2,
    //     value: '<h3><span>2</span> 중간 타이틀</h3><p>222222 <br /> 222222222</p>',
    //   },
    // })
    // .set(labelFalseRef.current, { attr: { src: pulmuoneWater_last } })
    // .to(descRef.current, {
    //   duration: 5,
    //   text: {
    //     speed: 2,
    //     value: '<h3><span>3</span> 라스트 타이틀</h3><p>333333 <br /> 3333333333</p>',
    //   },
    // });
  };

  return (
    <div ref={containerRef} className={cx('container')}>
      <div className={cx('pulmuoneWater')}>
        <div ref={leftRef} className={cx('left')}>
          <h2>
            환경까지 생각한
            <img src={title} alt="풀무원 샘물" />
          </h2>
          <p>
            풀무원샘물은
            <br /> 탄소 배출량을 줄이기 위해
            <br /> 지속적으로 노력합니다.
          </p>
          <Link to={links.home}>자세히 보기</Link>
        </div>

        <div ref={rightRef} className={cx('right')}>
          <CarbonEmissionLogo />
          <div ref={descRef} className={cx('inner')}>
            <h3>
              <span>1</span> 초경량 뚜껑
            </h3>
            <p>
              기존 자사 제품대비 <br /> 플라스틱 사용량 40% 저감
            </p>
          </div>
        </div>

        <div className={cx('main')}>
          <img ref={labelTrueRef} className={cx(['water'])} draggable="false" src={pulmuoneWater_label} alt="" />
          <img ref={labelFalseRef} className={cx(['water', 'false'])} draggable="false" src={pulmuoneWater} alt="" />
        </div>
      </div>

      <img ref={backgroundRef} className={cx('background')} draggable="false" src={background} alt="" />
    </div>
  );
}

export default S04;
