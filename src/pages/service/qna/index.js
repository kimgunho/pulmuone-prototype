import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function QNA() {
  return <div className={cx('container')}>QNA</div>;
}

export default QNA;
