import classNames from 'classnames/bind';

import styles from './index.module.scss';

import PageTitle from '../../../components/shared/PageTitle';

const cx = classNames.bind(styles);

function Email() {
  return (
    <div className={cx('container')}>
      <PageTitle title="이메일 무단수집 거부" />
      <div className={cx('limiter')}>
        <div className={cx('content')}>
          <h3>풀무원샘물은 이메일 무단수집을 거부합니다</h3>
          <p>
            pulmuwonwater.com의 웹사이트에 게재된 이메일 주소를 이메일 수집 프로그램이나 기타 다른 방법을 이용하여 무단으로 수집되는 것을
            거부하며 이를 위반할 경우, 정보통신망법에 의해 형사처벌됨을 알려드립니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Email;
