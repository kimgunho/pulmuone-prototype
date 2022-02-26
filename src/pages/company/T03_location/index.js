import classNames from 'classnames/bind';

import styles from './index.module.scss';
import PageTitle from '../../../components/shared/PageTitle';

const cx = classNames.bind(styles);

const Location = () => {
  return (
    <div className={cx('container')}>
      <PageTitle title="오시는 길" />
      <div className={cx('section')}>
        <div className={cx('limiter')}>
          <div className={cx('map')}>
            <iframe
              title="풀무원샘물"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1582.8017195833354!2d127.11732180438528!3d37.49368346192678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca58ef19c4819%3A0x62880328a7a1e90e!2z7ISc7Jq47Yq567OE7IucIOyGoe2MjOq1rCDqsIDrnb3rj5kgOTgtNA!5e0!3m2!1sko!2skr!4v1644901372334!5m2!1sko!2skr"></iframe>
          </div>
          <div className={cx('info')}>
            <div className={cx('address')}>
              <h3 className={cx('title')}>주소</h3>
              <ul>
                <li>
                  <h4 className={cx('title')}>지번 주소</h4>
                  <p>서울시 송파구 가락동 98-4, 한솔섬유빌딩 3층</p>
                </li>
                <li>
                  <h4 className={cx('title')}>도로명 주소</h4>
                  <p>서울시 송파구 송파대로 268 한솔섬유빌딩 3층</p>
                </li>
              </ul>
            </div>
            <div className={cx('transport')}>
              <h3 className={cx('title')}>대중교통 안내</h3>
              <ul>
                <li>
                  <h4 className={cx('title')}>지하철 이용 시</h4>
                  <p>
                    지하철 3, 8호선 <span>가락시장역 3번 출구</span>에서 50M
                  </p>
                </li>
                <li>
                  <h4 className={cx('title')}>버스 이용 시</h4>
                  <div className={cx('flex')}>
                    <div className={cx('left')}>
                      <h5>가락시장역 정류장</h5>
                      <p>
                        <span>간선</span> 301, 302, 303, 320, 360, 362, N13(심야)
                      </p>
                      <p>
                        <span>지선</span> 3012, 3217, 3317, 3422
                      </p>
                      <p>
                        <span>광역</span> 9403
                      </p>
                      <p>
                        <span>직행</span> 500-1, 1009, 1112, 1117, 1650, 9005{' '}
                      </p>
                    </div>
                    <div className={cx('right')}>
                      <h5>가락공영주차장 정류장</h5>
                      <p>
                        <span>지선</span> 3416
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
