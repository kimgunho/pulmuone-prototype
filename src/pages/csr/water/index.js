import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function Water() {
  return <div className={cx('container')}>water</div>;
}

export default Water;
