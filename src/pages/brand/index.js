import { useParams } from 'react-router-dom';
import { links } from '../../assets/data/links';

import Jumbotron from '../../components/shared/Jumbotron';
import Nav from '../../components/shared/Nav';

import background from '../../assets/images/brand/background.jpg';

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
      <Jumbotron title="브랜드 스토리" sub="Brand Story" background={background} />
      <Nav items={navItems} activeIndex={navIndex} />
      {navIndex === 0 && <div>1111111</div>}
      {navIndex === 1 && <div>2222222</div>}
      {navIndex === 2 && <div>3333333</div>}
      {navIndex === 3 && <div>not....</div>}
    </div>
  );
};

export default Brand;
