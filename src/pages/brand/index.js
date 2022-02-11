import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { links } from '../../assets/data/links';

import styles from './index.module.scss';

import Jumbotron from '../../components/shared/Jumbotron';
import Nav from '../../components/shared/Nav';
import Granite from './granite';
import Quality from './quality';
import Think from './think';
import NotPage from '../../components/shared/NotPage';

import background from '../../assets/images/brand/background.jpg';

const cx = classNames.bind(styles);

const navItems = [
  {
    title: '대보 화강암',
    link: links.brand_granite,
  },
  {
    title: '품질관리',
    link: links.brand_quality,
  },
  {
    title: 'Think Green',
    link: links.brand_think,
  },
];

const Brand = () => {
  const { sub } = useParams();
  let navIndex;

  switch (sub) {
    case 'granite':
      navIndex = 0;
      break;

    case 'quality':
      navIndex = 1;
      break;

    case 'think-green':
      navIndex = 2;
      break;

    default:
      navIndex = 3;
      break;
  }

  return (
    <div>
      <div className={cx('wrapper_contents')}>
        <Jumbotron title="브랜드 스토리" sub="Brand Story" background={background} />
        <Nav items={navItems} activeIndex={navIndex} />
      </div>
      {navIndex === 0 && <Granite />}
      {navIndex === 1 && <Quality />}
      {navIndex === 2 && <Think />}
      {navIndex === 3 && <NotPage />}
    </div>
  );
};

export default Brand;
