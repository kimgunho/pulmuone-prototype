import classNames from 'classnames/bind';

import styles from './index.module.scss';
import Jumbotron from '../../components/shared/Jumbotron';
import TabBar from '../../components/shared/TabBar';
import TabGranite from './T01_granite';
import TabQuality from './T02_quality';
import TabThinkGreen from './T03_think-green';
import jumbotron from '../../assets/images/brand/jumbotron.jpg';

const cx = classNames.bind(styles);

const tabItems = [
  {
    title: '대보 화강암',
    link: '/브랜드-스토리/대보-화강암',
  },
  {
    title: '품질관리',
    link: '/브랜드-스토리/품질관리',
  },
  {
    title: 'Think Green',
    link: '/브랜드-스토리/Think-Green',
  },
];

const Brand = () => {
  const tabIndex = tabItems.findIndex((navItem) => navItem.link === decodeURI(window.location.pathname));

  return (
    <div>
      <div className={cx('wrapper')}>
        <Jumbotron title="브랜드 스토리" subtitle="Brand Story" background={jumbotron} />
        <TabBar items={tabItems} activeIndex={tabIndex} />
      </div>
      {tabIndex === 0 && <TabGranite />}
      {tabIndex === 1 && <TabQuality />}
      {tabIndex === 2 && <TabThinkGreen />}
    </div>
  );
};

export default Brand;
