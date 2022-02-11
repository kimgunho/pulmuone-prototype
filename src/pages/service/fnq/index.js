import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function FNQ() {
  return <div className={cx('container')}>FNQ</div>;
}

export default FNQ;
