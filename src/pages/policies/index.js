import classNames from 'classnames/bind';

import styles from './index.module.scss';
import Jumbotron from '../../components/shared/Jumbotron';
import TabBar from '../../components/shared/TabBar';
import TabPrivacy from './T01_privacy';
import TabEmail from './T02_email';
import jumbotron from '../../assets/images/policies/jumbotron.jpg';

const cx = classNames.bind(styles);

const tabItems = [
  {
    title: '개인정보처리방침',
    link: '/개인정보처리방침',
  },
  {
    title: '이메일무단수집거부',
    link: '/이메일무단수집거부',
  },
];

const Policies = () => {
  const tabIndex = tabItems.findIndex((navItem) => navItem.link === decodeURI(window.location.pathname));

  return (
    <div>
      <div className={cx('wrapper')}>
        <Jumbotron background={jumbotron} />
        <TabBar items={tabItems} activeIndex={tabIndex} />
      </div>
      {tabIndex === 0 && <TabPrivacy />}
      {tabIndex === 1 && <TabEmail />}
    </div>
  );
};

export default Policies;
