import classNames from 'classnames/bind';

import styles from './S01.module.scss';

import background from '../../../assets/images/gree/pulmuone/s01/background.jpg';
import bottle from '../../../assets/images/gree/pulmuone/s01/bottle.png';
import bubble_left from '../../../assets/images/gree/pulmuone/s01/bubble_left.png';
import bubble_right from '../../../assets/images/gree/pulmuone/s01/bubble_right.png';

const cx = classNames.bind(styles);

function S01() {
  return (
    <div className={cx('container')} style={{ backgroundImage: `url(${background})` }}>
      <div className={cx('limiter')}>
        <img className={cx('left')} src={bubble_left} alt="" />
        <img className={cx('right')} src={bubble_right} alt="" />

        <div className={cx('grid')}>
          <img className={cx('bottle')} src={bottle} alt="" />
          <div className={cx('text')}>
            <h3>
              풀무원의 바른먹거리 정신과
              <br /> 세계 1위 먹는샘물 기업
              <br /> 네슬레 워터스의 기술력이 만났습니다.
            </h3>
            <p>
              풀무원샘물은 1986년 먹는샘물 사업을 선보인 이래,
              <br />
              2004년 세계 1위 먹는샘물 회사인 네슬레 워터스와
              <br /> 바른먹거리 선도 기업 풀무원이 합작하여
              <br /> 혁신적인 기술 제휴를 바탕으로
              <br /> 대한민국 먹는샘물 시장을 선도해 나가고 있습니다.
              <br /> 풀무원샘물은 고객 신뢰와 품질을 최우선으로 생각하는
              <br /> 믿을 수 있는 기업으로 계속해서 성장하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default S01;
