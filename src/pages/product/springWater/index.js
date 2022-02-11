import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function SpringWater() {
  return <div className={cx('container')}>SpringWater</div>;
}

export default SpringWater;
