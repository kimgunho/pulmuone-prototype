import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    setActiveIndex(null);
  }, [pathname]);

  return (
    <header className={cx(['container', { background: open }])}>
      <div className={cx('wrapper')}>
        <div className={cx(['hamburger', { close: open }])} onClick={() => setOpen(!open)}>
          <div className={cx('top')} />
          <div className={cx('center')} />
          <div className={cx('bottom')} />
        </div>
        <h1 className={cx('logo')} onClick={() => setOpen(false)}>
          <Link to="/"></Link>
        </h1>
        <div className={cx(['inner', { open }])}>
          <ul className={cx('menus')}>
            <li onClick={() => setActiveIndex(0)} className={cx({ active: activeIndex === 0 })}>
              <p>브랜드 스토리</p>
              <div className={cx('limiter')}>
                <ul>
                  <li>
                    <Link to="/브랜드-스토리/대보-화강암">대보 화강암</Link>
                  </li>
                  <li>
                    <Link to="/브랜드-스토리/품질관리">품질관리</Link>
                  </li>
                  <li>
                    <Link to="/브랜드-스토리/Think-Green">Think Green</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li onClick={() => setActiveIndex(1)} className={cx({ active: activeIndex === 1 })}>
              <p>제품 안내</p>
              <div className={cx('limiter')}>
                <ul>
                  <li>
                    <Link to="/제품안내/풀무원샘물">풀무원샘물</Link>
                  </li>
                  <li>
                    <Link to="/제품안내/풀무원샘물-바디풀">풀무원 바디풀</Link>
                  </li>
                  <li>
                    <Link to="/제품안내/풀무원샘물-워터루틴">풀무원샘물 워터루틴</Link>
                  </li>
                  <li>
                    <Link to="/제품안내/대용량-먹는샘물">대용량 먹는샘물</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <ul className={cx('menus')}>
            <li onClick={() => setActiveIndex(2)} className={cx({ active: activeIndex === 2 })}>
              <p>CSR</p>
              <div className={cx('limiter')}>
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
              </div>
            </li>
            <li onClick={() => setActiveIndex(3)} className={cx({ active: activeIndex === 3 })}>
              <p>고객센터</p>
              <div className={cx('limiter')}>
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
              </div>
            </li>
            <li onClick={() => setActiveIndex(4)} className={cx({ active: activeIndex === 4 })}>
              <p>회사소개</p>
              <div className={cx('limiter')}>
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
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
