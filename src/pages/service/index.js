import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { links } from '../../assets/data/links';

import styles from './index.module.scss';

import Jumbotron from '../../components/shared/Jumbotron';
import Nav from '../../components/shared/Nav';
import FNQ from './fnq';
import QNA from './qna';

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

    default:
      navIndex = 2;
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
      {navIndex === 2 && <div>not....</div>}
    </div>
  );
};

export default CSR;
