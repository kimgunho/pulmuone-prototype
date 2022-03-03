import Jumbotron from '../../components/shared/Jumbotron';
import TabBar from '../../components/shared/TabBar';
import TabWater from './T01_water';
import TabBodyful from './T02_bodyful';
import TabRoutine from './T03_routine';
import TabBarrel from './T04_barrel';
import jumbotron from '../../assets/images/products/jumbotron.jpg';

const tabItems = [
  {
    title: '풀무원샘물',
    link: '/제품안내/풀무원샘물',
  },
  {
    title: '풀무원샘물 바디풀',
    link: '/제품안내/풀무원샘물-바디풀',
  },
  {
    title: '풀무원샘물 워터루틴',
    link: '/제품안내/풀무원샘물-워터루틴',
  },
  {
    title: '대용량 먹는샘물',
    link: '/제품안내/대용량-먹는샘물',
  },
];

const Products = () => {
  const tabIndex = tabItems.findIndex((navItem) => navItem.link === decodeURI(window.location.pathname));

  return (
    <div>
      <Jumbotron title="제품안내" subtitle="Products" background={jumbotron} />
      <TabBar items={tabItems} activeIndex={tabIndex} />
      {tabIndex === 0 && <TabWater />}
      {tabIndex === 1 && <TabBodyful />}
      {tabIndex === 2 && <TabRoutine />}
      {tabIndex === 3 && <TabBarrel />}
    </div>
  );
};

export default Products;
