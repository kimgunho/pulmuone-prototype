import classNames from 'classnames/bind';

import styles from './PageTitle.module.scss';

const cx = classNames.bind(styles);

const PageTitle = ({ title, subtitle, reverse = false }) => {
  return (
    <div className={cx('container')}>
      {subtitle && <p className={cx({ reverse })}>{subtitle}</p>}
      <h2>{title}</h2>
    </div>
  );
};

export default PageTitle;
