import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function Bodyful() {
  return <div className={cx('container')}>Bodyful</div>;
}

export default Bodyful;
