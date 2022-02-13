import classNames from 'classnames/bind';

import styles from './S03.module.scss';

import time_icon01 from '../../../assets/images/product/routine/s03/time_icon01.svg';
import time_icon02 from '../../../assets/images/product/routine/s03/time_icon02.svg';
import time_icon03 from '../../../assets/images/product/routine/s03/time_icon03.svg';
import time_icon04 from '../../../assets/images/product/routine/s03/time_icon04.svg';
import time_icon05 from '../../../assets/images/product/routine/s03/time_icon05.svg';
import time_icon06 from '../../../assets/images/product/routine/s03/time_icon06.svg';
import time_icon07 from '../../../assets/images/product/routine/s03/time_icon07.svg';
import time_icon08 from '../../../assets/images/product/routine/s03/time_icon08.svg';

const cx = classNames.bind(styles);

function S03() {
  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <h2 className={cx('title')}>건강한 수분 습관, 왜 중요할까요?</h2>
        <div className={cx('timeline')}>
          <ul>
            <li>
              <p className={cx('time')}>AM 07:00</p>
              <img src={time_icon01} alt="" />
              <p className={cx('text')}>기상시</p>
            </li>
            <li>
              <p className={cx('time')}>AM 10:00</p>
              <img src={time_icon02} alt="" />
              <p className={cx('text')}>아침 휴식 중</p>
            </li>
            <li>
              <p className={cx('time')}>AM 12:00</p>
              <img src={time_icon03} alt="" />
              <p className={cx('text')}>점심시간에</p>
            </li>
            <li>
              <p className={cx('time')}>PM 02:00</p>
              <img src={time_icon04} alt="" />
              <p className={cx('text')}>커피 마시면서</p>
            </li>
            <li>
              <p className={cx('time')}>PM 04:00</p>
              <img src={time_icon05} alt="" />
              <p className={cx('text')}>오후에</p>
            </li>
            <li>
              <p className={cx('time')}>PM 07:00</p>
              <img src={time_icon06} alt="" />
              <p className={cx('text')}>집에도착</p>
            </li>
            <li>
              <p className={cx('time')}>PM 09:00</p>
              <img src={time_icon07} alt="" />
              <p className={cx('text')}>저녁</p>
            </li>
            <li>
              <p className={cx('time')}>PM 11:00</p>
              <img src={time_icon08} alt="" />
              <p className={cx('text')}>잠자기 전</p>
            </li>
          </ul>
        </div>

        <p className={cx('text')}>
          평균적으로, 물은 성인 인체의 약 60%를 차지하고 있으며
          <br />
          우리 몸은 매일 소변, 호흡, 땀, 대변을 통해 약 2.5L의 물을 배출합니다.
        </p>
        <p className={cx('text')}>
          우리의 몸이 제 기능을 하기 위한 수분 밸런스를 유지하기 위해 하루 2L의 수분 섭취가 필요합니다.
          <span className={cx('point')}> 충분한 수분 섭취를 통해 건강한 라이프 스타일을 가꿔보세요!</span>
        </p>

        <p className={cx('from')}>
          *Mitchell 외, The Journal of Biological Chemistry, 1945: 625-637
          <br />
          *Jéquier 및 Constant F. Water as an essential nutrient: the physiological bass of hydration. EJCN 2010; 64: 115-123.
        </p>
      </div>
    </div>
  );
}

export default S03;
