import classNames from 'classnames/bind';

import styles from './index.module.scss';

import PageTitle from '../../../components/shared/PageTitle';
import PolicyContent from '../../../components/shared/PolicyContent';

const cx = classNames.bind(styles);

function Policy() {
  return (
    <div className={cx('container')}>
      <PageTitle title="개인정보 처리방침" />
      <div className={cx('limiter')}>
        <PolicyContent />
      </div>
    </div>
  );
}

export default Policy;
