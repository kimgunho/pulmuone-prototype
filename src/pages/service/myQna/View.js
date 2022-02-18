import classNames from 'classnames/bind';

import styles from './View.module.scss';

const cx = classNames.bind(styles);

function View() {
  return <div className={cx('container')}>View...</div>;
}

export default View;
