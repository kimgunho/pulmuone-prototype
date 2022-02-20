import PageTitle from '../../../components/shared/PageTitle';
import S01 from './S01';
import S02 from './S02';
import S03 from './S03';
import Outro from '../../../components/product/Outro';

const Water = () => {
  return (
    <div>
      <PageTitle title="풀무원샘물" subtitle="프리미엄 내추럴 미네랄 워터" />
      <S01 />
      <S02 />
      <S03 />
      <Outro title={'내추럴 미네랄 워터, 풀무원샘물\n건강한 수분 섭취를 시작해 보세요!'} />
    </div>
  );
};

export default Water;
