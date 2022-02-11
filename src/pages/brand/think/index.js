import classNames from 'classnames/bind';

import styles from './index.module.scss';

import PageTitle from '../../../components/shared/PageTitle';

import pulmuoneWater from '../../../assets/images/brand/think/pulmuoneWater.png';
import label_item01 from '../../../assets/images/brand/think/label_item01.png';
import label_item02 from '../../../assets/images/brand/think/label_item02.png';
import label_item03 from '../../../assets/images/brand/think/label_item03.png';
import reCycle from '../../../assets/images/brand/think/re_cycle.png';

const cx = classNames.bind(styles);

function Think() {
  return (
    <div className={cx('container')}>
      <PageTitle title="환경을 생각한 포장" sub="Think Green" color="#F5F3EF" />
      <div className={cx(['section', 'first'])}>
        <div className={cx('limiter')}>
          <h3>
            탄소 배출량을 줄여
            <br />
            환경까지 생각하는 초경량 패키지
          </h3>

          <div className={cx('center')}>
            <div className={cx(['desc', 'first'])}>
              <h4>
                <span>1</span> 상표띠 제거
              </h4>
              <p>
                비닐 사용량 15% 저감
                <br />
                (기존 제품 1팩 기준)
              </p>
            </div>

            <div className={cx(['desc', 'second'])}>
              <h4>
                <span>2</span> 초경량 뚜껑
              </h4>
              <p>
                플라스틱 사용량 40% 저감 <br />
                (기존 자사 제품 대비)
              </p>
            </div>

            <div className={cx(['desc', 'last'])}>
              <h4>
                <span>3</span> 초경량 용기
              </h4>
              <p>
                2L-32.6g / 500mL-11.1g
                <br />
                (1병 기준)
              </p>
            </div>

            <img draggable="false" src={pulmuoneWater} alt="" />
          </div>

          <div className={cx('text')}>
            <p>
              풀무원샘물은 지속적인 페트병 중량 감량 기술을 연구 및 실천하여 페트병 경량화에 성공했습니다.
              <br />
              나아가 2021년 2월 환경부와 ‘라벨 없는 투명 페트병 사용’에 대한 업무 협약을 체결하고, 6월 상표띠(라벨)을 제거한 제품을
              출시했습니다.{' '}
            </p>

            <p>
              출시 이후에도 무라벨 제품 전환율을 지속적으로 높여 나가고자 하며,
              <br />
              이와 같이 풀무원샘물은 소비자와 지구를 모두 건강하게 만들기 위해 꾸준히 노력하고 있습니다.
            </p>
          </div>
        </div>
      </div>

      <div className={cx(['section', 'second'])}>
        <div className={cx('limiter')}>
          <h3>무라벨 제품 정보 표기</h3>
          <ul className={cx('list')}>
            <li>
              <img src={label_item01} alt="" />
              <div className={cx('info')}>
                <h4>낱병</h4>
                <p>제품명, 수원지, 제조일, 고객센터 번호</p>
              </div>
            </li>
            <li>
              <img src={label_item02} alt="" />
              <div className={cx('info')}>
                <h4>팩 전면</h4>
                <p>수원지 정보</p>
              </div>
            </li>
            <li>
              <img src={label_item03} alt="" />
              <div className={cx('info')}>
                <h4>팩 후면</h4>
                <p>무기물질함량, 제품 상세 정보</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className={cx(['section', 'last'])}>
        <div className={cx('limiter')}>
          <h3>
            생산부터 재활용까지 모든 단계에서
            <br /> 탄소 저감 노력 실천, 저탄소 인증
          </h3>

          <img src={reCycle} alt="" />

          <p>
            풀무원샘물은 제품 용기의 경량화뿐만 아니라 제품이 생산되고 소비자가 소비한 후<br />
            재활용되는 모든 단계에서 탄소 배출량을 줄이고자 노력하고 있습니다.
            <br />
            이러한 환경을 생각하는 풀무원샘물의 연구와 노력은 지금도 쉬지 않고 계속되고 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Think;
