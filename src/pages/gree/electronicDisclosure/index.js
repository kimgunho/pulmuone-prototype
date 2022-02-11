import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function ElectronicDisclosure() {
  return <div className={cx('container')}>ElectronicDisclosure</div>;
}

export default ElectronicDisclosure;
