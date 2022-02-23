import PageTitle from '../../../components/shared/PageTitle';
import S01 from './S01';
import S02 from './S02';
import S03 from './S03';
import Outro from '../../../components/product/Outro';

const WaterRoutine = () => {
  return (
    <div>
      <PageTitle title="풀무원샘물 워터루틴" subtitle="나만의 건강한 수분 습관" />
      <S01 />
      <S02 />
      <S03 />
      <Outro color="blue" title={'나만의 수분 습관, 워터루틴\n건강한 수분 섭취를 시작해 보세요!'} buy={false} />
    </div>
  );
};

export default WaterRoutine;
