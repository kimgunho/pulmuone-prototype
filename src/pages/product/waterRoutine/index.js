import classNames from 'classnames/bind';

import styles from './index.module.scss';

import PageTitle from '../../../components/shared/PageTitle';
import S01 from './S01';
import S02 from './S02';
import S03 from './S03';
import Outro from '../../../components/shared/Outro';

const cx = classNames.bind(styles);

function WaterRoutine() {
  return (
    <div className={cx('container')}>
      <PageTitle title="풀무원샘물 워터루틴" sub="나만의 건강한 수분 습관" />
      <S01 />
      <S02 />
      <S03 />
      <Outro
        title="나만의 수분 습관, 워터루틴/n
건강한 수분 섭취를 시작해 보세요!"
        color="blue"
      />
    </div>
  );
}

export default WaterRoutine;
