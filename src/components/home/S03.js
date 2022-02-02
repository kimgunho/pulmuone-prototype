import classNames from 'classnames/bind';

import styles from './S03.module.scss';

const cx = classNames.bind(styles);

function S03() {
  return <div className={cx('container')}></div>;
}

export default S03;
