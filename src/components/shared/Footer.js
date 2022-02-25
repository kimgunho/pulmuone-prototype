import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import logo from '../../assets/images/shared/logo.png';
import facebook from '../../assets/images/shared/sns/facebook.png';
import instagram from '../../assets/images/shared/sns/instagram.png';
import blog from '../../assets/images/shared/sns/blog.png';
import nestle from '../../assets/images/shared/sns/nestle.png';
import QuickMenus from './QuickMenus';

const cx = classNames.bind(styles);

const Footer = () => {
  const onChange = (event) => {
    const { value } = event.target;
    if (value) {
      window.open(value, '_blank');
    }
  };

  return (
    <>
      <footer className={cx('container')}>
        <div className={cx('limiter')}>
          <div className={cx('flex')}>
            <ul className={cx('customer')}>
              <li>
                <h4 className={cx('title')}>제품문의</h4>
                <a className={cx('tel')} href="tel:0809067000">
                  080-906-7000
                </a>
                <p className={cx('time')}>상담시간 : 월 - 금 09:00 - 18:00</p>
              </li>
              <li>
                <h4 className={cx('title')}>가맹점 주문 문의</h4>
                <a className={cx('tel')} href="tel:15888655">
                  1588-8655
                </a>
                <p className={cx('time')}>상담시간 : 월 - 금 08:30 - 17:30</p>
              </li>
            </ul>
            <select onChange={onChange} className={cx('familySite')}>
              <option value="">패밀리 사이트</option>
              <option value="https://www.pulmuone.co.kr/pulmuone/main/Index.do">풀무원</option>
              <option value="https://shop.pulmuone.co.kr/">#풀무원</option>
              <option value="https://www.pulmuone-lohas.com/pc/brand/index.do">풀무원건강생활</option>
              <option value="https://www.pulmuone-lohas.com/pc/brand/index.do">풀무원로하스</option>
              <option value="http://greenjuice.pulmuone.com/">풀무원녹즙</option>
              <option value="http://www.kimchimuseum.co.kr/">풀무원김치박물관</option>
              <option value="https://www.orga.co.kr/w/grandOpen.orga">올가홀푸드</option>
              <option value="https://pulstory.pulmuone.com/">푸드머스</option>
              <option value="https://www.pulmuonefnc.com/main/main_contents.do">이씨엠디</option>
              <option value="http://www.exofresh.co.kr/main/">엑소후래쉬</option>
              <option value="https://www.facebook.com/pulmuone.imreal/app_120834951458503">풀무원아임리얼</option>
              <option value="https://www.nestle.com/">네슬레</option>
              <option value="https://www.nestle.co.kr/">네슬레 코리아</option>
              <option value="https://fis.pulmuonewater.com/">풀무원샘물FIS</option>
            </select>
            <div className={cx('logo')}>
              <img src={logo} alt="" />
            </div>
            <div className={cx('info')}>
              <ul className={cx('top')}>
                <li>
                  <Link to="/개인정보처리방침">개인정보처리방침</Link>
                </li>
                <li>
                  <Link to="/이메일무단수집거부">이메일무단수집거부</Link>
                </li>
                <li>
                  <Link to="/회사소개/오시는-길">찾아오시는길</Link>
                </li>
              </ul>
              <ul className={cx('bottom')}>
                <li>풀무원샘물㈜ </li>
                <li>대표자: 정희련 </li>
                <li>주소: 서울시 송파구 송파대로 268(가락동 98-4) 한솔섬유빌딩 3층</li>
                <li>사업자등록번호 301-81-71746 </li>
                <li>통신판매업 신고 제2011-서울송파-1283호</li>
              </ul>
            </div>
            <ul className={cx('sns')}>
              <li>
                <a href="https://www.facebook.com/pulsaem/" target="_blank" rel="noreferrer">
                  <img src={facebook} alt="페이스북" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/pulsaem/" target="_blank" rel="noreferrer">
                  <img src={instagram} alt="인스타그램" />
                </a>
              </li>
              <li>
                <a href="https://blog.naver.com/pul_saem" target="_blank" rel="noreferrer">
                  <img src={blog} alt="네이버 블로그" />
                </a>
              </li>
              <li>
                <a href="http://www.nestlepurelife.co.kr/htm/main/main.php" target="_blank" rel="noreferrer">
                  <img src={nestle} alt="Nestle Waters" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <QuickMenus />
    </>
  );
};

export default Footer;
