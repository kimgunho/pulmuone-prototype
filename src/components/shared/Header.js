import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { links } from '../../assets/data/links';
import { gnb_left, gnb_right } from '../../assets/data/gnb';

import desktop_logo from '../../assets/images/shared/logo.svg';
import mobile_logo from '../../assets/images/shared/pulmuone_title.png';

import MobileBtn from './MobileBtn';
import Dimmed from './Dimmed';

const cx = classNames.bind(styles);

function Header() {
  const [clicked, setClick] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 740;

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  const handleCloseNav = () => {
    setClick(false);
  };

  return (
    <>
      <header className={cx('header')}>
        <div className={cx('limiter')}>
          <h1 className={cx('logo')}>
            <NavLink to={links.home}>
              <img src={width > breakPoint ? desktop_logo : mobile_logo} alt="풀무원 샘물" />
            </NavLink>
          </h1>

          <MobileBtn clicked={clicked} setClick={setClick} />

          <div className={cx(['inner', { active: clicked }])}>
            <ul className={cx('gnb')}>
              {gnb_left.map(({ title, link }, index) => (
                <li onClick={handleCloseNav} key={index}>
                  <NavLink to={link}>{title}</NavLink>
                </li>
              ))}
            </ul>

            <ul className={cx('gnb')}>
              {gnb_right.map(({ title, link }, index) => (
                <li onClick={handleCloseNav} key={index}>
                  <NavLink to={link}>{title}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
      <Dimmed clicked={clicked} />
    </>
  );
}

export default Header;
