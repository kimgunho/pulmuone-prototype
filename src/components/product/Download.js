import classNames from 'classnames/bind';

import styles from './Download.module.scss';
import iconGreen from '../../assets/images/shared/download_icon_green.svg';
import iconBlue from '../../assets/images/shared/download_icon_blue.svg';

const cx = classNames.bind(styles);

const Download = ({ color = 'green', file, text, title }) => {
  return (
    <div className={cx(['download', color])}>
      <p className={cx('text')}>{title}</p>
      <a href={file} download>
        <img src={color === 'green' ? iconGreen : iconBlue} alt="" />
        <span>{text}</span>
      </a>
    </div>
  );
};

export default Download;
