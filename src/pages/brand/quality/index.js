import classNames from 'classnames/bind';

import styles from './index.module.scss';

import PageTitle from '../../../components/shared/PageTitle';

import section_icon01 from '../../../assets/images/brand/quality/icon01.png';
import section_icon02 from '../../../assets/images/brand/quality/icon02.png';
import section_icon03 from '../../../assets/images/brand/quality/icon03.png';
import section_icon04 from '../../../assets/images/brand/quality/icon04.png';
import section_icon05 from '../../../assets/images/brand/quality/icon05.png';
import section_icon06 from '../../../assets/images/brand/quality/icon06.png';
import cert_01 from '../../../assets/images/brand/quality/cert01.jpg';
import cert_02 from '../../../assets/images/brand/quality/cert02.jpg';
import cert_03 from '../../../assets/images/brand/quality/cert03.jpg';
import cert_04 from '../../../assets/images/brand/quality/cert04.jpg';

const cx = classNames.bind(styles);

function Quality() {
  return (
    <div className={cx('container')}>
      <PageTitle title="철저한 품질관리" color="#F5F3EF" />

      <div className={cx(['section', 'first'])}>
        <div className={cx('limiter')}>
          <h3>국내 기준의 10배로 관리, 550여가지 수질검사</h3>
          <p>
            국내 수질검사 기준 약 50여가지 항목 준수
            <br />
            미국, 영국, 독일, 프랑스를 포함한 국제기준 검사 실시
          </p>
          <h4>풀무원샘물 검사 항목</h4>

          <ul className={cx('list')}>
            <li>
              <img src={section_icon01} alt="" />
              <p>
                매일 맛, 냄새, 탁도,
                <br /> 색도, 수소이온농도 검사
              </p>
            </li>
            <li>
              <img src={section_icon02} alt="" />
              <p>
                매주 1회 이상 <br />
                미생물 검사
              </p>
            </li>
            <li>
              <img src={section_icon03} alt="" />
              <p>
                매 분기 먹는 물 <br />
                수질 기준 항목 검사
              </p>
            </li>
            <li>
              <img src={section_icon04} alt="" />
              <p>
                매년 550여 가지
                <br />
                수질 검사
              </p>
            </li>
            <li>
              <img src={section_icon05} alt="" />
              <p>
                매년 <br />
                환경 호르몬 검사
              </p>
            </li>
            <li>
              <img src={section_icon06} alt="" />
              <p>
                매년 <br />
                방사능 검사
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className={cx(['section', 'second'])}>
        <div className={cx('limiter')}>
          <h3>다양한 국제 표준 인증 획득</h3>
          <p>다양한 국제 표준 인증 획득을 기반으로 한 품질의 차별화</p>

          <ul className={cx('list')}>
            <li>
              <h4>식품 안전</h4>
              <img src={cert_01} alt="식품 안전" />
              <p>
                Food Safety <span className={cx('point')}>FSSC 22000</span>
              </p>
            </li>
            <li>
              <h4>안전</h4>
              <img src={cert_02} alt="식품 안전" />
              <p>
                Safety &amp; Health <span className={cx('point')}>OHSAS 45001</span>
              </p>
            </li>
            <li>
              <h4>품질</h4>
              <img src={cert_03} alt="식품 안전" />
              <p>
                Quality <span className={cx('point')}>ISO 9001</span>
              </p>
            </li>
            <li>
              <h4>환경</h4>
              <img src={cert_04} alt="식품 안전" />
              <p>
                Environment <span className={cx('point')}>ISO 14001</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Quality;
