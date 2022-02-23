import classNames from 'classnames/bind';

import styles from './S04.module.scss';

import background from '../../../assets/images/products/barrel/s04/background.jpg';
import bubble_left from '../../../assets/images/products/barrel/s04/bubble_left.png';
import bubble_right from '../../../assets/images/products/barrel/s04/bubble_right.png';
import leaf_left from '../../../assets/images/products/barrel/s04/leaf_left.png';
import leaf_right from '../../../assets/images/products/barrel/s04/leaf_right.png';
import bigbottle from '../../../assets/images/products/barrel/s04/bigbottle.png';

const cx = classNames.bind(styles);

const S04 = () => {
  return (
    <div className={cx('container')} style={{ backgroundImage: `url(${background})` }}>
      <div className={cx('limiter')}>
        <h2 className={cx('title')}>자연의 깨끗함을 담은 물</h2>
        <p className={cx('text')}>
          150m 암반 대수층에서 용출되는 깨끗하고 맛있는 물을 합리적인 가격으로
          <br /> 가정이나 소규모 회사에서 부담 없이 드실 수 있습니다.
        </p>
      </div>
      <div className={cx('objects')}>
        <img className={cx('left')} src={leaf_left} alt="" />
        <img className={cx('right')} src={leaf_right} alt="" />
        <img className={cx('bubleeLeft')} src={bubble_left} alt="" />
        <img className={cx('bubbleRight')} src={bubble_right} alt="" />
      </div>
      <img className={cx('barrel')} src={bigbottle} alt="맛있는샘물 18.9L" />
    </div>
  );
};

export default S04;
