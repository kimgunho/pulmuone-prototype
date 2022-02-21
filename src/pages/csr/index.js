import Jumbotron from '../../components/shared/Jumbotron';
import TabBar from '../../components/shared/TabBar';
import TabWater from './T01_water';
import TabShare from './T02_share';
import TabEco from './T03_eco';
import jumbotron from '../../assets/images/csr/jumbotron.jpg';

const tabItems = [
  {
    title: '수자원 보호',
    link: '/CSR/수자원-보호',
  },
  {
    title: '나눔 캠페인',
    link: '/CSR/나눔-캠페인',
  },
  {
    title: '친환경 캠페인',
    link: '/CSR/친환경-캠페인',
  },
];

const CSR = () => {
  const tabIndex = tabItems.findIndex((navItem) => navItem.link === decodeURI(window.location.pathname));

  return (
    <div>
      <Jumbotron title="CSR" subtitle="Corporate Social Responsibility" background={jumbotron} />
      <TabBar items={tabItems} activeIndex={tabIndex} />
      {tabIndex === 0 && <TabWater />}
      {tabIndex === 1 && <TabShare />}
      {tabIndex === 2 && <TabEco />}
    </div>
  );
};

export default CSR;
