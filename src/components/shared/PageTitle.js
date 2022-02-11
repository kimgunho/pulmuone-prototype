import classNames from 'classnames/bind';

import styles from './PageTitle.module.scss';

const cx = classNames.bind(styles);

function PageTitle({ title, sub, color }) {
  return (
    <div className={cx('container')} style={{ backgroundColor: color }}>
      {sub && <p>{sub}</p>}
      <h2>{title}</h2>
    </div>
  );
}

export default PageTitle;
