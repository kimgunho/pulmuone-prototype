import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
  const [hambergerClicked, setHambergerClicked] = useState(false);
  const [gnbActive, setGnbActive] = useState({});

  const onClick = (event, index) => {
    const { nodeName } = event.target;
    setGnbActive((prev) => ({
      [index]: !prev[index],
    }));

    closeMobileMenus(nodeName);
  };

  const closeMobileMenus = (node) => {
    if (node === 'A') {
      setHambergerClicked(false);
    }
  };

  return (
    <header className={cx('container')}>
      <div className={cx('wrapper')}>
        <div className={cx(['hamberger', { close: hambergerClicked }])} onClick={() => setHambergerClicked(!hambergerClicked)}>
          <div className={cx('top')} />
          <div className={cx('center')} />
          <div className={cx('bottom')} />
        </div>
        <h1 className={cx('logo')} onClick={() => setHambergerClicked(false)}>
          <Link to="/"></Link>
        </h1>
        <div className={cx(['inner', { active: hambergerClicked }])}>
          <ul className={cx('menus')}>
            <li className={cx({ active: gnbActive[1] })} onClick={(e) => onClick(e, 1)}>
              <p>브랜드 스토리</p>
              <ul>
                <li onClick={() => setHambergerClicked(false)}>
                  <Link to="/브랜드-스토리/대보-화강암">대보 화강암</Link>
                </li>
                <li>
                  <Link to="/브랜드-스토리/품질관리">품질관리</Link>
                </li>
                <li>
                  <Link to="/브랜드-스토리/Think-Green">Think Green</Link>
                </li>
              </ul>
            </li>
            <li className={cx({ active: gnbActive[2] })} onClick={(e) => onClick(e, 2)}>
              <p>제품 안내</p>
              <ul>
                <li>
                  <Link to="/제품안내/풀무원샘물">풀무원샘물</Link>
                </li>
                <li>
                  <Link to="/제품안내/풀무원샘물-바디풀">풀무원 바디풀</Link>
                </li>
                <li>
                  <Link to="/제품안내/풀무원샘물-워터루틴">풀무원 워터루틴</Link>
                </li>
                <li>
                  <Link to="/제품안내/대용량-먹는샘물">대용량 먹는샘물</Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className={cx('menus')}>
            <li className={cx({ active: gnbActive[3] })} onClick={(e) => onClick(e, 3)}>
              <p>CSR</p>
              <ul>
                <li>
                  <Link to="/CSR/수자원-보호">수차원 보호</Link>
                </li>
                <li>
                  <Link to="/CSR/나눔-캠페인">나눔 캠페인</Link>
                </li>
                <li>
                  <Link to="/CSR/친환경-캠페인">친환경 캠페인</Link>
                </li>
              </ul>
            </li>
            <li className={cx({ active: gnbActive[4] })} onClick={(e) => onClick(e, 4)}>
              <p>고객센터</p>
              <ul>
                <li>
                  <Link to="/고객센터/자주묻는질문">자주 묻는 질문</Link>
                </li>
                <li>
                  <Link to="/고객센터/문의하기">문의하기</Link>
                </li>
                <li>
                  <Link to="/고객센터/내-문의사항">내 문의사항</Link>
                </li>
              </ul>
            </li>
            <li className={cx({ active: gnbActive[5] })} onClick={(e) => onClick(e, 5)}>
              <p>회사소개</p>
              <ul>
                <li>
                  <Link to="/회사소개/풀무원샘물">풀무원샘물</Link>
                </li>
                <li>
                  <Link to="/회사소개/전자공시">전자공시</Link>
                </li>
                <li>
                  <Link to="/회사소개/오시는-길">오시는 길</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
