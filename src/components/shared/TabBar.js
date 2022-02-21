import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './TabBar.module.scss';

const cx = classNames.bind(styles);

const TabBar = ({ items, activeIndex }) => {
  return (
    <div className={cx('container')}>
      <ul className={cx('tabs')}>
        {items.map(({ title, link }, index) => (
          <li key={index} className={cx({ active: index === activeIndex })}>
            <Link to={link}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabBar;
