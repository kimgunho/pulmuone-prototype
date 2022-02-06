import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './S05.module.scss';
import { links } from '../../assets/data/links';

const cx = classNames.bind(styles);

function S05() {
  return (
    <div className={cx('container')}>
      <div className={cx('background')}></div>
      <div className={cx('detail')}>
        <div className={cx('info')}>
          <h2>
            풀무원샘물로 건강한
            <br />
            수분 섭취를 시작해 보세요!
          </h2>
          <p>
            자연이 만들고 거른 깨끗한 물을
            <br />
            풀무원의 바른 먹거리 철학으로 전합니다.
          </p>
          <Link to={links.home}>제품 보러가기</Link>
        </div>
      </div>
    </div>
  );
}

export default S05;
