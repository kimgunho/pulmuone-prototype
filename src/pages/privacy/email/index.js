import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function Email() {
  return <div className={cx('container')}>Email</div>;
}

export default Email;
