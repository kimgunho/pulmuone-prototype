import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function Location() {
  return <div className={cx('container')}>Location</div>;
}

export default Location;
