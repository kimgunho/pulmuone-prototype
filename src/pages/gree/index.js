import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { links } from '../../assets/data/links';

import styles from './index.module.scss';

import Jumbotron from '../../components/shared/Jumbotron';
import Nav from '../../components/shared/Nav';
import Pulmuone from './pulmuone';
import Finance from './finance';
import Location from './location';
import NotPage from '../../components/shared/NotPage';

import background from '../../assets/images/gree/background.jpg';

const cx = classNames.bind(styles);

const navItems = [
  {
    title: '풀무원샘물',
    link: links.gree_pulmuone,
  },
  {
    title: '전자공시',
    link: links.gree_electronic_disclosure,
  },
  {
    title: '오시는 길',
    link: links.gree_location,
  },
];

const CSR = () => {
  const { sub } = useParams();
  let navIndex;

  switch (sub) {
    case 'pulmuone':
      navIndex = 0;
      break;

    case 'electronic-disclosure':
      navIndex = 1;
      break;

    case 'location':
      navIndex = 2;
      break;

    default:
      navIndex = 3;
      break;
  }

  return (
    <div>
      <div className={cx('wrapper_contents')}>
        <Jumbotron title="회사소개" sub="Introduction" background={background} />
        <Nav items={navItems} activeIndex={navIndex} />
      </div>
      {navIndex === 0 && <Pulmuone />}
      {navIndex === 1 && <Finance />}
      {navIndex === 2 && <Location />}
      {navIndex === 3 && <NotPage />}
    </div>
  );
};

export default CSR;
