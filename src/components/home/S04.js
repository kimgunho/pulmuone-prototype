import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './S04.module.scss';
import { links } from '../../assets/data/links';

import background from '../../assets/images/home/s04/background.jpg';
import title from '../../assets/images/shared/pulmuone_title.png';
import pulmuoneWater_label from '../../assets/images/home/s04/pulmuoneWater_label.png';
import pulmuoneWater from '../../assets/images/home/s04/pulmuoneWater.png';
import labelMark01 from '../../assets/images/home/s04/labelMark01.png';
import labelMark02 from '../../assets/images/home/s04/labelMark02.png';
import labelMark03 from '../../assets/images/home/s04/labelMark03.png';
import watermark01 from '../../assets/images/home/s04/CarbonEmission1.png';
import watermark02 from '../../assets/images/home/s04/CarbonEmission2.png';
import watermark03 from '../../assets/images/home/s04/CarbonEmission3.png';

const cx = classNames.bind(styles);

function S04() {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef();
  const backgroundRef = useRef();
  const mainRef = useRef();
  const leftRef = useRef();
  const centerRef = useRef();
  const rightRef = useRef();
  const centerImg01Ref = useRef();
  const centerImg02Ref = useRef();
  const desc01Ref = useRef();
  const desc02Ref = useRef();
  const desc03Ref = useRef();
  const labelMark01Ref = useRef();
  const labelMark02Ref = useRef();
  const labelMark03Ref = useRef();

  useEffect(() => {
    scrollAnimation();
    window.addEventListener('resize', ScrollTrigger.refresh);
  }, []);

  const scrollAnimation = () => {
    ScrollTrigger.matchMedia({
      '(min-width: 740px)': () => {
        gsap.from(mainRef.current, {
          yPercent: -40,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            end: 'center center',
            scrub: true,
          },
        });
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '300% top',
        scrub: true,
        pin: true,
        pinSpacing: 'margin',
      },
    });

    tl.to(backgroundRef.current, {
      top: '-300%',
      duration: 25,
    })
      .to(centerImg01Ref.current, {
        delay: -20,
        opacity: 0,
      })
      .to(centerImg02Ref.current, {
        delay: -20,
        position: 'absolute',
        duration: 5,
        display: 'block',
        opacity: 1,
      })
      .to(leftRef.current, {
        opacity: 1,
        duration: 5,
      })
      // first desc fade in
      .to(
        rightRef.current,
        {
          opacity: 1,
          duration: 5,
        },
        35,
      )
      .to(
        labelMark01Ref.current,
        {
          display: 'block',
          opacity: 1,
          duration: 5,
        },
        35,
      )
      // first desc fade out
      .to(
        desc01Ref.current,
        {
          opacity: 0,
          display: 'none',
          duration: 5,
        },
        40,
      )
      .to(
        labelMark01Ref.current,
        {
          opacity: 0,
          display: 'none',
          duration: 5,
        },
        40,
      )
      // second desc fade in
      .to(
        desc02Ref.current,
        {
          display: 'flex',
          opacity: 1,
          duration: 5,
        },
        45,
      )
      .to(
        labelMark02Ref.current,
        {
          display: 'block',
          opacity: 1,
          duration: 5,
        },
        45,
      )
      // second desc fade out
      .to(
        desc02Ref.current,
        {
          opacity: 0,
          display: 'none',
          duration: 5,
        },
        50,
      )
      .to(
        labelMark02Ref.current,
        {
          opacity: 0,
          display: 'none',
          duration: 5,
        },
        50,
      )
      // last desc fade in
      .to(
        desc03Ref.current,
        {
          display: 'flex',
          opacity: 1,
          duration: 5,
        },
        55,
      )
      .to(
        labelMark03Ref.current,
        {
          display: 'block',
          opacity: 1,
          duration: 5,
        },
        55,
      );
  };

  return (
    <div ref={containerRef} className={cx('container')}>
      <div ref={mainRef} className={cx('pulmuoneWater')}>
        <div className={cx('left')} ref={leftRef}>
          <h2>
            환경까지 생각한
            <img draggable="false" src={title} alt="풀무원 샘물" />
          </h2>
          <p>
            풀무원샘물은
            <br /> 탄소 배출량을 줄이기 위해
            <br /> 지속적으로 노력합니다.
          </p>
          <Link to={links.home}>자세히 보기</Link>
        </div>

        <div className={cx('center')} ref={centerRef}>
          <img ref={centerImg01Ref} className={cx('first')} draggable="false" src={pulmuoneWater_label} alt="" />
          <img ref={centerImg02Ref} draggable="false" src={pulmuoneWater} alt="" />
          <img ref={labelMark01Ref} className={cx(['absolute', 'mark01'])} draggable="false" src={labelMark01} alt="" />
          <img ref={labelMark02Ref} className={cx(['absolute', 'mark02'])} draggable="false" src={labelMark02} alt="" />
          <img ref={labelMark03Ref} className={cx(['absolute', 'mark03'])} draggable="false" src={labelMark03} alt="" />
        </div>

        <div className={cx('right')} ref={rightRef}>
          <div className={cx('first')} ref={desc01Ref}>
            <div className={cx('inner')}>
              <img draggable="false" src={watermark01} alt="" />
              <h3>
                <span>1</span> 초경량 뚜껑
              </h3>
              <p>
                기존 자사 제품대비 <br /> 플라스틱 사용량 40% 저감
              </p>
            </div>

            <ul className={cx('pager')}>
              <li className={cx('active')}></li>
              <li></li>
              <li></li>
            </ul>
          </div>

          <div className={cx('second')} ref={desc02Ref}>
            <div className={cx('inner')}>
              <img draggable="false" src={watermark02} alt="" />
              <h3>
                <span>2</span> 메론맛 바베큐
              </h3>
              <p>
                기존 자사 제품대비 <br /> 플라스틱 사용량 40% 저감
              </p>
            </div>

            <ul className={cx('pager')}>
              <li></li>
              <li className={cx('active')}></li>
              <li></li>
            </ul>
          </div>

          <div className={cx('third')} ref={desc03Ref}>
            <div className={cx('inner')}>
              <img draggable="false" src={watermark03} alt="" />
              <h3>
                <span>3</span> 상어맛 라면
              </h3>
              <p>
                기존 자사 제품대비 <br /> 플라스틱 사용량 40% 저감
              </p>
            </div>

            <ul className={cx('pager')}>
              <li></li>
              <li></li>
              <li className={cx('active')}></li>
            </ul>
          </div>
        </div>
      </div>

      <img ref={backgroundRef} className={cx('background')} draggable="false" src={background} alt="" />
    </div>
  );
}

export default S04;
