import classNames from 'classnames/bind';

import styles from './NotPage.module.scss';

const cx = classNames.bind(styles);

function NotPage() {
  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <p>존재하지 않는 페이지입니다</p>
      </div>
    </div>
  );
}

export default NotPage;
