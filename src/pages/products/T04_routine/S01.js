import classNames from 'classnames/bind';

import styles from './S01.module.scss';

import background from '../../../assets/images/products/routine/s01/background.jpg';
import leaf_left from '../../../assets/images/products/routine/s01/leaf_left.png';
import leaf_right from '../../../assets/images/products/routine/s01/leaf_right.png';
import bubble_left from '../../../assets/images/products/routine/s01/bubble_left.png';
import bubble_right from '../../../assets/images/products/routine/s01/bubble_right.png';
import bottle from '../../../assets/images/products/routine/s01/bottle.png';

const cx = classNames.bind(styles);

const S01 = () => {
  return (
    <>
      <div className={cx('container')} style={{ backgroundImage: `url(${background})` }}>
        <div className={cx('limiter')}>
          <h2 className={cx('title')}>언제 어디서나 건강한 수분 습관</h2>
          <p className={cx('text')}>
            ‘풀무원샘물 워터루틴’으로 건강한 라이프 스타일을 위한
            <br /> 나만의 워터 루틴을 만들어 보세요!
          </p>
        </div>
        <div className={cx('objects')}>
          <img className={cx('left')} src={leaf_left} alt="" />
          <img className={cx('right')} src={leaf_right} alt="" />
          <img className={cx('bubleeLeft')} src={bubble_left} alt="" />
          <img className={cx('bubbleRight')} src={bubble_right} alt="" />
        </div>
        <img className={cx('bottle')} src={bottle} alt="" />
      </div>
      <div className={cx('inner')}>
        <p>
          평균적으로 물은 성인 인체의 약 60%를 차지하는 만큼 건강한 라이프 스타일의 중요한 역할을 합니다.
          <br /> 우리 몸은 매일 소변, 호흡, 땀, 대변을 통해 2.5L의 물을 배출하기 때문에
          <br /> 수분 밸런스 유지를 위해 손실된 2.5L의 물을 다시 흡수하는게 좋습니다.
        </p>
      </div>
    </>
  );
};

export default S01;
