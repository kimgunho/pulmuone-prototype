import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { links } from '../../assets/data/links';

import styles from './index.module.scss';

import Jumbotron from '../../components/shared/Jumbotron';
import Nav from '../../components/shared/Nav';
import FNQ from './fnq';
import QNA from './qna';
import MyQna from './myQna';
import NotPage from '../../components/shared/NotPage';

import background from '../../assets/images/service/background.jpg';

const cx = classNames.bind(styles);

const navItems = [
  {
    title: 'FAQ',
    link: links.service_fnq,
  },
  {
    title: '문의하기',
    link: links.service_qna,
  },
  {
    title: '내 문의사항',
    link: links.service_my_qna,
  },
];

const CSR = () => {
  const { sub } = useParams();
  let navIndex;

  switch (sub) {
    case 'fnq':
      navIndex = 0;
      break;

    case 'qna':
      navIndex = 1;
      break;

    case 'myqna':
      navIndex = 2;
      break;

    default:
      navIndex = 3;
      break;
  }

  return (
    <div>
      <div className={cx('wrapper_contents')}>
        <Jumbotron title="고객센터" sub="Customer Service Center" background={background} />
        <Nav items={navItems} activeIndex={navIndex} />
      </div>
      {navIndex === 0 && <FNQ />}
      {navIndex === 1 && <QNA />}
      {navIndex === 2 && <MyQna />}
      {navIndex === 3 && <NotPage />}
    </div>
  );
};

export default CSR;
