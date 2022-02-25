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

  return (
    <div className={cx('container')}>
      <ul>
        <li className={cx('shop')}>
          <a href="https://smartstore.naver.com/pulmuonebynature" target={'_blank'} rel="noreferrer">
            <span className={cx('icon')}></span>
            <span className={cx('title')}>SHOP</span>
          </a>
        </li>
        <li className={cx(['top', { close: scrollY === 0 }])} onClick={() => window.scrollTo(0, 0)}>
          <span className={cx('icon')}></span>
          <span className={cx('title')}>TOP</span>
        </li>
      </ul>
    </div>
  );
};

export default QuickMenus;
