import classNames from 'classnames/bind';

import styles from './S03.module.scss';

import background from '../../../assets/images/product/bodyful/s03/bayTree.png';
import bodyful_ca from '../../../assets/images/product/bodyful/s03/bodyful_cal.png';
import bodyful_mg from '../../../assets/images/product/bodyful/s03/bodyful_ma.png';

const cx = classNames.bind(styles);

function S03() {
  return (
    <div className={cx('container')}>
      <div className={cx('limiter')} style={{ backgroundImage: `url(${background})` }}>
        <h2 className={cx('title')}>
          <span className={cx('sub')}>2021년 세계 물의 날 기념</span>한국인의 입맛에 맞는 먹는샘물 품평회
          <span className={cx('from')}>- 한국국제소믈리에협회, 매경이코노미 주최 -</span>
        </h2>

        <p className={cx('sector')}>국내 해양심층수 부문</p>

        <ul className={cx('prize')}>
          <li>
            <p className={cx('rank')}>3위</p>
            <p className={cx('text')}>바디풀 20(칼슘)</p>
            <img src={bodyful_ca} alt="" />
          </li>
          <li>
            <p className={cx('rank')}>5위</p>
            <p className={cx('text')}>바디풀 12(마그네슘)</p>
            <img src={bodyful_mg} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default S03;
