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
          <h2 className={cx('title')}>하루 2L 건강한 수분 습관</h2>
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
          물은 우리 몸의 절반 이상을 구성하고 인체에서 가장 중요한 역할을 하는 만큼 건강한 수분 섭취 또한 매우 중요합니다.
          <br /> 풀무원샘물 워터루틴은 550여가지의 철저한 수질검사를 거친 안전한 제품으로
          <br /> 풀무원샘물 워터루틴과 함께 라면 언제 어디서나 쉽고 편리하게 하루 2L 건강한 수분 습관을 지킬 수 있습니다.
        </p>
      </div>
    </>
  );
};

export default S01;
