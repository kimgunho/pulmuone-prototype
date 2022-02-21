import classNames from 'classnames/bind';

import styles from './S02.module.scss';

import video from '../../../assets/video/bodyful_video.mp4';

const cx = classNames.bind(styles);

const S02 = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <h2 className={cx('title')}>내 몸에 꼭 필요한 미네랄, 마시면서 채우자!</h2>
        <video controls>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default S02;
