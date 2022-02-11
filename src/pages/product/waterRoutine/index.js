import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function WaterRoutine() {
  return <div className={cx('container')}>WaterRoutine</div>;
}

export default WaterRoutine;
