import classNames from 'classnames/bind';

import styles from './T01_privacy.module.scss';
import PageTitle from '../../components/shared/PageTitle';
import PrivacyPolicy from '../../components/shared/PrivacyPolicy';

const cx = classNames.bind(styles);

const Policy = () => {
  return (
    <div className={cx('container')}>
      <PageTitle title="개인정보처리방침" />
      <div className={cx('limiter')}>
        <PrivacyPolicy />
      </div>
    </div>
  );
};

export default Policy;
