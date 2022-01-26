import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { links } from '../../assets/data/links';
import { gnb_left, gnb_right } from '../../assets/data/gnb';

import logo from '../../assets/images/shared/logo.svg';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('header')}>
      <div className={cx('limiter')}>
        <h1 className={cx('logo')}>
          <Link to={links.home}>
            <img src={logo} alt="풀무원 샘물" />
          </Link>
        </h1>
        <ul className={cx('gnb')}>
          {gnb_left.map(({ title, link }, index) => (
            <li key={index}>
              <Link to={link}>{title}</Link>
            </li>
          ))}
        </ul>
        <ul className={cx('gnb')}>
          {gnb_right.map(({ title, link }, index) => (
            <li key={index}>
              <Link to={link}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
