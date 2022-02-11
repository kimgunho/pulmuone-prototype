import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { links } from '../../assets/data/links';

import styles from './index.module.scss';

import Jumbotron from '../../components/shared/Jumbotron';
import Nav from '../../components/shared/Nav';
import Policy from './policy';
import Email from './email';
import NotPage from '../../components/shared/NotPage';

import background from '../../assets/images/privacy/background.jpg';

const cx = classNames.bind(styles);

const navItems = [
  {
    title: '개인정보 처리방침',
    link: links.privacy_policy,
  },
  {
    title: '이메일 무단수집 거부',
    link: links.privacy_email,
  },
];

const CSR = () => {
  const { sub } = useParams();
  let navIndex;

  switch (sub) {
    case 'policy':
      navIndex = 0;
      break;

    case 'email':
      navIndex = 1;
      break;

    default:
      navIndex = 2;
      break;
  }

  return (
    <div>
      <div className={cx('wrapper_contents')}>
        <Jumbotron background={background} />
        <Nav items={navItems} activeIndex={navIndex} />
      </div>
      {navIndex === 0 && <Policy />}
      {navIndex === 1 && <Email />}
      {navIndex === 2 && <NotPage />}
    </div>
  );
};

export default CSR;
