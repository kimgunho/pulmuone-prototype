import classNames from 'classnames/bind';

import styles from './Download.module.scss';
import iconGreen from '../../assets/images/shared/download_icon_green.svg';
import iconBlue from '../../assets/images/shared/download_icon_blue.svg';

const cx = classNames.bind(styles);

const Download = ({ color = 'green', files, names, title }) => {
  return (
    <div className={cx(['download', color])}>
      <p className={cx('text')}>{title}</p>
      <div className={cx('buttons')}>
        {files.map((file, index) => (
          <a key={index} href={file} target="_blank" rel="noreferrer">
            <img src={color === 'green' ? iconGreen : iconBlue} alt="" />
            <span>{names[index]}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Download;
