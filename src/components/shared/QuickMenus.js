import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './QuickMenus.module.scss';

const cx = classNames.bind(styles);

const QuickMenus = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY);
    });
  }, []);

  const moveToSmartStore = () => {
    window.open('https://smartstore.naver.com/pulmuonebynature');
  };

  const moveToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={cx('container')}>
      <ul>
        <li className={cx('shop')} onClick={moveToSmartStore}>
          <span className={cx('icon')}></span>
          <span className={cx('title')}>SHOP</span>
        </li>
        <li className={cx(['top', { hide: scrollY === 0 }])} onClick={moveToTop}>
          <span className={cx('icon')}></span>
          <span className={cx('title')}>TOP</span>
        </li>
      </ul>
    </div>
  );
};

export default QuickMenus;
