import classNames from 'classnames/bind';

import styles from './index.module.scss';
import Jumbotron from '../../components/shared/Jumbotron';
import TabBar from '../../components/shared/TabBar';
import TabPulmuone from './T01_pulmuone';
import TabFinance from './T02_finance';
import TabLocation from './T03_location';
import jumbotron from '../../assets/images/company/jumbotron.jpg';

const cx = classNames.bind(styles);

const tabItems = [
  {
    title: '풀무원샘물',
    link: '/회사소개/풀무원샘물',
  },
  {
    title: '전자공시',
    link: '/회사소개/전자공시',
  },
  {
    title: '오시는 길',
    link: '/회사소개/오시는-길',
  },
];

const CSR = () => {
  const tabIndex = tabItems.findIndex((navItem) => navItem.link === decodeURI(window.location.pathname));

  return (
    <div>
      <div className={cx('wrapper')}>
        <Jumbotron title="회사소개" subtitle="Introduction" background={jumbotron} />
        <TabBar items={tabItems} activeIndex={tabIndex} />
      </div>
      {tabIndex === 0 && <TabPulmuone />}
      {tabIndex === 1 && <TabFinance />}
      {tabIndex === 2 && <TabLocation />}
    </div>
  );
};

export default CSR;
