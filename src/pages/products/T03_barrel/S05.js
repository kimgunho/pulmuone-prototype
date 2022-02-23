import classNames from 'classnames/bind';

import styles from './S05.module.scss';
import product01 from '../../../assets/images/products/barrel/s05/product01.png';
import waterHeater_product01 from '../../../assets/images/products/barrel/s05/heater_product01.png';
import waterHeater_product02 from '../../../assets/images/products/barrel/s05/heater_product02.png';
import waterHeater_product03 from '../../../assets/images/products/barrel/s05/heater_product03.png';
import waterHeater_product04 from '../../../assets/images/products/barrel/s05/heater_product04.png';
import file from '../../../assets/files/수질성적검사서-대용량_먹는샘물_18L.pdf';
import Products from '../../../components/product/Products';
import Table from '../../../components/product/Table';
import Download from '../../../components/product/Download';

const cx = classNames.bind(styles);

const S05 = () => {
  const productsWater = [
    {
      title: '맛있는샘물 18.9L',
      sub: '경제적인 대용량 먹는샘물',
      image: product01,
      price: '7,000원',
      text: '(배송 여건에 따라 가격이 상이할 수 있음)',
    },
  ];

  const productsWaterHeater = [
    {
      title: '화이트 일반',
      sub: '생활 밀착형',
      image: waterHeater_product01,
      price: '170,000원',
      text: '임대시 보증금 : 30,000원\n월 4병 이상 음용 / 24개월 약정 기간',
    },
    {
      title: '화이트 원형',
      sub: '산뜻한 디자인의',
      image: waterHeater_product02,
      price: '160,000원',
      text: '임대시 보증금 : 30,000원\n월 4병 이상 음용 / 24개월 약정 기간',
    },
    {
      title: '애플 그린',
      sub: '합리적인 가격의',
      image: waterHeater_product03,
      price: '180,000원',
      text: '임대시 보증금 : 40,000원\n월 4병 이상 음용 / 24개월 약정 기간',
    },
    {
      title: '모던 블랙',
      sub: '슬림한 디자인의',
      image: waterHeater_product04,
      price: '200,000원',
      text: '임대시 보증금 : 50,000원\n월 4병 이상 음용 / 24개월 약정 기간',
    },
  ];

  const table = {
    title: '무기물질 함량(mg/L)',
    point: true,
    color: 'green',
    head: ['칼슘(Ca)', '나트륨(Na)', '마그네슘(Mg)', '칼륨(K)', '불소(F)'],
    body: [
      {
        data: ['포천', '8.6 ~ 13.0', '4.8 ~ 7.4', '1.1 ~ 1.8', '0.6 ~ 1.0', '0.1 ~ 1.8'],
      },
      {
        data: ['하동', '7.06 ~ 11.99', '3.09 ~ 3.57', '0.86 ~ 1.78', '0.56 ~ 0.63', '불검출 ~ 0.20'],
      },
    ],
  };

  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <Products title="제품소개" products={productsWater} />
        <Table table={table} />
        <Download file={file} text="수질 성적 검사서" title="맛있는샘물은 안심하고 드실 수 있습니다!" />
        <div className={cx('box')}>
          <Products title="맛있는샘물 18.9L 전용 냉온수기" products={productsWaterHeater} />
        </div>
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

export default S05;
