import React from 'react';
import classNames from 'classnames/bind';

import styles from './QuickMenus.module.scss';

const cx = classNames.bind(styles);

const QuickMenus = () => {
  const moveToSmartStore = () => {
    window.open('https://smartstore.naver.com/pulmuonebynature');
  };

  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={cx('container')}>
      <ul>
        <li className={cx('shop')} onClick={moveToSmartStore}>
          <span className={cx('icon')}></span>
          <span className={cx('title')}>SHOP</span>
        </li>
        <li className={cx('top')} onClick={moveToTop}>
          <span className={cx('icon')}></span>
          <span className={cx('title')}>TOP</span>
        </li>
      </ul>
    </div>
  );
};

export default QuickMenus;
