import classNames from 'classnames/bind';

import styles from './S02.module.scss';

import pulmuone_logo from '../../../assets/images/company/pulmuone/s02/pulmuone_logo.jpg';
import nestle_logo from '../../../assets/images/company/pulmuone/s02/nestle_logo.jpg';

const cx = classNames.bind(styles);

const S02 = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <h2 className={cx('title')}>풀무원과 네슬레 워터스</h2>
        <div className={cx('pulmuone')}>
          <img src={pulmuone_logo} alt="" />
          <div className={cx('text')}>
            <h3 className={cx('title')}>
              바른 먹거리 정신 <span>‘풀무원’</span>
            </h3>
            <p>
              이웃사랑 정신, 즉 자연 그대로 신선하고 안전한 먹거리를 드리겠다는 이웃사랑의 정신으로서 이는 사람(풀무원)과 사람(고객) 과의
              아름답고 굳센 약속이며, 내 가족이 안심하고 먹을 수 있는 식품을 만든다는 풀무원의 의지입니다. 생명존중 정신, 즉 이웃사랑의 정신
              구현을 위해 생명의 근원인 자연을 사랑하고 살리는 것으로서, 작은 생명도 마음 놓고 살 수 있는 자연환경을 가꾸어 나가겠다는
              사람과 자연과의 약속입니다.
            </p>
          </div>
        </div>

        <div className={cx('nestle')}>
          <img src={nestle_logo} alt="" />
          <div className={cx('text')}>
            <h3 className={cx('title')}>
              먹는샘물 세계 1위 기업 <span>‘네슬레 워터스’</span>
            </h3>
            <p>
              1992년 설립된 네슬레 그룹의 먹는샘물 회사, 네슬레 워터스는 전 세계 130여 개국에 진출해 48개 브랜드를 생산 및 판매하는 세계 1위
              먹는샘물 회사입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default S02;
