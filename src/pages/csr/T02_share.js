import classNames from 'classnames/bind';

import styles from './T02_share.module.scss';
import PageTitle from '../../components/shared/PageTitle';
import Carousel from '../../components/csr/Carousel';
import section_01_01 from '../../assets/images/csr/share/section_01_01.jpg';
import section_01_02 from '../../assets/images/csr/share/section_01_02.jpg';
import section_02_01 from '../../assets/images/csr/share/section_02_01.jpg';
import section_03_01 from '../../assets/images/csr/share/section_03_01.jpg';
import section_03_02 from '../../assets/images/csr/share/section_03_02.jpg';
import section_03_03 from '../../assets/images/csr/share/section_03_03.jpg';

const cx = classNames.bind(styles);

const Share = () => {
  const section01_images = [section_01_01, section_01_02];
  const section02_images = [section_03_01, section_03_02, section_03_03];

  return (
    <div className={cx('container')}>
      <PageTitle title="나눔 캠페인" subtitle="환경을 위해, 세상을 위해" />
      <div className={cx('section')}>
        <div className={cx('limiter')}>
          <div className={cx('text')}>
            <h3>포천시 독거노인 후원</h3>
            <p>
              홀로 생활하시는 어르신들의 건강한 수분 섭취를 돕기 위해 2015년부터 보건복지부 산하 독거노인종합지원센터와 협약을 맺어 ‘홀로
              사는 어르신을 위한 샘물 나눔 지원 사업’을 실시하고 있습니다. 2020년부터는 포천시 일부 지역에서 포천시 전 지역으로 지원을
              확대하여 현재 연간 약 6만 8천병을 제공하고 있으며, 지역 사회 주민들의 수분 건강에 도움을 드리고자 노력하고 있습니다.
            </p>
          </div>
          <Carousel images={section01_images} section={1} />
        </div>
      </div>
      <div className={cx('section')}>
        <div className={cx('limiter')}>
          <div className={cx('text')}>
            <h3>서울시 취약계층 후원</h3>
            <p>
              2020년 5월 코로나19 확산으로 인한 위기 극복 및 취약계층 지원을 위해 서울시 청년청에서 주관한 ‘청년 소상공인 긴급지원 사업’에
              동참해 서울시 내 10개 자치구에 먹는 샘물 총 34,500병을 전달했으며, 이후 서울시 25개 자치구 푸드뱅크마켓센터를 통해 결식아동,
              독거노인, 미혼모 등 소외된 이웃들을 위한 사회복지시설과 저소득 세대에 샘물 65,500병을 지원했습니다. 2020년 7월 희망브리지를
              통해 코로나19 확산 방지를 위해 노력하고있는 의료진을 응원하는 마음을 담아 풀무원샘물 146,920 병과 냉방용품 구비를 위한 1천만원
              후원을 진행했습니다.
            </p>
          </div>
          <div className={cx('image')}>
            <img src={section_02_01} alt="" />
          </div>
        </div>
      </div>
      <div className={cx('section')}>
        <div className={cx('limiter')}>
          <div className={cx('text')}>
            <h3>Project WET</h3>
            <p>
              풀무원샘물은 비영리단체 Project WET과 글로벌 협약을 맺고 사단법인 환경교육센터와 함께 초등학교 및 지역아동센터를 대상으로
              2009년부터 2019년까지 ‘찾아가는 물 환경 교실’을 통해 연평균 125회, 3,200여명의 어린이들에게 물의 소중함과 수자원 보호의
              중요성을 알려왔습니다. 또한 교사 연수를 통해 동아리, 방과 후 학습 등 학교 정식 교육 과정에서도 Project WET의 커리큘럼을
              활용하고 교육 대상을 확대하는 등 물 교육 활성화를 통해 국내 수자원을 보호하기 위한 인식을 개선하기 위한 노력을 해왔습니다.
            </p>
          </div>
          <Carousel images={section02_images} section={3} />
        </div>
      </div>
    </div>
  );
};

export default Share;
