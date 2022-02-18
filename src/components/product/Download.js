import classNames from 'classnames/bind';

import styles from './Download.module.scss';

import download_icon_green from '../../assets/images/shared/download_icon_green.svg';
import download_icon_blue from '../../assets/images/shared/download_icon_blue.svg';

const cx = classNames.bind(styles);

function Download({ color = 'green', file, text, title }) {
  return (
    <div className={cx(['download', color === 'green' ? 'green' : 'blue'])}>
      <p className={cx('text')}>{title}</p>
      <a href={file} download>
        <img src={color === 'green' ? download_icon_green : download_icon_blue} alt="" />
        <span>{text}</span>
      </a>
    </div>
  );
}

export default Download;
