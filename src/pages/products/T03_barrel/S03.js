import classNames from 'classnames/bind';

import styles from './S03.module.scss';

import icon01 from '../../../assets/images/products/barrel/s03/icon01.svg';
import icon02 from '../../../assets/images/products/barrel/s03/icon02.svg';
import filter from '../../../assets/images/products/barrel/s03/filter.png';

const cx = classNames.bind(styles);

const S03 = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <h2 className={cx('title')}> ‘안전하고 경제적으로’ 풀무원샘물 냉온수기만의 차별화</h2>
        <ul className={cx('list')}>
          <li>
            <img src={icon01} alt="" />
            <p>
              국내 업계 최초로 <span className={cx('point')}>*헤파필터</span> 장착으로 미생물과 세균을 걸러주는 필터링 효과{' '}
              <span className={cx('sub')}>(크로버 제조 냉온수기에에 한함)</span>
            </p>
          </li>
          <li>
            <img src={icon02} alt="" />
            <p>기존 냉온수기 대비 20% 전기료 절감 및 소음 개선</p>
          </li>
        </ul>

        <div className={cx('inner')}>
          <div className={cx('image')}>
            <div className={cx('box')}>
              <img src={filter} alt="" />
            </div>
            <p className={cx('name')}>*헤파필터 (신선지킴이)</p>
          </div>

          <p className={cx('text')}>
            냉온수기 물을 컵에 따를 때 외부 공기가 병속으로 유입되지 않으면 병 내부가 진공상태가 되어 물을 따를 수 없게 되므로 모든
            냉온수기에는 진공상태를 방지하기 위한 아주 조그만 외부 공기 유입 구멍이 설치되어 있습니다. 풀무원샘물 냉온수기는 국내 업계
            최초로 헤파필터를 장착하여 외부 공기가 유입구를 통해 병 안으로 들어갈 때 공기 중에 있는 미생물이나 일반 세균을 걸러 내고 순수한
            공기만이 병 속으로 유입될 수 있게 하였습니다
          </p>
        </div>
      </div>
    </div>
  );
};

export default S03;
