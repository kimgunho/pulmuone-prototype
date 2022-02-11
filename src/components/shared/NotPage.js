import classNames from 'classnames/bind';

import styles from './NotPage.module.scss';

const cx = classNames.bind(styles);

function NotPage() {
  return <div className={cx('container')}>not page......</div>;
}

export default NotPage;
