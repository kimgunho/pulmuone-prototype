import { useRef } from 'react';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import styles from './S03.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import background01 from '../../../assets/images/products/water/background01.jpg';
import background02 from '../../../assets/images/products/water/background02.jpg';
import background03 from '../../../assets/images/products/water/background03.jpg';

const cx = classNames.bind(styles);

const S03 = () => {
  const paginationRef = useRef();

  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <h3 className={cx('title')}>미네랄리티가 인상적인 풀무원샘물</h3>
        <p>
          자연이 신비로움이 그대로 담긴 ‘미네랄리티’ 가 인상적인 풀무원샘물은 <br />
          쓴맛과 단맛의 균형이 적절하게 어우러져 부드러운 목넘김을 가진 것이 특징입니다. <br />
          ‘미네랄리티’란 주로 와인에서 느껴지는 향, 질감 등을 나타내는 표현으로 <br />
          풀무원샘물은 미네랄 밸런스에서 오는 뛰어난 질감과 풍미를 선사합니다.
        </p>
        <h3 className={cx('title')}>풀무원샘물 이렇게 드셔 보세요!</h3>
        <Swiper
          className={cx('list')}
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{ 734: { slidesPerView: 2 }, 1068: { slidesPerView: 3 } }}
          pagination={{
            el: `.pager`,
            clickable: true,
            bulletActiveClass: cx('bulletsActive'),
          }}
          modules={[Pagination]}>
          <SwiperSlide className={cx('item')}>
            <div className={cx('image')} style={{ backgroundImage: `url(${background01})` }}>
              <p>채소를 곁들인 가벼운 요리</p>
            </div>
            <div className={cx('text')}>
              <p>풀무원샘물의 적절한 밀도는 신선한 채소를 곁들인 가벼운 요리와 균형을 이룹니다.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={cx('item')}>
            <div className={cx('image')} style={{ backgroundImage: `url(${background02})` }}>
              <p>샐러드 &amp; 드레싱</p>
            </div>
            <div className={cx('text')}>
              <p>풀무원샘물의 부드러운 맛이 샐러드 드레싱의 산미와 조화를 이뤄 샐러드의 풍미를 높여줍니다.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={cx('item')}>
            <div className={cx('image')} style={{ backgroundImage: `url(${background03})` }}>
              <p>해산물 요리</p>
            </div>
            <div className={cx('text')}>
              <p>풀무원샘물은 미묘한 짠 맛과 섬세하게 맛을 낸 생선, 조개 등 해산물 요리와 잘 어울립니다.</p>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className={cx('controls')}>
          <div ref={paginationRef} className={'pager'}></div>
        </div>
      </div>
    </div>
  );
};

export default S03;
