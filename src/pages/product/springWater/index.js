import classNames from 'classnames/bind';

import styles from './index.module.scss';

import PageTitle from '../../../components/shared/PageTitle';

import S01 from '../../../components/product/springWater/S01';
import S02 from '../../../components/product/springWater/S02';
import S03 from '../../../components/product/springWater/S03';
import Outro from '../../../components/shared/Outro';

const cx = classNames.bind(styles);

function SpringWater() {
  return (
    <div className={cx('container')}>
      <PageTitle title="풀무원샘물" sub="프리미엄 내추럴 미네랄 워터" />
      <S01 />
      <S02 />
      <S03 />
      <Outro
        title="내추럴 미네랄 워터, 풀무원샘물/n
건강한 수분 섭취를 시작해 보세요!"
      />
    </div>
  );
}

export default SpringWater;
