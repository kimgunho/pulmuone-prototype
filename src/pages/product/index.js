import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { links } from '../../assets/data/links';

import styles from './index.module.scss';

import Jumbotron from '../../components/shared/Jumbotron';
import Nav from '../../components/shared/Nav';
import SpringWater from './springWater';
import Bodyful from './bodyful';
import DrinkingFountain from './drinkingFountain';
import WaterRoutine from './waterRoutine';

import background from '../../assets/images/product/background.jpg';

const cx = classNames.bind(styles);

const navItems = [
  {
    title: '풀무원샘물',
    link: links.product_spring_water,
  },
  {
    title: '풀무원샘물 바디풀',
    link: links.product_bodyful,
  },
  {
    title: '대용량 먹는샘물',
    link: links.product_drinking_fountain,
  },
  {
    title: '풀무원 워터루틴',
    link: links.product_water_routine,
  },
];

const CSR = () => {
  const { sub } = useParams();
  let navIndex;

  switch (sub) {
    case 'spring-water':
      navIndex = 0;
      break;

    case 'bodyful':
      navIndex = 1;
      break;

    case 'drinking-fountain':
      navIndex = 2;
      break;

    case 'water-routine':
      navIndex = 3;
      break;

    default:
      navIndex = 4;
      break;
  }

  return (
    <div>
      <div className={cx('wrapper_contents')}>
        <Jumbotron title="제품안내" sub="Products" background={background} />
        <Nav items={navItems} activeIndex={navIndex} />
      </div>
      {navIndex === 0 && <SpringWater />}
      {navIndex === 1 && <Bodyful />}
      {navIndex === 2 && <DrinkingFountain />}
      {navIndex === 3 && <WaterRoutine />}
      {navIndex === 4 && <div>not....</div>}
    </div>
  );
};

export default CSR;
