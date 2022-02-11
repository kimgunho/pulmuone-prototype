import classNames from 'classnames/bind';

import styles from './PageTitle.module.scss';

const cx = classNames.bind(styles);

function PageTitle({ title, sub, background = '#F5F3EF' }) {
  return (
    <div className={cx('container')} style={{ backgroundColor: background }}>
      {sub && <p>{sub}</p>}
      <h2>{title}</h2>
    </div>
  );
}

export default PageTitle;
