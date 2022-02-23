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
      <Outro
        title={'내추럴 미네랄 워터, 풀무원샘물\n건강한 수분 섭취를 시작해 보세요!'}
        productLink="https://smartstore.naver.com/pulmuonebynature/category/4da64aebbec24c34b8b7963e83ef2757?cp=1"
      />
    </div>
  );
};

export default Water;
