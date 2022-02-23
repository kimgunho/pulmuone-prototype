import classNames from 'classnames/bind';

import styles from './S05.module.scss';

import mark_01 from '../../../assets/images/products/bodyful/s05/mark_01.png';
import mark_02 from '../../../assets/images/products/bodyful/s05/mark_02.png';
import mark_03 from '../../../assets/images/products/bodyful/s05/mark_03.png';

const cx = classNames.bind(styles);

const S05 = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <h2 className={cx('title')}>제품 정보 표기</h2>

        <ul className={cx('list')}>
          <li>
            <div className={cx('image')} style={{ backgroundImage: `url(${mark_01})` }}></div>
            <h3>낱병</h3>
            <p>제품명, 수원지, 유통기한, 고객센터 번호</p>
          </li>
          <li>
            <div className={cx('image')} style={{ backgroundImage: `url(${mark_02})` }}></div>
            <h3>팩 전면</h3>
            <p>제품, 수원지 정보</p>
          </li>
          <li>
            <div className={cx('image')} style={{ backgroundImage: `url(${mark_03})` }}></div>
            <h3>팩 후면</h3>
            <p>무기물질함량, 제품 상세 정보</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default S05;
