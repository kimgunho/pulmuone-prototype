import PageTitle from '../../../components/shared/PageTitle';
import S01 from './S01';
import S02 from './S02';
import S03 from './S03';
import S04 from './S04';
import S05 from './S05';
import Outro from '../../../components/product/Outro';

const Bodyful = () => {
  return (
    <div>
      <PageTitle title="풀무원샘물 바디풀" subtitle="마시는 것 까지 운동이다!" />
      <S01 />
      <S02 />
      <S03 />
      <S04 />
      <S05 />
      <Outro
        color="blue"
        title={'프리미엄 해양심층수, 바디풀\n건강한 수분 섭취를 시작해 보세요!'}
        productLink="https://smartstore.naver.com/pulmuonebynature/category/ed44c9fdf9984c4cade3bad9ea66b00d?cp=1"
      />
    </div>
  );
};

export default Bodyful;
