import classNames from 'classnames/bind';

import styles from './NotFound.module.scss';

const cx = classNames.bind(styles);

const NotFound = () => {
  return (
    <div className={cx('container')}>
      <p>존재하지 않는 페이지입니다</p>
    </div>
  );
};

export default NotFound;
