import classNames from 'classnames/bind';

import styles from './index.module.scss';

import PageTitle from '../../../components/shared/PageTitle';

const cx = classNames.bind(styles);

function Think() {
  return (
    <div className={cx('container')}>
      <PageTitle title="환경을 생각한 포장" sub="Think Green" color="#F5F3EF" />
    </div>
  );
}

export default Think;
