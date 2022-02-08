import classNames from 'classnames/bind';

import styles from './CarbonEmissionLogo.module.scss';

const cx = classNames.bind(styles);

function CarbonEmissionLogo() {
  return (
    <div className={cx('circle')}>
      <h3 className={cx('title')}>
        Carbon
        <br />
        Emission
      </h3>
      <div className={cx('box')}>
        <div className={cx('wave1')}></div>
        <div className={cx('wave2')}></div>
      </div>
    </div>
  );
}

export default CarbonEmissionLogo;
