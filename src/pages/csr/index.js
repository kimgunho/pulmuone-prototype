import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { links } from '../../assets/data/links';

import styles from './index.module.scss';

import Jumbotron from '../../components/shared/Jumbotron';
import Nav from '../../components/shared/Nav';
import WaterResources from './water';
import ShareCampaign from './share';
import EcoCampaign from './eco';
import NotPage from '../../components/shared/NotPage';

import background from '../../assets/images/csr/background.jpg';

const cx = classNames.bind(styles);

const navItems = [
  {
    title: '수자원 보호',
    link: links.csr_water_resources,
  },
  {
    title: '나눔 캠페인',
    link: links.csr_share_campaign,
  },
  {
    title: '친환경 캠페인',
    link: links.csr_eco_campaign,
  },
];

const CSR = () => {
  const { sub } = useParams();
  let navIndex;

  switch (sub) {
    case 'water-resources':
      navIndex = 0;
      break;

    case 'share-campaign':
      navIndex = 1;
      break;

    case 'eco-campaign':
      navIndex = 2;
      break;

    default:
      navIndex = 3;
      break;
  }

  return (
    <div>
      <div className={cx('wrapper_contents')}>
        <Jumbotron title="CSR" sub="Corporate social responsibility" background={background} />
        <Nav items={navItems} activeIndex={navIndex} />
      </div>
      {navIndex === 0 && <WaterResources />}
      {navIndex === 1 && <ShareCampaign />}
      {navIndex === 2 && <EcoCampaign />}
      {navIndex === 3 && <NotPage />}
    </div>
  );
};

export default CSR;
