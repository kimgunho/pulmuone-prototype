import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function Eco() {
  return <div className={cx('container')}>eco</div>;
}

export default Eco;
