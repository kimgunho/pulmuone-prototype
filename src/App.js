import { BrowserRouter, Routes, Route } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './App.module.scss';
import { links } from './assets/data/links';

import Header from './components/shared/Header';
import Home from './pages/home';

const cx = classNames.bind(styles);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className={cx('wrapper')}>
        <Routes>
          <Route path={links.home} element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
