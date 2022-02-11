import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function DrinkingFountain() {
  return <div className={cx('container')}>DrinkingFountain</div>;
}

export default DrinkingFountain;
