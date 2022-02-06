import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import { links, sns } from '../../assets/data/links';

import footer_logo from '../../assets/images/shared/pulmuone_title.png';
import facebook_icon from '../../assets/images/shared/facebook.png';
import insta_icon from '../../assets/images/shared/insta.png';
import blog_icon from '../../assets/images/shared/blog.png';
import nestle_icon from '../../assets/images/shared/nestle.png';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('footer')}>
      <div className={cx('limiter')}>
        <div className={cx('left')}>
          <ul className={cx('inner')}>
            <li>
              <p className={cx('title')}>제품문의</p>
              <a className={cx('tel')} href="tel:0809067000">
                080-906-7000
              </a>
              <p className={cx('time')}>상담시간 : 월 - 금 09:00 - 18:00</p>
            </li>
            <li>
              <p className={cx('title')}>가맹점 주문 문의</p>
              <a className={cx('tel')} href="tel:15888655">
                1588-8655
              </a>
              <p className={cx('time')}>상담시간 : 월 - 금 08:30 - 17:30</p>
            </li>
          </ul>

          <div className={cx('info')}>
            <h2 className={cx('title')}>
              <img src={footer_logo} alt="" />
            </h2>
            <div className={cx('inner')}>
              <ul className={cx('top')}>
                <li>
                  <Link to={links.privacyPolicy}>개인정보처리방침</Link>
                </li>
                <li>
                  <Link to={links.emailCollection}>이메일무단수집거부</Link>
                </li>
                <li>
                  <Link to={links.location}>찾아오시는길</Link>
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
          </div>
        </div>

        <div className={cx('right')}>
          <select>
            <option value="">패밀리 사이트</option>
          </select>

          <ul className={cx('sns')}>
            <li>
              <a href={sns.facebook} target="_blank" rel="noreferrer">
                <img src={facebook_icon} alt="페이스북" />
              </a>
            </li>
            <li>
              <a href={sns.insta} target="_blank" rel="noreferrer">
                <img src={insta_icon} alt="인스타그램" />
              </a>
            </li>
            <li>
              <a href={sns.blog} target="_blank" rel="noreferrer">
                <img src={blog_icon} alt="네이버 블로그" />
              </a>
            </li>
            <li>
              <a href={sns.nestle} target="_blank" rel="noreferrer">
                <img src={nestle_icon} alt="Nestle Waters" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Footer;
