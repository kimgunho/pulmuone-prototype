import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './App.module.scss';
import { links } from './assets/data/links';

import Header from './components/shared/Header';
import FooterDesktop from './components/shared/FooterDesktop';
import FooterMobile from './components/shared/FooterMobile';
import Home from './pages/home';
import Brand from './pages/brand';
import CSR from './pages/csr';
import Gree from './pages/gree';
import Service from './pages/service';
import MyQnaDetail from './pages/service/myQna/View';
import Product from './pages/product';
import Privacy from './pages/privacy';
import NotPage from './components/shared/NotPage';
import ScrollTop from './components/shared/ScrollTop';

const cx = classNames.bind(styles);

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <BrowserRouter>
      <Header width={width} />
      <div className={cx('wrapper')}>
        <Routes>
          <Route path={links.home} element={<Home />} />
          <Route path={links.brand} element={<Brand />} />
          <Route path={links.csr} element={<CSR />} />
          <Route path={links.gree} element={<Gree />} />
          <Route path={links.service} element={<Service />} />
          <Route path={links.service_my_qna_Detail} element={<MyQnaDetail />} />
          <Route path={links.product} element={<Product />} />
          <Route path={links.privacy} element={<Privacy />} />
          <Route path={links.notPage} element={<NotPage />} />
        </Routes>
        {width > 740 ? <FooterDesktop /> : <FooterMobile />}
      </div>
      <ScrollTop />
    </BrowserRouter>
  );
}

export default App;
