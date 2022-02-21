import classNames from 'classnames/bind';

import styles from './index.module.scss';
import Jumbotron from '../../components/shared/Jumbotron';
import TabBar from '../../components/shared/TabBar';
import TabFAQ from './T01_faq';
import QNA from './qna';
import MyQna from './myQna';
import jumbotron from '../../assets/images/customer/jumbotron.jpg';

const cx = classNames.bind(styles);

const tabItems = [
  {
    title: '자주묻는질문',
    link: '/고객센터/자주묻는질문',
  },
  {
    title: '문의하기',
    link: '/고객센터/문의하기',
  },
  {
    title: '내 문의사항',
    link: '/고객센터/내-문의사항',
  },
];

const CSR = () => {
  const tabIndex = tabItems.findIndex((navItem) => navItem.link === decodeURI(window.location.pathname));

  return (
    <div>
      <div className={cx('wrapper')}>
        <Jumbotron title="고객센터" subtitle="Customer Center" background={jumbotron} />
        <TabBar items={tabItems} activeIndex={tabIndex} />
      </div>
      {tabIndex === 0 && <TabFAQ />}
      {tabIndex === 1 && <QNA />}
      {tabIndex === 2 && <MyQna />}
    </div>
  );
};

export default CSR;
