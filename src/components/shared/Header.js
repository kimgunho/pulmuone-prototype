import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import desktopLogo from '../../assets/images/shared/desktop_logo.svg';
import mobileLogo from '../../assets/images/shared/mobile_logo.svg';

const cx = classNames.bind(styles);

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [clicked, setClick] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <header className={cx('container')}>
      <div className={cx('wrapper')}>
        <div className={cx(['hamberger', { close: clicked }])} onClick={() => setClick(!clicked)}>
          <div className={cx('top')} />
          <div className={cx('center')} />
          <div className={cx('bottom')} />
        </div>
        <h1 className={cx('logo')}>
          <Link to="/">
            <img src={width > 734 ? desktopLogo : mobileLogo} alt="풀무원샘물" />
          </Link>
        </h1>
        <div className={cx(['inner', { active: clicked }])}>
          <ul className={cx('menus')}>
            <li onClick={() => setClick(false)}>
              <Link to="/브랜드-스토리/대보-화강암">브랜드 스토리</Link>
            </li>
            <li onClick={() => setClick(false)}>
              <Link to="/제품안내/풀무원샘물">제품안내</Link>
            </li>
          </ul>
          <ul className={cx('menus')}>
            <li onClick={() => setClick(false)}>
              <Link to="/CSR/수자원-보호">CSR</Link>
            </li>
            <li onClick={() => setClick(false)}>
              <Link to="/고객센터/자주묻는질문">고객센터</Link>
            </li>
            <li onClick={() => setClick(false)}>
              <Link to="/회사소개/풀무원샘물">회사소개</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
