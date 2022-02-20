import classNames from 'classnames/bind';

import styles from './S01.module.scss';

import background from '../../../assets/images/products/barrel/s01/background.jpg';
import bubble_left from '../../../assets/images/products/barrel/s01/bubble_left.png';
import bubble_right from '../../../assets/images/products/barrel/s01/bubble_right.png';
import leaf_left from '../../../assets/images/products/barrel/s01/leaf_left.png';
import leaf_right from '../../../assets/images/products/barrel/s01/leaf_right.png';
import bigbottle from '../../../assets/images/products/barrel/s01/bigbottle.png';

const cx = classNames.bind(styles);

const S01 = () => {
  return (
    <div className={cx('container')} style={{ backgroundImage: `url(${background})` }}>
      <div className={cx('limiter')}>
        <h2 className={cx('title')}>자연의 깨끗함을 담은 물</h2>
        <p className={cx('text')}>
          풀무원샘물의 취수원은 누구의 손길도 닿지 않은 자연의 깨끗한 물입니다.
          <br />
          프리미엄 대용량 생수를 가볍게, 신선하게, 편리하게 즐길 수 있습니다!
        </p>
      </div>

      <div className={cx('objects')}>
        <img className={cx('left')} src={leaf_left} alt="" />
        <img className={cx('right')} src={leaf_right} alt="" />
        <img className={cx('bubleeLeft')} src={bubble_left} alt="" />
        <img className={cx('bubbleRight')} src={bubble_right} alt="" />
      </div>

      <img className={cx('bigbottle')} src={bigbottle} alt="" />
    </div>
  );
};

export default S01;
