import classNames from 'classnames/bind';

import styles from './MobileBtn.module.scss';

const cx = classNames.bind(styles);

function MobileBtn({ clicked, setClick }) {
  const handleClick = () => {
    setClick(!clicked);
  };

  return (
    <div className={cx(['container', { active: clicked }])} onClick={handleClick}>
      <div className={cx('top')} />
      <div className={cx('middle')} />
      <div className={cx('bottom')} />
    </div>
  );
}

export default MobileBtn;
