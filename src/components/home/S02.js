import classNames from 'classnames/bind';

import styles from './S02.module.scss';

import sandBg from '../../assets/images/home/section02_bg.jpg';
import stoneBg from '../../assets/images/home/stoneBg.jpg';
import leaf_left from '../../assets/images/home/leaf_left.png';
import leaf_right from '../../assets/images/home/leaf_right.png';

const cx = classNames.bind(styles);

function S02() {
  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>
        2억년 화강암이<span className={cx('point')}>꽉 잡은 미네랄</span>
      </h2>

      <div className={cx('limiter')}>
        <div className={cx('left')}>
          <p>
            풍부한 미네랄 <span className={cx('point')}>대보 화강암</span>
          </p>
        </div>
        <div className={cx('right')}>
          <p>
            빈틈없이 촘촘한 대보 화강암이
            <br />
            2억년 동안 골라 모은 미네랄 물방울
          </p>
        </div>
      </div>

      <div className={cx('leafs')}>
        <img draggable="false" className={cx(['leaf', 'left'])} src={leaf_left} alt="" />
        <img draggable="false" className={cx(['leaf', 'right'])} src={leaf_right} alt="" />
      </div>

      <div style={{ backgroundImage: `url(${stoneBg})` }} className={cx(['background', 'stone'])} />
      <div style={{ backgroundImage: `url(${sandBg})` }} className={cx(['background', 'sand'])} />
    </div>
  );
}

export default S02;
