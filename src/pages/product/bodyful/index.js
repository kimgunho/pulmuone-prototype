import classNames from 'classnames/bind';

import styles from './index.module.scss';

import PageTitle from '../../../components/shared/PageTitle';
import S01 from '../../../components/product/bodyful/S01';
import S02 from '../../../components/product/bodyful/S02';
import S03 from '../../../components/product/bodyful/S03';
import S04 from '../../../components/product/bodyful/S04';
import S05 from '../../../components/product/bodyful/S05';
import Outro from '../../../components/shared/Outro';

const cx = classNames.bind(styles);

function Bodyful() {
  return (
    <div className={cx('container')}>
      <PageTitle title="풀무원샘물 바디풀" sub="마시는 것 까지 운동이다!" />
      <S01 />
      <S02 />
      <S03 />
      <S04 />
      <S05 />
      <Outro
        title="프리미엄 해양심층수, 바디풀/n
건강한 수분 섭취를 시작해 보세요!"
        color="blue"
      />
    </div>
  );
}

export default Bodyful;
