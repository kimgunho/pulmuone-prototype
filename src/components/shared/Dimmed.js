import classNames from 'classnames/bind';

import styles from './Dimmed.module.scss';

const cx = classNames.bind(styles);

function Dimmed({ clicked }) {
  return <div className={cx(['dimmed', { active: clicked }])} />;
}

export default Dimmed;
