import classNames from 'classnames/bind';

import styles from './index.module.scss';

import PageTitle from '../../../components/shared/PageTitle';
import S01 from '../../../components/product/drinkingFountain/S01';
import S02 from '../../../components/product/drinkingFountain/S02';
import S03 from '../../../components/product/drinkingFountain/S03';
import S04 from '../../../components/product/drinkingFountain/S04';
import S05 from '../../../components/product/drinkingFountain/S05';
import S06 from '../../../components/product/drinkingFountain/S06';
import Outro from '../../../components/shared/Outro';

const cx = classNames.bind(styles);

function DrinkingFountain() {
  return (
    <div className={cx('container')}>
      <PageTitle title="풀무원샘물 15L" sub="프리미엄 대용량 먹는샘물" />
      <S01 />
      <S02 />
      <S03 />
      <PageTitle title="맛있는샘물 18.9L" sub="경제적인 대용량 먹는샘물" />
      <S04 />
      <S05 />
      <S06 />
      <Outro buy={false} title="대용량 먹는샘물로/n건강한 수분 섭취를 시작해 보세요!" />
    </div>
  );
}

export default DrinkingFountain;
