import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './S06.module.scss';

import slide_img01 from '../../../assets/images/product/drinking/s06/list01.jpg';
import slide_img02 from '../../../assets/images/product/drinking/s06/list02.jpg';
import slide_img03 from '../../../assets/images/product/drinking/s06/list03.jpg';
import slide_img04 from '../../../assets/images/product/drinking/s06/list04.jpg';
import slide_img05 from '../../../assets/images/product/drinking/s06/list05.jpg';
import slide_img06 from '../../../assets/images/product/drinking/s06/list06.jpg';

import CarouselMulti from '../../../components/shared/CarouselMulti';

const cx = classNames.bind(styles);

function S06() {
  const slides = [
    {
      title: '전원분리',
      image: slide_img01,
    },
    {
      title: '상판분리',
      image: slide_img02,
    },
    {
      title: '저수조 물 제거',
      image: slide_img03,
    },
    {
      title: '온수 제거',
      image: slide_img04,
    },
    {
      title: '꼭지분리',
      image: slide_img05,
    },
    {
      title: '물받이 분리',
      image: slide_img06,
    },
  ];
  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <p className={cx('sub')}>20분만에 스팀으로 깨끗하게!</p>
        <h2 className={cx('title')}>믿고 맡기는 풀무원샘물 냉온수기 스팀 세척</h2>
        <p className={cx('text')}>
          냉온수기와 생수 전문교육을 받은 전문가가 방문하여 세척을 해드립니다.
          <br />
          (제주, 도서산간 지역 제외)
        </p>
        <Link className={cx('linkBtn')} to="/">
          냉온수기 세척 온라인 신청
        </Link>
        <CarouselMulti slides={slides} section={1} slidesPerView={5} />
      </div>
    </div>
  );
}

export default S06;