import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './S04.module.scss';
import { links } from '../../assets/data/links';

import background from '../../assets/images/home/s04/background.jpg';
import title from '../../assets/images/shared/pulmuone_title.png';
import pulmuoneWater01 from '../../assets/images/home/s04/pulmuoneWater01.png';
import pulmuoneWater02 from '../../assets/images/home/s04/pulmuoneWater02.png';
import pulmuoneWater03 from '../../assets/images/home/s04/pulmuoneWater03.png';
import pulmuoneWater04 from '../../assets/images/home/s04/pulmuoneWater04.png';
import pulmuoneWater05 from '../../assets/images/home/s04/pulmuoneWater05.png';

import CarbonEmissionLogo from '../shared/CarbonEmissionLogo';

const cx = classNames.bind(styles);

function S04() {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef();
  const leftRef = useRef();
  const rightRef = useRef();
  const pulmuoneWater01Ref = useRef();
  const pulmuoneWater02Ref = useRef();
  const pulmuoneWater03Ref = useRef();
  const pulmuoneWater04Ref = useRef();
  const pulmuoneWater05Ref = useRef();
  const backgroundRef = useRef();
  const mainRef = useRef();
  const innerFirstRef = useRef();
  const innerSecondRef = useRef();
  const innerLastRef = useRef();

  useEffect(() => {
    scrollAnimation();
  }, []);

  const scrollAnimation = () => {
    gsap.fromTo(
      pulmuoneWater01Ref.current,
      {
        yPercent: 0,
        top: '0%',
      },
      {
        yPercent: -50,
        top: '50%',
        scrollTrigger: {
          trigger: mainRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      },
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '500% top',
        scrub: true,
        pin: true,
      },
    });

    tl.to(backgroundRef.current, {
      duration: 4,
      top: '-100%',
    })
      .to(
        pulmuoneWater01Ref.current,
        {
          duration: 4,
          opacity: 0,
        },
        2,
      )
      .to(
        pulmuoneWater02Ref.current,
        {
          duration: 4,
          opacity: 1,
        },
        2,
      )
      .from(
        leftRef.current,
        {
          duration: 5,
          opacity: 0,
        },
        6,
      )
      .from(
        rightRef.current,
        {
          duration: 5,
          opacity: 0,
          delay: 0.5,
        },
        6,
      )
      .to(
        pulmuoneWater02Ref.current,
        {
          opacity: 0,
          duration: 3,
        },
        6,
      )
      .to(
        pulmuoneWater03Ref.current,
        {
          opacity: 1,
          duration: 3,
        },
        6,
      )
      .to(
        pulmuoneWater03Ref.current,
        {
          opacity: 0,
          duration: 3,
        },
        9,
      )
      .to(
        innerFirstRef.current,
        {
          opacity: 0,
          duration: 3,
        },
        9,
      )
      .to(
        innerSecondRef.current,
        {
          opacity: 1,
          duration: 3,
        },
        9,
      )
      .to(
        pulmuoneWater04Ref.current,
        {
          opacity: 1,
          duration: 3,
        },
        9,
      )
      .to(
        pulmuoneWater04Ref.current,
        {
          opacity: 0,
          duration: 3,
        },
        12,
      )
      .to(
        innerSecondRef.current,
        {
          opacity: 0,
          duration: 3,
        },
        12,
      )
      .to(
        innerLastRef.current,
        {
          opacity: 1,
          duration: 3,
        },
        12,
      )
      .to(
        pulmuoneWater05Ref.current,
        {
          opacity: 1,
          duration: 3,
        },
        12,
      );
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
          <div className={cx(['inner', 'first'])} ref={innerFirstRef}>
            <h3>
              <span>1</span> 초경량 뚜껑
            </h3>
            <p>
              기존 자사 제품대비 <br /> 플라스틱 사용량 40% 저감
            </p>
          </div>

          <div className={cx('inner')} ref={innerSecondRef}>
            <h3>
              <span>2</span> 2번째 타이틀
            </h3>
            <p>
              22222222 <br /> 222222222
            </p>
          </div>

          <div className={cx('inner')} ref={innerLastRef}>
            <h3>
              <span>3</span> 3번째 타이틀
            </h3>
            <p>
              33333333 <br /> 333333333333
            </p>
          </div>
        </div>

        <div ref={mainRef} className={cx('main')}>
          <img ref={pulmuoneWater01Ref} className={cx(['water', 'first'])} draggable="false" src={pulmuoneWater01} alt="" />
          <img ref={pulmuoneWater02Ref} className={cx('water')} draggable="false" src={pulmuoneWater02} alt="" />
          <img ref={pulmuoneWater03Ref} className={cx('water')} draggable="false" src={pulmuoneWater03} alt="" />
          <img ref={pulmuoneWater04Ref} className={cx('water')} draggable="false" src={pulmuoneWater04} alt="" />
          <img ref={pulmuoneWater05Ref} className={cx('water')} draggable="false" src={pulmuoneWater05} alt="" />
        </div>
      </div>

      <img ref={backgroundRef} className={cx('background')} draggable="false" src={background} alt="" />
    </div>
  );
}

export default S04;
