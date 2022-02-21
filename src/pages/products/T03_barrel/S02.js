import classNames from 'classnames/bind';

import styles from './S02.module.scss';

import water_product01 from '../../../assets/images/products/barrel/s02/water_product01.png';
import waterHeater_product01 from '../../../assets/images/products/barrel/s02/waterHeater_product01.png';
import waterHeater_product02 from '../../../assets/images/products/barrel/s02/waterHeater_product02.png';
import bigbottle from '../../../assets/images/products/barrel/s02/bigbottle.png';
import detail_img01 from '../../../assets/images/products/barrel/s02/detail_img01.jpg';
import detail_img02 from '../../../assets/images/products/barrel/s02/detail_img02.jpg';
import detail_img03 from '../../../assets/images/products/barrel/s02/detail_img03.jpg';
import detail_img04 from '../../../assets/images/products/barrel/s02/detail_img04.jpg';
import file from '../../../assets/files/product/t03_barrel/barrel15_quality_test.zip';

import Products from '../../../components/product/Products';
import Table from '../../../components/product/Table';
import Download from '../../../components/product/Download';

const cx = classNames.bind(styles);

const S02 = () => {
  const productsWater = [
    {
      title: '풀무원샘물 15L',
      sub: '프리미엄 대용량 먹는샘물',
      image: water_product01,
      price: '7,000원',
      text: '(배송 여건에 따라 가격이 상이할 수 있음)',
    },
  ];

  const productsWaterHeater = [
    {
      title: '메탈 애플그린',
      sub: '헤파필터가 장착된',
      image: waterHeater_product01,
      price: '200,000원',
      text: '임대시 보증금 : 50,000원\n월 4병 이상 음용 / 24개월 약정 기간',
    },
    {
      title: '일반 애플그린',
      sub: '헤파필터가 장착된',
      image: waterHeater_product02,
      price: '170,000원',
      text: '임대시 보증금 : 40,000원\n월 4병 이상 음용 / 24개월 약정 기간',
    },
  ];

  const table = {
    title: '무기물질 함량(mg/L)',
    point: true,
    color: 'green',
    head: ['칼륨(Ca)', '나트륨(Na)', '마그네슘(Mg)', '칼륨(K)', '불소(F)'],
    body: [
      {
        data: ['포천', '8.6 ~ 13.0', '4.8 ~ 7.4', '1.1 ~ 1.8', '0.6 ~ 1.0', '0.1 ~ 1.8'],
      },
      {
        data: ['하동', '8.8 ~ 13.4', '2.9 ~ 4.5', '0.9 ~ 1.5', '0.5 ~ 0.9', '0.0 ~ 0.1'],
      },
    ],
  };

  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <Products products={productsWater} title="제품소개" />
        <Table title="무기물질 함량(mg/L)" table={table} />
        <Download file={file} text="수질 성적 검사서" title="풀무원샘물은 안심하고 드실 수 있습니다!" />
        <div className={cx('detail')}>
          <h2 className={cx('title')}>‘신선하게, 편리하게’ 풀무원샘물 15L 만의 차별화</h2>
          <div className={cx('info')}>
            <div className={cx('image')}>
              <img src={bigbottle} alt="" />
            </div>
            <div className={cx('inner')}>
              <ul>
                <li>
                  <img src={detail_img01} alt="" />
                  <div className={cx('content')}>
                    <h3>낙수방지캡</h3>
                    <p>물흘림 방지 및 유통과정에서의 외부 오염을 원천 차단하였습니다.</p>
                  </div>
                </li>
                <li>
                  <img src={detail_img02} alt="" />
                  <div className={cx('content')}>
                    <h3>신선캡</h3>
                    <p>공기 중 미생물을 여과하고 외부 공기를 차단하는 신선캡 적용하여 세균 오염의 걱정이 없습니다.</p>
                  </div>
                </li>
                <li>
                  <img src={detail_img03} alt="" />
                  <div className={cx('content')}>
                    <h3>병목랩</h3>
                    <p>병목 부분까지 랩으로 감싸 2차 오염을 방지합니다.</p>
                  </div>
                </li>
                <li>
                  <img src={detail_img04} alt="" />
                  <div className={cx('content')}>
                    <h3>손잡이</h3>
                    <p>편리한 손잡이가 부착된 용기를 개발, 운반 시 편리성과 병목 부분의 위생을 한층 높입니다.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Products products={productsWaterHeater} title="풀무원샘물 15L 전용 냉온수기" />
        <div className={cx('precautions')}>
          <h3>※ 임대 시 주의사항</h3>
          <p>
            약정 기간 만료 전 임대 해약시 위약금 발생 가능할 수 있습니다.
            <br /> 단, 제주도와 울릉도 및 일부 도서 산간 지역은 제품 가격이 상이할 수 있으며,
            <br /> 냉온수기 조건은 지역에 따라 상이할 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default S02;
