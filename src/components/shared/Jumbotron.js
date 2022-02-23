import classNames from 'classnames/bind';

import styles from './Jumbotron.module.scss';

const cx = classNames.bind(styles);

const Jumbotron = ({ title, subtitle, background }) => {
  return (
    <div className={cx('container')} style={{ backgroundImage: `url(${background})` }}>
      <h2 className={cx('title')}>{title}</h2>
      <p className={cx('subtitle')}>{subtitle}</p>
    </div>
  );
};

export default Jumbotron;
