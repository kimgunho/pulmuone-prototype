import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './App.module.scss';
import { links } from './assets/data/links';
import { viewportWidthState } from './recoil/state';

import Header from './components/shared/Header';
import FooterDesktop from './components/shared/FooterDesktop';
import FooterMobile from './components/shared/FooterMobile';
import Home from './pages/home';
import Brand from './pages/brand';

const cx = classNames.bind(styles);

function App() {
  const [width, setWidth] = useRecoilState(viewportWidthState);

  useEffect(() => {
    window.addEventListener('resize', () =>
      setWidth((prev) => ({
        ...prev,
        currentWidth: window.innerWidth,
      })),
    );
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <div className={cx('wrapper')}>
        <Routes>
          <Route path={links.home} element={<Home />} />
          <Route path={links.brand} element={<Brand />} />
          <Route path="*" element={<div>not...</div>} />
        </Routes>
        {width.currentWidth > width.breakPoint ? <FooterDesktop /> : <FooterMobile />}
      </div>
    </BrowserRouter>
  );
}

export default App;
