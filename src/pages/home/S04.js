import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import styles from './S04.module.scss';
import background from '../../assets/images/home/s04/background.jpg';
import logo from '../../assets/images/shared/logo.png';
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
  const desktopWrapperRef = useRef();
  const bottleRef = useRef();
  const leftRef = useRef();
  const mobileIntroRef = useRef();
  const mobileSwiperRef = useRef();

  useEffect(() => {
    ScrollTrigger.matchMedia({
      '(min-width:735px)': () => {
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
          .to(desktopWrapperRef.current, { className: `-=${cx('desktopWrapper')} translateY` })
          .to(backgroundRef.current, { className: `-=${cx('background')} active` }, 0.1)
          .to(bottleRef.current, { className: `+=${cx('bottle')} hide` }, 0.3)
          .to(leftRef.current, { className: `+=${cx('left')} show` }, 0.3)
          .to(desktopWrapperRef.current, { className: `+=${cx('desktopWrapper')} featureA` }, 0.5)
          .to(desktopWrapperRef.current, { className: `+=${cx('desktopWrapper')} featureB` }, 1.0)
          .to(desktopWrapperRef.current, { className: `+=${cx('desktopWrapper')} featureC` }, 1.5);
      },
      '(max-width:734px)': () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              scrub: true,
              start: '95% bottom',
              end: '95% bottom',
            },
          })
          .to(mobileIntroRef.current, { className: `-=${cx('intro')} active` }, 0.1)
          .to(mobileSwiperRef.current, { className: `+=${cx('swiperWrapper')} active` }, 0.1);
      },
      all: () => {
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
      },
    });
  }, []);

  return (
    <div ref={containerRef} className={cx('container')}>
      <div ref={desktopWrapperRef} className={cx(['desktopWrapper', 'translateY'])}>
        <div className={cx('left')} ref={leftRef}>
          <h2>
            ???????????? ?????????
            <img src={logo} alt="???????????????" />
          </h2>
          <p>
            ??????????????????
            <br /> ?????? ???????????? ????????? ??????
            <br /> ??????????????? ???????????????.
          </p>
          <Link to="/?????????-?????????/Think-Green">????????? ??????</Link>
        </div>
        <div className={cx('bottleWrapper')}>
          <img className={cx('bottle')} src={bottleNoLabel} alt="" />
          <img ref={bottleRef} className={cx('bottle')} src={bottleLabel} alt="" />
          <img className={cx(['shape', 'shape1'])} src={shape1} alt="" />
          <img className={cx(['shape', 'shape2'])} src={shape2} alt="" />
          <img className={cx(['shape', 'shape3'])} src={shape3} alt="" />
        </div>
        <div className={cx('right')}>
          <div className={cx(['feature', 'feat1'])}>
            <img src={mark1} alt="" />
            <h3>
              <span>1</span> ????????? ??????
            </h3>
            <p>
              ???????????? ????????? 40% ??????
              <br /> (?????? ?????? ?????? ??????)
            </p>
          </div>
          <div className={cx(['feature', 'feat2'])}>
            <img src={mark2} alt="" />
            <h3>
              <span>2</span> ????????? ??????
            </h3>
            <p>
              2L-32.6g / 500mL-11.1g
              <br /> (1??? ??????)
            </p>
          </div>
          <div className={cx(['feature', 'feat3'])}>
            <img src={mark3} alt="" />
            <h3>
              <span>3</span> ????????? ??????
            </h3>
            <p>
              ?????? ????????? 15% ??????
              <br /> (?????? ?????? 1??? ??????)
            </p>
          </div>
        </div>
      </div>
      <div className={cx('mobileWrapper')}>
        <div className={cx(['intro', 'active'])} ref={mobileIntroRef}>
          <img src={bottleLabel} alt="" />
          <div className={cx('info')}>
            <h2>
              ???????????? ?????????
              <img src={logo} alt="???????????????" />
            </h2>
            <p>?????????????????? ?????? ???????????? ????????? ?????? ??????????????? ???????????????.</p>
          </div>
        </div>
        <div className={cx(['swiperWrapper', 'active'])} ref={mobileSwiperRef}>
          <Swiper
            className={cx('swiper')}
            loop={true}
            modules={[Navigation, Pagination]}
            pagination={{
              el: '.pager',
              clickable: true,
              bulletActiveClass: cx('bulletsActive'),
            }}
            navigation={{
              nextEl: '.nextBtn',
              prevEl: '.prevBtn',
            }}>
            <SwiperSlide className={cx('slide')}>
              <div className={cx('image')}>
                <img src={shape1} alt="" />
                <img src={bottleNoLabel} alt="" />
              </div>
              <div className={cx('info')}>
                <p className={cx('title')}>
                  <span className={cx('number')}>1</span>
                  <span className={cx('text')}>????????? ??????</span>
                </p>
                <p className={cx('text')}>
                  ???????????? ????????? 40% ??????
                  <br />
                  (?????? ?????? ?????? ??????)
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={cx('slide')}>
              <div className={cx('image')}>
                <img src={shape2} alt="" />
                <img src={bottleNoLabel} alt="" />
              </div>
              <div className={cx('info')}>
                <p className={cx('title')}>
                  <span className={cx('number')}>2</span>
                  <span className={cx('text')}>????????? ??????</span>
                </p>
                <p className={cx('text')}>
                  2L-32.6g / 500mL-11.1g
                  <br />
                  (1??? ??????)
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={cx('slide')}>
              <div className={cx('image')}>
                <img src={shape3} alt="" />
                <img src={bottleNoLabel} alt="" />
              </div>
              <div className={cx('info')}>
                <p className={cx('title')}>
                  <span className={cx('number')}>3</span>
                  <span className={cx('text')}>????????? ??????</span>
                </p>
                <p className={cx('text')}>
                  ?????? ????????? 15% ??????
                  <br />
                  (?????? ?????? 1??? ??????)
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className={cx('controls')}>
            <div className={'pager'}></div>
          </div>
          <button className={cx(['prev', 'prevBtn'])}></button>
          <button className={cx(['next', 'nextBtn'])}></button>
        </div>
        <Link to={'/?????????-?????????/Think-Green'}>????????? ??????</Link>
      </div>
      <img ref={backgroundRef} className={cx(['background', 'active'])} src={background} alt="" />
    </div>
  );
};

export default S04;
