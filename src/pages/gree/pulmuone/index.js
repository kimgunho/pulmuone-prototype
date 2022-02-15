import classNames from 'classnames/bind';

import styles from './index.module.scss';

import PageTitle from '../../../components/shared/PageTitle';
import S01 from './S01';
import S02 from './S02';

const cx = classNames.bind(styles);

function Pulmuone() {
  return (
    <div className={cx('container')}>
      <PageTitle title={'풀무원샘물'} />
      <S01 />
      <S02 />
    </div>
  );
}

export default Pulmuone;
