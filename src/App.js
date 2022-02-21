import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Brand from './pages/brand';
import Products from './pages/products';
import CSR from './pages/csr';
import Customer from './pages/customer';
import Company from './pages/company';
import Policies from './pages/policies';
import Header from './components/shared/Header';
import NotFound from './components/shared/NotFound';
import Footer from './components/shared/Footer';
import ScrollTop from './components/misc/ScrollTop';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`${encodeURI('/브랜드-스토리/대보-화강암')}`} element={<Brand />} />
        <Route path={`${encodeURI('/브랜드-스토리/품질관리')}`} element={<Brand />} />
        <Route path={`${encodeURI('/브랜드-스토리/Think-Green')}`} element={<Brand />} />
        <Route path={`${encodeURI('/제품안내/풀무원샘물')}`} element={<Products />} />
        <Route path={`${encodeURI('/제품안내/풀무원샘물-바디풀')}`} element={<Products />} />
        <Route path={`${encodeURI('/제품안내/대용량-먹는샘물')}`} element={<Products />} />
        <Route path={`${encodeURI('/제품안내/풀무원-워터루틴')}`} element={<Products />} />
        <Route path={`${encodeURI('/CSR/수자원-보호')}`} element={<CSR />} />
        <Route path={`${encodeURI('/CSR/나눔-캠페인')}`} element={<CSR />} />
        <Route path={`${encodeURI('/CSR/친환경-캠페인')}`} element={<CSR />} />
        <Route path={`${encodeURI('/고객센터/자주묻는질문')}`} element={<Customer />} />
        <Route path={`${encodeURI('/고객센터/문의하기')}`} element={<Customer />} />
        <Route path={`${encodeURI('/고객센터/내-문의사항')}`} element={<Customer />} />
        <Route path={`${encodeURI('/회사소개/풀무원샘물')}`} element={<Company />} />
        <Route path={`${encodeURI('/회사소개/전자공시')}`} element={<Company />} />
        <Route path={`${encodeURI('/회사소개/오시는-길')}`} element={<Company />} />
        <Route path={`${encodeURI('/개인정보처리방침')}`} element={<Policies />} />
        <Route path={`${encodeURI('/이메일무단수집거부')}`} element={<Policies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ScrollTop />
    </BrowserRouter>
  );
};

export default App;
