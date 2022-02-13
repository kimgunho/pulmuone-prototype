import classNames from 'classnames/bind';

import styles from './S01.module.scss';

import background from '../../../assets/images/product/bodyful/s01/background.jpg';
import ca_text from '../../../assets/images/product/bodyful/s01/ca.png';
import mg_text from '../../../assets/images/product/bodyful/s01/mg.png';
import bubble_left from '../../../assets/images/product/bodyful/s01/bubble_left.png';
import bubble_right from '../../../assets/images/product/bodyful/s01/bubble_right.png';
import bodyful from '../../../assets/images/product/bodyful/s01/bodyful.png';

const cx = classNames.bind(styles);

function S01() {
  return (
    <>
      <div className={cx('container')} style={{ backgroundImage: `url(${background})` }}>
        <div className={cx('limiter')}>
          <h2 className={cx('title')}>풀무원샘물이 엄선하여 만든 프리미엄 해양심층수</h2>
          <p className={cx('text')}>
            소중한 내 몸 밸런스, 운동만으론 다 채울 수 없으니까
            <br />내 몸에 꼭 필요한 미네랄을 마시면서 채워 보세요
          </p>

          <div className={cx('objects')}>
            <img className={cx('left')} src={bubble_left} alt="" />
            <img className={cx('right')} src={bubble_right} alt="" />
            <img className={cx('ca')} src={ca_text} alt="" />
            <img className={cx('mg')} src={mg_text} alt="" />
          </div>
        </div>

        <img draggable="false" className={cx('bodyful')} src={bodyful} alt="" />
      </div>
      <div className={cx('inner')}>
        <p>바디풀은 인공 성분을 첨가하지 않고 천연 미네랄 함량만을 조절한 미네랄 밸런스 워터입니다.</p>
        <p>
          원수부터 최종 제품에 이르기까지 풀무원샘물의 엄격한 심사 기준을 거친
          <br />
          안전한 제품으로 믿고 마실 수 있으며 미네랄 함량을 최적의 비율로 조절하여 부드럽고 깔끔한 맛이 특징입니다.
        </p>
      </div>
    </>
  );
}

export default S01;
