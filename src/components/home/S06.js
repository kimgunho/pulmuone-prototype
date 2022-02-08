import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './S06.module.scss';
import { links } from '../../assets/data/links';

import aws from '../../assets/images/home/s06/asw.png';

const cx = classNames.bind(styles);

function S06() {
  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <div className={cx('info')}>
          <h2>
            국내 먹는샘물 업계 최초
            <br />
            AWS 인증
          </h2>

          <div className={cx('logo')}>
            <img draggable="false" src={aws} alt="" />
          </div>

          <p>
            수자원의 지속 가능성에 관심을 가지고 이를 보존하기 위한 노력을 인정 받아
            <br />
            국내 먹는샘물 업계 최초로 AWS certification 인증을 획득했습니다.{' '}
          </p>
          <Link to={links.home}>제품 보러가기</Link>
        </div>
        <div className={cx('logo')}>
          <img draggable="false" src={aws} alt="" />
        </div>
      </div>
    </div>
  );
}

export default S06;
