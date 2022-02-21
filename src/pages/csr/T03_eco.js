import classNames from 'classnames/bind';

import styles from './T03_eco.module.scss';
import PageTitle from '../../components/shared/PageTitle';
import Carousel from '../../components/csr/Carousel';
import section_01_01 from '../../assets/images/csr/eco/section_01_01.jpg';
import section_01_02 from '../../assets/images/csr/eco/section_01_02.jpg';
import section_01_03 from '../../assets/images/csr/eco/section_01_03.jpg';
import section_02_01 from '../../assets/images/csr/eco/section_02_01.jpg';
import section_02_02 from '../../assets/images/csr/eco/section_02_02.jpg';
import section_02_03 from '../../assets/images/csr/eco/section_02_03.jpg';
import section_03_01 from '../../assets/images/csr/eco/section_03_01.jpg';
import section_03_02 from '../../assets/images/csr/eco/section_03_02.jpg';
import section_03_03 from '../../assets/images/csr/eco/section_03_03.jpg';
import section_04_01 from '../../assets/images/csr/eco/section_04_01.jpg';
import section_04_02 from '../../assets/images/csr/eco/section_04_02.jpg';
import section_04_03 from '../../assets/images/csr/eco/section_04_03.jpg';

const cx = classNames.bind(styles);

const Eco = () => {
  const section01_images = [section_01_01, section_01_02, section_01_03];
  const section02_images = [section_02_01, section_02_02, section_02_03];
  const section03_images = [section_03_01, section_03_02, section_03_03];
  const section04_images = [section_04_01, section_04_02, section_04_03];

  return (
    <div className={cx('container')}>
      <PageTitle title="친환경 캠페인" subtitle="환경을 위해, 세상을 위해" />
      <div className={cx('section')}>
        <div className={cx('limiter')}>
          <div className={cx('text')}>
            <h3>세계 물의 날 기념 행사</h3>
            <p>
              풀무원샘물은 UN이 지정한 3월 22일 ‘세계 물의 날’을 기념하여 해마다 물의 소중함을 알리는 행사를 진행해 왔습니다. 본 행사를 통해
              이동 공장이 위치한 포천시의 초등학교 학생들과 선생님들을 모시고 물의 소중함을 알리고 풀무원샘물이 지역 수자원을 보호하고자
              노력하는 실천 방안을 공유해 왔습니다. 주로 어린이들에게 키자니아와 같은 어린이 체험관을 통해 물 교육을 진행하거나 자사 이동
              공장을 견학할 수 있도록 하여 수자원 보호에 대한 교육을 하고, 물과 환경에 대한 중요한 메시지를 보다 쉽고 친근하게 전하기 위해
              물의 날 기념 티셔츠, 텀블러, 에코백 등 다양한 친환경 아이템을 굿즈로 제공하기도 했습니다. 최근에는 SNS, 블로그 등에 이벤트를
              진행하여 더 많은 고객에게 세계 물의 날을 홍보하고 수자원 보호의 공감대를 형성하는 데 노력하고 있습니다.
            </p>
          </div>
          <Carousel images={section01_images} slidesPerView={2} section={1} />
        </div>
      </div>

      <div className={cx('section')}>
        <div className={cx('limiter')}>
          <div className={cx('text')}>
            <h3>Ocean Clean-UP</h3>
            <p>
              2019년 6월 8일, 세계 해양의 날을 기념하여 5,000명 이상의 전 세계 네슬레 워터스 임직원과 가족들이 지역 사회 및 NGO와 협력하여
              플라스틱 쓰레기를 수거하기 위한 해양정화활동을 실시 하였습니다. 전 세계 45개국의 66개 지역에서 실시된 이 활동에서는 지역사회를
              개선하고 쓰레기 없는 미래를 만들기 위한 노력을 전 세계 임직원이 직접 실천함으로써 환경의 소중함을 되새기는 뜻깊은 자리가
              되었습니다.
            </p>
          </div>
          <Carousel images={section02_images} slidesPerView={2} section={2} />
        </div>
      </div>

      <div className={cx('section')}>
        <div className={cx('limiter')}>
          <div className={cx('text')}>
            <h3>Beat Plastic Pollution </h3>
            <p>
              2019년 유엔(UN)의 환경 전담 기관인 유엔환경계획 한국협회와 ‘Beat Plastic Pollution’ 캠페인을 위한 업무 협약을 체결하고
              플라스틱 사용에 대한 인식 개선과 플라스틱 오염을 줄이기 위한 친환경 캠페인을 실시하였습니다. 청소년 및 대학생을 대상으로 한
              환경 토크 콘서트, 네이버 해피빈 펀딩을 기반으로 한 오션 클린업 캠프, 사용할 수 없는 폐플라스틱 병을 활용한 업사이클링 전시
              등을 펼쳐 적극적으로 플라스틱 배출 감소를 위한 소비자 인식 개선을 위해 노력했습니다.
            </p>
          </div>
          <Carousel images={section03_images} slidesPerView={2} section={3} />
        </div>
      </div>

      <div className={cx('section')}>
        <div className={cx('limiter')}>
          <div className={cx('text')}>
            <h3>마을 도로 정화 활동</h3>
            <p>
              쾌적한 마을 환경 조성을 위해 2017년부터 매 분기 풀무원샘물 공장이 위치한 포천시 이동면 주변 마을에서 도로 정화 활동을 진행하고
              있습니다. 풀무원샘물의 이동 공장 임직원들이 직접 참여하여 공장 진입로부터 인근 마을 일대에서 각종 생활쓰레기 등을
              수거함으로써, 작은 활동이지만 지역사회와 소통하고 함께 할 수 있는 노력을 지속적으로 기울여 지역사회에 일원으로써 그 소임을
              다하고자 노력하고 있습니다.
            </p>
          </div>
          <Carousel images={section04_images} slidesPerView={2} section={4} />
        </div>
      </div>
    </div>
  );
};

export default Eco;
