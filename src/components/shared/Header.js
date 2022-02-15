import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { links } from '../../assets/data/links';
import { gnb_left, gnb_right } from '../../assets/data/gnb';

import desktop_logo from '../../assets/images/shared/desktop_logo.svg';
import mobile_logo from '../../assets/images/shared/pulmuone_title.png';

import MobileBtn from './MobileBtn';
import Dimmed from './Dimmed';

const cx = classNames.bind(styles);

function Header({ width }) {
  const [clicked, setClick] = useState(false);

  const handleCloseNav = () => {
    setClick(false);
  };

  return (
    <>
      <header className={cx('header')}>
        <div className={cx('limiter')}>
          <h1 className={cx('logo')}>
            <Link to={links.home}>
              <img src={width > 740 ? desktop_logo : mobile_logo} alt="풀무원 샘물" />
            </Link>
          </h1>

          <MobileBtn clicked={clicked} setClick={setClick} />

          <div className={cx(['inner', { active: clicked }])}>
            <ul className={cx('gnb')}>
              {gnb_left.map(({ title, link }, index) => (
                <li onClick={handleCloseNav} key={index}>
                  <Link to={link}>{title}</Link>
                </li>
              ))}
            </ul>

            <ul className={cx('gnb')}>
              {gnb_right.map(({ title, link }, index) => (
                <li onClick={handleCloseNav} key={index}>
                  <Link to={link}>{title}</Link>
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
