import classNames from 'classnames/bind';

import styles from './S04.module.scss';
import product_ca from '../../../assets/images/products/bodyful/s04/product_ca.png';
import product_ma from '../../../assets/images/products/bodyful/s04/product_ma.png';
import Download from '../../../components/product/Download';
import Table from '../../../components/product/Table';

const cx = classNames.bind(styles);

const S04 = () => {
  const table_ca = {
    title: '무기물질 함량(mg/L)',
    color: 'blue',
    head: ['마그네슘(Mg)', '칼슘(Ca)', '칼륨(K)', '나트륨(Na)'],
    body: [
      {
        data: ['8 ~ 16', '50 ~ 70', '2 ~ 10', '2 ~ 10'],
      },
    ],
  };

  const table_ma = {
    title: '무기물질 함량(mg/L)',
    color: 'blue',
    head: ['마그네슘(Mg)', '칼슘(Ca)', '칼륨(K)', '나트륨(Na)'],
    body: [
      {
        data: ['33 ~ 48', '10 ~ 18', '10 ~ 18', '7 ~ 22'],
      },
    ],
  };

  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <h2 className={cx('title')}>제품소개</h2>
        <ul className={cx('list')}>
          <li className={cx('ca')}>
            <div className={cx('product')}>
              <h3 className={cx('title')}>칼슘으로 운동 준비 완료!</h3>
              <p className={cx('desc')}>
                바디풀20은 칼슘의 함량을 조절해 국내 생수 중<br /> 칼슘 함량이 <span className={cx('accent')}>가장 높은</span> 제품입니다.
              </p>
              <h4 className={cx('name')}>풀무원샘물 바디풀 20</h4>
              <div className={cx('image')} style={{ backgroundImage: `url(${product_ca})` }}>
                <p>
                  경도<span>200</span>
                </p>
              </div>
              <p className={cx('price')}>17,900원</p>
              <p className={cx('text')}>500mL X 20개입</p>
            </div>
            <Table table={table_ca} />
          </li>
          <li className={cx('ma')}>
            <div className={cx('product')}>
              <h3 className={cx('title')}>마그네슘으로 운동 후 휴식 시작!</h3>
              <p className={cx('desc')}>
                바디풀12는 일반 생수 대비 높은 마그네슘 함량에도
                <br /> 편하게 음용할 수 있도록 <span className={cx('accent')}>최적의 양</span>을 반영했습니다.
              </p>
              <h4 className={cx('name')}>풀무원샘물 바디풀 20</h4>
              <div className={cx('image')} style={{ backgroundImage: `url(${product_ma})` }}>
                <p>
                  경도<span>200</span>
                </p>
              </div>
              <p className={cx('price')}>17,900원</p>
              <p className={cx('text')}>500mL X 20개입</p>
            </div>
            <Table table={table_ma} />
          </li>
        </ul>
        <Download
          color="blue"
          file="/static/report/수질성적검사서-풀무원샘물_바디풀.pdf"
          text="수질 적성 검사서"
          title="바디풀은 안심하고 드실 수 있습니다!"
        />
      </div>
    </div>
  );
};

export default S04;
