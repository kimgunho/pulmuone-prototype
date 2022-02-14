import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import styles from './CarouselMulti.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';

import arrow_left_icon from '../../assets/images/shared/arrow-back.svg';
import arrow_right_icon from '../../assets/images/shared/arrow-next.svg';

const cx = classNames.bind(styles);

function Carousel({ slides, slidesPerView, section }) {
  const [pager, setPager] = useState(null);
  const paginationRef = useRef();

  useEffect(() => {
    const classes = paginationRef.current.className.split(' ');
    setPager(classes[1]);
  }, []);

  return (
    <div className={cx('carousel')}>
      <Swiper
        spaceBetween={20}
        loop={true}
        slidesPerView={slidesPerView}
        pagination={{
          el: `.${pager}`,
          clickable: true,
          bulletActiveClass: cx('bulletsActive'),
        }}
        navigation={{
          nextEl: `.next${section}`,
          prevEl: `.prev${section}`,
        }}
        modules={[Pagination, Navigation]}>
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={cx('item')}>
              <div className={cx('image')} style={{ backgroundImage: `url(${item.image})` }}>
                <p className={cx('number')}>{index < 9 ? `0${index + 1}` : index + 1}</p>
              </div>
              <div className={cx('text')}>{item.title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={cx('controls')}>
        <div ref={paginationRef} className={cx(['pager', `pager${section}`])}></div>
        <div className={cx('nav')}>
          <button className={cx(['prev', `prev${section}`])}>
            <img src={arrow_left_icon} alt="" />
          </button>
          <button className={cx(['next', `next${section}`])}>
            <img src={arrow_right_icon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
