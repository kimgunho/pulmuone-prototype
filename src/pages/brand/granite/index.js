import classNames from 'classnames/bind';

import styles from './index.module.scss';

import PageTitle from '../../../components/shared/PageTitle';

const cx = classNames.bind(styles);

function Granite() {
  return (
    <div className={cx('container')}>
      <PageTitle title="2억년 화강암이 꽉 잡은 미네랄" sub="풀무원 샘물" color="#F5F3EF" />
    </div>
  );
}

export default Granite;
