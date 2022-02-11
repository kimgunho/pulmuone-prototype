import classNames from 'classnames/bind';

import styles from './index.module.scss';

import PageTitle from '../../../components/shared/PageTitle';

import logo from '../../../assets/images/csr/water/logo.png';
import right_arrow from '../../../assets/images/csr/water/right_arrow.png';
import aws_icon01 from '../../../assets/images/csr/water/aws_icon01.png';
import aws_icon02 from '../../../assets/images/csr/water/aws_icon02.png';
import aws_icon03 from '../../../assets/images/csr/water/aws_icon03.png';
import aws_icon04 from '../../../assets/images/csr/water/aws_icon04.png';

const cx = classNames.bind(styles);

function Water() {
  return (
    <div className={cx('container')}>
      <PageTitle title="수자원 보호" sub="환경을 위해, 세상을 위해" />

      <div className={cx('logo')}>
        <img src={logo} alt="" />
      </div>
      <div className={cx('limiter')}>
        <h3>Alliance for Water Stewardship</h3>
        <p>
          Alliance for Water Stewardship(AWS)는 사회적, 경제적, 환경적으로 <br />
          모두에게 유익할 수 있도록 담수의 책임 있는 사용 을 촉진하는 공통적인 목표를 가진 기업, <br />
          비영리 단체, 공공 기관 및 교육 기관의 회원으로 구성된 글로벌 조직입니다.
          <br />
          풀무원샘물은 수자원의 지속 가능성에 관심을 가지고 이를 보존하고 보호하기 위한 노력을 인정받아 2021년 4월 국내 먹는샘물 업계 최초로
          AWS certification 인증을 획득했습니다.
        </p>

        <ul className={cx('list')}>
          <li>
            <h4>AWS 조직도</h4>
            <div className={cx('icon')}>
              <img src={aws_icon01} alt="" />
              <img src={right_arrow} alt="" />
            </div>
          </li>
          <li>
            <h4>
              AWS 목표 및 단계
              <br />
              계획 및 실적{' '}
            </h4>
            <div className={cx('icon')}>
              <img src={aws_icon02} alt="" />
              <img src={right_arrow} alt="" />
            </div>
          </li>
          <li>
            <h4>
              수자원 현황 및<br />
              잠재적인 이슈
            </h4>
            <div className={cx('icon')}>
              <img src={aws_icon03} alt="" />
              <img src={right_arrow} alt="" />
            </div>
          </li>
          <li>
            <h4>AWS 인증서</h4>
            <div className={cx('icon')}>
              <img src={aws_icon04} alt="" />
              <img src={right_arrow} alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Water;
