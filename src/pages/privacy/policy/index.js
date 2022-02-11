import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function Policy() {
  return <div className={cx('container')}>Policy</div>;
}

export default Policy;
