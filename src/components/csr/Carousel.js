import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import styles from './Carousel.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';

import arrow_left_icon from '../../assets/images/shared/arrow-back.svg';
import arrow_right_icon from '../../assets/images/shared/arrow-next.svg';

const cx = classNames.bind(styles);

const Carousel = ({ images, slidesPerView, section }) => {
  const [pager, setPager] = useState(null);
  const paginationRef = useRef();

  useEffect(() => {
    const classes = paginationRef.current.className.split(' ');
    setPager(classes[1]);
  }, []);

  return (
    <div className={cx('carousel')}>
      <Swiper
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
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="" />
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
};

export default Carousel;
