import classNames from 'classnames/bind';

import styles from './S02.module.scss';
import product01 from '../../../assets/images/products/routine/s02/product01.jpg';
import product02 from '../../../assets/images/products/routine/s02/product02.jpg';
import product03 from '../../../assets/images/products/routine/s02/product03.jpg';
import Download from '../../../components/product/Download';
import Table from '../../../components/product/Table';
import Products from '../../../components/product/Products';

const cx = classNames.bind(styles);

const S02 = () => {
  const table = {
    title: '무기물질 함량(mg/L)',
    color: 'blue',
    head: ['칼슘(Ca)', '나트륨(Na)', '마그네슘(Mg)', '칼륨(K)', '불소(F)'],
    body: [
      {
        data: ['9.7 ~ 14.7', '5.2 ~ 8.0', '1.3 ~ 2.1', '0.3 ~ 0.6', '0.0 ~ 0.2'],
      },
    ],
  };

  const products = [
    {
      title: '풀무원샘물 2L',
      sub: '가정 식수로 적합한',
      image: product01,
      price: '4,800원',
      text: '2L / 팩 : 2L X 6개입',
    },
    {
      title: '풀무원샘물 500mL',
      sub: '외출, 아웃도어 용으로',
      image: product02,
      price: '7,900원',
      text: '500mL / 팩 : 500mL X 20개입',
    },
    {
      title: '풀무원샘물 330mL',
      sub: '소풍, 미팅 할 때',
      image: product03,
      price: '7,100원',
      text: '330mL / 팩 : 330mL X 20개입',
    },
  ];

  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <Products products={products} title="제품소개" color="blue" />
        <Table table={table} />
        <Download color="blue" file="/" text="수질 성적 검사서" title="워터루틴은 안심하고 드실 수 있습니다!" />
      </div>
    </div>
  );
};

export default S02;
