import classNames from 'classnames/bind';

import styles from './S01.module.scss';

import background from '../../../assets/images/product/springWater/background.jpg';
import leaf_left from '../../../assets/images/product/springWater/leaf_left.png';
import leaf_right from '../../../assets/images/product/springWater/leaf_right.png';
import pulmuoneWater from '../../../assets/images/product/springWater/pulmuone_water.png';

const cx = classNames.bind(styles);

function S01() {
  return (
    <div className={cx('container')} style={{ backgroundImage: `url(${background})` }}>
      <div className={cx('limiter')}>
        <p className={cx('text')}>
          2억년 동안 어떠한 지질학적 변화도 겪지 않은 촘촘하고 단단한 화강암이 미네랄을 꽉 잡아,
          <br /> 화강암반의 풍부한 미네랄을 오롯이 물에 담았습니다.
          <span>자연이 만들고 거른 깨끗한 물을 풀무원의 바른 먹거리 철학으로 담아 나와 내 가족이 믿고 마실 수 있습니다.</span>
        </p>
      </div>

      <div className={cx('objects')}>
        <img className={cx('left')} src={leaf_left} alt="" />
        <img className={cx('right')} src={leaf_right} alt="" />
      </div>
      <img draggable="false" className={cx('water')} src={pulmuoneWater} alt="" />
    </div>
  );
}

export default S01;
