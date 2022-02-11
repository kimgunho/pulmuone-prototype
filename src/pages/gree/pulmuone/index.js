import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function Pulmuone() {
  return <div className={cx('container')}>Pulmuone</div>;
}

export default Pulmuone;
