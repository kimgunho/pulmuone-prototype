import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './S06.module.scss';

import img01 from '../../../assets/images/products/barrel/s06/img01.jpg';
import img02 from '../../../assets/images/products/barrel/s06/img02.jpg';
import img03 from '../../../assets/images/products/barrel/s06/img03.jpg';
import img04 from '../../../assets/images/products/barrel/s06/img04.jpg';
import img05 from '../../../assets/images/products/barrel/s06/img05.jpg';
import img06 from '../../../assets/images/products/barrel/s06/img06.jpg';

import Carousel from '../../../components/product/Carousel';

const cx = classNames.bind(styles);

const S06 = () => {
  const slides = [
    {
      title: '전원분리',
      image: img01,
    },
    {
      title: '상판분리',
      image: img02,
    },
    {
      title: '저수조 물 제거',
      image: img03,
    },
    {
      title: '온수 제거',
      image: img04,
    },
    {
      title: '꼭지분리',
      image: img05,
    },
    {
      title: '물받이 분리',
      image: img06,
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
        <Carousel slides={slides} section={1} slidesPerView={5} />
      </div>
    </div>
  );
};

export default S06;
