import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function Share() {
  return <div className={cx('container')}>share</div>;
}

export default Share;
