import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { gsap } from 'gsap';

import styles from './T01_granite.module.scss';
import PageTitle from '../../components/shared/PageTitle';
import mobile_illust_s01 from '../../assets/images/brand/granite/illust_s01.jpg';
import mobile_illust_s02 from '../../assets/images/brand/granite/illust_s02.jpg';
import mobile_illust_s03 from '../../assets/images/brand/granite/illust_s03.jpg';
import mobile_illust_s04 from '../../assets/images/brand/granite/illust_s04.jpg';
import mobile_illust_s05 from '../../assets/images/brand/granite/illust_s05.jpg';

const cx = classNames.bind(styles);

const Granite = () => {
  const imageRef = useRef();
  const maskRef = useRef();

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          scrub: true,
          start: 'top center',
          end: 'bottom center',
        },
      })
      .to(maskRef.current, { maskSize: '100% 100%', delay: 0.1 });
  }, []);

  return (
    <div className={cx('container')}>
      <PageTitle title="2억년 화강암이 꽉 잡은 미네랄" subtitle="풀무원샘물" />
      <div className={cx('section')}>
        <div className={cx('limiter')}>
          <div ref={imageRef} className={cx('illust')}>
            <div ref={maskRef} className={cx('coloring')} />
            <div className={cx('sketch')} />
          </div>
          <div className={cx('info')}>
            <div className={cx('text')}>
              <h3>풍부한 미네랄, 대보 화강암</h3>
              <p>
                지질은 지하수와 암석의 상호 반응을 통하여 지하수의 화학적 특성을 결정할 뿐 아니라 암석의 물리적인 특성에 따라서 지하수의
                유동이 영향을 받기 때문에 지하수에 있어서 중요한 요소입니다.
              </p>
              <p className={cx('light')}>
                풀무원샘물은 2억년 전 중생대 쥬라기에 생성되어 한반도의 화강암 중 가장 넓은 범위를 차지하는 대보 화강암을 기반암으로 하며,
                대보 화강암은 다른 기반암보다 미네랄 함량이 높은 것이 특징입니다.
              </p>
              <img src={mobile_illust_s01} alt="" />
              <p className={cx('light')}>
                이는 대보 화강암이 비다공질 화강암으로, 기공이 적은 만큼 강수가 지층을 통과하는 시간이 길어 물과 암석과의 반응 시간 또한
                길어져 주요 미네랄 함량이 높기 때문입니다.
              </p>
              <img src={mobile_illust_s02} alt="" />
              <p className={cx('light')}>
                또한 깊은 땅속에서 마그마가 서서히 식으면서 만들어져 조밀하고 균질한 알갱이로 이루어진 화강암은 오래전부터 건축 자재에
                사용되고 최근에는 컬링 스톤에도 활용될 만큼 단단하고 강하며, 그만큼 미네랄을 잡는 힘이 셉니다.
              </p>
              <p>이렇게 촘촘하고 단단한 대보 화강암에서 응집된 2억년 미네랄 물방울을 빠져나갈 틈 없이 꽉 잡아 풀무원샘물을 만듭니다.</p>
              <img src={mobile_illust_s03} alt="" />
            </div>
            <div className={cx('text')}>
              <h3>40m 천연 모래필터</h3>
              <p>대보 화강암류의 풍화산물인 충적층이 널리 분포, 발달하여 천연 모래필터를 만들었습니다.</p>
              <p className={cx('light')}>
                바다에 쌓인 모래의 2배에 달하는 40m 모래층이 천연 정화 필터로 작용하여 중금속과 미생물을 흡착함으로써 더욱 귀한 물로
                정화시킵니다.
              </p>
              <img src={mobile_illust_s04} alt="" />
            </div>
            <div className={cx('text')}>
              <h4>2억년 동안 어떠한 지질학적 변화도 겪지 않은 촘촘하고 단단한 화강암반의 풍부한 미네랄을 오롯이 물에 담았습니다.</h4>
              <img src={mobile_illust_s05} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Granite;
