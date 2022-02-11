import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Nav.module.scss';

const cx = classNames.bind(styles);

function Nav({ items, activeIndex }) {
  return (
    <div className={cx('container')}>
      <ul className={cx('nav')}>
        {items.map(({ title, link }, index) => (
          <li key={index} className={cx({ active: index === activeIndex })}>
            <Link to={link}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
