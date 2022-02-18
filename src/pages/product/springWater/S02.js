import classNames from 'classnames/bind';

import styles from './S02.module.scss';

import product01 from '../../../assets/images/product/springWater/product01.jpg';
import product02 from '../../../assets/images/product/springWater/product02.jpg';
import product03 from '../../../assets/images/product/springWater/product03.jpg';
import product04 from '../../../assets/images/product/springWater/product04.jpg';

import Download from '../../../components/product/Download';
import Table from '../../../components/product/Table';
import Products from '../../../components/product/Products';

const cx = classNames.bind(styles);

function S02() {
  const table = {
    title: '무기물질 함량(mg/L)',
    color: 'green',
    head: ['칼륨(Ca)', '나트륨(Na)', '마그네슘(Mg)', '칼륨(K)', '불소(F)'],
    body: [
      {
        data: ['12.3 ~ 18.4', '6.2 ~ 9.3', '1.7 ~ 2.6', '0.4 ~ 0.7', '0.0 ~ 0.1'],
      },
    ],
  };

  const products = [
    {
      title: '풀무원샘물 2L',
      sub: '가정 식수로 적합한',
      image: product01,
      price: '5,200원',
      text: '2L / 팩 : 2L X 6개입',
    },
    {
      title: '풀무원샘물 1.5L',
      sub: '나들이, 1인 가정 식수는',
      image: product02,
      price: '4,900원',
      text: '1.5L / 팩 : 1.5L X 6개입',
    },
    {
      title: '풀무원샘물 500mL',
      sub: '외출, 아웃도어 용으로',
      image: product03,
      price: '8,600원',
      text: '500mL / 팩 : 500mL X 20개입',
    },
    {
      title: '풀무원샘물 330mL',
      sub: '소풍, 미팅 할 때',
      image: product04,
      price: '7,700원',
      text: '330mL / 팩 : 330mL X 20개입',
    },
  ];

  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <Products products={products} title="제품소개" />
        <Table table={table} />
        <Download color="green" file="/" text="수질 성적 검사서" title="풀무원샘물은 안심하고 드실 수 있습니다!" />
      </div>
    </div>
  );
}

export default S02;
